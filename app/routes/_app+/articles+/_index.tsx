import { PageHeader } from "~/components/layout/page-header";
import { routes } from "~/lib/config/routes";

const pageHeader = {
  title: "Articles",
  breadcrumb: [
    {
      href: routes.app.home,
      name: "Home",
    },
    {
      href: routes.app.articles,
      name: "Articles",
    },
  ],
};

export default function ArticlesRoute() {
  return (
    <div>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
    </div>
  );
}
