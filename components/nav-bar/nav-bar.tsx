import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { NavBar, NavButton, NavbarContainer, NavLink } from './nav-bar.style'

const Navbar = () => {
  return (
    <NavBar>
      <NavbarContainer>
        <ul>
          <Link href="/home" passHref>
            <NavButton>Home</NavButton>
          </Link>
          <Link href="/about" passHref>
            <NavButton>About</NavButton>
          </Link>
          <Link href="/about" passHref>
            <NavButton>Blog</NavButton>
          </Link>
        </ul>
        <ul>
          <NavButton>Home</NavButton>
          <NavButton>About</NavButton>
          <NavButton>Blog</NavButton>
        </ul>
        <ul>
          <NavButton>Home</NavButton>
          <NavButton>About</NavButton>
          <NavButton>Blog</NavButton>
        </ul>
      </NavbarContainer>
    </NavBar>
  )
}

export default Navbar
