import React, { useState } from "react"
import { VStack, Heading, Icon, useTheme } from "native-base"
import { Envelope, Key } from "phosphor-react-native"

import Logo from "../assets/logo_primary.svg"
// import LogoPng from "../assets/logo.png"

import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { Image } from "../assets/Image"

export function SignIn() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const { colors } = useTheme()
  return (
    <VStack flex={1} alignItems="center" bg="gray.700" px={8} pt={8}>
      <Logo />
      {/* <Image /> */}
      <Heading color="gray.100" fontSize="xl" mt={1} mb={4}>
        Access your Wallet
      </Heading>
      <Input
        placeholder="E-mail"
        mb={4}
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
        }
        onChangeText={setName}
      />
      <Input
        placeholder="Password"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" w="full" mt="4" bg="blue.300" />
    </VStack>
  )
}
