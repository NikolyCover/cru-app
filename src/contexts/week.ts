import { AxiosError } from 'axios'
import { getAllWeeks, getCurrentWeekMenu, getWeek } from '../services/week-menu'

export const weeksPromisse = async () => {
  try {
    const response = await getAllWeeks()
    return response.data
  } catch (error) {
    console.log('Error fetching weeks: ', error as AxiosError)
  }
}

export const weekPromisse = async (id?: number) => {
  try {
    const response = id ? await getWeek(id) : await getCurrentWeekMenu()
    return response.data
  } catch (error) {
    console.log('Error fetching week menu: ', error as AxiosError)
  }
}
