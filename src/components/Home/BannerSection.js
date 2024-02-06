import SubNavigation from "@/components/Home/SubNavigation"
import { Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"

const BannerSection = () => {
  return (
    <Flex
      bgImage={'url("./images/banner.jpg")'}
      bgSize={"cover"}
      bgPosition={"center center"}
      flexDirection={"column"}
      justifyContent={"center"}
      py={"130px"}
      px={"69px"}
      gap={2}
    >
      <Heading fontSize={"5xl"} color={"white"} maxW={"45%"}>
        SUPPORT YOUR FAVORITE ATHLETES
      </Heading>
      <Text color={"white"} fontSize={"lg"}>
        Request social posts, shoutouts, autographs, appearances, and more
      </Text>
    </Flex>
  )
}

export default BannerSection