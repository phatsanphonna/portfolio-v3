import React from 'react'
import { Helmet } from 'react-helmet'

interface Props {
  title: string;
}

const SEO = ({ title }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' />
    </Helmet>
  )
}

export default SEO
