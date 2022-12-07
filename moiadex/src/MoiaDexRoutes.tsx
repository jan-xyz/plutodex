import { Route, Router, Routes } from '@solidjs/router'
import { AddMoiaForm } from './AddMoiaForm'
import { MoiaDexView } from './MoiaDexView'

export const MoiaDexRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={MoiaDexView} />
        <Route path="/addMoia" component={AddMoiaForm} />
      </Routes>
    </Router>
  )
}
