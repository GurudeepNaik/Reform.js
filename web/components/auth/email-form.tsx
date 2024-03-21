import React, { Dispatch, SetStateAction } from "react";
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
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { sendOtp } from "@/actions/auth";
import { useToast } from "../ui/use-toast";

const formSchema = z.object({
  email: z.string().email(),
});

export const EmailForm = ({
  setFormType,
  setEmail,
}: {
  setFormType: Dispatch<SetStateAction<"email" | "otp">>;
  setEmail: Dispatch<SetStateAction<string>>;
}) => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const data = await sendOtp(values.email);
    if (!data.success) {
      return toast({
        title: "Failed",
        description: data.message,
        variant: "destructive",
      });
    }

    setEmail(values.email);
    setFormType("otp");

    return toast({
      title: "Success",
      description: data.message,
      variant: "default",
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="john.smith@gmail.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full"
          disabled={form.formState.isSubmitting}
          type="submit"
        >
          Send OTP
        </Button>
      </form>
    </Form>
  );
};
