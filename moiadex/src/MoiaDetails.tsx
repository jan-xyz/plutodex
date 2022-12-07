import { useParams } from '@solidjs/router'
import { moiaByIdResource } from './moiaDexie'

export const MoiaDetails = () => {
  const params = useParams()
  const [moia] = moiaByIdResource(params.id)

  return (
    <div>
      {JSON.stringify(moia)}
      hello {moia()?.label ?? ''}
      hello {moia()?.counter ?? ''}
    </div>
  )
}
