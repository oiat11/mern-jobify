import React from 'react'
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobify logo' className='logo'></img>
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>job <span>Tracking</span> App</h1>
          <p>I'm baby air plant photo booth gatekeep, tumeric kitsch PBR&B flannel lyft. Master cleanse street art air plant DIY lumbersexual salvia everyday carry organic. Fingerstache slow-carb tousled sriracha hashtag farm-to-table unicorn, try-hard roof party hot chicken. Listicle messenger bag succulents hammock DSA, man bun small batch palo santo wayfarers roof party 90's kitsch hell of poke bitters. Celiac cliche kinfolk, man bun fam pabst neutral milk hotel plaid tote bag biodiesel +1 narwhal sustainable air plant. Adaptogen echo park pabst succulents bruh retro selvage YOLO umami waistcoat before they sold out. Roof party Brooklyn cupping food truck lo-fi squid pabst glossier same banjo irony tote bag wolf raw denim next level.
          </p>
          <Link to="./register" className='btn register-lnk'>Register</Link>
          <Link to="./login" className='btn '>Login / Demo User</Link>

        </div>
        <img src={main} alt='job hunt' className='img main-img'/>
      </div>

    </Wrapper>
  )
}

export default Landing
