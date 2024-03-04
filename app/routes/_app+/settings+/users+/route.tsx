import React from "react";
import { PiPlusBold } from "react-icons/pi";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFetcher } from "@remix-run/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { FormGroup } from "~/components/shared/form-group";

const inviteTeamMemberFormSchema = z.object({
  email: z.string().email().min(1, { message: "Required" }),
});

type InviteTeamMemberForm = z.infer<typeof inviteTeamMemberFormSchema>;

export default function UsersRoute() {
  const inviteTeamMemberFetcher = useFetcher();
  const [inviteModalOpen, setInviteModalOpen] = React.useState<boolean>(false);
  const inviteTeamMemberForm = useForm<InviteTeamMemberForm>({
    resolver: zodResolver(inviteTeamMemberFormSchema),
  });

  const onSubmitTeamMemberInvite = (data: InviteTeamMemberForm) => {
    inviteTeamMemberFetcher.submit(
      { email: data.email },
      { method: "POST", encType: "application/json" }
    );
    setInviteModalOpen(false);
  };

  return (
    <>
      <Dialog open={inviteModalOpen} onOpenChange={setInviteModalOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Invite team members</DialogTitle>
            <DialogDescription>Enter a list of emails below</DialogDescription>
          </DialogHeader>
          <Form {...inviteTeamMemberForm}>
            <form
              onSubmit={inviteTeamMemberForm.handleSubmit(
                onSubmitTeamMemberInvite
              )}
              className="w-full space-y-3"
            >
              <FormField
                control={inviteTeamMemberForm.control}
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
                        disabled={
                          inviteTeamMemberFetcher.state === "submitting"
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <Input */}
              {/*   placeholder="Email address" */}
              {/*   {...inviteTeamMemberForm.register("email")} */}
              {/*   error={inviteTeamMemberFormErrors.email?.message} */}
              {/*   className="flex-grow" */}
              {/* /> */}
              <DialogFooter>
                <Button type="submit">Send invite</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <div className="@container space-y-4">
        <div className="mt-3 flex items-center justify-between">
          <FormGroup
            title="Users"
            description="Manage your users and invite team members"
            className="@2xl:pt-2 @3xl:grid-cols-12 @3xl:pt-0 pt-7"
          />
          <Button type="button" onClick={() => setInviteModalOpen(true)}>
            <PiPlusBold className="me-1.5 h-4 w-4" />
            Invite team member
          </Button>
        </div>
        {/* User cards section */}
      </div>
    </>
  );
}
