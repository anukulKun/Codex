import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clock, MoreVertical } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Udemy/Navbar";
import Image from "next/image";

function Mpage() {
  const courses = [
    {
      title: "Deep Learning A-Z 2024: Neural Networks, AI & ChatGPT Prize",
      instructor: "Kirill Eremenko, Hadelin de Ponteves",
      rating: 4.6,
      reviews: 47213,
      price: 3999,
      image: "/name1.png",
      isBestseller: true,
      progress: 44
    },
    {
      title: "Python for Deep Learning: Build Neural Networks in Python",
      instructor: "Meta Brains, Skool of AI",
      rating: 4.3,
      reviews: 1165,
      price: 1999,
      image: "/name2.webp",
      progress: 14
    },
    {
      title: "Complete Guide to TensorFlow for Deep Learning with Python",
      instructor: "Jose Portilla, Pierian Training",
      rating: 4.3,
      reviews: 16975,
      price: 3299,
      image: "/name3.png",
      progress: 0
    },
    {
      title: "[2023] Tensorflow 2: Deep Learning & Artificial Intelligence",
      instructor: "Lazy Programmer Inc., Lazy Programmer",
      rating: 4.6,
      reviews: 13030,
      price: 3699,
      image: "/name4.jpg",
      progress: 0
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card key={index}>
              <CardHeader className="p-0">
                <div className="relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={200}
                    className="w-full aspect-video object-cover"
                  />
                  <Button variant="ghost" className="absolute top-2 right-2 p-2">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <h3 className="font-semibold">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {course.instructor}
                </p>
                {course.progress > 0 ? (
                  <>
                    <Progress value={course.progress} className="h-1" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {course.progress}% complete
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
                  </>
                ) : (
                  <Button className="w-full">START COURSE</Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Mpage;