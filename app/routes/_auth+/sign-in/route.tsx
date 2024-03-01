import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "~/components/ui/input";
import { useFetcher } from "@remix-run/react";
import { ActionFunctionArgs } from "@remix-run/node";
import { Icons } from "~/components/shared/icons";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

const signInFormSchema = z.object({
  email: z.string().email().min(1, { message: "Required" }),
});

type SignInFormSchema = z.infer<typeof signInFormSchema>;

export const action = async ({ request }: ActionFunctionArgs) => {
  return {};
};

export default function SignInRoute() {
  const signInFetcher = useFetcher<typeof action>();
  const signInForm = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
  });

  const onSubmit = async (data: SignInFormSchema) => {
    const formData = new FormData();
    formData.append("email", data.email);

    signInFetcher.submit(formData, {
      method: "POST",
      encType: "multipart/form-data",
    });
  };

  return (
    <>
      <div className="container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Unbound Trajectories
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Design creates culture. Culture shapes values. Values
                determine the future.&rdquo;
              </p>
              <footer className="text-sm">Robert L. Peters</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-left">
              <h1 className="text-2xl font-semibold tracking-tight">
                Sign into your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and an OTP will be sent to you
              </p>
            </div>
            <div className="grid gap-6">
              <Form {...signInForm}>
                <form onSubmit={signInForm.handleSubmit(onSubmit)}>
                  <div className="grid gap-4">
                    <FormField
                      control={signInForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email address</FormLabel>
                          <FormControl>
                            <Input
                              id="email"
                              placeholder="name@example.com"
                              type="email"
                              autoCapitalize="none"
                              autoComplete="email"
                              autoCorrect="off"
                              disabled={signInFetcher.state === "submitting"}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button disabled={signInFetcher.state === "submitting"}>
                      {signInFetcher.state === "submitting" && (
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      Sign In with Email
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
