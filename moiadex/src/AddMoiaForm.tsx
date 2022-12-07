import { createSignal } from 'solid-js'

const AddMoiaForm = () => {
  const [number, setNumber] = createSignal('')
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <input required placeholder="Number" type="text" />
    </form>
  )
}
