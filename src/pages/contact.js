import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

import { IconHome } from "../utilities/icons.js"
import { IconSend } from "../utilities/icons.js"
import Topper from "../components/Topper.js"

const ContactWrapper = styled.div`
  display: grid;
  min-height: 100%;
  min-width: 100%;
  place-items: center;
`

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 70vmin;
`

const Input = styled.input`
  font-size: 1rem;
  margin-bottom: 20px;
  padding: 5px;
  width: 100%;
`
const Message = styled.textarea`
  font-size: 1rem;
  height: 200px;
  margin-bottom: 20px;
  padding: 5px;
  width: 100%;
`

const Submit = styled.input`
  background: #0066a2;
  border-color: #0066a2;
  border-style: outset;
  color: white;
  font: bold 1rem arial, sans-serif;
  height: 50px;
  margin-bottom: 20px;
  text-shadow: none;
`

const HomeButton = styled.button`
  align-items: center;
  background: #f2c71d;
  color: #fff;
  display: flex;
  font: bold 1rem arial, sans-serif;
  padding: 10px;
`

const Contact = () => (
  <ContactWrapper>
    <Topper color="#f2c71d" />
    <h1>Contact us</h1>

    <Form action="https://formspree.io/david@bigtent.media" method="POST">
      <Input type="text" name="name" placeholder="Your name" />
      <Input type="email" name="_replyto" placeholder="Your email" />
      <Message type="message" name="message" placeholder="Your message" />
      <Submit type="submit" value="Send" />
    </Form>
    <Link to="/">
      <HomeButton>
        <IconHome />
        Take me home
      </HomeButton>
    </Link>
  </ContactWrapper>
)

export default Contact
