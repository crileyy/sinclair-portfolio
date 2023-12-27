'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tenLMuyAYel
 */
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Welcome to My Photography Portfolio
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore my collection of portraits, landscapes, and event photography.
                </p>
              </div>
              <div className="space-x-4">
                <a href="#featured-works">
                  <Button className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                    My Work
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 id="featured-works" className="text-3xl font-bold tracking-tighter mb-4">Featured Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <div className="relative h-0 pb-[75%]">
                  <Image
                    alt="Portrait 1"
                    className="absolute inset-0 w-full h-full object-cover"
                    height="400"
                    src="/images/test-image.png"
                    style={{
                      aspectRatio: "300/400",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                </div>
                <CardHeader className="font-bold text-lg pt-4">Portrait 1</CardHeader>
                <CardContent className="text-gray-500">
                  A captivating portrait showcasing depth and emotion.
                </CardContent>
              </Card>
              <Card>
                <div className="relative h-0 pb-[75%]">
                  <Image
                    alt="Landscape 1"
                    className="absolute inset-0 w-full h-full object-cover"
                    height="400"
                    src="/images/test-image.png"
                    style={{
                      aspectRatio: "300/400",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                </div>
                <CardHeader className="font-bold text-lg pt-4">Landscape 1</CardHeader>
                <CardContent className="text-gray-500">
                  A stunning landscape capturing the beauty of nature.
                </CardContent>
              </Card>
              <Card>
                <div className="relative h-0 pb-[75%]">
                  <Image
                    alt="Event 1"
                    className="absolute inset-0 w-full h-full object-cover"
                    height="400"
                    src="/images/test-image.png"
                    style={{
                      aspectRatio: "300/400",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                </div>
                <CardHeader className="font-bold text-lg pt-4">Event 1</CardHeader>
                <CardContent className="text-gray-500">
                  An event capturing the joy and excitement of the moment.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
