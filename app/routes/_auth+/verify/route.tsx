import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "~/components/ui/input";
import { z } from "zod";
import { useFetcher } from "@remix-run/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { Icons } from "~/components/shared/icons";

const verifyFormSchema = z.object({
  code: z.string().min(1, { message: "Required" }),
});

type VerifyFormSchema = z.infer<typeof verifyFormSchema>;

export default function VerifyRoute() {
  const verifyFetcher = useFetcher();

  const verifyForm = useForm<VerifyFormSchema>({
    resolver: zodResolver(verifyFormSchema),
  });

  const onSubmit = async (data: VerifyFormSchema) => {
    const formData = new FormData();
    formData.append("code", data.code);

    verifyFetcher.submit(formData, {
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
                Please check your inbox
              </h1>
              <p className="text-sm text-muted-foreground">
                We have sent you an email containing an OTP
              </p>
            </div>
            <div className="grid gap-6">
              <Form {...verifyForm}>
                <form onSubmit={verifyForm.handleSubmit(onSubmit)}>
                  <div className="grid gap-4">
                    <FormField
                      control={verifyForm.control}
                      name="code"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>OTP</FormLabel>
                          <FormControl>
                            <Input
                              id="code"
                              placeholder="XXXXXX"
                              disabled={verifyFetcher.state === "submitting"}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button disabled={verifyFetcher.state === "submitting"}>
                      {verifyFetcher.state === "submitting" && (
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      Submit OTP
                    </Button>
                    <Button variant="ghost">Request new OTP</Button>
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
