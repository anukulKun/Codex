import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseCard } from "./courcecard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'
import Image from "next/image";


export default function Home() {

  
const courses = [
  {
    title: "Deep Learning A-Z 2024: Neural Networks, AI & ChatGPT Prize",
    instructor: "Kirill Eremenko, Hadelin de Ponteves",
    rating: 4.6,
    reviews: 47213,
    price: 3999,
    image: "/name1.png?height=200&width=380",
    isBestseller: true,
  },
  {
    title: "Python for Deep Learning: Build Neural Networks in Python",
    instructor: "Meta Brains, Skool of AI",
    rating: 4.3,
    reviews: 1165,
    price: 1999,
    image: "/name2.webp?height=200&width=380",
  },
  {
    title: "Complete Guide to TensorFlow for Deep Learning with Python",
    instructor: "Jose Portilla, Pierian Training",
    rating: 4.3,
    reviews: 16975,
    price: 3299,
    image: "/name3.png?height=200&width=380",
  },
  {
    title: "[2023] Tensorflow 2: Deep Learning & Artificial Intelligence",
    instructor: "Lazy Programmer Inc., Lazy Programmer",
    rating: 4.6,
    reviews: 13030,
    price: 3699,
    image: "/name4.jpg?height=200&width=380",
  },
];


  return (
    <>
      <div className="min-h-screen w-full">
        <div className="relative bg-gray-100">
          <div className="max-w-[1340px] mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="py-16">
                <h1 className="text-5xl font-serif mb-4">
                  Learning that gets you
                </h1>
                <p className="text-xl text-gray-600">
                  Skills for your present (and your future). Get started with
                  us.
                </p>
              </div>
              <div className="relative h-[500px] mb-4">
                <Image
                  src="/sol.svg"
                  alt="Learning illustration"
                  width={600}
                  height={500}
                  className="absolute inset-0 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="max-w-[1340px] mx-auto px-4 py-12">
          <h2 className="text-3xl font-serif mb-8">
            All the skills you need in one place
          </h2>
          <p className="text-gray-600 mb-8">
            From critical skills to technical topics, Udemy supports your
            professional development.
          </p>
          <Tabs defaultValue="data-science">
            <TabsList className="border-b">
              <TabsTrigger value="data-science">Data Science</TabsTrigger>
              <TabsTrigger value="it-certifications">
                IT Certifications
              </TabsTrigger>
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
              <TabsTrigger value="web-development">Web Development</TabsTrigger>
              <TabsTrigger value="communication">Communication</TabsTrigger>
              <TabsTrigger value="business-analytics">
                Business Analytics & Intelligence
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Show all Data Science courses
          </Button>
        </div>
      </div>
      <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Accelerate growth for you or your organization
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Personal Plan */}
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Personal Plan</CardTitle>
              <p className="text-sm text-muted-foreground">For you</p>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="text-muted-foreground">Individual</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Starting at ₹850 per month</h3>
                <p className="text-sm text-muted-foreground">Billed monthly or annually. Cancel anytime.</p>
              </div>
              <Button className="w-full">
                Start subscription
                <span className="ml-2">→</span>
              </Button>
              <ul className="space-y-3">
                {[
                  "Access to 12,000+ top courses",
                  "Certification prep",
                  "Goal-focused recommendations",
                  "AI-powered coding exercises"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Team Plan */}
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Team Plan</CardTitle>
              <p className="text-sm text-muted-foreground">For your team</p>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="text-muted-foreground">2 to 20 people</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold">₹2,000 a month per user</h3>
                <p className="text-sm text-muted-foreground">Billed annually. Cancel anytime.</p>
              </div>
              <Button className="w-full">
                Start subscription
                <span className="ml-2">→</span>
              </Button>
              <ul className="space-y-3">
                {[
                  "Access to 12,000+ top courses",
                  "Certification prep",
                  "Goal-focused recommendations",
                  "AI-powered coding exercises",
                  "Analytics and adoption reports"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Enterprise Plan</CardTitle>
              <p className="text-sm text-muted-foreground">For your whole organization</p>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="text-muted-foreground">More than 20 people</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Contact sales for pricing</h3>
              </div>
              <Button className="w-full">
                Request a demo
                <span className="ml-2">→</span>
              </Button>
              <ul className="space-y-3">
                {[
                  "Access to 27,000+ top courses",
                  "Certification prep",
                  "Goal-focused recommendations",
                  "AI-powered coding exercises",
                  "Advanced analytics and insights",
                  "Dedicated customer success team",
                  "International course collection featuring 15 languages",
                  "Customizable content",
                  "Hands-on tech training with add-on",
                  "Strategic implementation services with add-on"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>




    </>
  );
}
