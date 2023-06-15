import { Dish } from './dish'
import { Week } from './week'

export interface Menu {
  id: number
  date: Date
  week: Week
  dishes: Dish[]
}
