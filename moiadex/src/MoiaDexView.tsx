import { AddMoiaFormLink } from './AddMoiaForm'
import { MoiaDexGrid } from './MoiaDexGrid'
import { moiaResource } from './moiaDexie'

export const MoiaDexView = () => {
  const [moias, { refetch }] = moiaResource()

  return (
    <div>
      <button type="button" onClick={refetch}>
        refetch
      </button>
      <AddMoiaFormLink />
      <MoiaDexGrid moias={moias()}/>
    </div>
  )
}
