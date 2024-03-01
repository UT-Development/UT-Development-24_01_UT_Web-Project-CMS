import React from "react";
import { Link, useLocation, useNavigation } from "@remix-run/react";
import { cn as classNames } from "~/lib/utils";
import { navigationItems } from "~/lib/config/navigation-items";
import { Icons } from "../shared/icons";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuShortcut,
} from "~/components/ui/dropdown-menu";
import { PiCaretUpDown } from "react-icons/pi";
import { Button } from "../ui/button";

export function AppLayout({
  children,
  profileButtonDetails,
}: {
  children: React.ReactNode;
  profileButtonDetails: {
    fullName: string;
    username: string;
  };
}) {
  const { pathname } = useLocation();
  const navigation = useNavigation();

  const menuItems = navigationItems;

  return (
    <div className="grid min-h-screen grid-cols-12 bg-gray-50/50">
      <div className="col-span-2 flex justify-center">
        {/* Static sidebar for desktop */}
        <div className="fixed inset-y-0 bg-gray-50/50 lg:flex lg:min-w-64 lg:flex-col lg:pb-4 lg:pt-5">
          <div className="flex flex-shrink-0 items-center px-6">
            <Icons.siteLogo />
            Unbound Trajectories
          </div>

          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="mt-5 flex h-0 flex-1 flex-col overflow-y-auto pt-1">
            {/* User account dropdown */}
            <div className="px-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="w-full h-16" variant="outline">
                    <span className="flex w-full items-center justify-between">
                      <span className="flex min-w-0 items-center justify-between space-x-3">
                        <Avatar>
                          <AvatarFallback className="text-white bg-primary">
                            JD
                          </AvatarFallback>
                        </Avatar>
                        <span className="flex min-w-0 flex-1 flex-col">
                          <span className="truncate text-sm font-medium text-gray-900">
                            {profileButtonDetails?.fullName ?? "-"}
                          </span>
                          <span className="truncate text-sm text-gray-500">
                            {`${profileButtonDetails?.username ?? " -"}`}
                          </span>
                        </span>
                      </span>
                      <PiCaretUpDown
                        className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Profile
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Navigation */}
            <nav className="mt-6 px-3">
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    prefetch="intent"
                    className={classNames(
                      pathname.split("/")[1] === item?.href.split("/")[1]
                        ? "text-primary border border-primary/10 bg-primary/10"
                        : "border border-transparent text-gray-700 hover:bg-gray-200/50 hover:text-gray-900",
                      "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        pathname.split("/")[1] === item?.href.split("/")[1]
                          ? "text-primary"
                          : "text-gray-400 group-hover:text-gray-500",
                        "mr-3 h-6 w-6 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Main column */}
      <div className="col-span-10 mt-3 w-full rounded-tl-md border border-gray-200 bg-white shadow-sm">
        <div
          className={classNames(
            "rounded-t-md h-1",
            navigation.state === "loading" && "bg-primary animate-pulse"
          )}
        />
        <div className="p-8 w-full">{children}</div>
      </div>
    </div>
  );
}
