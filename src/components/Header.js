import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {

  render () {
    return (
      <div className='header'>

        <div className='fac'>
          <h1 style={{ marginRight: '1rem' }}>{'Marie-Noëlle DÉCORET'}</h1>

          <Link className='pompidou' to='https://www.centrepompidou.fr/cpv/resource/cEnpL9/rnpdar' target='_blank'>
            <img src='/assets/images/pompidou.ico' />
          </Link>
        </div>

        <div className='menu'>
          <Link to='/'>{'Home'}</Link>
          <Link to='/cv'>{'CV'}</Link>
        </div>

      </div>
    )
  }

}

export default Header
