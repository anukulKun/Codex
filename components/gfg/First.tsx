import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface Course {
  title: string
  rating: number
  level: string
  interestedCount: string
  backgroundColor: string
  icon: string
}

const courses: Course[] = [
  {
    title: "DSA to Development: A Complete Guide",
    rating: 4.4,
    level: "Beginner to Advance",
    interestedCount: "450k+ interested Geeks",
    backgroundColor: "bg-emerald-600",
    icon: "?"
  },
  {
    title: "JAVA Backend Development - Live",
    rating: 4.7,
    level: "Intermediate and Advance",
    interestedCount: "264k+ interested Geeks",
    backgroundColor: "bg-indigo-600",
    icon: "⚙️"
  },
  {
    title: "Tech Interview 101 - From DSA to System Design",
    rating: 4.9,
    level: "Beginner to Advance",
    interestedCount: "315k+ interested Geeks",
    backgroundColor: "bg-blue-700",
    icon: "⚙️"
  }
]

export default function CourseListing() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-8">Hello, What Do You Want To Learn?</h1>
        <div className="max-w-2xl mx-auto relative">
          <Input
            type="text"
            placeholder="GeeksforGeeks Courses"
            className="pl-4 pr-10 py-2 w-full rounded-lg"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <Button variant="outline">Master DS & ML</Button>
          <Button className="bg-orange-500 hover:bg-orange-600">Go Premium</Button>
          <Button variant="outline">Full Stack Live Classes</Button>
        </div>
      </div>

      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Courses</h2>
        <Button variant="ghost" className="text-green-600">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div className={`${course.backgroundColor} p-6 text-white h-40 relative`}>
                <span className="absolute top-4 right-4 bg-white/20 px-2 py-1 rounded text-sm">
                  ★ {course.rating}
                </span>
                <div className="text-4xl mb-2">{course.icon}</div>
                <div className="text-xl font-semibold">{course.title.split(':')[0]}</div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{course.title}</h3>
                <div className="text-sm text-gray-600 mb-2">{course.level}</div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{course.interestedCount}</span>
                  <Button variant="link" className="text-green-600 p-0">
                    Explore now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

