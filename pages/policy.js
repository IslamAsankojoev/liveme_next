import { BannerArea, Policy } from 'components/index.js';
import React from 'react'

export default function PolicyPage() {
  return (
    <>
      <BannerArea title={'Privacy Policy'} path={'/policy'} />
      <div className="container">
        <Policy />
      </div>
    </>
  )
}