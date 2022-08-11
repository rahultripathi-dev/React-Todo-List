import React from 'react'

const Header = () => {
  return ( 
    <>
    <nav >Get Ready To Complete your Daily Goals</nav>
    <div className='header'>
      <a  href='/'> Home </a>
      <a  href='/About'> About </a>
      <a  href='/Contact'> Contact </a>
    </div>
    </>
  )
}
const Footer = () => {
  return (
    <div>
    <footer>Made with <span>{"\u2764"} </span>
    By Rahul Tripathi</footer>
    </div>
  )
}
export {Header, Footer} ;


