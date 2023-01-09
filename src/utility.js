import { dayNames, monthNames } from "./constants";

export const getDayCountInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
export const getDayName = day => dayNames[day.getDay()];
export const getMonthName = monthIndex => monthNames[monthIndex];
export const getMonthEvents = monthIndex => "";