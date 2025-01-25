import { Wifi, Utensils, Wind, Clock } from "lucide-react"

const features = [
  { icon: Wifi, title: "Free Wi-Fi", description: "Stay connected with high-speed internet throughout the hotel." },
  { icon: Utensils, title: "Gourmet Dining", description: "Enjoy exquisite meals at our in-house restaurant." },
  { icon: Wind, title: "Spa & Wellness", description: "Relax and rejuvenate with our premium spa services." },
  { icon: Clock, title: "24/7 Service", description: "Our staff is available round the clock to cater to your needs." },
]

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

