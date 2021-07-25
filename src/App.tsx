import './styles.css'
import IMAGE from './download.png'
import LOGO from './logo.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  return (
    <>
      <h1>
        {' '}
        Edited React Typescript Welcome {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <img src={IMAGE} alt="REACT LOGO" width="300" height="200" />
      <img src={LOGO} alt="REACT LOGO" width="300" height="200" />
      <ClickCounter />
    </>
  )
}
