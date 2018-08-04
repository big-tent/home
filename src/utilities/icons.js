import React from 'react'
import { withBaseIcon } from 'react-icons-kit'

import { envelope } from 'react-icons-kit/fa/envelope'
import { twitter } from 'react-icons-kit/fa/twitter'
import { phone } from 'react-icons-kit/fa/phone'
import { home } from 'react-icons-kit/fa/home'
import { send } from 'react-icons-kit/fa/send'

const Icon = withBaseIcon({ size: '35', style: { color: '#fff' } })

export const IconMail = () => <Icon icon={envelope} />
export const IconTwitter = () => <Icon icon={twitter} />
export const IconPhone = () => <Icon icon={phone} />
export const IconHome = () => <Icon icon={home} />
export const IconSend = () => <Icon icon={send} />
