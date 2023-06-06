/* eslint-disable prettier/prettier */
import { FloatButton, Popover } from "antd"
import { useCallback, useEffect, useLayoutEffect, useState } from "react"
import { BsMoonStarsFill, BsSun, BsLaptop } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { setTheme } from "../../../store"

export const ThemeSwitcher = () => {
  const dispatch = useDispatch()
  const [popOver, setPopOver] = useState(false)
  const [dark, setDark] = useState("")
  const SetDark = (text: string) => {
    setPopOver(false)
    setDark(text)
    localStorage.setItem("theme", text)
  }
  const element = document.documentElement
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
  const handleSytemTheme = useCallback(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && systemTheme.matches)
    ) {
      element.classList.add("dark")
    } else {
      element.classList.remove("dark")
    }
  }, [element.classList, systemTheme.matches])

  useLayoutEffect(() => {
    handleSytemTheme()
  }, [handleSytemTheme])

  useEffect(() => {
    switch (dark) {
      case "dark":
        element.classList.add("dark")
        localStorage.setItem("theme", "dark")
        dispatch(setTheme(dark))
        break
      case "light":
        element.classList.remove("dark")
        localStorage.setItem("theme", "light")
        dispatch(setTheme(dark))
        break
      default:
        break
    }
  }, [dark, dispatch, element.classList, handleSytemTheme])

  systemTheme.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark")
      } else {
        element.classList.remove("dark")
      }
    }
  })
  const content = (
    <div className="grid gap-5 theme">
      <BsMoonStarsFill
        onClick={() => SetDark("dark")}
        className="cursor-pointer text-black dark:text-white"
      />
      <BsSun
        onClick={() => SetDark("light")}
        className="cursor-pointer text-black dark:text-white"
      />
      <BsLaptop
        onClick={() => SetDark("system")}
        className="cursor-pointer text-black dark:text-white"
      />
    </div>
  )
  return (
    <Popover open={popOver} content={content} trigger="click">
      <FloatButton
        onClick={() => setPopOver(true)}
        icon={
          dark === "dark" ? (
            <BsMoonStarsFill />
          ) : dark === "system" ? (
            <BsLaptop />
          ) : (
            <BsSun />
          )
        }
      />
    </Popover>
  )
}
