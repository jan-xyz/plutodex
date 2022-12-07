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
    background: #ffffff;
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
  .sticky {
    position: sticky;
    width: 100%;
    top: 20px;
    z-index: 10;
  }
`
export type SearchBarProps = {
  onChange: Setter<string>
  query: string
}
export const SearchBar = (props: SearchBarProps) => {
  return (
    <div class={styles.sticky}>
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
    </div>
  )
}
