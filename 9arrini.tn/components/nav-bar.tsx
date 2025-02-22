import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6">
          <Icons.logo className="h-8 w-8 text-primary" />
        </Link>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-2xl">
            <div className="relative">
              <Icons.search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search topics or study rooms..."
                className="w-full pl-10 md:w-[500px]"
              />
            </div>
          </div>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <Link href="/profile">
              <Icons.user className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

