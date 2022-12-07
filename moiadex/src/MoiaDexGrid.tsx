import { For } from 'solid-js'
import { css } from 'vite-plugin-inline-css-modules'
import { Moia, tagMoiaAsSeen } from './moiaDexie'
import { MoiaDexGridItem } from './MoiaDexItemView'
import { makeAudio } from '@solid-primitives/audio'

const GridStyle = css`
  .dexGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 98px);
    justify-content: center;
    gap: 20px;
    background: #f0ece4;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    width: 100%;
    padding: 35px 25px;
    min-height: calc(100vh - 400px);
  }
`

export const MoiaDexGrid = (props: { moias: Moia[]; refetch }) => {
  const tagAudio = makeAudio("/seen.wav");

  return (
    <div class={GridStyle.dexGrid}>
      {!props?.moias && <p> Loading Moias...</p>}
      <For each={props.moias}>
        {(moia) => (
          <div
            onClick={async () => {
              await tagMoiaAsSeen(moia.id.toString())
              await tagAudio.play()
              props.refetch()
            }}
          >
            <MoiaDexGridItem
              label={moia.id.toString()}
              counter={moia.counter}
              type={moia.type}
            />
          </div>
        )}
      </For>
    </div>
  )
}
