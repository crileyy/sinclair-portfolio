'use client'
import Navigation from '@/components/navigation'
import Link from 'next/link'
import JobCard from '@/components/job-card'
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{'Hi I\'m Sinclair! I am a photographer assistant...'}</p>
      <p>Below are some of the photos Ive helped take for each job, click on a photo to more about that job experience</p>
      {/* List all photo jobs as individual photos that can be clicked on
      - each photo is a MUI card that's only an image
       */}
      {/* <JobCard /> */}
      {/* <img src="/images/test-image.png" /> */}
      <Carousel autoPlay={true} showArrows={true} infiniteLoop={true}>
        <div>
          {/* <Image src="/public/images/test-image.png" alt="test" width={500} height={500} /> */}
          <img src="/images/test-image.png" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          {/* <Image src="/public/images/test-image.png" alt="test" width={500} height={500} /> */}
          <img src="/images/test-image.png" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          {/* <Image src="/public/images/test-image.png" alt="test" width={500} height={500} /> */}
          <img src="/images/test-image.png" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  )
}
