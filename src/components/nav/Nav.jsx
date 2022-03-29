import React from 'react'
import './nav.css'
import {TiHomeOutline} from 'react-icons/ti'
import {BiUser} from 'react-icons/bi'
import {GiBookCover} from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'
import {RiMessage2Fill} from 'react-icons/ri'

const Nav = () => {
  return (
    <nav>
      <a href="#home"><TiHomeOutline/></a>
      <a href="#about"><BiUser/></a>
      <a href="#experiences"><GiBookCover/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><RiMessage2Fill/></a>
    </nav>
  )
}

export default Nav
