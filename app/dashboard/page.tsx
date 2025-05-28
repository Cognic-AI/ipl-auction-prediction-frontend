"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, Users, Trophy, Plus, TrendingUp, Star } from "lucide-react"
import { SidebarLayout } from "@/components/sidebar-layout"

const teamMembers = [
  {
    id: 1,
    name: "Lionel Messi",
    position: "Forward",
    team: "Inter Miami",
    points: 245,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Kevin De Bruyne",
    position: "Midfielder",
    team: "Man City",
    points: 198,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Virgil van Dijk",
    position: "Defender",
    team: "Liverpool",
    points: 156,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Alisson",
    position: "Goalkeeper",
    team: "Liverpool",
    points: 134,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const teams = [
  { id: 1, name: "Champions League Squad", players: 11, budget: 85.5, performance: "+12%" },
  { id: 2, name: "Premier League Elite", players: 15, budget: 92.3, performance: "+8%" },
  { id: 3, name: "La Liga Masters", players: 13, budget: 78.9, performance: "+15%" },
]

export default function Dashboard() {
  return (
    <SidebarLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your fantasy sports overview.</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Team
          </Button>
        </div>

        {/* Budget Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-200 dark:border-green-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available Budget</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">$156.7M</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+2.5%</span> from last week
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Current Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Current Team Members
              </CardTitle>
              <CardDescription>Your top performing players this season</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {teamMembers.map((player, index) => (
                  <motion.div
                    key={player.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ scale: 1.02 }}
                    className="cursor-pointer"
                  >
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={player.avatar || "/placeholder.svg"} alt={player.name} />
                            <AvatarFallback>
                              {player.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{player.name}</p>
                            <p className="text-xs text-muted-foreground">{player.position}</p>
                            <p className="text-xs text-muted-foreground">{player.team}</p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs">
                            {player.points} pts
                          </Badge>
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Currently Created Teams */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Currently Created Teams
              </CardTitle>
              <CardDescription>Manage and track your fantasy teams</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {teams.map((team, index) => (
                  <motion.div
                    key={team.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ scale: 1.02 }}
                    className="cursor-pointer"
                  >
                    <Card className="hover:shadow-lg transition-all duration-200">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold text-lg">{team.name}</h3>
                            <p className="text-sm text-muted-foreground">{team.players} players</p>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Budget Used</span>
                              <span className="font-medium">${team.budget}M</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Performance</span>
                              <Badge variant="secondary" className="text-green-600">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                {team.performance}
                              </Badge>
                            </div>
                          </div>

                          <Button variant="outline" className="w-full">
                            View Team
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </SidebarLayout>
  )
}
