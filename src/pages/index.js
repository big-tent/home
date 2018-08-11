import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

import "../utilities/index.css"
import { IconMail, IconTwitter, IconPhone } from "../utilities/icons.js"

import logo from "../images/LogoWhiteJuly28.svg"
import sky from "../images/fire.jpeg"

const LandingWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  position: relative;
  width: 100vw;
`

const BackgroundImage = styled.img`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: fixed;
  width: 100%;
  top: 0;
`

const TextWrapper = styled.div`
  align-self: center;
  position: absolute;
  width: 75vmin;
`

const LogoContainer = styled.img`
  width: 100%;
`

const LinksContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 600px) {
    flex-direction: row;
  }
  h1 {
    color: white;
    font-size: 2rem;
    font-weight: 100;
    margin: 5px 0 0 0;
    padding-bottom: 5px;
    text-align: center;
    text-shadow: 2px 2px 2px #000;
    @media (min-width: 600px) {
      font-size: 2.5rem;
      border-bottom: 10px solid transparent;
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
  }
`

const ContactWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  @media (min-width: 900px) {
    align-items: flex-end;
    flex-direction: column;
    top: 45vh;
    width: 100px;
  }
`

const ContactHolder = styled.div`
  height: 55px;
  width: calc(100% / 3);
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

const Layout = () => (
  <LandingWrapper>
    <BackgroundImage src={sky} />
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
