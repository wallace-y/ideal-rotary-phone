function daysAndHoursToEarn(earnings, timePeriod, price) {
    if (earnings <= 0) {
        return "Earnings must be greater than zero."
    }
    if (price <= 0) {
        return "Price must be greater than zero."
    }
  // Convert earnings to hourly rate based on timePeriod
  switch (timePeriod) {
    case "hourly":
      // no change needed
      break;
    case "weekly":
      earnings = Math.floor(earnings / 40); // assuming 40h work week;
      break;
    case "monthly":
      earnings = Math.floor((earnings * 12) / 52 / 40); // convert to annual, then weekly, then hourly;
      break;
    case "yearly":
      earnings = Math.floor(earnings / 52 / 40); // convert to weekly then hourly
      break;
    default:
      throw new Error(
        "Invalid timePeriod. Please use 'hourly', 'weekly', 'monthly', or 'yearly'."
      );
  }

  // Calculate the number of days and hours needed to earn the price
  const days = Math.floor(price / earnings / 8);
  const remainder = (price / earnings / 8) - days;
  const hours = Math.floor(remainder*8);

  return { days, hours };
}

module.exports = { daysAndHoursToEarn };
