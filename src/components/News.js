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
          Expositions
          <br />
          <br />
          <img src="/assets/cent-visages-1.png" width={400} />
          <br />
          <img src="/assets/cent-visages-2.png" width={400} />
          <br />
          <br />
          <em>Cent visages</em>
          <br />
          Dessin et photographie
          <br />
          Musée Joseph Déchelette
          <br />
          42300 - Roanne
          <br />
          9 novembre 2019 – 11 février 2020
          <br />
          <br />
          <a
            href="http://www.museederoanne.fr/expositions/expositions-a-venir/marie-noelle-decoret-cent-visages-2562.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Site du Musée
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <em>Camera obscura</em>
          <br />
          Photographie
          <br />
          Esox-Lucius, la gare / le quai 294M9 71740
          <br />
          Saint-Maurice -lès-Châteauneuf
          <br />
          6 juillet – 8 septembre 2019
          <br />
          <br />
          <img src="/assets/carton-obscura.png" width={600} />
          <br />
          <br />
          <br />
          <br />
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
          <img src="/assets/Invit.MNDECORET-ROANNE.png" width={400} />
        </Content>

        <Footer />
      </div>
    )
  }
}

export default News
