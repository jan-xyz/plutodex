import { For, JSX } from 'solid-js'
import { css } from 'vite-plugin-inline-css-modules'
import { Moia, tagMoiaAsSeen } from './moiaDexie'
import { MoiaDexGridItem } from './MoiaDexItemView'
import { makeAudio } from '@solid-primitives/audio'
import { useNavigate } from '@solidjs/router'

const GridStyle = css`
  .dexGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 98px);
    justify-content: center;
    gap: 20px;
    width: 100%;
    min-height: calc(100vh - 400px);
  }
  .container {
    background: #f0ece4;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    width: 100%;
    padding: 35px 25px;
    display: grid;
    gap: 40px;
  }
`

export const GridContainer = (props: { children: JSX.Element }) => {
  return <div class={GridStyle.container}>{props.children}</div>
}

export const MoiaDexGrid = (props: { moias: Moia[] }) => {
  const tagAudio = makeAudio('/seen.wav')
  const navigate = useNavigate()

  return (
    <GridContainer>
      <div class={GridStyle.dexGrid}>
        {!props?.moias && <p> Loading Moias...</p>}
        <For each={props.moias}>
          {(moia) => (
            <div
              onClick={async () => {
                try {
                  await tagAudio.play()
                } catch { }
                navigate(`/moia/${moia.id}`)
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
    </GridContainer>
  )
}
