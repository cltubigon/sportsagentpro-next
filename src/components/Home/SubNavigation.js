'use client'
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react"
import { BsSearch, BsSortDownAlt } from "react-icons/bs"
import React from "react"
import { GiSettingsKnobs } from "react-icons/gi"

const SubNavigation = () => {
  return (
    <Flex justifyContent={"space-between"} px={4} py={5}>
      <InputGroup size="sm" maxW={"348px"}>
        <Flex>
          <InputLeftAddon h={"100%"}>
            <BsSearch />
          </InputLeftAddon>
          <Input placeholder="Search" h={"100%"} />
        </Flex>
      </InputGroup>
      <Flex gap={2}>
        <Button
          leftIcon={<GiSettingsKnobs />}
          variant="solid"
          border={"1px solid #E2E8F0"}
        >
          Email
        </Button>
        <Button
          leftIcon={<BsSortDownAlt />}
          flexGrow={1}
          variant="solid"
          border={"1px solid #E2E8F0"}
        >
          Sort: Recommended
        </Button>
      </Flex>
    </Flex>
  )
}

export default SubNavigation
