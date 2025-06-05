import { MyBig } from "@/lib/big";

export const toPaise = (amount: number) => {
  return new MyBig(amount).mul(100).round(2).toNumber();
};

export const fromPaise = (amount: number) => {
  return new MyBig(amount).div(100).round(2).toNumber();
};

export const toCurrencyFromPaise = (amount: number) => {
  const formatted = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(fromPaise(amount));

  return formatted;
};
