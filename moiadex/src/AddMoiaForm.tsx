import { useNavigate } from '@solidjs/router'
import { createSignal } from 'solid-js'
import { tagMoiaAsSeen } from './moiaDexie'

export const AddMoiaForm = () => {
  const [number, setNumber] = createSignal('')
  const navigate = useNavigate()
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        await tagMoiaAsSeen(number())
        navigate('/')
      }}
    >
      <input
        value={number()}
        onChange={(e) => {
          setNumber(e.currentTarget.value)
        }}
        required
        placeholder="Number"
        type="text"
      />
    </form>
  )
}
