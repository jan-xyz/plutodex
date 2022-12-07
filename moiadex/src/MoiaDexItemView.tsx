import { css } from 'vite-plugin-inline-css-modules'

const Style = css`
  .itemContainer {
    position: relative;
    width: 97.95px;
    height: 97.83px;
    border: 1px solid #000c15;
    border-radius: 10px;
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
`

export const MoiaDexGridItem = (props: { label: string; counter: number }) => {
  return (
    <div class={Style.itemContainer}>
      <div class={Style.label}>{props.label}</div>
      <div
        class={props.counter > 0 ? Style.avatarSeen : Style.avatarUnseen}
      ></div>
    </div>
  )
}
