import { HeroSection } from '@/components/sections/hero.component'
import { ServicesPreview } from '@/components/sections/services-preview.component'
import { StackPreview } from '@/components/sections/stack-preview.component'
import { ApproachSection } from '@/components/sections/approach.component'
import { TestimonialsSection } from '@/components/sections/testimonials.component'

export default function Home() {
  return (
    <>
      <div className="grid md:grid-cols-[2fr_1fr]">
        <HeroSection />
        <ServicesPreview />
        <StackPreview />
      </div>
      <ApproachSection />
      <TestimonialsSection />
    </>
  )
}
