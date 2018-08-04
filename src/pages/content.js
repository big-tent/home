import React from 'react'
import Link from 'gatsby-link'

import Topper from '../components/Topper.js'

const Content = () => (
  <div>
    <Topper />
    <h1>Content creation goodness on its way</h1>
    <Link to="/">
      <button>Take me home</button>
    </Link>
  </div>
)

export default Content
