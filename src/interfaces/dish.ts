import { Category } from '../types/category'

export interface IDish {
  id: number
  name: string
  description?: string
  contains_milk: boolean
  contains_meat: boolean
  category: Category
}
