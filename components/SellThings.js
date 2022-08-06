import React, { useState } from "react";
import amd from "../styles/images/amd.jpg";
import pc1 from "../styles/images/gamingpc1.jpg";
import pc2 from "../styles/images/gamingpc2.jpg";
import intel from "../styles/images/processor.jpg";
import gpu from "../styles/images/gpu.jpg";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { Animate } from "react-simple-animate";

function SellThings() {
  const [entered, setEntered] = useState(false);
  return (
    <Parallax onEnter={() => setEntered(true)} >
      <div className="sell-things-container">
        <h1>Polly Miners sell all these things</h1>

        <div className="sell-things-wrapper">
          <div className="first-row">
            <div className="image-container">
              <Animate
                play={entered}
                duration={0.9}
                delay={0.5}
                start={{ opacity: 0, transform: "translateyY(-10px)" }}
                end={{ opacity: 1, transform: "translateyY(0px)" }}
                easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
              >
                <Image alt="sell1" src={pc1} width={400} height={350} layout="responsive" />
              </Animate>
            </div>
            <div className="image-container">
              <Animate
                play={entered}
                duration={0.9}
                delay={0.8}
                start={{ opacity: 0, transform: "translateyY(-10px)" }}
                end={{ opacity: 1, transform: "translateyY(0px)" }}
                easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
              >
                <Image alt="sell2" src={amd} width={400} height={350} layout="responsive" />
              </Animate>
            </div>
            <div className="image-container">
              <Animate
                play={entered}
                duration={0.9}
                delay={1.1}
                start={{ opacity: 0, transform: "translateyY(-10px)" }}
                end={{ opacity: 1, transform: "translateyY(0px)" }}
                easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
              >
                <Image
                alt="sell3"
                  src={intel}
                  width={400}
                  height={350}
                  layout="responsive"
                />
              </Animate>
            </div>
          </div>
          <div className="second-row">
            <div className="image-container">
              <Animate
                play={entered}
                duration={0.9}
                delay={1.4}
                start={{ opacity: 0, transform: "translateyY(-10px)" }}
                end={{ opacity: 1, transform: "translateyY(0px)" }}
                easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
              >
                <Image alt="sell4" src={gpu} layout="responsive" />
              </Animate>
            </div>
            <div className="image-container">
              <Animate
                play={entered}
                duration={0.9}
                delay={1.7}
                start={{ opacity: 0, transform: "translateyY(-10px)" }}
                end={{ opacity: 1, transform: "translateyY(0px)" }}
                easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
              >
                <Image alt="sell5" src={pc2} layout="responsive" />
              </Animate>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default SellThings;
