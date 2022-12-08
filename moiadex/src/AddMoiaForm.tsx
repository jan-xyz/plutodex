import { MoiaDetails, saveMoiaDetailsImage } from './moiaDexie'
import { css } from 'vite-plugin-inline-css-modules'

const styles = css`
  .input {
    display: none;
  }

  .button {
    border: 1px solid #000c15;
    border-radius: 10px;
    padding: 5px;
    align-items: center;
    justify-items: center;
    text-align: center;
    display: grid;
    aspect-ratio: 1;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
  }
`

const fileToBlob = (file: File): Promise<Blob> => {
  return new Promise((resolve) => {
    const fr = new FileReader()
    fr.readAsArrayBuffer(file)
    fr.onload = () => {
      resolve(new Blob([fr.result]))
    }
  })
}

export const AddMoiaForm = (props: {
  id: string
  refetch: (info: unknown) => Promise<MoiaDetails[]> | MoiaDetails[]
}) => {
  let inputRef: HTMLInputElement | undefined
  return (
    <>
      <input
        class={styles.input}
        ref={(ref) => (inputRef = ref)}
        name="file"
        onChange={async (e) => {
          const [file] = e.currentTarget.files
          const blob = await fileToBlob(file)
          await saveMoiaDetailsImage(props.id, blob)
          props.refetch(props.id)
        }}
        required
        placeholder="Moia"
        type="file"
      />
      <button
        class={styles.button}
        type="button"
        onClick={() => {
          inputRef.click()
        }}
      >
        Take a picture{' '}
      </button>
    </>
  )
}
