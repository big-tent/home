import React from 'react'
import Link from 'gatsby-link'

const Contact = () => (
  <div>
    <h1>Contact us</h1>

    <form action="https://formspree.io/davidcooper974@gmail.com" method="POST">
      <input type="text" name="name" placeholder="Your name" />
      <input type="email" name="_replyto" placeholder="Your email" />
      <textarea type="message" name="message" placeholder="Your message" />
      <input type="submit" value="Send" />
    </form>
    <Link to="/">
      <button>Take me home</button>
    </Link>
  </div>
)

export default Contact
