import React from 'react'
import { withBaseIcon } from 'react-icons-kit'

import { envelope } from 'react-icons-kit/fa/envelope'
import { twitter } from 'react-icons-kit/fa/twitter'
import { phone } from 'react-icons-kit/fa/phone'

const ContactIcon = withBaseIcon({ size: '55%', style: { color: '#fff' } })

export const IconMail = () => <ContactIcon icon={envelope} />
export const IconTwitter = () => <ContactIcon icon={twitter} />
export const IconPhone = () => <ContactIcon icon={phone} />
