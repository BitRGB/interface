

export const getNowSecond = () => {
  const time = Date.now()
  return parseInt((time / 1000).toString())
}

export function shortenAddress(str: string) {
  if (str.length < 10) return str;
  return `${str.slice(0, 6)}...${str.slice(str.length - 4)}`;
}


export function shortAddress(str: string) {
  if (str.length < 18) return str;
  return `${str.slice(0, 10)}...${str.slice(str.length - 8)}`;
}

export function shortInvoice(str: string) {
  if (str.length < 42) return str;
  return `${str.slice(0, 20)}...${str.slice(str.length - 20)}`;
}

export function computeBtcDollar(btcPrice: string, amount: string | number, format = 4) {
  const total = Number(amount || "0") / Math.pow(10, 8)
  const moneny= (total * Number(btcPrice)).toFixed(format)
  return formatMoney(moneny)
}


export function humanizeNumber(amount: number): string {
  const quantifiers = [
    [10 ** 9, "B"],
    [10 ** 6, "M"],
    [10 ** 3, "k"],
  ] as [number, string][];

  for (const [denominator, letter] of quantifiers) {
    if (amount > denominator) {
      return `${(amount / denominator).toFixed(2)} ${letter}`;
    }
  }
  return amount.toString();
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const formatStats = (amount: any) => {
  return formatMoney(amount).replace("$", "")
}

export const formatMoney = (amount: any) => {
  if (!amount) {
    return "0"
  }
  return formatter.format(amount)
}