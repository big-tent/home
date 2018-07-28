import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import '../utilities/index.css'
import { IconMail, IconTwitter, IconPhone } from '../utilities/icons.js'

import logo from '../images/LogoWhiteJuly28.svg'
import video from '../images/videofield.mp4'

const LandingWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

const VideoContainer = styled.video`
  min-height: 100%;
  object-fit: cover;
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
`

const TextWrapper = styled.div`
  place-self: center;
  position: relative;
  width: 75vmin;
`

const LogoContainer = styled.img`
  width: 100%;
`

const ContactWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  @media (min-width: 900px) {
    align-items: flex-end;
    flex-direction: column;
    right: 0;
    top: 45vh;
  }
`

const ContactHolder = styled.div`
  height: 55px;
  width: 33.3333vw;
  background: #1da1f2;
  display: grid;
  place-items: center;
  @media (min-width: 900px) {
    width: 55px;
    :hover {
      width: 65px;
    }
  }
  :first-of-type {
    background: #f2c71d;
  }
  :last-of-type {
    background: #677685;
  }
`

const LinksContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;
  @media (min-width: 600px) {
    flex-direction: row;
  }
  h1 {
    border-bottom: 10px solid transparent;
    color: white;
    font-size: 2rem;
    font-weight: 100;
    margin: 10px 0 0 0;
    padding-bottom: 10px;
    text-align: center;
    @media (min-width: 600px) {
      font-size: 2.5rem;
    }
    :hover {
      cursor: pointer;
      border-bottom: 10px solid #f2309b;
      :first-of-type {
        border-color: #374c8c;
      }
      :last-of-type {
        border-color: #f2e205;
      }
    }
  }
`

const Layout = () => (
  <LandingWrapper>
    <VideoContainer src={video} autoPlay="autoplay" loop="true" muted="true" />
    <TextWrapper>
      <LogoContainer src={logo} />
      <LinksContainer>
        <h1>
          <Link to="/web">Web</Link>
        </h1>
        <h1>
          <Link to="/social">Social</Link>
        </h1>
        <h1>
          <Link to="/content">Content</Link>
        </h1>
      </LinksContainer>
    </TextWrapper>
    <ContactWrapper>
      <ContactHolder>
        <Link to="/contact">
          <IconMail />
        </Link>
      </ContactHolder>
      <ContactHolder>
        <a href="https://twitter.com/BigTentSocial">
          <IconTwitter />
        </a>
      </ContactHolder>
      <ContactHolder>
        <a href="tel:+00447886453837">
          <IconPhone />
        </a>
      </ContactHolder>
    </ContactWrapper>
  </LandingWrapper>
)

export default Layout
