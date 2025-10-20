"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import Logo from "@/components/shared/Logo";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const registerSchema = z.object({
  name: z
    .string({ message: "Name must have been string" })
    .min(3, { message: "Name lenght is minimum 3" })
    .max(100, { message: "Name length maximum 100" }),
  email: z
    .string({ message: "Email must be a string" })
    .email({ message: "Invalid email address format" }),

  password: z
    .string({ message: "Password must be a string" })
    .min(8, { message: "Name lenght is minimum 8" }),
});

const RegisterForm = ({ className, ...props }: React.ComponentProps<"div">) => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const axiosPublic = useAxiosPublic();
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    const toastId = toast.loading("Login is loading....");
    console.log("data ", data);
    try {
      const res = await axiosPublic.post(`/user/register`, data, {
        withCredentials: true, // 🔥 send/receive cookies
      });
      console.log("res is", res);
      if (res?.data?.success) {
        toast.success("Registration in successfully", { id: toastId });
        const user = {
          name: res?.data?.data?.name,
          email: res?.data?.data?.email,
          role: res?.data?.data?.role,
        };
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/");
      }
    } catch (error) {
      toast.error("Login error", { id: toastId });
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="max-w-[90%] md:max-w-[70%] lg:max-w-[40%] mx-auto">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit, (errors) => {
                console.log("Validation Errors:", errors);
                toast.error("Please fix the form errors first!");
              })}
              className="p-6 md:p-8"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Welcome back</h1>
                  <Logo></Logo>
                </div>

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>

                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="demo@gmail.com" {...field} />
                      </FormControl>

                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Password" {...field} />
                      </FormControl>

                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />

                <Button type="submit">Register</Button>

                {/* <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                  <span className="bg-card text-muted-foreground relative z-10 px-2">
                    Or continue with
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <Button variant="outline" type="button" className="w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="">Login with Google</span>
                  </Button>
                </div> */}
                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="underline underline-offset-4"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterForm;
