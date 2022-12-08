import { Route, Router, Routes } from '@solidjs/router'
import { MoiaDetails } from './MoiaDetails'
import { MoiaDexView } from './MoiaDexView'

export const MoiaDexRoutes = () => {
  return (
    <Router base={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" component={MoiaDexView} />
        <Route path="/moia/:id" component={MoiaDetails} />
      </Routes>
    </Router>
  )
}
