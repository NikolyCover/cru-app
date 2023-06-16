import { Week } from '../interfaces/week'
import { Category } from '../types/category'

export const getDishesByCategory = (
  week: Week,
  day: number,
  category: Category,
) =>
  week?.menus[day]?.organizedDishes?.find(
    (organizedDishes) => organizedDishes.category === category)?.dishes
