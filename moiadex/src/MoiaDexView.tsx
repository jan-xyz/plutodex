import { For } from 'solid-js'
import { AddMoiaFormLink } from './AddMoiaForm'
import { moiaResource } from './moiaDexie'

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
            {moia.label} {moia.counter}
          </div>
        )}
      </For>
    </div>
  )
}
