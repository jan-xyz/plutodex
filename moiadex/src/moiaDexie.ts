import Dexie, { Table } from 'dexie'
import { createResource } from 'solid-js'

export type Moia = {
  id: number
  label: string
  city: string
  licencePlate: string
  counter: number
  trivia: string
  type: string
}

class MoiaDatabase extends Dexie {
  moias!: Table<Moia, string>

  constructor() {
    super('MoiaDatabase')
    this.version(2).stores({
      moias: '++id, label',
    })
  }
}
// Declare tables, IDs and indexes
const moiaDb = new MoiaDatabase()

export const seedMoias = async () => {
  Array.from({ length: 800 }, (_, index) => {
    moiaDb.moias.put({
      id: index,
      label: `Moia ${index}`,
      city: 'Hamburg',
      licencePlate: 'tbd',
      counter: 0,
      trivia: 'hi',
      type: 'Pluto',
    })
  })
}

export const getMoias = async () => {
  const moias = await moiaDb.moias.toArray()
  if (moias.length === 0) {
    await seedMoias()
    const moias = await moiaDb.moias.toArray()
    return moias
  }
  return moias
}

export const moiaResource = () => {
  return createResource(getMoias)
}

export const getMoiaByLabel = async (label: string) => {
  return moiaDb.moias.where({ label }).first()
}

const getMoiaById = async (id: string) => {
  const moia = await moiaDb.moias.get(Number(id))
  return moia
}

export const moiaByIdResource = (id: string) => {
  return createResource(id, getMoiaById)
}
export const tagMoiaAsSeen = async (label: string) => {
  const moia = await getMoiaByLabel(label)
  moia.counter = moia.counter + 1
  await moiaDb.moias.put(moia)
}

seedMoias()
