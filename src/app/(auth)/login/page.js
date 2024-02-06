import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"
import LoginForm from "./(Client)/form"
import Authentication from "@/components/authentication/Authentication"
import { authStyle } from "../style"

const LoginPage = () => {
  console.log("Login")
  return (
    <div>
      <Authentication>
        <Text sx={authStyle.title}>
          User sign ins
        </Text>
        <LoginForm />
        <Flex sx={authStyle.signupContainer}>
          <Text>Dont have an account?</Text>
          <Link href={"/signup"}>
            <Button sx={authStyle.signupBtn}>Signup</Button>
          </Link>
        </Flex>
      </Authentication>
    </div>
  )
}

export default LoginPage
