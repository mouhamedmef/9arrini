"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function SideNav() {
  const pathname = usePathname()

  return (
    <div className="flex w-[240px] flex-col gap-4 p-4">
      <Link href="/dashboard/create">
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          <Icons.plus className="mr-2 h-4 w-4" />
          Create Study Room
        </Button>
      </Link>

      <nav className="grid gap-1">
        <Link href="/dashboard">
          <span
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === "/dashboard" && "bg-primary/10 text-primary",
            )}
          >
            <Icons.discover className="mr-2 h-4 w-4" />
            Discover
          </span>
        </Link>
        <Link href="/dashboard/my-rooms">
          <span
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === "/dashboard/my-rooms" && "bg-primary/10 text-primary",
            )}
          >
            <Icons.users className="mr-2 h-4 w-4" />
            My Study Rooms
          </span>
        </Link>
      </nav>
    </div>
  )
}

