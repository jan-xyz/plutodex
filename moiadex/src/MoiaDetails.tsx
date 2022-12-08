import { makeAudio } from '@solid-primitives/audio'
import { useParams } from '@solidjs/router'
import { For, JSX } from 'solid-js'
import { css } from 'vite-plugin-inline-css-modules'
import { AddMoiaForm } from './AddMoiaForm'
import { GridContainer } from './MoiaDexGrid'
import {
  decrementMoiaCounter,
  incrementMoiaCounter,
  moiaByIdResource,
  moiaDetailResource,
} from './moiaDexie'
import { Logo } from './MoiaDexView'

const styles = css`
  .grid {
    display: grid;
    justify-items: center;
    gap: 45px;
    margin-top: 15px;
  }
  .info {
    border: 1px solid #000c15;
    border-radius: 10px;
    padding: 5px;
    min-height: 97px;
    aspect-ratio: 1;
  }
  .infoImg {
    border: 1px solid #000c15;
    border-radius: 10px;
    width: 100%;
    min-height: 97px;
    aspect-ratio: 1;
    object-fit: cover;
  }

  .cardGrid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: flex-start;
    align-content: flex-start;
    gap: 15px;
    min-height: 100vh;
  }

  .headline {
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    margin-bottom: 25px;
  }

  .counter {
    display: grid;
    justify-items: center;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 20px;
    grid-template-columns: 63px 200px 63px;
  }

  .counterBox {
    border: 1px solid #000c15;
    border-radius: 10px;
    padding: 5px;
    min-height: 97px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    width: 200px;
    justify-items: center;
    justify-content: center;
    align-content: center;
    align-items: baseline;
    display: grid;
    grid-auto-flow: column;
    gap: 5px;
  }
  .infoButton {
    border: 1px solid #000c15;
    border-radius: 10px;
    padding: 5px;
    width: 63px;
    align-items: center;
    justify-items: center;
    text-align: center;
    display: grid;
    aspect-ratio: 1;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
  }
  .counterNumber {
    font-weight: 700;
    font-size: 32px;
    line-height: 20px;
  }
`

export const CardGrid = (props: { children: JSX.Element }) => {
  return <div class={styles.cardGrid}>{props.children}</div>
}

export const InfoBox = (props: { children: JSX.Element }) => {
  return <div class={styles.info}>{props.children}</div>
}

export const CounterForm = (props: {
  counter: number
  increment: VoidFunction
  decrement: VoidFunction
}) => {
  return (
    <div class={styles.counter}>
      <button
        disabled={props.counter < 1}
        class={styles.infoButton}
        onClick={() => props.decrement()}
      >
        -
      </button>
      <div class={styles.counterBox}>
        Seen <span class={styles.counterNumber}>{props.counter}</span> Times
      </div>
      <button class={styles.infoButton} onClick={props.increment}>
        +
      </button>
    </div>
  )
}

export const MoiaDetails = () => {
  const params = useParams()
  const [moia, { refetch }] = moiaByIdResource(params.id)
  const [details, { refetch: refetchDetails }] = moiaDetailResource(params.id)

  const tagAudio = makeAudio('seen.wav')

  return (
    <div class={styles.grid}>
      <Logo />

      <GridContainer>
        <h1 class={styles.headline}>Pluto {moia()?.label ?? ''}</h1>
        <CounterForm
          counter={moia()?.counter ?? 0}
          increment={async () => {
            console.log('calling this')
            await incrementMoiaCounter(params.id)
            try {
              await tagAudio.play()
            } catch { }
            refetch(params.id)
          }}
          decrement={async () => {
            await decrementMoiaCounter(params.id)
            refetch(params.id)
          }}
        />
        <AddMoiaForm refetch={refetchDetails} id={params.id} />
        <CardGrid>
          <For each={details()}>
            {(detail) => (
              <>
                <img
                  class={styles.infoImg}
                  src={URL.createObjectURL(detail.image)}
                />
              </>
            )}
          </For>
        </CardGrid>
      </GridContainer>
    </div>
  )
}
