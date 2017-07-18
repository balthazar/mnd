import React, { Component } from 'react'

const year = new Date().getFullYear()

class Footer extends Component {

  render () {
    return (
      <div className='footer'>

        <div className='legal'>
          <div style={{ marginBottom: '1rem' }}>{`2008-${year} ® Marie-Noëlle DÉCORET`}</div>
          <em>{'Tous droits de l\'auteur des oeuvres réservés. Sauf autorisation, la reproduction ainsi que toute utilisation des oeuvres autre que la consultation individuelle et privée sont interdites. Toute demande d\'autorisation pour quelque utilisation que ce soit doit être adressée à adagp@adagp.fr ou ADAGP : 11, rue Berryer, 75008 PARIS, tel : +33 143.59.09.79, fax : +33 145.63.44.89'}</em>
        </div>

      </div>
    )
  }

}

export default Footer
