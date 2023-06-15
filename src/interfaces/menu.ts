import { OrganizedDishes } from './organized-dishes'
import { Week } from './week'

export interface Menu {
  id: number
  date: Date
  week: Week
  organizedDishes: OrganizedDishes[]
}
