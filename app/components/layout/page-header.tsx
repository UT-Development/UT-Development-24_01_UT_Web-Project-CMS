import Breadcrumb from "~/components/layout/breadcrumb";
import { cn } from "~/lib/utils";

export type PageHeaderTypes = {
  title: string;
  breadcrumb: { name: string; href?: string }[];
  className?: string;
};

export function PageHeader({
  title,
  breadcrumb,
  children,
  className,
}: React.PropsWithChildren<PageHeaderTypes>) {
  return (
    <header className={cn("@container xs:-mt-2 mb-6 lg:mb-7", className)}>
      <div className="@lg:flex-row @lg:items-center @lg:justify-between flex flex-col">
        <div>
          <h2 className="4xl:text-[26px] mb-2 text-[22px] lg:text-2xl">
            {title}
          </h2>

          <Breadcrumb
            separator=""
            separatorVariant="circle"
            className="flex-wrap"
          >
            {breadcrumb.map((item) => (
              <Breadcrumb.Item
                key={item.name}
                {...(item?.href && { href: item?.href })}
              >
                {item.name}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
        {children}
      </div>
    </header>
  );
}
