import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { ArrowRight } from "lucide-react";
import { verifyOtp } from "@/actions/auth";
import { useToast } from "../ui/use-toast";
import { redirect, useRouter } from "next/navigation";

const formSchema = z.object({
  otp: z.string().min(6).max(6),
});

export const OtpForm = ({ email }: { email: string }) => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const otp = values.otp;
    const data = await verifyOtp(email, otp);
    if (!data.success) {
      return toast({
        title: "Failed",
        description: data.message,
        variant: "destructive",
      });
    }
    toast({
      title: "Success",
      description: data.message,
      variant: "default",
    });
    try {
      router.push("/dashboard");
    } catch (error) {}
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col items-center justify-center"
      >
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter you OTP</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full flex justify-center items-center gap-1"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          Next
          <ArrowRight className="h-5 w-5" />
        </Button>
      </form>
    </Form>
  );
};
