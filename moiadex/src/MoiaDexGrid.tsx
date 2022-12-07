import { A } from '@solidjs/router'
import { For } from 'solid-js'
import { css } from 'vite-plugin-inline-css-modules'
import { Moia } from './moiaDexie'
import { MoiaDexGridItem } from './MoiaDexItemView'

const GridStyle = css`
  .dexGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    background: #F0ECE4;
    border-radius: 35px;
  }
`

export const MoiaDexGrid = (props: { moias: Moia[] }) => {
  return (
    <div class={GridStyle.dexGrid}>
      <For each={props.moias}>
        {(moia) => (
          <A href={`/moia/${moia.id}`}>
            <MoiaDexGridItem label={moia.label} counter={moia.counter} />
          </A>
        )}
      </For>
    </div>
  )
}
