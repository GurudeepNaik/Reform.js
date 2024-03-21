import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateOTP = (length: number): string => {
  const characters = "0123456789";
  const OTP = [];

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    OTP.push(characters[randomIndex]);
  }

  return OTP.join("");
};

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const logger = (...message: any) => {
  console.log("Logger Message:", message);
};
