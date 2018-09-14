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
  margin: 150px 50px 50px 50px;
`

const Toggler = styled.div`
  margin-bottom: 20px;

  > span {
    cursor: pointer;
  }

  > * + * {
    margin-left: 10px;
  }

  >span: ${p => (p.active === 'fr' ? 'first' : 'last')}-child {
    color: red;
  }
`

const texts = {
  fr: (
    <div>
      En 1994, Marie-Noëlle DÉCORET rompt avec son travail de peintre pour entreprendre, à Rome, une
      réflexion sur le mouchoir - l’objet - regardé comme carré blanc. Elle expose ce travail à la
      Chartreuse de Sainte-Croix en Jarez avec le Frac Rhône-Alpes ainsi qu’à la galerie Georges
      Verney-Carron à Villeurbanne. Parallèlement à ce travail, elle compose un inventaire
      photographique d’affiches publicitaires rencontrées depuis l’Italie, sur l’image de la femme
      en milieu urbain. Elle débute la réalisation de ses <em>Peintures d’aveugle</em> en 1995. En
      1996, elle obtient une bourse Villa Medicis hors les murs pour un projet d’œuvres en filigrane
      qu’elle réalise au sud de Naples, à Amalfi, jusqu’en 1997. Ces quatre déclinaisons sont
      présentées à Genève en 1998 au Showroom Manzoni.
      <br />
      <br />
      En 1999, la Délégation aux Arts Plastiques lui commande une œuvre en passementerie dans le
      cadre du projet Métissages, exposé en Europe, Asie, Amérique. La même année, elle reçoit une
      aide à la production de la Caisse des dépôts et consignations pour ses photographies de la
      série Tunnels dont trois épreuves se trouvent dans la collection du Centre Pompidou. En 2000,
      elle obtient une aide individuelle à la création pour la réalisation d’une installation
      sonore. De 2002 à 2004, elle conçoit et réalise une œuvre monumentale pour le Pôle Optique
      Rhône-Alpes à Saint-Étienne, Histoire de voir, <em>Portraits réfléchis</em>, alors qu’en 2003,
      le Centre d’art de la Villa du Parc à Annemasse présente en duo avec Susanna Fritscher un
      ensemble de ses réalisations dont l’installation Elle… accompagnée de son édition. Entre 2003
      et 2004, elle photographie les épaves mises au jour lors de la construction d’un parc
      souterrain. L’année 2005 voit ses images de la série <em>Portraits réfléchis</em> au musée de
      beaux-arts de Shanghai, ainsi que sa participation en résonance avec la biennale d’art
      contemporain de Lyon, <em>Expérience de la durée</em>, à l’Institution des Chartreux.
      <br />
      <br />
      En 2002 elle débute un travail sur la chambre d’isolement vidée de présence en hôpital
      psychiatrique. En 2006, elle réside à l’Institut culturel français de Dakar où elle
      photographie des enfants déguisés pour Mardi gras tout en menant en France au couvent de La
      Tourette édifié par Le Corbusier, quatre séries de prises de vue sur les cellules des
      dominicains aux solstices et aux équinoxes. Cette intervention fait l’objet d’une exposition
      dans le couvent en réfection, en résonance avec la biennale d’art contemporain de Lyon, et
      d’une édition à l’automne 2007.
      <br />
      <br />
      L’été 2009, l’artiste participe à la biennale de la céramique de Chateauroux comme à la
      rétrospective du Frac Franche-Comté à la Saline royale d’Arc-et-Senans. Elle intervient
      jusqu’au printemps 2010 au musée textile de Bourgoin-Jallieu dans le cadre de Culture et
      Hôpital alors qu’une de ses photos de la série <em>Tunnels</em> est présentée à l’exposition{' '}
      <em>elles</em> au Centre Georges Pompidou. L’artiste reçoit une commande de la Ville de
      Vénissieux pour le Centre pédagogique Michel Delay. À l’automne 2010, M.-N. D. est présente
      avec la galerie Artaé à Show Off foire du solo show à Paris pendant la Fiac.
      <br />
      <br />
      En 2012, l’artiste expose au Passage de Retz à Paris et au musée d‘Angers dans le cadre d’un
      hommage à Thomas Gleb. Cette même année à l’automne, le CHU Le Vinatier présente ses
      photographies <em>Chambres d’isolement</em>.
      <br />
      <br />
      En 2014 elle débute ses <em>Portraits fanés</em> en vue de l’exposition à la MAC de Pérouges
      en 201618.
      <br />
      <br />
      Cette même année, elle commence la série <em>Portraits sanguins</em>.
      <br />
      Marie-Noëlle DÉCORET intervient ponctuellement en milieu scolaire. Ses œuvres figurent dans
      les collections de l’artothèque et de la Ville de Lyon, du Frac Franche-Comté, de la SACEM, la
      Bibliothèque Nationale, le FNAC, Fonds National d’Art Contemporain et le Centre Pompidou,
      MNAM, Musée National d’Art Moderne.
    </div>
  ),
  en: (
    <div>
      In 1994, Marie-Noëlle Décoret stopped painting and went to Rome, where she developed a project
      based on the handkerchief seen as an object, a "white square". She exhibited this work at La
      Chartreuse in Sainte-Croix-en-Jarez, with FRAC Rhône-Alpes, and at the Georges Verney-Carron
      gallery in Villeurbanne. At the same time, she put together a photographic inventory of
      advertising posters she had come across since her stay in Italy, featuring scantily-dressed
      women displayed in urban settings. In 1995 she began work <em>Peintures d'aveugle</em> ("Blind
      Paintings"). A year later obtained a Villa Medici extramural grant for an project involving
      watermarks which she carried out in Amalfi, south of Naples, and which lasted into 1997. These
      four groups of works were exhibited in 1998 at the Showroom Manzoni in Geneva.
      <br />
      <br />
      In 1999, the Délégation aux Arts Plastiques commissioned her to produce a work in dressmakers'
      gold thread for the <em>Métissages</em> ("Crossovers") exhibition, which travelled around
      Europe, Asia and America. That same year, she received support from the Caisse des Dépôts et
      Consignations for her photographic serie <em>Tunnels</em>. Three prints from this series were
      acquired by the Centre Pompidou. In 2000 she obtained an individual creativity award from DRAC
      Rhône-Alpes for the production of an audio installation. Between 2002 and 2004 she designed
      and produced a work for the Pôle Optique Rhône-Alpes in Saint-Etienne, and in 2003 the Centre
      d'Art at the Villa du Parc in Annemasse showed a set of her works, including the installation
      <em> Elle…</em>, accompanied by a publication. Around the same period, she photographed
      ancient Roman boats that had been discovered during the construction of an underground car
      park. In 2005 she exhibited the <em>Portraits réfléchis</em> series at Shanghai's fine arts
      museum, and worked "in resonance" with Lyon's contemporary art biennial, Expérience de la
      durée, at the Institution des Chartreux.
      <br />
      <br />
      Since 2002 Décoret has been working on isolation rooms devoid of presence, in psychiatric
      hospitals. In 2006, at the Institut Culturel Français in Dakar, Senegal, she photographed,
      among other subjects, children dressed up for Mardi Gras; and in France, at the solstices and
      equinoxes, she went to Le Corbusier's convent, La Tourette, to take pictures in the
      Dominicans' cells. These are being exhibited at the convent during its renovation, and are
      being published at the same time.
      <br />
      <br />
      Marie-Noëlle Décoret makes occasional appearances in schools. And among the collections in
      which works by her can be found are those of the FNAC, the Centre Pompidou, the Bibliothèque
      Nationale, SACEM, FRAC Franche-Comté, as well as the Artothèque in Lyon, and the city's
      municipal collection.
    </div>
  ),
}

class Biography extends Component {
  state = {
    lang: 'fr',
  }

  render() {
    const { lang } = this.state

    return (
      <Container>
        <Header />

        <Content>
          <Toggler active={lang}>
            <span onClick={() => this.setState({ lang: 'fr' })}>fr</span>
            <b>{'/'}</b>
            <span onClick={() => this.setState({ lang: 'en' })}>en</span>
          </Toggler>

          {texts[lang]}
        </Content>
      </Container>
    )
  }
}

export default Biography
