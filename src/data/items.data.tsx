import { base64 } from "../utils/base64.util"

export const listWeapons: IItem[] = [
  { id: base64(), name: 'Espingarda', selected: false },
  { id: base64(), name: 'Pá', selected: false },
  { id: base64(), name: 'Tessoura', selected: false },
  { id: base64(), name: 'Arma química', selected: false },
  { id: base64(), name: 'Soco inglês', selected: false },
  { id: base64(), name: 'Veneno', selected: false },
  { id: base64(), name: 'Faca', selected: false },
]

export const listLocations: IItem[] = [
  { id: base64(), name: 'Prefeitura', selected: false },
  { id: base64(), name: 'Restaurante', selected: false },
  { id: base64(), name: 'Floricultura', selected: false },
  { id: base64(), name: 'Boate', selected: false },
  { id: base64(), name: 'Hospital', selected: false },
  { id: base64(), name: 'Mansão', selected: false },
  { id: base64(), name: 'Cemitério', selected: false },
  { id: base64(), name: 'Praça', selected: false },
  { id: base64(), name: 'Hotel', selected: false },
  { id: base64(), name: 'Banco', selected: false },
  { id: base64(), name: 'Estação de trem', selected: false },
]

export const listPeople: IItem[] = [
  { id: base64(), name: 'Sargento', selected: false },
  { id: base64(), name: 'Florista', selected: false },
  { id: base64(), name: 'Chefe de cozinha', selected: false },
  { id: base64(), name: 'Mordomo', selected: false },
  { id: base64(), name: 'Médica', selected: false },
  { id: base64(), name: 'Dançarina', selected: false },
  { id: base64(), name: 'Coveira', selected: false },
  { id: base64(), name: 'Advogado', selected: false },
]

interface IItem {
  id: string,
  name: string,
  selected: boolean
}