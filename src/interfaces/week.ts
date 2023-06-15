import { Menu } from './menu'

export interface Week {
  id: number
  sunday: Date
  menus: Menu[]
}