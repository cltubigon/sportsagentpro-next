import BannerSection from "@/components/Home/BannerSection"
import SubNavigation from "@/components/Home/SubNavigation"
import React from "react"

const Home = () => {
  console.log("Homepage")
  return (
    <div>
      <SubNavigation />
      <BannerSection />
    </div>
  )
}

export default Home
