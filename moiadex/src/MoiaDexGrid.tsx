import { For } from 'solid-js'
import { css } from 'vite-plugin-inline-css-modules'
import { Moia } from './moiaDexie'
import { MoiaDexItemView } from './MoiaDexItemView'

const GridStyle = css`
  .dexGrid {
    color: hotpink;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
`

export const MoiaDexGrid = (props: { moias: Moia[] }) => {
  return (
    <div class={GridStyle.dexGrid}>
      <For each={props.moias}>
        {(moia) => (
          <div>
            <MoiaDexItemView label={moia.label} counter={moia.counter} />
          </div>
        )}
      </For>
    </div>
  )
}
