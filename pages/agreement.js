import React from 'react'
import { Agreement, BannerArea } from '../components/index.js'

const agreement = () => {
  return (
    <>
      <BannerArea title={'User agreements'} path={'/agreement'} />
      <div className="container">
        <Agreement />
      </div>
    </>
  )
}

export default agreement