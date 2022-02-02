import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import { gsap, Power3 } from 'gsap'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Root = styled.div`
  background-color: rgb(240,240,240);
  min-height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Title = styled.h1`
  color: var(--gray-110);
  margin: 16px;
  letter-spacing: 0.25rem;
  clip: rect(0px, 0px, 0px, 0px);
`

const Paragraph = styled.p`
  color: var(--gray-70);
  margin: 8px;
  line-height: 1.5;
`

const AngleDown = styled.div`
  color: var(--gray-90);
`

const Header = () => {
  const titleRef = useRef(null)
  const p1Ref = useRef(null)
  const p2Ref = useRef(null)
  const p3Ref = useRef(null)
  const angleRef = useRef(null)

  const fadeUp = () => {
    return gsap.timeline()
      .from(titleRef.current, { y: 40, opacity: 0, duration: 0.7, delay: 0.5, ease: Power3.easeOut })
      .from(p1Ref.current, { y: 10, opacity: 0, duration: 0.4, ease: Power3.easeOut })
      .from(p2Ref.current, { y: 10, opacity: 0, duration: 0.4, ease: Power3.easeOut })
      .from(p3Ref.current, { y: 10, opacity: 0, duration: 0.4, ease: Power3.easeOut })
      .from(angleRef.current, { y: 0, opacity: 0, duration: 0.4, ease: Power3.easeOut })
  }

  useEffect(() => {
    fadeUp()
  }, [])

  return (
    <Root className='m-auto'>
      <div className='container flex flex-col md:gap-8 justify-center items-center'>
        <Title
          className='disable-select text-md md:text-2xl font-semibold'
          ref={titleRef}
        >
          Phatsanphon Nakaranurak
        </Title>
        {/* <Title
          style={{ color: 'rgb(240,240,240)' }}
          className={`disable-select text-md md:text-2xl font-semibold py-2 px-3 
          bg-[rgb(70,70,70)] text-[rgb(240,240,240)]`}
          ref={titleRef}
        >
          Phatsanphon Nakaranurak
        </Title> */}

        <Paragraph className='text-xl md:text-4xl font-normal'>
          <p ref={p1Ref}>ภัทร์สรรพ์พร นครานุรักษ์</p>
          <p ref={p2Ref}>อายุ 18 ปี ชอบกินของหวานมาก ๆ</p>
          <p ref={p3Ref}>และ สนใจในการทำเว็บ</p>
        </Paragraph>

        <Link to='#about'>
          <AngleDown
            ref={angleRef}
            className='absolute bottom-[64px] text-[32px] hover:text-[rgb(70,70,70)] transition-all animate-bounce'>
            <FontAwesomeIcon icon={faAngleDown} />
          </AngleDown>
        </Link>
      </div>
    </Root>
  )
}

export default Header