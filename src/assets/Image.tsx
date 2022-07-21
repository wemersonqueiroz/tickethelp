import React, { Component } from "react"
import { Image as ImageReactNative } from "react-native"

export function Image() {
  return (
    <ImageReactNative
      source={require("./logo.png")}
      style={{ width: 175 }}
      resizeMode={"contain"}
    />
  )
}
