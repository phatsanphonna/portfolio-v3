import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import styled from "styled-components"

import Header from "../components/Header.component"
import Footer from "../components/Footer.component"
import About from "../components/About.component"
// import Works from "../components/Works.component"
import Contacts from "../components/Contacts.component"
import SEO from "../components/SEO.component"
import Loading from "../components/Loading.component"

const Container = styled.div`
  min-height: 100vh;
  margin: auto;
  visibility: hidden;
`

const Home = () => {
  const appRef = useRef(null)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
    gsap.to(appRef.current, { css: { visibility: 'visible' }, duration: 3 })
  }, [])

  return (
    <>
      <SEO title="Phatsanphon Nakaranurak" />

      <Container ref={appRef}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <About />
            {/* <Works /> */}
            <Contacts />
            <Footer />
          </>
        )}
      </Container>
    </>
  )
}

export default Home