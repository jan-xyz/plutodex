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
    background: #fcf7eb;
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
    grid-template-columns: 63px max-content 63px;
  }

  .counterBox {
    border: 1px solid #000c15;
    border-radius: 10px;
    padding: 5px;
    min-height: 97px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    max-width: 250px;
    min-width: 150px;
    justify-items: center;
    justify-content: center;
    align-content: center;
    align-items: baseline;
    display: grid;
    grid-auto-flow: column;
    gap: 5px;
    background: #fcf7eb;
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
    background: #fcf7eb;
  }
  .counterNumber {
    font-weight: 700;
    font-size: 32px;
    line-height: 20px;
  }
  .metricText {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    wite-space: nowrap;
  }
  .metricGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 25px;
  }
  .metricLogo {
    justify-items: flex-end;
    display: grid;
  }
`

export const CardGrid = (props: { children: JSX.Element }) => {
  return <div class={styles.cardGrid}>{props.children}</div>
}

export const InfoBox = (props: { children: JSX.Element }) => {
  return <div class={styles.info}>{props.children}</div>
}

export const MetricBox = (props: {
  icon: JSX.Element
  metric: JSX.Element
  label: JSX.Element
}) => {
  return (
    <InfoBox>
      <div class={styles.metricLogo}>{props.icon}</div>
      <div class={styles.metricText}>{props.metric}</div>
      <div class={styles.metricLabel}>{props.label}</div>
    </InfoBox>
  )
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

  const tagAudio = makeAudio('/seen.wav')
  const getImageBlob = () => {
    const imageUrl = URL.createObjectURL(moia()?.image)
    return imageUrl ? imageUrl : undefined
  }

  return (
    <div class={styles.grid}>
      <Logo />

      <GridContainer>
        <h1 class={styles.headline}>Pluto {moia()?.label ?? ''}</h1>
        <CounterForm
          counter={moia()?.counter ?? 0}
          increment={async () => {
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
        <div class={styles.metricGrid}>
          <MetricBox
            label={
              <>
                SEEN <br /> LAST
              </>
            }
            metric="2 days ago"
            icon={<></>}
          />
          <MetricBox label="SEEN LAST" metric="2 days ago" icon={<></>} />
        </div>
        <AddMoiaForm refetch={refetch} id={params.id} />
      </GridContainer>
    </div>
  )
}
