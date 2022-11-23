import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Data = () => {
    return (
        <div className="home_data">
            <h1 className="home_title">Hey, I'm Saravanakumar<span className='hand'>👋</span></h1>

            <h2 className='typewriter-text1'>

                <span className='typewriter-text' style={{ fontWeight: 'bold' }}>
                    <Typewriter
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        words={[' Front-End Developer', ' Full Stack Developer']}
                    />
                </span>
            </h2>


            {/* <h3 className='home_subtitle'>asdasdas</h3> */}
            <p className="home_description">I'm creative Front-end Developer from india and
                I'm very passionate and dedicated to my work.</p>
            <div className='button1'>
            <a download='Saravana-Cv.pdf' href='Saravana-Cv.pdf' className='btn_resume'>
                    <button/>Resume
                    <i className='icon_resume uil uil-file-info-alt'></i>      
            </a>
</div>
            
        </div>
    )
}

export default Data