const formatDateInputValue = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const useMinDateToday = () => {
  const today = new Date();

  return formatDateInputValue(today);
};

export const getMinCheckoutDate = (checkIn) => {
  if (checkIn) {
    const nextDay = new Date(checkIn);
    nextDay.setDate(nextDay.getDate() + 1);
    return formatDateInputValue(nextDay);
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return formatDateInputValue(tomorrow);
};
