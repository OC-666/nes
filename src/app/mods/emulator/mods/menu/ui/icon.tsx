import { FC, CSSProperties } from 'react'

interface Props_icon {
  style: CSSProperties
  onClick: () => void
}

export
const Icon: FC<Props_icon> = props =>
  <svg xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    style={props.style}
    onClick={props.onClick}
  >
    <rect x="0" y="4" width="100%" height="2" fill="currentColor" />
    <rect x="0" y="11" width="100%" height="2" fill="currentColor" />
    <rect x="0" y="18" width="100%" height="2" fill="currentColor" />
  </svg>
