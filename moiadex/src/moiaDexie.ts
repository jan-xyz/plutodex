import Dexie, { Table } from 'dexie'
import { createResource } from 'solid-js'
import { sample } from 'lodash'

export type Moia = {
  id: number
  label: string
  city: string
  licensePlate: string
  counter: number
  trivia: string
  image?: Blob
  date?: string
  type: 'plain' | 'pride' | 'christmas' | 'harry-potter'
}

export type MoiaDetails = {
  id: number
  image: Blob
  location: string
  moiaId: string
  date: string
}

class MoiaDatabase extends Dexie {
  moias!: Table<Moia, number>
  moiaDetails!: Table<MoiaDetails, number>

  constructor() {
    super('MoiaDatabase')
    this.version(7).stores({
      moias: '++id, label',
      moiaDetails: '++id, moiaId',
    })
  }
}
// Declare tables, IDs and indexes
const moiaDb = new MoiaDatabase()

const fetchVehiclesJSON = async () => {
  const response = await fetch('vehicles.json')
  return response.json() as Promise<
    { id: string; label: number; licensePlate: string; city: string }[]
  >
}

export const seedMoias = async () => {
  const vehicles = await fetchVehiclesJSON()

  vehicles.forEach(({ label, licensePlate, city }) => {
    moiaDb.moias.put({
      id: label,
      label: label.toString(),
      city,
      licensePlate,
      counter: 0,
      trivia: 'hi',
      type: sample(['plain', 'pride', 'christmas', 'harry-potter']),
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
export const tagMoiaAsSeen = async (id: string) => {
  const moia = await getMoiaById(id)
  moia.counter = moia.counter + 1
  await moiaDb.moias.put(moia)
}

export const incrementMoiaCounter = async (id: string) => {
  const moia = await getMoiaById(id)
  moia.counter = moia.counter + 1
  moia.date = new Date().toISOString()
  await moiaDb.moias.put(moia)
}

export const decrementMoiaCounter = async (id: string) => {
  const moia = await getMoiaById(id)
  moia.counter = moia.counter - 1
  await moiaDb.moias.put(moia)
}

export const saveMoiaDetailsImage = async (id: string, blob: Blob) => {
  //@ts-expect-error id is autoincrement
  await moiaDb.moiaDetails.add({
    image: blob,
    date: new Date().toISOString(),
    moiaId: id,
    location: '',
  })
}

export const saveImageToMoia = async (id: string, blob: Blob) => {
  const moia = await getMoiaById(id)
  moia.image = blob
  await moiaDb.moias.put(moia)
}

export const getMoiaDetails = async (id: string) => {
  const details = await moiaDb.moiaDetails.where({ moiaId: id }).toArray()
  return details
}
export const moiaDetailResource = (id: string) => {
  return createResource(id, getMoiaDetails)
}
