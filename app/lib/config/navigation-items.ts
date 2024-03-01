import type { IconType } from "react-icons";
import { routes } from "./routes";
import {
  PiSquaresFourDuotone as DashboardIcon,
  PiTagDuotone as TagsIcon,
  PiFolderOpenDuotone as FilesIcon,
  PiUserGearDuotone as SettingsIcon,
  PiCirclesFourDuotone as CategoriesIcon,
  PiArticleDuotone as ArticlesIcon,
  PiCardsDuotone as PagesIcon,
} from "react-icons/pi";

export type MenuItem = {
  href: string;
  name: string;
  icon: IconType;
};

export const navigationItems: MenuItem[] = [
  {
    name: "Dashboard",
    href: routes.app.home,
    icon: DashboardIcon,
  },
  {
    name: "Pages",
    href: routes.app.pages,
    icon: PagesIcon,
  },
  {
    name: "Articles",
    href: routes.app.articles,
    icon: ArticlesIcon,
  },
  {
    name: "Media & Files",
    href: routes.app.media,
    icon: FilesIcon,
  },
  {
    name: "Tags",
    href: routes.app.tags,
    icon: TagsIcon,
  },
  {
    name: "Categories",
    href: routes.app.categories,
    icon: CategoriesIcon,
  },
  {
    name: "Settings",
    href: routes.app.settings.profile,
    icon: SettingsIcon,
  },
];
