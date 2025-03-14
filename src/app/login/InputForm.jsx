"use client"
import { Input } from "@heroui/input"
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react"

const InputForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <form className="flex flex-col gap-4">
      <Input
          type="email"
          label="Email"
          className="w-72"
        />
      <Input
          type={isVisible ? "text" : "password"}
          label="Password"
          className="w-72"
          endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
              {isVisible ? (
                <HiEyeOff className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <HiEye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
        />
    </form>
  )
}

export default InputForm