import { For } from 'solid-js'
import { AddMoiaFormLink } from './AddMoiaForm'
import { moiaResource } from './moiaDexie'
import { MoiaDexItemView } from './MoiaDexItemView'

export const MoiaDexView = () => {
  const [moias, { refetch }] = moiaResource()

  return (
    <div>
      <button type="button" onClick={refetch}>
        refetch
      </button>
      <AddMoiaFormLink />
      <For each={moias()}>
        {(moia) => (
          <div>
            <MoiaDexItemView label={moia.label} counter={moia.counter}/>
          </div>
        )}
      </For>
    </div>
  )
}
