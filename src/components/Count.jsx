import { useState, useEffect } from "react"
import Cards from "./Cards"
import Finished from "./Finished"

const Count = () => {
  const getDate = () => {
    const presentDate = new Date().getTime()
    const elapseDate = Date.parse("august 17, 2022")

    const dayDivider = 1000 * 24 * 60 * 60
    const hourDivider = 1000 * 60 * 60
    const minuteDivider = 1000 * 60
    const secondDivider = 1000

    const timeDifference = elapseDate - presentDate
    if (timeDifference > 0) {
      return {
        days: Math.floor(timeDifference / dayDivider),
        hours: Math.floor((timeDifference / hourDivider) % 24),
        minutes: Math.floor((timeDifference / minuteDivider) % 60),
        seconds: Math.floor((timeDifference / secondDivider) % 60),
      }
    }
  }
  const [time, setTime] = useState(getDate())
  const timer = () => setTime(getDate)

  const startTime = () => {
    setInterval(timer, 1000)
  }

  useEffect(() => {
    startTime()

    return () => clearInterval(startTime)
  }, [])

  return (
    <>
      {time && <Cards count={time} />}
      {!time && <Finished />}
    </>
  )
}

export default Count
