FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY src/ ./src/
COPY webpack/ ./webpack/
COPY .babelrc ./

RUN npm run build

# ---

FROM node:20-alpine AS runner

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY --from=builder /app/dist/ ./dist/
COPY src/ ./src/
COPY webpack/ ./webpack/
COPY .babelrc ./

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "-r", "babel-register", "-r", "babel-polyfill", "src/server"]
