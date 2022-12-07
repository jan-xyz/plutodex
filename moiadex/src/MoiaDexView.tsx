import { For } from 'solid-js'
import { moiaResource } from './moiaDexie'

export const MoiaDexView = () => {
  const [moias, { refetch }] = moiaResource()

  return (
    <div>
      <button type="button" onClick={refetch}>
        refetch
      </button>
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
