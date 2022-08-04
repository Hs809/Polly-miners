import React from 'react'
import amd from '../styles/images/amd.jpg'
import pc1 from '../styles/images/gamingpc1.jpg'
import pc2 from '../styles/images/gamingpc2.jpg'
import intel from '../styles/images/processor.jpg'
import gpu from '../styles/images/gpu.jpg'
import Image from 'next/image'

function SellThings() {
  return (
    <div className="sell-things-container">
        <h1>Polly Miners sell all these things</h1>
        <div className="sell-things-wrapper">
            <div className="first-row">
                <div className="image-container">
                    <Image src={pc1} width={400} height={350} layout="responsive" />
                </div>
                <div className="image-container">
                    <Image src={amd} width={400} height={350}  layout="responsive" />
                </div>
                <div className="image-container">
                    <Image src={intel} width={400} height={350}  layout="responsive" />
                </div>
            </div>
            <div className="second-row">
                <div className="image-container">
                    <Image src={gpu} layout="responsive" />
                </div>
                <div className="image-container">
                    <Image src={pc2} layout="responsive" />
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default SellThings