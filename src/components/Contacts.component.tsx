import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { LinkURL, Paragraph, Title } from '../template/Typography'
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Root = styled.div`
  background-color: rgb(220,220,220);
  min-height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Works = () => {
  gsap.registerPlugin(ScrollTrigger);

  const rootRef = useRef(null)

  const titleRef = useRef(null)
  const paragraphRef = useRef(null)
  const socialMediaRef = useRef(null)

  const animateStart = () => {
    return gsap.timeline({
      scrollTrigger: {
        trigger: rootRef.current,
        start: "top top+=10",
        end: "bottom center",
        scrub: false,
      }
    })
      .from(titleRef.current, { y: 40, opacity: 0, duration: 0.6, ease: Power3.easeOut })
      .from(paragraphRef.current, { y: 20, opacity: 0, duration: 0.4, ease: Power3.easeOut })
      .from(socialMediaRef.current, { y: 20, opacity: 0, duration: 0.4, ease: Power3.easeOut })
  }

  useEffect(() => {
    console.log(rootRef.current)
    console.log(titleRef.current)
    console.log(paragraphRef.current)
    console.log(socialMediaRef.current)
    animateStart()
  }, [])
  return (
    <Root className='m-auto' ref={rootRef}>
      <div
        className='container flex flex-col justify-center items-center'
      >
        <div className='w-9/10 flex flex-col justify-center items-center gap-14'>
          <div ref={titleRef}>
            <Title >
              ต้องการคุยกับเราใช่ไหม
            </Title>
          </div>

          <div ref={paragraphRef}>
            <Paragraph className='text-center text-sm md:text-[20px] font-normal' >
              <>
                ถ้าอยากคุยกับเราจริง ๆ ก็ลองทักอีเมลมาหาเรา หรือไม่ก็ ทักเฟสบุ๊คมาหาเราเลยก็ได้นะ
                <br />เราต้อนรับทุกคนเสมอเลย ส่วนใครที่เป็น <LinkURL url='https://www.youtube.com/watch?v=j5xleWfZEa0'>WIZ*ONE </LinkURL>
                เราอยากคุยมาก ๆ เลย
              </>
            </Paragraph>
          </div>

          <div className='flex flex-row justify-center items-center gap-7' ref={socialMediaRef}>
            <a
              href='mailto:phatsanphon2004@outlook.com'
              className={
                `text-[rgb(70,70,70)] hover:text-[rgb(190,190,190)]
            hover:bg-[rgb(70,70,70)] hover:py-1 hover:px-2 transition-all text-4xl`}>
              <FontAwesomeIcon
                icon={faEnvelope} />
            </a>

            <a
              href='https://facebook.com/SSUNIIE12'
              target='_blank'
              rel="noopener noreferrer"
              className={
                `text-[rgb(70,70,70)] hover:text-[rgb(190,190,190)]
            hover:bg-[rgb(70,70,70)] hover:py-2 hover:px-2 transition-all text-4xl`}>
              <FontAwesomeIcon
                icon={faFacebook} />
            </a>

          </div>
        </div>
      </div>
    </Root>
  )
}

export default Works