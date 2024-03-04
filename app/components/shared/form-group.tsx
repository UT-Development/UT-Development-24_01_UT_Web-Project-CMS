import { cn } from "~/lib/utils";

interface FormGroupProps {
  title: React.ReactNode;
  className?: string;
  description?: string;
  children?: React.ReactNode;
}

export function FormGroup({
  title,
  className,
  description,
  children,
}: FormGroupProps) {
  return (
    <div className={cn("@3xl:grid-cols-12 grid gap-5", className)}>
      <div className="@4xl:col-span-4 col-span-full">
        <h4 className="text-base font-bold">{title}</h4>
        {description && <p className="mt-2">{description}</p>}
      </div>
      {children && (
        <div className="@2xl:grid-cols-2 @4xl:col-span-8 @4xl:gap-5 col-span-full grid gap-4 xl:gap-7">
          {children}
        </div>
      )}
    </div>
  );
}
