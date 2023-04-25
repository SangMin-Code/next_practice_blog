import CarouselPost from '@/components/CarouselPost'
import FeaturedPosts from '@/components/FeaturedPosts'
import Hero from '@/components/Hero'

export default async function Home() {
  
  // const feature = await FeaturedPosts();
  return (
    <section>
      <Hero/>
       {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts/>
       {/* @ts-expect-error Async Server Component */}
      <CarouselPost/>
    </section>
  )
}
