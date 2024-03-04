import type { TabItem } from "~/lib/types";
import { Outlet, useLoaderData, useNavigate } from "@remix-run/react";
import { routes } from "~/lib/config/routes";
import { PageHeader } from "~/components/layout/page-header";
import { json, type LoaderFunction } from "@remix-run/node";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
// import { routeGuard } from "~/services/auth/route-guard.server";

const tabs: TabItem[] = [
  {
    href: routes.app.settings.profile,
    label: "My Profile",
    value: "profile",
  },
  {
    href: routes.app.settings.users,
    label: "Users",
    value: "users",
  },
];

export const loader: LoaderFunction = async (args) => {
  // const { tenant } = await routeGuard(args.request);
  const cutURL = args.request.url.split("/");
  const currentTab = cutURL[cutURL.length - 1];

  return json({ tabs, currentTab }, { status: 200 });
};

const pageHeader = {
  title: "Account settings",
  breadcrumb: [
    {
      href: routes.app.home,
      name: "Home",
    },
    {
      href: routes.app.settings.profile,
      name: "Account settings",
    },
  ],
};

export default function Settings() {
  const { tabs, currentTab } = useLoaderData<{
    tabs: TabItem[];
    currentTab: string;
  }>();
  const navigate = useNavigate();

  return (
    <div>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <Tabs defaultValue={currentTab} className="min-w-[400px]">
        <TabsList>
          {tabs?.map((t) => (
            <TabsTrigger
              key={t.value}
              value={t.value}
              onClick={() => navigate(t.href)}
            >
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <Outlet />
    </div>
  );
}
