import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Root = styled.div`
  background-color: rgb(190,190,190);
  height: 50px;
  margin: auto;
  display: flex;
`

const Paragraph = styled.p`
  color: rgb(70,70,70);
`

const Footer = () => {
  const [showFacebook, setShowFacebook] = useState(false)
  const [showInstagram, setShowInstagram] = useState(false)
  const [showGitHub, setShowGitHub] = useState(false)
  const [showEmail, setShowEmail] = useState(false)

  return (
    <Root className='m-auto'>
      <footer className='px-4 md:px-10 flex flex-col gap-2 justify-center'>
        <Paragraph
          className='text-base font-normal flex gap-2 items-center'
        >
          <a
            href='https://facebook.com/SSUNIIE12'
            target='_blank'
            rel="noopener noreferrer"
            className={`hover:text-[rgb(190,190,190)]
            hover:bg-[rgb(70,70,70)] hover:py-1 hover:px-2 transition-all`}
            onMouseOver={() => setShowFacebook(true)}
            onMouseOut={() => setShowFacebook(false)}
          >
            <FontAwesomeIcon icon={faFacebook} /> {showFacebook && 'Phatsanphon Nakaranurak'}
          </a>

          <a
            href='https://instagram.com/ssuniie'
            target='_blank'
            rel="noopener noreferrer"
            className={`hover:text-[rgb(190,190,190)]
            hover:bg-[rgb(70,70,70)] hover:py-1 hover:px-2 transition-all`}
            onMouseOver={() => setShowInstagram(true)}
            onMouseOut={() => setShowInstagram(false)}
          >
            <FontAwesomeIcon icon={faInstagram} /> {showInstagram && 'ssuniie'}
          </a>

          <a
            href='https://github.com/ssuniie'
            target='_blank'
            rel="noopener noreferrer"
            className={`hover:text-[rgb(190,190,190)]
            hover:bg-[rgb(70,70,70)] hover:py-1 hover:px-2 transition-all`}
            onMouseOver={() => setShowGitHub(true)}
            onMouseOut={() => setShowGitHub(false)}
          >
            <FontAwesomeIcon icon={faGithub} /> {showGitHub && 'ssuniie'}
          </a>

          <a
            className={`hover:text-[rgb(190,190,190)]
            hover:bg-[rgb(70,70,70)] hover:py-1 hover:px-2 transition-all text-sm md:text-base`}
            href='mailto:phatsanphon2004@outlook.com'
            onMouseOver={() => setShowEmail(true)}
            onMouseOut={() => setShowEmail(false)}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
            /> {showEmail &&
              'phatsanphon2004@outlook.com'}
          </a>
        </Paragraph>
      </footer>
    </Root>
  )
}

export default Footer