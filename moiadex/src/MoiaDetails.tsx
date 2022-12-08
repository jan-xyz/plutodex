import { makeAudio } from '@solid-primitives/audio'
import { useNavigate, useParams } from '@solidjs/router'
import { createEffect, JSX } from 'solid-js'
import { css } from 'vite-plugin-inline-css-modules'
import { AddMoiaForm } from './AddMoiaForm'
import { GridContainer } from './MoiaDexGrid'
import {
  decrementMoiaCounter,
  incrementMoiaCounter,
  moiaByIdResource,
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
    display: grid;
    grid-template-rows: 1fr min-content min-content;
  }
  .infoImg {
    border: 1px solid #000c15;
    border-radius: 10px;
    width: 100%;
    min-height: 97px;
    aspect-ratio: 1;
    object-fit: cover;
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
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    min-height: calc(100vh - 570px);
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
  const navigate = useNavigate()
  const [moia, { refetch }] = moiaByIdResource(params.id)

  const tagAudio = makeAudio('/seen.wav')
  const getImageBlob = () => {
    return moia()?.image ? URL.createObjectURL(moia()?.image) : undefined
  }

  let imgRef: HTMLImageElement | undefined
  createEffect(() => {
    if (imgRef && moia()?.image) {
      const src = getImageBlob()
      imgRef.src = src
    }
  })
  return (
    <div class={styles.grid}>
      <div
        onClick={() => {
          navigate('/')
        }}
      >
        <Logo />
      </div>
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
            metric={
              moia()?.date
                ? new Date(moia().date).toLocaleString().split(',')[0]
                : ''
            }
            icon={
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="21" height="21" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_40_1362"
                      transform="scale(0.00520833)"
                    />
                  </pattern>
                  <image
                    id="image0_40_1362"
                    width="192"
                    height="192"
                    xlink:href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            }
          />
          <img class={styles.infoImg} ref={(ref) => (imgRef = ref)} />
        </div>
        <AddMoiaForm refetch={refetch} id={params.id} />
      </GridContainer>
    </div>
  )
}
