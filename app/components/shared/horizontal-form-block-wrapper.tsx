import { cn } from "~/lib/utils";

export function HorizontalFormBlockWrapper({
  title,
  titleClassName,
  description,
  children,
  className,
  descriptionClassName,
  childrenWrapperClassName,
}: React.PropsWithChildren<{
  title: React.ReactNode;
  description?: React.ReactNode;
  titleClassName?: string;
  className?: string;
  descriptionClassName?: string;
  childrenWrapperClassName?: string;
}>) {
  return (
    <div
      className={cn(
        "border-muted @5xl:grid @5xl:grid-cols-6 border-b border-dashed py-10",
        className
      )}
    >
      <div className="@5xl:mb-0 col-span-2 mb-6">
        <h5 className={cn("mb-2 text-[17px] font-bold", titleClassName)}>
          {title}
        </h5>
        <h4
          className={cn(
            "mt-1 leading-relaxed text-gray-500",
            descriptionClassName
          )}
        >
          {description}
        </h4>
      </div>
      <div
        className={cn(
          "@lg:gap-5 @3xl:grid-cols-2 col-span-4 grid grid-cols-1 gap-4",
          childrenWrapperClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
