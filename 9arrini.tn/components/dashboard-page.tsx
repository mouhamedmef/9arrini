import { NavBar } from "@/components/nav-bar"
import { SideNav } from "@/components/side-nav"

export function DashboardPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="flex">
        <aside className="fixed left-0 top-14 z-30 h-[calc(100vh-3.5rem)] w-[240px] border-r bg-background">
          <SideNav />
        </aside>
        <main className="flex-1 pl-[240px]">
          <div className="container py-6">
            <h1 className="text-2xl font-semibold">Discover Study Rooms</h1>
          </div>
        </main>
      </div>
    </div>
  )
}

