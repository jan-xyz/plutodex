import { Setter } from 'solid-js'
import { css } from 'vite-plugin-inline-css-modules'

const SearchIcon = (props: { class?: string }) => {
  return (
    <svg
      class={props.class}
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3ZM0 10.5C0 4.70101 4.70101 0 10.5 0C16.299 0 21 4.70101 21 10.5C21 16.299 16.299 21 10.5 21C4.70101 21 0 16.299 0 10.5Z"
        fill="#000C15"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.1893 16.1893C16.7751 15.6036 17.7249 15.6036 18.3107 16.1893L26.5607 24.4393C27.1464 25.0251 27.1464 25.9749 26.5607 26.5607C25.9749 27.1464 25.0251 27.1464 24.4393 26.5607L16.1893 18.3107C15.6036 17.7249 15.6036 16.7751 16.1893 16.1893Z"
        fill="#000C15"
      />
      <rect x="4.5" y="4.5" width="12" height="12" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image0_1_29" transform="scale(0.00520833)" />
        </pattern>
        <image
          id="image0_1_29"
          width="192"
          height="192"
          xlink:href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

const styles = css`
  .input {
    border: 1px solid #000000;
    border-radius: 15px;
    height: 50px;
    font-size: 20px;
    padding-left: 10px;
    padding-right: 40px;
    width: 100%;
  }
  .input::placeholder {
    color: #8c9296;
  }
  .wrapper {
    position: relative;
    width: 100%;
    padding: 0 20px;
  }
  .icon {
    position: absolute;
    right: 30px;
    top: 12px;
  }
`
export type SearchBarProps = {
  onChange: Setter<string>
  query: string
}
export const SearchBar = (props: SearchBarProps) => {
  return (
    <div class={styles.wrapper}>
      <input
        class={styles.input}
        type="text"
        placeholder="Pluto Label..."
        value={props.query}
        onInput={(e) => props.onChange(e.currentTarget.value)}
      />
      <SearchIcon class={styles.icon} />
    </div>
  )
}
