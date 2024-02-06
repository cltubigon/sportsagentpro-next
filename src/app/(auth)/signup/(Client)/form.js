"use client"
import { Flex, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import { signupFormStyle } from "./signupFormStyle"
import { accountTypes } from "./acountTypes"

const SignupForm = () => {
  const [activeType, setActiveType] = useState(0)

  console.log({ activeType })

  const handleClick = (id) => {
    setActiveType(id)
  }

  return (
    <div>
      <Flex gap={6} flexDirection={"column"} mt={6}>
        {accountTypes.map((type, index) => {
          return (
            <Flex
              sx={
                activeType === type.id
                  ? signupFormStyle.activeContainer
                  : signupFormStyle.container
              }
              key={index}
              onClick={() => handleClick(type.id)}
            >
              <type.icon size={"24px"} color={"#718096"} />
              <Flex>
                <Flex flexDirection={"column"}>
                  <Text fontWeight={"semibold"}>{type.type}</Text>
                  <Text fontSize={"sm"}>{type.desc}</Text>
                </Flex>
              </Flex>
            </Flex>
          )
        })}
      </Flex>
    </div>
  )
}

export default SignupForm
