"use server";
import { db } from "@/lib/db";
import { decrypt, encrypt } from "@/lib/encrypt";
import { sendOtpMail } from "@/lib/mail";
import { generateOTP, logger } from "@/lib/utils";
import { cookies } from "next/headers";

export const sendOtp = async (email: string) => {
  try {
    const otp = generateOTP(6);

    const logExist = await db.log.findUnique({
      where: {
        email,
      },
    });

    if (!logExist) {
      await db.log.create({
        data: {
          email,
          otp,
          otp_sent_at: new Date(),
          updated_at: new Date(),
        },
      });
    } else {
      await db.log.update({
        where: {
          email,
        },
        data: {
          otp,
          otp_sent_at: new Date(),
          updated_at: new Date(),
        },
      });
    }

    await sendOtpMail(email, otp);

    return {
      success: true,
      message:
        "OTP has been sent to your Email ID, will be valid for next 10 minutes.",
    };
  } catch (error) {
    logger(error);

    return {
      success: false,
      message: "Failed to send OTP, Please try again! ",
    };
  }
};

export const verifyOtp = async (email: string, otp: string) => {
  try {
    const log = await db.log.findUnique({
      where: {
        email,
      },
    });

    if (!log || !log.otp_sent_at) {
      return {
        success: false,
        message: "Email not found, Please Register First!",
      };
    }

    const TEN_MINUTES_IN_MS = 10 * 60 * 1000; // 10 minutes in milliseconds

    const currentTime = new Date();
    const otpSentTime = new Date(log.otp_sent_at);

    const currentTimeMs = currentTime.getTime();
    const otpSentTimeMs = otpSentTime.getTime();

    const isExpired = currentTimeMs - otpSentTimeMs >= TEN_MINUTES_IN_MS;
    const isValidOtp = log.otp === otp;

    if (isExpired) {
      return {
        success: false,
        message: "OTP has been expired, Please try again!",
      };
    }

    if (!isValidOtp) {
      return {
        success: false,
        message: "Incorrect OTP!",
      };
    }

    await db.log.update({
      where: {
        email,
      },
      data: {
        otp: "",
        logged: true,
        logged_on: new Date(),
        updated_at: new Date(),
      },
    });

    createSession({ email: "gurudeepnaik1999@gmail.com" });

    return {
      success: true,
      message: "Login Successful!",
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to verify OTP, Please try again!",
    };
  }
};

export const createSession = async (user: any) => {
  const encryptedSessionData = encrypt(user);
  cookies().set("session", encryptedSessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // One week
    path: "/",
  });
};

export const getSessionData = async () => {
  const encryptedSession = cookies().get("session")?.value;

  if (!encryptedSession) {
    return null;
  }

  const session = decrypt(encryptedSession);

  return session;
};
