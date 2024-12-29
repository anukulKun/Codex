import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CourseCardProps {
  title: string
  instructor: string
  rating: number
  reviews: number
  price: number
  image: string
  isBestseller?: boolean
}

export function CourseCard({
  title,
  instructor,
  rating,
  reviews,
  price,
  image,
  isBestseller = false,
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{instructor}</p>
        <div className="flex items-center gap-1 mb-2">
          <span className="font-bold text-sm">{rating}</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "fill-primary text-primary"
                    : "fill-muted text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({reviews.toLocaleString()})</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold">₹{price.toLocaleString()}</span>
          {isBestseller && (
            <Badge variant="secondary" className="font-semibold">
              Bestseller
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

