import { HeroSection } from '@/components/sections/hero.component'
import { ServicesPreview } from '@/components/sections/services-preview.component'
import { TopArticles } from '@/components/sections/location-preview.component'

export default function Home() {
  return (
    <>
      <div className="flex h-full flex-col justify-between">
        <div>
          <HeroSection />
          <ServicesPreview />
        </div>
        <TopArticles />
      </div>
    </>
  )
}
