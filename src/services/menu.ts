import { AxiosResponse } from 'axios'
import { cruAPI } from './cru-api'
import { Menu } from '../interfaces/menu'

export const getCurrentMenu = (): Promise<AxiosResponse<Menu>> => (
    cruAPI.get<Menu>('/menus/current')
)

export const getMenu = (id: number): Promise<AxiosResponse<Menu>> => (
    cruAPI.get<Menu>(`/menus/${id}`)
)

export const getAllMenus = (): Promise<AxiosResponse<Menu[]>> => (
    cruAPI.get<Menu[]>('/menus')
)
