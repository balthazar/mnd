FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY src/ ./src/
COPY webpack/ ./webpack/
COPY .babelrc ./

ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

# ---

FROM node:20-alpine AS runner

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY --from=builder /app/dist/ ./dist/
COPY src/ ./src/
COPY webpack/ ./webpack/
COPY .babelrc ./

EXPOSE 3000

ENV NODE_ENV=production

RUN addgroup -S app && adduser -S app -G app
USER app

CMD ["node", "-r", "babel-register", "-r", "babel-polyfill", "src/server"]
