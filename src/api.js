// const BASE_URL = 'http://localhost:3000/admin/';
const BASE_URL = '/admin/dashboard_data/';

export default async function getResponse(type, customDateRange) {
  let url = BASE_URL;  
  if (type === 'custom') {
    url += `?transaction_date__gte=${customDateRange.dateStart}&transaction_date__lte=${customDateRange.dateEnd}`;
  } else if (type === 'month') {
    const month = getMonth();
    url += `?transaction_date__gte=${month.monthStart}&transaction_date__lte=${month.monthEnd}`;
  } else if (type === 'day') {
    const day = getDay();
    url += `?transaction_date__gte=${day}&transaction_date__lte=${day}`;
  } else if (type === 'week') {
    const week = getWeek();
    url += `?transaction_date__gte=${week.weekStart}&transaction_date__lte=${week.weekEnd}`;
  }
  let res = await fetch(url);
  res = res.json();
  return res;
}

function getMonth() {
  const now = new Date();
  return {
    monthStart: `${now.getFullYear()}-${now.getMonth() + 1}-1`,
    monthEnd: `${now.getFullYear()}-${now.getMonth() + 1}-31`,
  }
}

function getDay() {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}

function getWeek() {
  const curr = new Date(); // get current date
  const first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week
  const last = first + 6; // last day is the first day + 6

  const firstday = new Date(curr.setDate(first));
  const lastday = new Date(curr.setDate(last));

  return {
    weekStart: `${firstday.getFullYear()}-${firstday.getMonth() + 1}-${firstday.getDate()}`,
    weekEnd: `${lastday.getFullYear()}-${lastday.getMonth() + 1}-${lastday.getDate()}`,
  }
}