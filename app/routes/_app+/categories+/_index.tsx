import { PageHeader } from "~/components/layout/page-header";
import { routes } from "~/lib/config/routes";

const pageHeader = {
  title: "Categories",
  breadcrumb: [
    {
      href: routes.app.home,
      name: "Home",
    },
    {
      href: routes.app.categories,
      name: "Categories",
    },
  ],
};

export default function CategoriesRoute() {
  return (
    <div>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
    </div>
  );
}
