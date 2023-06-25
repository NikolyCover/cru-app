import { AxiosError } from 'axios'
import { atom, atomFamily, selector, selectorFamily } from 'recoil'
import { getAllMenus, getCurrentMenu, getMenu } from '../services/menu'
import { Menu } from '../interfaces/menu'

export const menusSelector = selector({
  key: 'menus-selector',
  get: async () => {
    try {
      const response = await getAllMenus()
      return response.data
    } catch (error) {
      console.log('Error fetching menus: ', error as AxiosError)
      return []
    }
  },
})

export const menusAtom = atom({
  key: 'menus-atom',
  default: menusSelector,
})

export const menuSelector = selectorFamily({
  key: 'menu-selector',
  get:
    (id: number) =>
    async ({ get }) => {
      try {
        const response =
          id === -1 ? await getCurrentMenu() : await getMenu(id)

        if (!response.data) {
            const menus = get(menusAtom)
            const last = menus?.findLast(() => true)
            return last
        }

        return response.data
      } catch (error) {
        console.log('Error fetching menu: ', error as AxiosError)

        return undefined
      }
    },
})

export const menuAtom = atomFamily<Menu | undefined, number>({
  key: 'menu-atom',
  default: (menuId) => menuSelector(menuId),
})