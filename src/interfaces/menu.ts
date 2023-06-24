import { OrganizedDishes } from './organized-dishes'

export interface Menu {
  id: number
  date: Date
  organizedDishes: OrganizedDishes[]
}
