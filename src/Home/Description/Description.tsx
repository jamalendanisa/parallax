import Shuffle from './Shuffle';

interface DescProps {
  text: string
}

export default function Description({ text }: DescProps) {
  return (
    <div className="shuffle-cont">
      <Shuffle
        text={text}
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