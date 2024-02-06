"use client"
import { Avatar, Flex, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"

const SignedOutNavigation = () => {
  console.log("SignedOutNavigation")
  return (
    <header>
      <Flex
        bgColor={"blue.800"}
        alignItems={"center"}
        px={4}
        py={5}
        position={"fixed"}
        top={0}
        width={"100%"}
      >
        <Link href={"/"}>
          <Heading fontSize={"3xl"} color={"white"}>
            Sports Agent Pro
          </Heading>
        </Link>
        <Flex
          gap={6}
          alignItems={"center"}
          flexGrow={1}
          justifyContent={"flex-end"}
        >
          <Link href={"/login"}>
            <Flex flexDirection={"column"}>
              <Avatar size={"xs"} alignSelf={"center"} />
              <Text color={"white"}>Login</Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
      <Flex h={"88px"} />
    </header>
  )
}

export default SignedOutNavigation
