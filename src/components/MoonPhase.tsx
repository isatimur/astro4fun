import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const MoonPhase: React.FC = () => {
  const [moonPhase, setMoonPhase] = useState<string>('')

  useEffect(() => {
    const calculateMoonPhase = () => {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()

      const c = Math.floor((year - 1900) / 100)
      const y = year - 1900 - c * 100
      const m = month
      const d = day

      const jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + (c * 0.75) - 1524.5
      const days = jd - 2451549.5
      const newMoons = days / 29.53
      const phase = newMoons - Math.floor(newMoons)

      if (phase < 0.0625 || phase >= 0.9375) return 'New Moon'
      if (phase < 0.1875) return 'Waxing Crescent'
      if (phase < 0.3125) return 'First Quarter'
      if (phase < 0.4375) return 'Waxing Gibbous'
      if (phase < 0.5625) return 'Full Moon'
      if (phase < 0.6875) return 'Waning Gibbous'
      if (phase < 0.8125) return 'Last Quarter'
      return 'Waning Crescent'
    }

    setMoonPhase(calculateMoonPhase())
  }, [])

  return (
    <Card className="bg-white/5 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-white">Current Moon Phase</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white text-center text-2xl">{moonPhase}</p>
      </CardContent>
    </Card>
  )
}

export default MoonPhase