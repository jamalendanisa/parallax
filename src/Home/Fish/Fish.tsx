import * as React from 'react'
import { useScroll, animated } from '@react-spring/web'
import './Fish.css'

export default function Fish() {
  const containerRef = React.useRef<HTMLDivElement>(null!)
  const elements: React.JSX.Element[] = [];
  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
    console.log(scrollYProgress)
    },
    default: {
      immediate: true,
    },
  })

   for (let i = 1; i <= 5; i++) {
    elements.push(
      <div key={i}>
        <img src={`images/sea/fish/${i}.png`} id={`fish${i}`} className="fishes"/>
      </div>
    );
  }

  return (
    <animated.div style={{ left: scrollYProgress }}>
      <div>{elements}</div>
    </animated.div>
  )
}