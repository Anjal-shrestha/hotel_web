import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-screen">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Luxury hotel room"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Hotel Tanahun Vyas</h1>
        <p className="text-xl text-white mb-8 max-w-md">
          Experience luxury and comfort in the heart of the city. Book your stay today and create unforgettable
          memories.
        </p>
        <Button size="lg">Book Now</Button>
      </div>
    </section>
  )
}

