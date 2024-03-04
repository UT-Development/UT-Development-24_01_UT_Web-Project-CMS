import { FormGroup } from "~/components/shared/form-group";

export default function ProfileDetailsRoute() {
  return (
    <form className="@container flex flex-1 flex-col space-y-3">
      <div className="mt-3 flex items-center justify-between">
        <FormGroup
          title="Personal Info"
          description="Update your photo and personal details here"
          className="@2xl:pt-2 @3xl:grid-cols-12 @3xl:pt-0 pt-7"
        />
      </div>
    </form>
  );
}
