import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

interface StudyRoomCardProps {
  title: string
  description: string
  participants: number
  timeCreated: string
  topic: string
}

export function StudyRoomCard({ title, description, participants, timeCreated, topic }: StudyRoomCardProps) {
  return (
    <Link href={`/room/${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <Card className="hover:bg-muted/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <div className="flex items-center text-sm text-muted-foreground">
            <Icons.clock className="mr-1 h-4 w-4" />
            {timeCreated}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="mt-4 flex items-center gap-4 text-sm">
            <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">{topic}</span>
            <div className="flex items-center text-muted-foreground">
              <Icons.users className="mr-1 h-4 w-4" />
              {participants} participants
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

