import { PageHeader } from "~/components/layout/page-header";
import { routes } from "~/lib/config/routes";

const pageHeader = {
  title: "Tags",
  breadcrumb: [
    {
      href: routes.app.home,
      name: "Home",
    },
    {
      href: routes.app.tags,
      name: "Tags",
    },
  ],
};

export default function TagsRoute() {
  return (
    <div>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
    </div>
  );
}
