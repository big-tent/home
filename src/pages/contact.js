import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ContactWrapper = styled.div`
  place-items: center;
  display: grid;
  min-height: 100%;
  min-width: 100%;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Contact = () => (
  <ContactWrapper>
    <h1>Contact us</h1>

    <Form action="https://formspree.io/davidcooper974@gmail.com" method="POST">
      <input type="text" name="name" placeholder="Your name" />
      <input type="email" name="_replyto" placeholder="Your email" />
      <textarea type="message" name="message" placeholder="Your message" />
      <input type="submit" value="Send" />
    </Form>
    <Link to="/">
      <button>Take me home</button>
    </Link>
  </ContactWrapper>
)

export default Contact
