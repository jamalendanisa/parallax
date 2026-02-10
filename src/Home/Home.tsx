import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import NavTab from './NavTab/NavTab'
import Canvas from './Bubbles/bubbles'
import Fish from './Fish/Fish'
import Company from './Company/Company'
import Description from './Description/Description'
import './Home.css'

export default function Home() {

  return (
    <div>
      <NavTab/>
      <Company/>
      <Description/>
      <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
        <ParallaxLayer offset={0} speed={0.5}>
          <div className='animation_layer parallax' id='bg1'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.5}>
          <div className='animation_layer parallax' id='bg2'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2}>
          <div className='animation_layer parallax' id='bg3'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5}>
          <div className='animation_layer parallax' id='bg4'></div>
        </ParallaxLayer>
        <Fish/>
        <ParallaxLayer offset={0} speed={3} horizontal={true}>
          <div className='animation_layer parallax' id='bg5'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.85} speed={0.7}>
          <div className='animation_layer parallax' id='bg11'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.85} speed={1}>
          <div className='animation_layer parallax' id='bg12'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <div className='animation_layer parallax' id='bg13'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.9}>
          <div className='animation_layer parallax' id='bg14'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.7}>
          <div className='animation_layer parallax' id='bg15'></div>
          <Canvas className="canvas"/>    
        </ParallaxLayer>
     </Parallax>
    </div>
  );
};