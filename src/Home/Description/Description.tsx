import Shuffle from './Shuffle';

export default function Description() {
  return (
    <div className="shuffle-cont">
      <Shuffle
        text="Under the sea"
        shuffleDirection="up"
        duration={1.5}
        animationMode="evenodd"
        shuffleTimes={1}
        ease="back.out(1.1)"
        stagger={0.13}
        threshold={0.1}
        triggerOnce={true}
        triggerOnHover
        respectReducedMotion={true}
        loop
        loopDelay={2} 
        onShuffleComplete={undefined} 
        colorFrom={undefined} 
        colorTo={undefined}
      />
    </div>
  )
}