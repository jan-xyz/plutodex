import { For } from 'solid-js'
import { css } from 'vite-plugin-inline-css-modules'
import { Moia, tagMoiaAsSeen } from './moiaDexie'
import { MoiaDexGridItem } from './MoiaDexItemView'

const GridStyle = css`
  .dexGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 98px);
    justify-content: center;
    gap: 20px;
    background: #f0ece4;
    border-radius: 35px;
    width: 100%;
    padding: 35px 25px;
  }
`

export const MoiaDexGrid = (props: { moias: Moia[]; refetch }) => {
  return (
    <div class={GridStyle.dexGrid}>
      {!props?.moias && <p> Loading Moias...</p>}
      <For each={props.moias}>
        {(moia) => (
          <div
            onClick={async () => {
              await tagMoiaAsSeen(moia.id.toString())
              props.refetch()
            }}
          >
            <MoiaDexGridItem
              label={moia.id.toString()}
              counter={moia.counter}
            />
          </div>
        )}
      </For>
    </div>
  )
}
