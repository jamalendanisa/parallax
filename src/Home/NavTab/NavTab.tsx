import { Card } from './components/Card'
import { Dock } from './components/Dock'
import { DockCard } from './components/DockCard'

const GRADIENTS = [
  {src: '/images/logo/email.png', link : 'mailto:anisa.jamalenda@gmail.com' },
  {src: '/images/logo/linkedin.png', link : 'https://www.linkedin.com/in/anisa-jamalenda-43330710b/' },
  {src: '/images/logo/github.png', link : 'https://github.com/jamalendanisa/parallax' },
  {src: '/images/logo/whatsapp.png', link: 'https://wa.me/+628161452516'},
]

export default function NavTab() {
  return (
    <div>
      <Dock>
        {GRADIENTS.map(({src, link}) =>
          <DockCard key={src}>
            <Card src={src} link={link}/>
          </DockCard>
        )}
      </Dock>
    </div>
  )
}
