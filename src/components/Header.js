import React, { Component } from 'react'
import styled from 'styled-components'
import { Link as BaseLink } from 'react-router-dom'

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

    > * + * {
      margin-left: 20px;
    }
  }
`

const Link = styled(BaseLink)`
  text-decoration: none !important;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
  ${p => (p.red ? 'color: red;' : '')};

  &:hover {
    border-bottom-color: ${p => (p.red ? 'red' : '#232323')};
  }
`

class Header extends Component {
  render() {
    return (
      <Container>
        <h1>{'Marie-Noëlle Décoret'}</h1>
        <div>
          <Link to="/">{'ACCUEIL'}</Link>
          <Link to="/bio">{'BIOGRAPHIE'}</Link>
          <Link to="/texts">{'TEXTES'}</Link>
          <Link to="/news" red>
            {'ACTUALITÉS'}
          </Link>
          <a href="https://www.centrepompidou.fr/fr/ressources/personne/cEnpL9" target="_blank">
            <img src="/assets/pompidou.ico" width={20} />
          </a>
        </div>
      </Container>
    )
  }
}

export default Header
