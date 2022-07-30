import { useState } from "react"
import Cards from "./Cards"

const Count = () => {
  const getDate = () => {
    const presentDate = new Date().getTime()
    const elapseDate = Date.parse("august 29, 2022")

    const dayDivider = 1000 * 24 * 60 * 60
    const hourDivider = 1000 * 60 * 60
    const minuteDivider = 1000 * 60
    const secondDivider = 1000

    const timeDifference = elapseDate - presentDate
    if (timeDifference > 0)
      return {
        days: Math.floor(timeDifference / dayDivider),
        hours: Math.floor((timeDifference / hourDivider) % 24),
        minutes: Math.floor((timeDifference / minuteDivider) % 60),
        seconds: Math.floor((timeDifference / secondDivider) % 60),
      }
    if (timeDifference <= 0) {
      return (
        <>
          <Cards />
        </>
      )
    }
  }
  const [time, setTime] = useState(getDate())
  const timer = () => setTime(getDate)

  setInterval(() => {
    timer()
  }, 1000)

  return (
    <>
      <Cards count={time} />
    </>
  )
}

export default Count
