import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '../constants'

const Footer = () => {
  return (
    <footer className='mb-8 mt-12'>

      <div className='flex items-center justify-center gap-8'>
        {SOCIAL_MEDIA_LINKS.map((link,index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
        ))}
      </div>
      <p className='text-center tracking-tighter mt-8 text-neutral-500'>
        &copy; {new Date().getFullYear()} The Quiet Cup. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
