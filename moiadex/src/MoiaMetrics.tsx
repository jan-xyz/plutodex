import { css } from 'vite-plugin-inline-css-modules'
import { Moia } from './moiaDexie'

const Styles = css`
  .box {
    height: 40px;
    width: 100%;
    background: #f0ece4;
    border-radius: 100px;
    padding: 5px;
  }

  .progresswrapper {
    margin: 6px 20px;
  }

  .progress {
    height: 30px;
    background: white;
    border-radius: 100px;
  }

  .metrics {
    width: 100%;
  }

  .numbers {
    margin: 0px 20px;
    display: grid;
    grid-template-columns: max-content max-content max-content 48px;
    align-items: end;
    gap: 10px;
  }

  .collected {
    font-size: 36px;
    font-weight: 700;
  }

  .slash {
    font-size: 36px;
    font-weight: 300;
  }

  .total {
    font-size: 24px;
    font-weight: 300;
  }

  .text {
    font-size: 14px;
    font-weight: 500;
    color: #666d73;
  }
`

export const Metrics = (props: { moias: Moia[] }) => {
  const calculateMetrics = () => {
    const total = props.moias.length
    const collected = props.moias.filter((moia) => moia.counter > 0).length
    const progress = (collected / total) * 100

    return { total, collected, progress }
  }
  return (
    <div class={Styles.metrics}>
      <div class={Styles.numbers}>
        <div class={Styles.collected}>{calculateMetrics().collected}</div>
        <div class={Styles.slash}>/</div>
        <div class={Styles.total}>{calculateMetrics().total}</div>
        <div class={Styles.text}>PLUTOS SEEN</div>
      </div>
      <div class={Styles.progresswrapper}>
        <ProgressBar progress={calculateMetrics().progress} />
      </div>
    </div>
  )
}

export const ProgressBar = (props: { progress: number }) => {
  return (
    <div class={Styles.box}>
      <div class={Styles.progress} style={{ width: `${props.progress}%` }}>
        {' '}
      </div>
    </div>
  )
}
