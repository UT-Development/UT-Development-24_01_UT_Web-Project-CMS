import { PageHeader } from "~/components/layout/page-header";
import { routes } from "~/lib/config/routes";

const pageHeader = {
  title: "Media & Files",
  breadcrumb: [
    {
      href: routes.app.home,
      name: "Home",
    },
    {
      href: routes.app.media,
      name: "Media & Files",
    },
  ],
};

export default function MediaRoute() {
  return (
    <div>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
    </div>
  );
}
