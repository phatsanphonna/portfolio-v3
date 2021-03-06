import { faSquareFull } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { LinkURL, Paragraph, Title } from '../template/Typography'

import { StaticImage } from 'gatsby-plugin-image'
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Root = styled.div`
  background-color: rgb(230,230,230);
  min-height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImgDiv = styled.div`
  box-shadow: 10px 10px rgb(110,110,110);
  filter: grayscale(100%);
`

const techs = ['JavaScript (ES6)', 'TypeScript', 'React', 'Vue.js', 'Node.js', 'Python']

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const rootRef = useRef(null)

  const imgContainerRef = useRef(null)

  const TitleRef = useRef(null)
  const Paragraph1Ref = useRef(null)
  const Paragraph2Ref = useRef(null)
  const Paragraph3Ref = useRef(null)
  const Paragraph4Ref = useRef(null)
  const Paragraph5Ref = useRef(null)

  const handleImgMouseOver = () => (
    gsap.to(imgContainerRef.current, 0.4, {
      ease: Power3.easeOut, css: {
        boxShadow: '0px 0px rgb(110,110,110)',
        filter: 'grayscale(0%)'
      }
    })
  )

  const handleImgMouseDown = () => (
    gsap.to(imgContainerRef.current, 0.4, {
      ease: Power3.easeOut,
      css: {
        boxShadow: '10px 10px rgb(110,110,110)',
        filter: 'grayscale(100%)'
      }
    })
  )

  const animateStart = () => {
    return gsap.timeline({
      scrollTrigger: {
        trigger: rootRef.current,
        start: "top top+=10",
        end: "bottom center",
        scrub: false,
      }
    })
      .from(TitleRef.current, { y: 40, opacity: 0, duration: 0.6, ease: Power3.easeOut })
      .from(Paragraph1Ref.current, { y: 20, opacity: 0, duration: 0.4, ease: Power3.easeOut })
      .from(Paragraph2Ref.current, { y: 20, opacity: 0, duration: 0.4, ease: Power3.easeOut })
      .from(Paragraph3Ref.current, { y: 20, opacity: 0, duration: 0.4, ease: Power3.easeOut })
      .from(Paragraph4Ref.current, { y: 20, opacity: 0, duration: 0.4, ease: Power3.easeOut })
      .from(Paragraph5Ref.current, { y: 20, opacity: 0, duration: 0.4, ease: Power3.easeOut })
      .from(imgContainerRef.current, { y: 40, opacity: 0, duration: 0.6, ease: Power3.easeOut })
  }

  useEffect(() => {
    animateStart()
  }, [])

  return (
    <React.Fragment>
      <Root className='m-auto' id='about' ref={rootRef}>
        <div
          className='container flex flex-col md:flex-row justify-center md:justify-between items-center p-5 xl:px-10 gap-7 md:gap-0'
        >
          <div className='flex flex-col w-9/12 md:w-5/12 gap-4'>
            <div ref={TitleRef}>
              <Title>
                ??????????????????????????????????????????????????????
              </Title>
            </div>

            <div className='flex flex-col gap-2'>
              <div ref={Paragraph1Ref}>
                <Paragraph>
                  ????????????????????????????????????????????????????????? ????????????????????????????????? (?????????) ???????????? 18 ?????? ????????????????????????????????????????????????????????? ??? ???????????????????????????????????????????????? ???????????????????????????????????????????????????????????????
                  ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????
                </Paragraph>
              </div>

              <div ref={Paragraph2Ref}>
                <Paragraph>
                  ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? 6 ????????????????????????????????????????????????-????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                  ??????????????????????????????????????????????????????????????????????????????????????? ???????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????
                  ??????????????????????????????????????????????????????????????? ????
                </Paragraph>
              </div>

              <div ref={Paragraph3Ref}>
                <Paragraph>
                  <>
                    ??????????????????????????????????????????????????????????????????????????? (???.??????????????????????????????) ????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????? Valorant ?????????
                    ??????????????????????????????????????????????????????????????? ????????? EDM ????????? ??? ???????????? ????????????????????????{' '}
                    <LinkURL url='https://www.youtube.com/watch?v=G8GaQdW2wHc'>IZ*ONE</LinkURL>
                    {' '}????????? ????????????????????????{' '}
                    <LinkURL url='https://gfycat.com/abandonedcommoncougar-kim-chaewon-iz-one-cute-kpop-aijeuweon-gimcaeweon'>
                      ????????????????????????</LinkURL> ????????????
                  </>
                </Paragraph>
              </div>

              <div ref={Paragraph4Ref}>
                <Paragraph>
                  ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                </Paragraph>
              </div>

              <div ref={Paragraph5Ref}>
                <Paragraph>
                  <ul className='grid grid-cols-2'>
                    {techs.map((tech, index) => (
                      <li key={index} className='flex flex-row items-center gap-3'>
                        <FontAwesomeIcon icon={faSquareFull} className='text-[4px] text-[rgb(50,50,50)]' />
                        <span className='hover:translate-x-2 transition-all'>
                          {tech}
                        </span>
                      </li>
                    )
                    )}
                  </ul>
                </Paragraph>
              </div>
            </div>
          </div>

          <ImgDiv
            onMouseOver={handleImgMouseOver} onMouseOut={handleImgMouseDown}
            ref={imgContainerRef}
          >
            <StaticImage
              alt='?????????????????????????????????'
              className='disable-select h-40 md:h-[650px]'
              src='../images/pfp.jpg'
              placeholder='dominantColor'
              quality={75}
              style={{
                aspectRatio: 'auto 9 / 16',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} />
          </ImgDiv>
        </div>
      </Root>
    </React.Fragment >
  )
}

export default About