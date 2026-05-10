export function formatCurrency(value, currency = 'USD') {
  return new Intl.NumberFormat(currency === 'ZAR' ? 'en-ZA' : 'en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
}

export function formatPercentage(value) {
  return `${value.toFixed(1)}%`;
}
