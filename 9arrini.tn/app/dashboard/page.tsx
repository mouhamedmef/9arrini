import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { StudyRoomCard } from "@/components/study-room-card"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r bg-muted/40 p-6">
        <div className="flex flex-col gap-4">
          <Link href="/dashboard/create">
            <Button className="w-full">
              <Icons.plus className="mr-2 h-4 w-4" />
              Create Study Room
            </Button>
          </Link>
          <nav className="grid gap-2">
            <Link href="/dashboard" className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-primary">
              <Icons.compass className="h-4 w-4" />
              Discover
            </Link>
            <Link href="/dashboard/my-rooms" className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-accent">
              <Icons.users className="h-4 w-4" />
              My Study Rooms
            </Link>
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Discover Study Rooms</h1>
          <div className="relative w-64">
            <Input placeholder="Search rooms..." className="pl-8" />
            <Icons.search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        <div className="mt-6 grid gap-4">
          <StudyRoomCard
            title="Mathematics Study Group"
            description="Join us for calculus and algebra practice"
            participants={3}
            timeCreated="2 hours ago"
            topic="Mathematics"
          />
          <StudyRoomCard
            title="Computer Science Discussion"
            description="Algorithm and data structure preparation"
            participants={5}
            timeCreated="1 hour ago"
            topic="Computer Science"
          />
          <StudyRoomCard
            title="Physics Problem Solving"
            description="Working through mechanics problems"
            participants={2}
            timeCreated="30 minutes ago"
            topic="Physics"
          />
        </div>
      </main>
    </div>
  )
}

