import { WEEK_DAYS } from "../constants/week-days"

export const formatDate = (date: Date) => {
  const newDate = new Date(date)
  const day = String(newDate.getDate()).padStart(2, '0')
  const month = String(newDate.getMonth() + 1).padStart(2, '0')
  const year = String(newDate.getFullYear())
  const weekDay = WEEK_DAYS.find((wd) => wd.value == newDate.getDay())?.label

  return `${day}/${month}/${year} - ${weekDay}`
}
