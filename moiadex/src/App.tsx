import type { Component } from 'solid-js'
import { MoiaDexRoutes } from './MoiaDexRoutes'
import { useRegisterSW } from 'virtual:pwa-register/solid'
import './reset.css'
const intervalMS = 60 * 60 * 1000

useRegisterSW({
  onRegistered(r) {
    r &&
      setInterval(() => {
        r.update()
        console.info('update')
      }, intervalMS)
  },
})

const App: Component = () => {
  return (
    <>
      <MoiaDexRoutes />
    </>
  )
}

export default App
