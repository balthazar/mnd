import React, { Component } from 'react'
import styled from 'styled-components'

import Header from 'components/Header'

import works from 'works'

const Lightbox = typeof window !== 'undefined' ? require('react-image-lightbox').default : null

const Content = styled.div`
  margin: 150px 50px 50px 50px;

  h2 {
    font-size: 15px;
  }

  > * + * {
    margin-top: 20px;
  }
`

const Main = styled.div`
  display: flex;
  > div {
    flex: 1;
    width: 0;
  }

  > * + * {
    margin-left: 40px;
  }
`

const TextDesc = styled.div`
  margin-top: 20px;
  font-weight: bold;
  font-size: 12px;
`

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    margin: 5px;
  }
`

class Work extends Component {
  state = {
    selected: null,
  }

  render() {
    const { selected } = this.state
    const id = this.props.match.params.id
    const work = works[id]

    if (!work) {
      this.props.history.replace('/')
    }

    return (
      <div>
        <Header />

        {Lightbox &&
          selected !== null && (
            <Lightbox
              mainSrc={`/assets/${id}/${work.images[selected].url}`}
              nextSrc={`/assets/${id}/${work.images[(selected + 1) % work.images.length].url}`}
              prevSrc={`/assets/${id}/${
                work.images[(selected + work.images.length - 1) % work.images.length].url
              }`}
              imageCaption={work.images[selected].text}
              imagePadding={110}
              onCloseRequest={() => this.setState({ selected: null })}
              onMovePrevRequest={() =>
                this.setState({
                  selected: (selected + work.images.length - 1) % work.images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  selected: (selected + 1) % work.images.length,
                })
              }
            />
          )}

        <Content>
          <h2>
            {work.title} — <em>{work.date}</em>
          </h2>

          <Main>
            {work.text && (
              <div>
                {work.text}
                <TextDesc>{work.textDesc}</TextDesc>
              </div>
            )}
            <Images>
              {work.images.map((image, index) => (
                <div onClick={() => this.setState({ selected: index })} key={image.url}>
                  <img src={`/assets/${id}/${image.url}`} width={work.text ? 200 : 400} />
                </div>
              ))}
            </Images>
          </Main>
        </Content>
      </div>
    )
  }
}

export default Work
