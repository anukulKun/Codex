
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clock, MoreVertical } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Udemy/Navbar";

function Mpage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar/>
      {/* Header */}
      <header className="bg-zinc-900 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-serif mb-6">My learning</h1>
          <nav>
            <ul className="flex gap-8">
              <li className="border-b-2 border-white pb-2">All courses</li>
              <li>My Lists</li>
              <li>Wishlist</li>
              <li>Archived</li>
              <li>Learning tools</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Schedule Learning Time Card */}
        <Card className="p-6">
          <div className="flex gap-4">
            <Clock className="w-6 h-6" />
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Schedule learning time</h2>
              <p className="text-muted-foreground">
                Learning a little each day adds up. Research shows that students
                who make learning a habit are more likely to reach their goals.
                Set time aside to learn and get reminders using your learning
                scheduler.
              </p>
              <div className="flex gap-4 mt-4">
                <Button>Get started</Button>
                <Button variant="ghost">Dismiss</Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Course 1 */}
          <Card>
            <CardHeader className="p-0">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Web Development"
                  className="w-full aspect-video object-cover"
                />
                <Button variant="ghost" className="absolute top-2 right-2 p-2">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <h3 className="font-semibold">
                The Complete 2024 Web Development Bootcamp
              </h3>
              <p className="text-sm text-muted-foreground">
                Dr. Angela Yu, Developer and Lead...
              </p>
              <Progress value={44} className="h-1" />
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  44% complete
                </span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 fill-primary"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Course 2 */}
          <Card>
            <CardHeader className="p-0">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="DevOps Course"
                  className="w-full aspect-video object-cover"
                />
                <Button variant="ghost" className="absolute top-2 right-2 p-2">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <h3 className="font-semibold">
                DevOps Beginners to Advanced with Projects
              </h3>
              <p className="text-sm text-muted-foreground">Imran Teli</p>
              <Progress value={14} className="h-1" />
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  14% complete
                </span>
                <span className="text-sm text-muted-foreground">
                  Leave a rating
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Course 3 */}
          <Card>
            <CardHeader className="p-0">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Web Analytics"
                  className="w-full aspect-video object-cover"
                />
                <Button variant="ghost" className="absolute top-2 right-2 p-2">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <h3 className="font-semibold">
                Web Analytics with Similarweb: from Basic to Advanced
              </h3>
              <p className="text-sm text-muted-foreground">
                Anton Voroniuk, Anton Voroniuk Support
              </p>
              <Button className="w-full">START COURSE</Button>
            </CardContent>
          </Card>

          {/* Course 4 */}
          <Card>
            <CardHeader className="p-0">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Logo Design"
                  className="w-full aspect-video object-cover"
                />
                <Button variant="ghost" className="absolute top-2 right-2 p-2">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <h3 className="font-semibold">
                Professional Logo Design With Artificial Intelligence
              </h3>
              <p className="text-sm text-muted-foreground">DG Education</p>
              <Button className="w-full">START COURSE</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default Mpage;
