import React, { Component } from 'react'

const items = {
  'Expositions personnelles': [{
    date: '2012',
    elements: [{
      title: 'Chambres d’isolement',
      desc: ', photographies, La Ferme, CHU Le Vinatier, Lyon',
    }],
  }, {
    date: '2010',
    elements: [{
      title: 'La Tourette',
      desc: ', Galerie Artaé, Lyon',
    }, {
      title: 'Show off',
      desc: ', Galerie Artaé, Paris',
    }],
  }, {
    date: '2007',
    elements: [{
      title: 'À distance',
      desc: ', Couvent de La Tourette, Le Corbusier, Éveux – L’Arbresle',
    }, {
      title: 'Tunnels, Peintures d’aveugle',
      desc: ', Galerie Françoise Besson, Lyon',
    }],
  }, {
    date: '2006',
    elements: [{
      title: 'Portraits déguisés, Portraits réfléchis',
      desc: ', Institut culturel français, Galerie Le Manège, Dakar',
    }],
  }, {
    date: '2005',
    elements: [{
      title: 'Regarder du temps',
      desc: ', Institution des Chartreux. En résonance avec la biennale d’art contemporain de Lyon Expérience de la durée',
    }],
  }, {
    date: '2003',
    elements: [{
      title: 'Cartes blanches',
      desc: ', Villa du Parc, Annemasse',
    }],
  }, {
    date: '1998',
    elements: [{
      desc: 'Showroom Manzoni, Genève',
    }, {
      title: 'Portraits d’artistes',
      desc: ', Nouveau palais de justice de Lyon',
    }],
  }, {
    date: '1996-1997',
    elements: [{
      desc: 'Galerie Georges Verney-Carron, Villeurbanne',
    }],
  }, {
    date: '1996',
    elements: [{
      title: 'Silencieuse',
      desc: 'Frac Rhône-Alpes, Chartreuse de Sainte-Croix-en-Jarez',
    }],
  }],
  'Expositions de groupe': [{
    date: '2014',
    elements: [{
      title: 'Couvent de La Tourette - Le Corbusier',
      desc: ', Le Cloître ouvert, Paris',
    }, {
      title: 'Tresses et Lacets, 13 - 14',
    }],
  }, {
    date: '2013',
    elements: [{
      title: 'Couvent de La Tourette,',
      desc: ', Couvent de La Tourette - Le Corbusier, Éveux – L’Arbresle',
    }],
  }, {
    date: '2012',
    elements: [{
      title: 'L’étoffe des femmes',
      desc: ', Musée de Bourgoin-Jallieu',
    }, {
      title: 'Sacré Blanc !',
      desc: 'Musée de la tapisserie d’Angers',
    }, {
      title: 'Blanche est la Couleur, Hommage à Thomas Gleb',
      desc: ', Passage de Retz, Paris',
    }],
  }, {
    date: '2010',
    elements: [{
      title: 'elles@centrepompidou',
      desc: ', Centre Pompidou, Paris',
    }],
  }, {
    date: '2009',
    elements: [{
      desc: '90’ Collection du Frac Franche-Comté, Saline Royale d’Arc et Senans',
    }, {
      title: 'Anima, Animalia',
      desc: ', XVème Biennale de la céramique, Chateauroux',
    }],
  }, {
    date: '2006',
    elements: [{
      title: 'Les Peintres de la vie moderne,',
      desc: ', Donation de la Caisse des Dépôts et Consignations, Centre Pompidou, Paris',
    }],
  }, {
    date: '2005',
    elements: [{
      title: 'Paris à Shanghai',
      desc: ', Trois générations de photographes français, musée des Beaux arts de Shanghai',
    }],
  }, {
    date: '2004',
    elements: [{
      title: 'Metropolis',
      desc: ', Frac Franche-Comté, Dole',
    }, {
      title: 'Douce France',
      desc: ', Visions de la France à travers la collection de la Caisse des dépôts, Culturgest – Lisbonne',
    }],
  }, {
    date: '2003',
    elements: [{
      title: 'Métissages',
      desc: ', Château de Vogüé, et Musée des beaux-arts et de la dentelle, Alençon',
    }, {
      title: 'Imago',
      desc: ', Frac Franche-Comté, Dole',
    }, {
      title: 'Noir c’est noir',
      desc: ', Frac Franche-Comté, Baume-les-Dames',
    }],
  }, {
    date: '2002',
    elements: [{
      title: 'Photographies',
      desc: ', Galerie Domi Nostræ, Lyon, avec Carole Fékété et Colette Hyvrard',
    }, {
      desc: 'La Tour rose, Philippe Chavent, Lyon',
    }, {
      title: 'Au Pied de la lettre',
      desc: ', Urdla, Médiathèque de Vénissieux',
    }],
  }, {
    date: '2001',
    elements: [{
      title: 'Entretejidos-Texturas',
      desc: ', Lima, La Paz, Rio de Janeiro, Buenos Aires, Afaa / Dap',
    }, {
      desc: 'Métissages, Musée de Louviers',
    }],
  }, {
    date: '1999',
    elements: [{
      title: 'Interweavings',
      desc: ', Côte ouest, California College of Arts and Crafts, San Francisco, Afaa / Dap',
    }, {
      title: 'Entrevoir',
      desc: ', Villa du Parc, Annemasse',
    }],
  }, {
    date: '1997',
    elements: [{
      title: '1983 / 1997',
      desc: ', Galerie Georges Verney-Carron, Villeurbanne',
    }],
  }],
  'Commande publique': [{
    date: '2003 / 2004',
    elements: [{
      title: 'Histoire de voir, Portraits réfléchi',
      desc: ', Pôle Optique Rhône-Alpes, Cité du Design, Saint-Étienne',
    }],
  }],
  Portfolio: [{
    date: '2004 / 2005',
    elements: [{
      title: 'Les Bateaux de Saint-Georges',
      desc: ', Lyon Parc Auto, Texte de Pierre-Jean Rémy, de l’Académie française, 50 ex.',
    }],
  }],
  Éditions: [{
    date: '2003',
    elements: [{
      title: 'Elle…',
      desc: ', sérigraphie, fourrure synthétique, 25 x 10 x 8 cm, 230 exemplaires',
    }],
  }, {
    date: '2002',
    elements: [{
      desc: 'Sérigraphie et collage, Urdla, Villeurbanne, 120 x 35 cm, 20 exemplaires',
    }],
  }, {
    date: '1999',
    elements: [{
      title: 'Immanence',
      desc: ', Cnap / Fonds national d\'art contemporain, passementerie, 8 exemplaires',
    }],
  }, {
    date: '1991',
    elements: [{
      title: 'Point de vue',
      desc: ', Moulin de Valbois, sérigraphie, 55,5 x 75,5 cm, 90 exemplaires',
    }],
  }],
  Bibliographie: [{
    date: '2007',
    elements: [{
      title: 'À distance',
      desc: ', textes Camille Fallen - Jean-Luc Nancy, Sylvie Lagnier, Eveux, La Tourette',
    }, {
      title: 'Portraits réfléchis',
      desc: ', Pôle Optique, Saint-Étienne Métropole / Lieux Dits, textes Sylvie Lagnier, Yves Sabourin',
    }],
  }, {
    date: '2006',
    elements: [{
      title: 'Portraits déguisés, Portraits réfléchis',
      desc: ', textes Pierre-Jean Rémy de l’Académie française, Sylvie Lagnier, Institut culturel français, Dakar',
    }],
  }, {
    date: '2005',
    elements: [{
      title: 'Mémento des vivants',
      desc: ', Bruno Martin, Institution des Chartreux',
    }, {
      title: 'Regarder du temps',
      desc: ', Claude-Hubert Tatot, Institution des Chartreux',
    }, {
      title: 'Paris à Shanghai, Trois générations de photographes français',
      desc: ', musée des Beaux-arts de Shanghai, Actes Sud',
    }],
  }, {
    date: '2004',
    elements: [{
      desc: 'Arnaud Guillon / Marie-Noëlle Décoret, Beaux Arts magazine spécial photo, nov. 2004',
    }, {
      title: 'Metropolis',
      desc: ', Frac Franche-Comté, Dole',
    }],
  }, {
    date: '2003',
    elements: [{
      title: 'Elle expose',
      desc: ', Claude-Hubert Tatot, www.Plumart.com n° 53 mai 2003',
    }],
  }, {
    date: '1998',
    elements: [{
      desc: 'Claude-Hubert Tatot, Showroom Manzoni, Genève - Papiers Libres n°15 déc. 1998 - janv. 1999',
    }, {
      title: 'Portraits d’artistes',
      desc: ', Marie-Noëlle Décoret, Nouveau palais de Justice de Lyon',
    }],
  }, {
    date: '1996',
    elements: [{
      title: 'La Révélation ou le goût du blanc',
      desc: ', Valérie Mavridorakis, Galerie Georges Verney-Carron, Villeurbanne',
    }, {
      title: 'Silencieuse',
      desc: ', Yannick Miloux, Entretien avec Marie-Noëlle Décoret, Parc du Pilat / Frac Rhône-Alpes',
    }],
  }],
  Recherches: [{
    date: '2000',
    elements: [{
      title: 'L’Arrière-pays',
      desc: ', installation sonore, Fiacre, Drac Rhône-Alpes',
    }],
  }, {
    date: '1996-1997',
    elements: [{
      title: 'Filigranes',
      desc: ' Bourse Villa Medicis hors les murs, Afaa / Culturesfrance, Naples /Amalfi',
    }],
  }, {
    date: '1994-1995',
    elements: [{
      desc: 'Séjour à l’Académie de France à Rome',
    }],
  }],
  Interventions: [{
    date: '2010',
    elements: [{
      desc: 'Musée de Bourgoin-Jallieu, Culture et hôpital, Drac Rhône-Alpes',
    }],
  }, {
    date: '2007',
    elements: [{
      title: 'Suprise !',
      desc: 'Musée Éphémère, Projet Sputnik/ Là Hors de, collection 2007, La Duchère',
    }],
  }, {
    date: '2004',
    elements: [{
      title: 'Mise au jour archéologique',
      desc: ', photographies, Parc Saint-Georges, Lyon Parc Auto',
    }],
  }, {
    date: '2003-2004',
    elements: [{
      title: 'Cabine',
      desc: ', Collège de l’Eyrieux, Saint-Sauveur de Montagut, Conseil général de l’Ardèche',
    }],
  }, {
    date: '2002',
    elements: [{
      title: 'Parcours de Territoires',
      desc: ', Réseau galeries, Multilangages de l’art / IAC, Villeurbanne',
    }],
  }],
}

class Cv extends Component {

  render () {
    return (
      <div className='content'>

        {Object.keys(items).map(key => (
          <div key={key}>

            <h3 style={{ marginBottom: '1rem', marginTop: '2rem' }}>{key}</h3>

            <div>
              {items[key].map(e => (
                <div key={e.date}>

                  <b>{e.date}</b>

                  {e.elements.map(s => (
                    <div key={s.desc}>
                      <em>{s.title}</em> {s.desc}
                    </div>
                  ))}

                </div>
              ))}
            </div>

          </div>
        ))}

        <h3 style={{ marginTop: '2rem' }}>{'Collections publiques'}</h3>
        <span>{'Centre Pompidou, Fnac Fonds National d’Art Contemporain, SACEM, Frac Franche-Comté, Ville de Vénissieux, Musée de Bourgoin-Jallieu, artothèque et Ville de Lyon.'}</span>

      </div>
    )
  }

}

export default Cv
