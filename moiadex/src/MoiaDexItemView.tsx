import { css } from 'vite-plugin-inline-css-modules'
import { Moia } from './moiaDexie'

const Style = css`
  .itemContainer {
    position: relative;
    width: 97.95px;
    height: 97.83px;
    border: 1px solid #000c15;
    border-radius: 10px;
    overflow: hidden;
  }

  .itemContainerPride {
    background: url(/pride_bg.png);
  }

  .itemContainerChristmas {
    background: url(/christmas_bg.png);
  }

  .label {
    position: absolute;
    left: 35.55%;
    right: 39.45%;
    top: 0%;
    bottom: -3.45%;

    font-family: 'Apercu';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    /* identical to box height */

    text-align: center;
    letter-spacing: -0.408px;

    /* MOIA Black / 100 */

    color: #000c15;
  }

  .avatarSeen {
    position: absolute;
    left: 12%;
    right: 12%;
    top: 36%;
    bottom: 26%;
    height: 37.17529296875px;
    width: 74.44102478027344px;
    background: url(/pluto.png);
  }

  .avatarUnseen {
    position: absolute;
    left: 31%;
    right: 31%;
    top: 34%;
    bottom: 14%;
    opacity: 0.3;
    background: url(/lock.png);
  }
  .highlight {
    box-sizing: border-box;
    position: absolute;
    width: 115px;
    height: 36px;
    bottom: -25px;
    right: -40px;
    background: #e6aa33;
    border: 1px solid #000c15;
    transform: rotate(-45deg);
  }
  .counter {
    position: absolute;
    width: 9px;
    height: 12px;
    bottom: 4px;
    right: 8px;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    letter-spacing: -0.408px;
    color: #000c15;
  }
`

const getContainerClass = (options: {
  seenBefore: boolean
  type: Moia['type']
}) => {
  const baseClass = Style.itemContainer
  if (!options.seenBefore) return baseClass

  switch (options.type) {
    case 'pride':
      return `${baseClass} ${Style.itemContainerPride}`
    case 'christmas':
      return `${baseClass} ${Style.itemContainerChristmas}`
    case 'plain':
    default:
      return baseClass
  }
}

export const MoiaDexGridItem = (props: {
  label: string
  counter: number
  type: Moia['type']
}) => {
  const seenBefore = props.counter > 0
  const containerClass = getContainerClass({ seenBefore, type: props.type })
  const avatarClass = seenBefore ? Style.avatarSeen : Style.avatarUnseen
  return (
    <div class={containerClass}>
      <div class={Style.label}>{props.label}</div>
      <div class={avatarClass}></div>
      {props.counter > 0 && <div class={Style.highlight}></div>}
      {props.counter > 0 && <div class={Style.counter}>x{props.counter}</div>}
    </div>
  )
}
