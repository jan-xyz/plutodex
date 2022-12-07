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
		this.version(1).stores({
			moias: '++id',
		})
	}
}
// Declare tables, IDs and indexes
const moiaDb = new MoiaDatabase()

export const seedMoias = async () => {
	const moias = await getMoias()
	if (moias.length === 0) {
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
}

seedMoias()

export const getMoias = async () => {
	const moias = await moiaDb.moias.toArray()
	return moias
}
export const moiaResource = () => {
	return createResource(getMoias)
}
