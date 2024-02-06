import { Flex, Heading } from "@chakra-ui/react"
import React from "react"
import { AuthenticationStyle } from "./AuthenticationStyle"

const Authentication = ({ children }) => {
  return (
    <Flex sx={AuthenticationStyle.container}>
      <Heading fontSize={"4xl"} mb={6}>Sports Agent Pro</Heading>
      <Flex sx={AuthenticationStyle.loginContainer}>{children}</Flex>
    </Flex>
  )
}

export default Authentication
