import React, { Component } from 'react'

const items = [{
  title: 'Couvent de la Tourette - Le Corbusier',
  date: '2014',
  thumb: 'couvent',
}, {
  title: 'Chambres d\'isolement',
  date: '2012 / ...',
  thumb: 'chambres',
}, {
  title: 'Tunnels',
  date: '1999 / ...',
  thumb: 'tunnels',
}, {
  title: 'Portraits Réfléchis',
  date: '2002 / ...',
  thumb: 'portraits',
}]

class Home extends Component {

  render () {
    return (
      <div className='content'>

        {items.map(item => (
          <div className='home-item'>
            <div style={{ marginBottom: '0.5rem' }}>
              {item.title}
              <span style={{ color: '#aaa', marginLeft: '0.5rem' }}>{item.date}</span>
            </div>
            <img src={`/assets/images/${item.thumb}/thumb.jpg`} />
          </div>
        ))}

      </div>
    )
  }

}

export default Home
