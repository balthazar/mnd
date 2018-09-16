import React, { Component } from 'react'
import styled from 'styled-components'

import Header from 'components/Header'

const boxSize = 200

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 150px 50px 50px 50px;
`

const Text = styled.a`
  width: ${boxSize}px;
  height: ${boxSize}px;
  margin: 10px;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  border: 3px solid #3c3c3c;

  text-decoration: none;

  background-color: white;
  transition: background-color 150ms ease-in;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  > b {
    text-transform: uppercase;
    font-size: 11px;
  }

  > * + * {
    margin-top: 10px;
  }
`

const list = [
  {
    info: 'La Révélation ou le goût du blanc - Valérie MAVRIDORAKIS',
    url: 'MAVRIDORIAKIS-VERNEY-CARRON-1996-DETAILS.pdf',
  },
  {
    info: 'Camera Mentale - Hauviette Bethemont',
    url: 'H-BETHEMONT-CAMERA-MENTALE-2012-DETAILS.pdf',
  },
  {
    info: 'Dérober au, Fouiller, explorer du, Jeter un, Mettre en. - Claude-Hubert Tatot',
    url: 'TATOT-SHOWROOM-MANZONI-DETAILS-1998.pdf',
  },
  {
    info: 'Au Lieu - Camille Fallen / Jean-Luc Nancy',
    url: 'FALLEN-NANCY-DETAILS-2007.pdf',
  },
  {
    info: 'Du Visible et du seuil à l’invisible perte - Sylvie Lagnier',
    url: 'LAGNIER-TOURETTE-2007-DETAILS.pdf',
  },
  {
    info: 'Les Portraits réfléchis, une esthétique de la rupture - Sylvie Lagnier',
    url: 'LAGNIER-PORTRAITS-REFLECHIS-2004-DETAILS.pdf',
  },
  {
    info: 'Voir l’Histoire de voir de Marie-Noëlle Décoret - Yves Sabourin',
    url: 'SABOURIN-VOIR-LHISTOIRE-2006-DETAILS.pdf',
  },
  {
    info: 'Entretien - Sylvie Lagnier',
    url: 'LAGNIER-ENTRETIEN-2004-DETAILS.pdf',
  },
  {
    info: 'Projet Filigranes - M.-N. D. / VALÉRIE MAVRIDORAKIS',
    url: 'PROJET-FILIGRANES-ROME-1995-MND.pdf',
  },
  {
    info: 'Un drôle de Carnaval - Pierre-Jean RÉMY, de l’Académie française',
    url: 'REMY-PORTRAITS-DEGUISES-2006-DETAILS.pdf',
  },
  {
    info: 'Les Bateaux de Saint-Georges - Pierre-Jean RÉMY, de l’Académie française',
    url: 'REMY-BATEAUX-2004-DETAILS.pdf',
  },
  {
    info: 'Elle... - Françoise Lonardoni',
    url: 'LONARDONI-ELLE-2003.pdf',
  },
  {
    info: 'Memento des Vivants - Bruno Martin',
    url: 'MARTIN-RELEVES-TRINITÉ-2005-DETAILS.pdf',
  },
  {
    info: 'Relever du Temps - Claude-Hubert Tatot',
    url: 'TATOT-RELEVES-TRINITÉ-2005.pdf',
  },
  {
    info: 'Ta Mère à poil devant Prisunic - Claude-Hubert Tatot',
    url: 'TATOT-AFFICHES-DETAILS-2002.pdf',
  },
  {
    info: 'Elle Expose - Claude-Hubert Tatot',
    url: 'TATOT-ELLE-EXPOSE-PLUMART-2003.pdf',
  },
]

class Texts extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          {list.map(({ info, url }) => {
            const [title, author] = info.split(' - ')
            return (
              <Text href={`/assets/texts/${url}`} target="_blank" key={url}>
                <span>{title}</span>
                <b>{author}</b>
              </Text>
            )
          })}
        </Content>
      </Container>
    )
  }
}

export default Texts
