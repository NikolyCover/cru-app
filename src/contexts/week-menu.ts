import { atom, selector } from 'recoil'
import { getCurrentWeekMenu } from '../services/week-menu'
import { AxiosError } from 'axios'
import { Week } from '../interfaces/week'

export const weekMenuSelector = selector({
  key: 'week-menu',
  get: async () => {
    try {
      const response = await getCurrentWeekMenu()

      console.log('responsta: ', response.data)

      return response.data
    } catch (error) {
      console.log(error as AxiosError)

      console.log('errouw!!')

      return null
    }
  },
})

export const weekMenuAtom = atom<Week | null>({
  key: 'week-menu',
  default: weekMenuSelector,
})
