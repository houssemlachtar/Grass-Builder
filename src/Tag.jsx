import { Logo } from '@pmndrs/branding'
import { FaGithub } from 'react-icons/fa'

export default function Tag() {
  return (
    <div className="copy">
      <span>
        <a target="_blank" href="https://github.com/houssemlachtar">
          <FaGithub size={40} />
        </a>
      </span>
    </div>
  )
}
