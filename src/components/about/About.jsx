import React from 'react'
import './about.css'
import ABOUTME from '../../assets/aboutme.jpg'
import {FaAward} from 'react-icons/fa'
import {ImUsers} from 'react-icons/im'
import {RiFolderOpenFill} from 'react-icons/ri'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ABOUTME} alt="aboutimage"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1+ years experience</small>
            </article>

            <article className="about__card">
              <ImUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>200+ World Wide</small>
            </article>

            <article className="about__card">
              <RiFolderOpenFill className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquid provident illo tenetur, vel veritatis fuga aliquam deserunt minus rerum maiores corporis voluptatum? Voluptates excepturi autem, iure odio officia veritatis.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
