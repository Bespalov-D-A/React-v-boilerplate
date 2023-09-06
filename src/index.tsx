import ReactDOM from 'react-dom'
import '@app/styles/index.scss'
import '@root/config/i18n'
import { Routing } from '@app/providers/Router'

const rootElement = document.getElementById('root')

ReactDOM.render(<Routing />, rootElement)
