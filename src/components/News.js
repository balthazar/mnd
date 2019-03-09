import React, { Component } from 'react'
import styled from 'styled-components'

import Header from 'components/Header'
import Footer from 'components/Footer'

const Content = styled.div`
  margin: 150px 50px 50px 50px;
`

class News extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content>
          Participation
          <br />
          <em>Faces, masques et portraits</em>
          <br />
          <em>L’atelier Picasso</em>
          <br />
          Musée Joseph Déchelette
          <br />
          42300 - Roanne
          <br />
          16 mars – 23 septembre 2019
          <br />
          <br />
          <br />
          Expositions
          <br />
          <em>Camera obscura</em>
          <br />
          Photographie
          <br />
          Esox-Lucius, la gare / le quai 294M9 71740 - Saint-Maurice -lès-Châteauneuf
          <br />
          6 juillet – 8 septembre 2019
          <br />
          <br />
          <em>Suites et portraits</em>
          <br />
          Dessin et photographie
          <br />
          Musée Joseph Déchelette
          <br />
          42300 - Roanne
          <br />
          11 octobre 2019 – janvier 2020
        </Content>

        <Footer />
      </div>
    )
  }
}

export default News
