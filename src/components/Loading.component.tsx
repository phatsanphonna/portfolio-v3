import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { gsap, Power3 } from 'gsap'
import Logo from './Logo'

const Root = styled.div`
  background-color: var(--gray-70);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Loading: React.FC = () => {
  const logoRef = useRef(null)
  const rootRef = useRef(null)

  useEffect(() => {
    gsap.timeline()
      .from(logoRef.current, { css: { opacity: 0 }, duration: 1, ease: Power3.easeOut })
      .to(logoRef.current, { css: { opacity: 0 }, duration: 1, delay: 0.5, ease: Power3.easeOut })
      .to(rootRef.current, { css: { backgroundColor: 'rgb(240,240,240)' }, duration: 0.5, ease: Power3.easeOut })

    return () => {
      console.log('Goodbye Loading');
      gsap.killTweensOf(logoRef.current)
    }
  }, [])
  return (
    <Root ref={rootRef}>
      <div ref={logoRef}
        className='font-semibold w-4/5 md:w-2/5'
      >
        <Logo color='rgb(240,240,240)' />
      </div>
    </Root>
  )
}

export default Loading
