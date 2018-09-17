import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Header from 'components/Header'

import { disableAnimate } from 'reducers/ui'
import { worksList } from 'works'

const delayLine = 500
const lineHeight = 3

const linkHeight = 50
const linkMargin = 20

const WORK_SIZE = 85
const itemHeight = 150

const growX = keyframes`
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
`

const growY = keyframes`
  from { transform: scaleY(0); }
  to   { transform: scaleY(1); }
`

const show = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Display = styled.div`
  position: relative;
  flex: 1;
  margin-top: 150px;
  min-height: 500px;
  overflow-y: hidden;
`

const Line = styled.div`
  height: 3px;
  position: fixed;
  top: 370px;
  width: 100%;

  background-color: #3c3c3d;
  animation: ${growX} ${p => (p.instant ? 0 : delayLine)}ms ease-in;
  transform-origin: left;
`

const Category = styled(Link)`
  position: absolute;
  top: ${p =>
    p.dir === 'bottom'
      ? 220 + linkMargin + lineHeight + linkHeight
      : 220 + -linkHeight - linkMargin - itemHeight}px;
  left: ${p => p.x}px;

  ${p => (p.fade ? 'opacity: 0.5;' : '')};
  transition: opacity 250ms ease-in;
  text-decoration: none;

  ${p => (p.last ? 'width: 200px' : '')};
`

const CategoryLink = styled.div`
  position: absolute;
  top: ${p => (p.dir === 'bottom' ? -linkHeight - linkMargin / 2 : itemHeight + linkMargin / 2)}px;

  background-color: #3c3c3d;
  height: ${linkHeight}px;
  width: 1px;

  ${p => (p.animate ? `animation: ${growY} 200ms ease-in;` : '')};
  transform-origin: ${p => (p.dir === 'bottom' ? 'top' : 'bottom')};
`

const CategoryContent = styled.div`
  opacity: ${p => (p.animate ? 0 : 1)};
  ${p => (p.animate ? `animation: ${show} 500ms 500ms ease-in;` : '')};
  animation-fill-mode: forwards;

  display: flex;
  flex-direction: column;

  img {
    margin-bottom: 10px;
  }

  h2 {
    text-transform: uppercase;
    font-size: 11px;
  }
`

@connect(
  ({ ui: { animateHome } }) => ({ animateHome }),
  { disableAnimate },
)
class Home extends Component {
  state = {
    showCategories: false,
  }

  componentDidMount() {
    const { animateHome } = this.props

    if (!animateHome) {
      return
    }

    setTimeout(this.showCategories, delayLine + 200)
  }

  showCategories = () => {
    this.setState({ showCategories: true })
    setTimeout(this.props.disableAnimate, 1e3)
  }

  changeActive = index => {
    this.setState({ activeCategory: index })
  }

  renderCategory = (c, index) => {
    const { animateHome } = this.props
    const { activeCategory } = this.state

    const x = (index + 1) * WORK_SIZE
    const dir = index % 2 ? 'top' : 'bottom'

    return (
      <Category
        onMouseOver={() => this.changeActive(index)}
        onMouseOut={() => this.changeActive()}
        key={`${c.title}${index}`}
        x={x}
        dir={dir}
        fade={!isNaN(activeCategory) && activeCategory !== index ? 1 : 0}
        to={c.url}
        last={index === worksList.length - 1 ? 1 : 0}
      >
        <CategoryLink animate={animateHome} dir={dir} />
        <CategoryContent animate={animateHome}>
          <img src={c.thumb} width={100} height={100} />
          <h2>{c.title}</h2>
          <em>{c.date}</em>
        </CategoryContent>
      </Category>
    )
  }

  render() {
    const { animateHome } = this.props
    const { showCategories } = this.state

    return (
      <Container>
        <Header />
        <Display>
          <Line innerRef={c => (this.line = c)} instant={animateHome ? 0 : 1} />
          {(!animateHome || showCategories) && worksList.map(this.renderCategory)}
        </Display>
      </Container>
    )
  }
}

export default Home
