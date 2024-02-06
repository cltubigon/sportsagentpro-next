"use client"
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { authStyle } from "../../style"

const LoginForm = () => {
  const [show, setShow] = useState(false)

  const handleShowPassword = () => setShow((prev) => !prev)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log({ data })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* -------------- Email -------------- */}
        <FormControl isInvalid={errors.email} mt={4}>
          <FormLabel htmlFor="email" sx={authStyle.label}>
            Email
          </FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="email"
            autoComplete="email"
            {...register("email", {
              required: "Enter your email address",
              pattern: {
                // eslint-disable-next-line no-useless-escape
                value: /^[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+$/i,
                message: "Please enter a valid email",
              },
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        {/* -------------- Password -------------- */}
        <FormControl isInvalid={errors.password} mt={4}>
          <FormLabel htmlFor="password" sx={authStyle.label}>
            Password
          </FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              id="password"
              placeholder="Password"
              autoComplete="password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme="twitter" type="submit">
          Login
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
