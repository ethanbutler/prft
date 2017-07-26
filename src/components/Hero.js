import React, { Component } from 'react'
import './Hero.scss'

const heroBase = 'hero'
const things = [
  'making things',
  'whiteboards',
  'dad hats',
  'Rasheed Wallace',
  'feeling like I earned a beer',
  'making things'
]

class Hero extends Component {
  render() {
    return (
      <section className={`${heroBase} bg`}>
        <div className={`${heroBase}-inner`}>
          <h1 className={`${heroBase}-heading`}>My name is Ethan.</h1>
          <small className={`${heroBase}-excerpt`}>
            <span className={`${heroBase}-label`}>I like</span>
            <ul className={`${heroBase}-list`}>
              {things.map((thing, index) => {
                return (
                  <li key={`${thing}_${index}`} className={`${heroBase}-listitem`}>{thing}.</li>
                )
              })}
              <li className={`${heroBase}-listitem`}>{things[0]}.</li>
            </ul>
          </small>
        </div>
      </section>
    )
  }
}

export default Hero
