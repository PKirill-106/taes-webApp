import AboutUs from '@/components/main-page/about-us/AboutUs'
import AboutUsInNumbers from '@/components/main-page/about-us/AboutUsInNumbers'
import BannerSection from '@/components/main-page/banner/BannerSection'
import Benefits from '@/components/main-page/Benefits'
import MainPartners from '@/components/main-page/MainPartners'

export default function Home() {
	return (
		<>
			<BannerSection />
			<AboutUsInNumbers />
			<AboutUs />
			<Benefits />
			<MainPartners />
		</>
	)
}
