import { useLocation } from 'wouter'
import Icon_back from '@mui/icons-material/ArrowBack'

export
const Btn_back = () => {
  const [_, nav] = useLocation()
  return <button
    onClick={() => {
      nav(-1)
    }}
  >
    <Icon_back />
  </button>
}
