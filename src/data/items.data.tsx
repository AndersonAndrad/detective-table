import { base64 } from "../utils/base64.util"

export const listWeapons: IWeapon[] = [
  { id: base64(), name: 'Espingarda', selected: false },
  { id: base64(), name: 'Pá', selected: false },
  { id: base64(), name: 'Tessoura', selected: false },
  { id: base64(), name: 'Arma química', selected: false },
  { id: base64(), name: 'Soco inglês', selected: false },
  { id: base64(), name: 'Veneno', selected: false },
  { id: base64(), name: 'Faca', selected: false },
]

interface IWeapon {
  id: string,
  name: string,
  selected: boolean
}
