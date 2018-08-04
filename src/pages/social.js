import React from 'react'
import Link from 'gatsby-link'

import Topper from '../components/Topper.js'

const Social = () => (
  <div>
    <Topper />
    <h1>Social media goodness on its way</h1>
    <Link to="/">
      <button>Take me home</button>
    </Link>
  </div>
)

export default Social
