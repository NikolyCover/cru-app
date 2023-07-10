import { Category } from '../types/category'

export interface Dish {
  id: number
  name: string
  description?: string
  containsMilk: boolean
  containsMeat: boolean
  category: Category
}
