import React from 'react'
import styled from 'styled-components'
import { Paragraph, Title } from '../template/Typography'

const Root = styled.div`
  background-color: rgb(220,220,220);
  min-height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Works = () => {
  return (
    <Root className='m-auto'>
      <div
        className='container flex flex-col md:flex-row justify-center md:justify-between items-center'
      >
        <div className='flex flex-col w-9/12 md:w-1/2 gap-3'>
          <Title className=''>
            ผลงานของเราเอง
          </Title>
        </div>
      </div>
    </Root>
  )
}

export default Works