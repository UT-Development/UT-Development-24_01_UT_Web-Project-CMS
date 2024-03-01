import { PageHeader } from "~/components/layout/page-header";
import { routes } from "~/lib/config/routes";

const pageHeader = {
  title: "Pages",
  breadcrumb: [
    {
      href: routes.app.home,
      name: "Home",
    },
    {
      href: routes.app.pages,
      name: "Pages",
    },
  ],
};

export default function PagesRoute() {
  return (
    <div>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
    </div>
  );
}
