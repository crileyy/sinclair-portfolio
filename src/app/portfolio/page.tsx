/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7XnzswOT2HL
 */
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <main className="p-4 md:p-6">
      <h1 className="text-4xl font-bold tracking-tighter text-center mb-8">Photography Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="relative group overflow-hidden rounded-lg">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View Photo 1</span>
          </Link>
          <Image
            alt="Photo 1"
            className="object-cover w-full h-60 transition-opacity group-hover:opacity-50"
            height="600"
            src="/images/test-image.png"
            style={{
              aspectRatio: "600/600",
              objectFit: "cover",
            }}
            width="600"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity" />
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View Photo 2</span>
          </Link>
          <Image
            alt="Photo 2"
            className="object-cover w-full h-60 transition-opacity group-hover:opacity-50"
            height="600"
            src="/images/test-image.png"
            style={{
              aspectRatio: "600/600",
              objectFit: "cover",
            }}
            width="600"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity" />
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View Photo 3</span>
          </Link>
          <Image
            alt="Photo 3"
            className="object-cover w-full h-60 transition-opacity group-hover:opacity-50"
            height="600"
            src="/images/test-image.png"
            style={{
              aspectRatio: "600/600",
              objectFit: "cover",
            }}
            width="600"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity" />
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View Photo 4</span>
          </Link>
          <Image
            alt="Photo 4"
            className="object-cover w-full h-60 transition-opacity group-hover:opacity-50"
            height="600"
            src="/images/test-image.png"
            style={{
              aspectRatio: "600/600",
              objectFit: "cover",
            }}
            width="600"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity" />
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View Photo 4</span>
          </Link>
          <Image
            alt="Photo 4"
            className="object-cover w-full h-60 transition-opacity group-hover:opacity-50"
            height="600"
            src="/images/test-image.png"
            style={{
              aspectRatio: "600/600",
              objectFit: "cover",
            }}
            width="600"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity" />
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View Photo 4</span>
          </Link>
          <Image
            alt="Photo 4"
            className="object-cover w-full h-60 transition-opacity group-hover:opacity-50"
            height="600"
            src="/images/test-image.png"
            style={{
              aspectRatio: "600/600",
              objectFit: "cover",
            }}
            width="600"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity" />
        </div>
      </div>
    </main>
  )
}
