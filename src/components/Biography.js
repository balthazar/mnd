import React, { Component } from 'react'
import styled from 'styled-components'

import Header from 'components/Header'
import Footer from 'components/Footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .ref {
    font-size: 10px;
    font-weight: bold;
    color: red;
    display: inline-flex;
    margin-left: 5px;

    > span {
      &:before {
        content: '[';
      }

      &:after {
        content: ']';
      }
    }
  }
`

const Content = styled.div`
  margin: 150px 50px 50px 50px;
`

const Legend = styled.div`
  font-weight: bold;
  font-size: 12px;
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
      En 1994, Marie-Noëlle DECORET entreprend, à Rome, une réflexion sur le mouchoir - l’objet -
      regardé comme carré blanc. Elle expose ce travail à la Chartreuse de Sainte-Croix en Jarez
      avec le Frac Rhône-Alpes<p className="ref">
        <span>1</span>
      </p>{' '}
      ainsi qu’à la galerie Georges Verney-Carron à Villeurbanne<p className="ref">
        <span>2</span>
      </p>. Parallèlement à ce travail, elle compose un inventaire photographique d’affiches
      publicitaires rencontrées depuis l’Italie, sur l’image de la femme en milieu urbain. Elle
      débute la réalisation de ses <em>Peintures d’aveugle</em> en 1995.
      <br />
      <br />
      En 1996, elle obtient une bourse Villa Medicis hors les murs pour un projet d’œuvres en
      filigrane qu’elle réalise au sud de Naples, à Amalfi, jusqu’en 1997. Ces quatre déclinaisons
      sont présentées à Genève en 1998 au Showroom Manzoni<p className="ref">
        <span>3</span>
      </p>.
      <br />
      <br />
      En 1999, la Délégation aux Arts Plastiques lui commande une œuvre en passementerie dans le
      cadre du projet <em>Métissages</em>
      <p className="ref">
        <span>4</span>
      </p>, exposé en Europe, Asie, Amérique. La même année, elle reçoit une aide à la production de
      la Caisse des dépôts et consignations pour ses photographies de la série <em>Tunnels</em> dont
      trois épreuves se trouvent dans la collection du Centre Pompidou<p className="ref">
        <span>5</span>
      </p>. En 2000, elle obtient une aide individuelle à la création pour la réalisation d’une
      installation sonore<p className="ref">
        <span>6</span>
      </p>.
      <br />
      <br />
      En 2002 elle débute un travail sur la chambre d’isolement vidée de présence en hôpital
      psychiatrique.
      <br />
      De 2002 à 2004, elle conçoit et réalise une œuvre monumentale pour le Pôle Optique Rhône-Alpes
      à Saint-Étienne, <em>Histoire de voir</em>, <em>Portraits réfléchis</em>
      <p className="ref">
        <span>7</span>
      </p>, alors qu’en 2003, le Centre d’art de la Villa du Parc à Annemasse présente en duo avec
      Susanna Fritscher un ensemble de ses réalisations dont l’installation <em>Elle…</em>{' '}
      accompagnée de son édition<p className="ref">
        <span>8</span>
      </p>. Entre 2003 et 2004, elle photographie les épaves mises au jour lors de la construction
      d’un parc souterrain dans le Vieux-Lyon<p className="ref">
        <span>9</span>
      </p>.
      <br />
      <br />
      L’année 2005 voit ses images de la série <em>Portraits réfléchis</em> au musée de beaux-arts
      de Shanghai<p className="ref">
        <span>10</span>
      </p>, ainsi que sa participation en résonance avec la biennale d’art contemporain de Lyon,{' '}
      <em>Expérience de la durée</em>, à l’Institution des Chartreux<p className="ref">
        <span>11</span>
      </p>.
      <br />
      <br />
      En 2006, elle réside à l’Institut culturel français de Dakar où elle photographie des enfants
      déguisés pour Mardi gras<p className="ref">
        <span>12</span>
      </p>{' '}
      tout en menant en France au couvent de La Tourette édifié par Le Corbusier, quatre séries de
      prises de vue sur les cellules des frères dominicains aux solstices et aux équinoxes. Cette
      intervention fera l’objet d’une exposition dans le couvent en réfection, en résonance avec la
      Biennale d’art contemporain de Lyon, et d’une édition<p className="ref">
        <span>13</span>
      </p>{' '}
      à l’automne 2007.
      <br />
      <br />
      L’été 2009, l’artiste participe à la biennale de la céramique de Chateauroux comme à la
      rétrospective du Frac Franche-Comté à la Saline royale d’Arc-et-Senans<p className="ref">
        <span>14</span>
      </p>. Elle intervient jusqu’au printemps 2010 au musée textile de Bourgoin-Jallieu dans le
      cadre de Culture et Hôpital alors qu’une de ses photos de la série <em>Tunnels</em> est
      présente à l’exposition <em>elles</em>
      <p className="ref">
        <span>15</span>
      </p>{' '}
      au Centre Georges Pompidou.
      <br />L’artiste reçoit une commande de la Ville de Vénissieux pour le Centre pédagogique
      Michel Delay. A l’automne 2010, M.-N. D. est présente avec la galerie Artaé à{' '}
      <em>Show Off</em> foire du solo show à Paris pendant la Fiac.
      <br />
      <br />
      En 2012, l’artiste expose au Passage de Retz à Paris et au musée d‘Angers<p className="ref">
        <span>16</span>
      </p>{' '}
      dans le cadre d’un hommage à Thomas Gleb. Cette même année à l’automne, le CHU Le Vinatier
      présente ses photographies <em>Chambres d’isolement</em>
      <p className="ref">
        <span>17</span>
      </p>.
      <br />
      <br />
      En 2014 elle débute la série <em>Portraits fanés</em> ; les <em>Portraits sanguins</em> en
      2016. Ces deux séries sont présentées à l’automne de cette même année à la MAC de Pérouges<p className="ref">
        <span>18</span>
      </p>.
      <br />
      <br />
      Au printemps 2019, Marie-Noëlle participe à l’exposition Muséalies 2, Faces, masques et
      portraits, l’Atelier Picasso
      <p className="ref">
        <span>19</span>
      </p>{' '}
      à Roanne, au musée Joseph-Déchelette. L’été voit ses photographies Tunnels
      <p className="ref">
        <span>20</span>
      </p>{' '}
      présentées sous forme d’installation magistrale en Brionnais, dans l’ancienne gare de
      Saint-Maurice-lès-Chateauneuf, avec l’association Esox-Lucius.
      <br />
      <br />
      De novembre 2019 à février 2020, nous la retrouvons à Roanne, pour une exposition personnelle,
      Cent visages
      <p className="ref">
        <span>21</span>
      </p>, au musée Joseph-Déchelette, avec un échelonnement de ses créations sur vingt-cinq ans.
      <br />
      <br />
      Marie-Noëlle DECORET intervient ponctuellement en milieu scolaire.<br />Ses œuvres figurent
      dans les collections du FNAC, Fonds National d’Art Contemporain, du Centre Pompidou, MNAM,
      Musée National d’Art Moderne, de la Bibliothèque Nationale de France, de la SACEM, du Frac
      Franche-Comté, du musée Joseph-Déchelette à Roanne, du musée de Bourgoin-Jallieu, de la Ville
      de Vénissieux, de l’artothèque et de la Ville de Lyon.
      <br />
      <br />
      <br />
      <Legend>
        1 <em>Silencieuse</em>, catalogue, entretien avec Yannick Miloux, Chartreuse de Sainte-Croix
        en Jarez, Frac Rhône-Alpes,1996.
        <br />
        2 <em>La Révélation ou le goût du blanc</em>, catalogue, Valérie Mavridorakis, galerie
        Georges Verney-Carron, 1996-1997.
        <br />
        3 Showroom Manzoni, Genève. <em>Dérober au…</em> Texte Claude-Hubert Tatot, Papiers Libres
        n°15, décembre 1998.
        <br />
        4 <em>Immanence</em>, fil d’or, guipure et crête d’or, FNAC, Fonds national d’art
        contemporain
        <br />
        5 <em>Les Peintres de la vie moderne</em>, donation Caisse des Dépôts et Consignations,
        Centre Pompidou, 2006.
        <br />
        6 <em>L’Arrière-pays</em>, Installation sonore, Fiacre, Drac Rhône-Alpes.
        <br />
        7 <em>Histoire de voir, Portraits réfléchis</em>, Édition. Textes Sylvie Lagnier, Yves
        Sabourin, éditions Lieux Ditsi/ Saint-Étienne Métropole, 2007.
        <br />
        8 <em>Cartes blanches</em>, avec Susanna Fritscher, Villa du Parc, Annemasse.
        <br />
        Édition <em>Elle…</em> 230 exemplaires.
        <br />
        <em>Elle Expose</em>, texte Claude-Hubert Tatot, www.plumart.com n° 53 mai 2003.
        <br />
        9 <em>Les Bateaux de Saint-Georges</em>, portfolio, texte Pierre-Jean Rémy, de l’Académie
        française, Lyon Parc Auto, 50 ex.
        <br />
        10 <em>Paris à Shanghai, trois générations de photographes français</em>, édition Actes Sud,
        Arles, Jean-Luc Monterosso, Sophie Schmit, 2005.
        <br />
        11 <em>Memento des vivants</em>, Bruno Martin ; <em>Regarder du temps</em>, Claude-Hubert
        Tatot.
        <br />
        12 <em>Portraits déguisés, Portraits réfléchis</em>, catalogue, textes Pierre-Jean Rémy, de
        l’Académie française et Sylvie Lagnier, Galerie Le Manège, Institut Léopold Sédar Senghor,
        Dakar, Sénégal, 2006.
        <br />
        13 <em>À distance</em>, catalogue, textes Sylvie Lagnier ; Camille Fallen / Jean-Luc Nancy,
        éditions de La Tourette – Le Corbusier, 2007.
        <br />
        14 <em>Anima, Animalia</em>, 15ème biennale de la céramique, Couvent des Cordeliers,
        Chateauroux.
        <em>9o’</em>, Frac Franche-Comté, Saline royale d’Arc-et-Senans, 2009.
        <br />
        15 <em>elles@centrepompidou</em>, juin 2009 – février 2011.
        <br />
        16 <em>Blanche est la couleur</em>, Hommage à Thomas Gleb, Yves Sabourin, Passage de Retz,
        Paris.
        <em>Sacré blanc !</em>, Hommage à Thomas Gleb, Yves Sabourin, Musée d’Angers, 2012.
        <br />
        17 <em>Chambres d’isolement</em>, La Ferme, CHU Le Vinatier, Culture et Hôpital, texte
        Hauviette Bethemont, 2012.
        <br />
        18 <em>Rose… Still Life</em>, avec Elisabeth Gilbert Dragic, Mac de Pérouges, 2016.
        <br />
        19 <em>Muséalies 2, Faces, masques et portraits, l’Atelier Picasso</em>, musée Joseph-
        Déchelette, Roanne.
        <br />
        20 <em>Tunnels</em> installation monumentale en Brionnais dans l’ancienne gare de
        Saint-Maurice- lès-Chateauneuf, Esox-Lucius.
        <br />
        21 <em>Cent visages</em>, exposition personnelle au musée Joseph-Déchelette, Roanne,
        novembre 2019 – février 2020.
      </Legend>
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

        <Footer />
      </Container>
    )
  }
}

export default Biography
