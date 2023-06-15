import { AxiosResponse } from 'axios'
import { cruAPI } from './cru-api'
import { Week } from '../interfaces/week'

export const getCurrentWeekMenu = (): Promise<AxiosResponse<Week>> => (
    cruAPI.get<Week>('/weeks/current')
)
