import React, { Component } from 'react'
import styled from 'styled-components'

import Header from 'components/Header'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  margin: 150px 100px 100px 100px;

  > * + * {
    margin-top: 20px;
  }
`

class Biography extends Component {
  render() {
    return (
      <Container>
        <Header />

        <Content>
          <div>
            {
              'In 1994, Marie-Noëlle Décoret stopped painting and went to Rome, where she developed a project based on the handkerchief seen as an object, a "white square". She exhibited this work at La Chartreuse in Sainte-Croix-en-Jarez, with FRAC Rhône-Alpes, and at the Georges Verney-Carron gallery in Villeurbanne. At the same time, she put together a photographic inventory of advertising posters she had come across since her stay in Italy, featuring scantily-dressed women displayed in urban settings. In 1995 she began work Peintures d\'aveugle ("Blind Paintings"). A year later obtained a Villa Medici extramural grant for an project involving watermarks which she carried out in Amalfi, south of Naples, and which lasted into 1997. These four groups of works were exhibited in 1998 at the Showroom Manzoni in Geneva.'
            }
          </div>
          <div>
            {
              'In 1999, the Délégation aux Arts Plastiques commissioned her to produce a work in dressmakers\' gold thread for the Métissages ("Crossovers") exhibition, which travelled around Europe, Asia and America. That same year, she received support from the Caisse des Dépôts et Consignations for her photographic serie "Tunnels". Three prints from this series were acquired by the Centre Pompidou. In 2000 she obtained an individual creativity award from DRAC Rhône-Alpes for the production of an audio installation. Between 2002 and 2004 she designed and produced a work for the Pôle Optique Rhône-Alpes in Saint-Etienne, and in 2003 the Centre d\'Art at the Villa du Parc in Annemasse showed a set of her works, including the installation Elle…, accompanied by a publication. Around the same period, she photographed ancient Roman boats that had been discovered during the construction of an underground car park. In 2005 she exhibited the "Portraits réfléchis" series at Shanghai\'s fine arts museum, and worked "in resonance" with Lyon\'s contemporary art biennial, Expérience de la durée, at the Institution des Chartreux.'
            }
          </div>
          <div>
            {
              "Since 2002 Décoret has been working on isolation rooms devoid of presence, in psychiatric hospitals. In 2006, at the Institut Culturel Français in Dakar, Senegal, she photographed, among other subjects, children dressed up for Mardi Gras; and in France, at the solstices and equinoxes, she went to Le Corbusier's convent, La Tourette, to take pictures in the Dominicans' cells. These are being exhibited at the convent during its renovation, and are being published at the same time."
            }
          </div>
          <div>
            {
              "Marie-Noëlle Décoret makes occasional appearances in schools. And among the collections in which works by her can be found are those of the FNAC, the Centre Pompidou, the Bibliothèque Nationale, SACEM, FRAC Franche-Comté, as well as the Artothèque in Lyon, and the city's municipal collection."
            }
          </div>
        </Content>
      </Container>
    )
  }
}

export default Biography
