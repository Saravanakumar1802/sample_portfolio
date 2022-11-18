import React from 'react'
import { Typewriter, useTypewriter} from 'react-simple-typewriter'

const Data = () => {
  return (
      <div className="home_data">
          <h1 className="home_title">Hy! I'm Saravanakumar👋</h1>

          <h2 className='typewriter-text1'>
              
              <span className='typewriter-text'style={{fontWeight:'bold'}}>
                  <Typewriter
                      loop
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      words={[' Front-End Developer',' Full Stack Developer']}
                  />
              </span>
          </h2>

          
          {/* <h3 className='home_subtitle'>asdasdas</h3> */}
          <p className="hame_description">I'm creative Front-end Developer from india and
              I'm very passionate and dedicated to my work.</p>

          
      </div>
  )
}

export default Data