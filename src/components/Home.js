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

const Line = styled.div`
  height: 3px;
  position: relative;
  margin-top: 200px;

  background-color: #3c3c3d;
  animation: ${growX} ${p => (p.instant ? 0 : delayLine)}ms ease-in;
  transform-origin: left;
`

const Category = styled(Link)`
  position: absolute;
  top: ${p =>
    p.dir === 'bottom'
      ? linkMargin + lineHeight + linkHeight
      : -linkHeight - linkMargin - itemHeight}px;
  left: ${p => p.x}px;

  ${p => (p.fade ? 'opacity: 0.5;' : '')};
  transition: opacity 250ms ease-in;
  text-decoration: none;
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

    window.addEventListener('resize', event => {
      console.log('eve', event)
      console.log(event.deltaY)
    })

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
      >
        <CategoryLink animate={animateHome} dir={dir} />
        <CategoryContent animate={animateHome}>
          <img src={c.thumb} width={100} />
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
        <Line innerRef={c => (this.line = c)} instant={animateHome ? 0 : 1}>
          {(!animateHome || showCategories) && worksList.map(this.renderCategory)}
        </Line>
      </Container>
    )
  }
}

export default Home
