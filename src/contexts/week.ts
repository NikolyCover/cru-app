import { AxiosError } from 'axios'
import { getAllWeeks, getCurrentWeekMenu, getWeek } from '../services/week-menu'
import { atom, atomFamily, selector, selectorFamily } from 'recoil'
import { Week } from '../interfaces/week'
import { WEEK_DAYS } from '../constants/week-days'
import { Item } from 'react-native-picker-select'

export const weeksSelector = selector({
  key: 'weeks-selector',
  get: async () => {
    try {
      const response = await getAllWeeks()
      return response.data.filter((week) => week.menus?.find((menu) => menu))
    } catch (error) {
      console.log('Error fetching weeks: ', error as AxiosError)
      return []
    }
  },
})

export const weeksAtom = atom({
  key: 'weeks-atom',
  default: weeksSelector,
})

export const weekSelector = selectorFamily({
  key: 'week-selector',
  get:
    (id: number) =>
    async ({ get }) => {
      try {
        const response =
          id === -1 ? await getCurrentWeekMenu() : await getWeek(id)

        if (id === -1) {
          const thereIsNoMenu =
            response.data?.menus?.find((menu) => menu != null) === undefined

          if (!response.data || thereIsNoMenu) {
            const weeks = get(weeksAtom)
            const last = weeks?.findLast(() => true)
            return last
          }
        }
        return response.data
      } catch (error) {
        console.log('Error fetching week menu: ', error as AxiosError)

        return undefined
      }
    },
})

export const weekAtom = atomFamily<Week | undefined, number>({
  key: 'week-atom',
  default: (weekId) => weekSelector(weekId),
})

export const availableWeekDaysSelector = selectorFamily<Item[], number>({
  key: 'week-selector',
  get:
    (weekId) =>
    ({ get }) => {
      const week = get(weekAtom(weekId))

      return WEEK_DAYS.filter((weekDay) => week?.menus[weekDay.value])
    },
})

export const daySelector = selectorFamily<number, number>({
  key: 'day-selector',
  get: (weekId) => ({ get }) => {
    const availableWeekDays = get(availableWeekDaysSelector(weekId))

    return availableWeekDays && availableWeekDays.length > 0
      ? availableWeekDays[0].value
      : -1
  },
})

export const dayAtom = atomFamily<number, number>({
  key: 'day-atom',
  default: weekId => daySelector(weekId),
})
