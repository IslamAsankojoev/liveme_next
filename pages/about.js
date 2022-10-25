import React from 'react'
import { About, BannerArea } from "../components";

const AboutUs = () => {
    return (
        <>
            <BannerArea title={'About us'} path={'/about'} />
            <div className="container">
                <About />
            </div>
        </>
    )
}
export default AboutUs;