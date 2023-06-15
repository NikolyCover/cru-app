import { Category } from '../types/category'
import { Dish } from './dish'

export interface OrganizedDishes {
  category: Category
  dishes: Dish[]
}
