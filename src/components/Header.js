import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;

  h1 {
    font-size: 20px;
  }

  div {
    margin-top: 10px;
    font-size: 12px;
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    > a:last-child {
      margin-left: auto;
    }

    > * + * {
      margin-left: 20px;
    }
  }
`

class Header extends Component {
  render() {
    const { pathname } = this.props

    return (
      <Container>
        <h1>{'Marie-Noëlle Décoret'}</h1>
        <div>
          <Link to="/">{'HOME'}</Link>
          <Link to="/bio">{'BIOGRAPHY'}</Link>
          <a href="https://www.centrepompidou.fr/cpv/resource/cEnpL9/rnpdar" target="_blank">
            <img src="/assets/pompidou.ico" width={20} />
          </a>
        </div>
      </Container>
    )
  }
}

export default Header
