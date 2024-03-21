"use client";
import { useState } from "react";
import { EmailForm } from "./email-form";
import { OtpForm } from "./otp-form";

export const SignIn = () => {
  const [formType, setFormType] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");

  return (
    <div className="w-full py-12 lg:py-24">
      <div className="container flex flex-col items-center px-4 space-y-4 md:px-6 md:space-y-10">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Sign up for ReformJS
          </h1>
          <p className="mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            Enter your email to sign up or sign in to an existing account
          </p>
        </div>
        <div className="w-full max-w-sm space-y-4">
          {formType === "email" ? (
            <EmailForm setFormType={setFormType} setEmail={setEmail} />
          ) : (
            <OtpForm email={email} />
          )}
        </div>
      </div>
    </div>
  );
};
