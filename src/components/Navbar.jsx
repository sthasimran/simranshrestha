/**
 * @copyright 2024 Simran Shrestha
 * @license Apache-2.0
 */


import React, { useRef } from 'react'

const Navbar = () => {

    const lastActiveLink = useRef();

    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Work',
          link: '#work',
          className: 'nav-link'
        },
        {
          label: 'Reviews',
          link: '#reviews',
          className: 'nav-link'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];
  return (
    <div>
      SDVS
    </div>
  )
}

export default Navbar
