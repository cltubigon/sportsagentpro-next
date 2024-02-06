import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"
import Authentication from "@/components/authentication/Authentication"
import SignupForm from "./(Client)/form"
import { authStyle } from "../style"

const SignupPage = () => {
  console.log("signup")
  return (
    <div>
      <Authentication>
        <Text sx={authStyle.title}>
          Select account type
        </Text>
        <SignupForm />
        <Flex sx={authStyle.signupContainer}>
          <Text>Already have an account?</Text>
          <Link href={"/login"}>
            <Button sx={authStyle.signupBtn}>Login</Button>
          </Link>
        </Flex>
      </Authentication>
    </div>
  )
}

export default SignupPage
