import { SearchBar } from './components/SearchBar'
import { MoiaDexGrid } from './MoiaDexGrid'
import { moiaResource } from './moiaDexie'
import { createEffect, createSignal } from 'solid-js'
import { css } from 'vite-plugin-inline-css-modules'
import { Metrics } from './MoiaMetrics'

const styles = css`
  .wrapper {
    display: grid;
    gap: 45px;
    justify-items: center;
  }
  .icon {
    margin-top: 65px;
  }

  .plutoball {
    animation: shake 1.15s cubic-bezier(.36,.07,.19,.97) 3;
    transform-origin: center;
  }

  @keyframes shake {
    0 { transform: translate(0, 0) rotate(0); }
    20% { transform: translate(-10px, 0) rotate(-20deg); }
    30% { transform: translate(10px, 0) rotate(20deg); }
    50% { transform: translate(-10px, 0) rotate(-10deg); }
    60% { transform: translate(10px, 0) rotate(10deg); }
    100% { transform: translate(0, 0) rotate(0); }
  }
`

export const Logo = () => {
  const [animated, setAnimated] = createSignal(true)
  createEffect(() => {
    setInterval(() => {
      setAnimated(!animated())
    }, 1000 * 4)
  })
  return (
    <svg
      class={styles.icon}
      width="219"
      height="55"
      viewBox="0 0 219 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M14.8848 38.656C22.8928 38.656 27.1488 33.896 27.1488 26.728C27.1488 19.56 22.8928 14.8 14.8848 14.8H0.100814V54H7.38081V38.656H14.8848ZM7.38081 31.936V21.52H14.6048C18.0208 21.52 19.7568 23.256 19.7568 26.728C19.7568 30.2 18.0208 31.936 14.6048 31.936H7.38081ZM32.1614 54H39.1054V14.352H32.1614V54ZM70.3243 25.776H63.3803V37.032C63.3803 44.144 60.5243 48.512 56.9403 48.512C54.2523 48.512 52.9083 46.944 52.9083 43.864V25.776H45.9643V45.936C45.9643 51.48 49.4363 54.448 54.6443 54.448C58.1723 54.448 61.0843 52.768 63.3803 49.464V54H70.3243V25.776ZM92.9861 47.84C92.1461 48.288 91.2501 48.512 90.2981 48.512C87.8341 48.512 86.6021 47.28 86.6021 43.92V31.712H94.0501V25.776H86.6021V14.352L79.6581 18.72V25.776H75.2901V31.712H79.6581V44.032C79.6581 50.92 83.5221 54.448 90.0181 54.448C91.6421 54.448 93.1541 54.112 94.6101 53.44L92.9861 47.84ZM101.802 50.36C104.378 53.104 107.85 54.448 112.274 54.448C116.698 54.448 120.17 53.104 122.746 50.36C125.322 47.616 126.61 44.088 126.61 39.888C126.61 35.688 125.322 32.216 122.746 29.472C120.17 26.728 116.698 25.328 112.274 25.328C107.85 25.328 104.378 26.728 101.802 29.472C99.2264 32.216 97.9384 35.688 97.9384 39.888C97.9384 44.088 99.2264 47.616 101.802 50.36ZM107.122 33.784C108.41 32.104 110.09 31.264 112.274 31.264C114.458 31.264 116.138 32.104 117.426 33.784C118.714 35.408 119.33 37.48 119.33 39.888C119.33 42.296 118.714 44.368 117.426 46.048C116.138 47.672 114.458 48.512 112.274 48.512C110.09 48.512 108.41 47.672 107.122 46.048C105.834 44.368 105.218 42.296 105.218 39.888C105.218 37.48 105.834 35.408 107.122 33.784ZM144.262 25.328C135.974 25.328 131.382 30.984 131.382 39.888C131.382 48.792 135.974 54.448 144.262 54.448C147.454 54.448 150.198 52.712 151.094 51.088V54H158.038V14.352H151.094V28.352C149.806 26.728 147.006 25.328 144.262 25.328ZM140.51 33.56C141.742 32.048 143.31 31.264 145.214 31.264C147.118 31.264 148.686 32.048 149.862 33.56C151.094 35.072 151.71 37.144 151.71 39.888C151.71 42.632 151.094 44.76 149.862 46.272C148.686 47.784 147.118 48.512 145.214 48.512C143.31 48.512 141.742 47.728 140.51 46.216C139.278 44.704 138.662 42.576 138.662 39.888C138.662 37.2 139.278 35.072 140.51 33.56ZM190.553 39.272C190.553 36.08 189.545 32.776 187.529 30.032C185.513 27.176 181.873 25.328 177.393 25.328C167.705 25.328 163.841 33.168 163.841 39.888C163.841 46.608 167.705 54.448 177.393 54.448C183.553 54.448 187.809 51.704 190.217 46.216L184.617 44.144C182.937 47.056 180.641 48.512 177.785 48.512C173.753 48.512 171.289 45.544 171.121 42.128H190.553V39.272ZM177.393 31.264C180.641 31.264 182.657 33.056 183.441 36.64H171.289C171.793 33.672 174.089 31.264 177.393 31.264ZM205.42 33.112L200.828 25.776H193.548L201.724 38.936L192.372 54H199.652L205.42 44.816L211.188 54H218.468L209.116 38.936L217.292 25.776H210.012L205.42 33.112Z"
        fill="black"
      />
      <rect class={animated() ? styles.plutoball : ''} x="100" y="29" width="25" height="23" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image0_0_1"
            transform="translate(0 -0.0434783) scale(0.00520833 0.00566123)"
          />
        </pattern>
        <image
          id="image0_0_1"
          width="192"
          height="192"
          xlink:href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export const MoiaDexView = () => {
  const [query, setQuery] = createSignal('')
  const [moias] = moiaResource()
  const getFilteredPlutos = () => {
    return query().length
      ? moias().filter((moia) => moia.label.includes(query()))
      : moias()
  }

  return (
    <div class={styles.wrapper}>
      <Logo />
      <SearchBar query={query()} onChange={setQuery} />
      <Metrics moias={moias() ?? []} />
      <MoiaDexGrid moias={getFilteredPlutos()} />
    </div>
  )
}
