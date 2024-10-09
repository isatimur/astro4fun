import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

const planets = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto']
const houses = Array.from({ length: 12 }, (_, i) => `House ${i + 1}`)
const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']

interface ChartData {
  [key: string]: { house: string; sign: string; degree: number }
}

const AstrologyChart: React.FC = () => {
  const [birthdate, setBirthdate] = useState('')
  const [birthtime, setBirthtime] = useState('')
  const [birthplace, setBirthplace] = useState('')
  const [chartData, setChartData] = useState<ChartData>({})

  const generateRandomChart = () => {
    const newChartData: ChartData = {}
    planets.forEach(planet => {
      newChartData[planet] = {
        house: houses[Math.floor(Math.random() * houses.length)],
        sign: zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)],
        degree: Math.floor(Math.random() * 30)
      }
    })
    setChartData(newChartData)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, we would use this data to calculate the actual chart
    // For now, we'll just generate a random chart
    generateRandomChart()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Astrology Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div>
              <Label htmlFor="birthdate">Birth Date</Label>
              <Input
                id="birthdate"
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className="bg-white/5 text-white"
                required
              />
            </div>
            <div>
              <Label htmlFor="birthtime">Birth Time</Label>
              <Input
                id="birthtime"
                type="time"
                value={birthtime}
                onChange={(e) => setBirthtime(e.target.value)}
                className="bg-white/5 text-white"
                required
              />
            </div>
            <div>
              <Label htmlFor="birthplace">Birth Place</Label>
              <Input
                id="birthplace"
                type="text"
                value={birthplace}
                onChange={(e) => setBirthplace(e.target.value)}
                className="bg-white/5 text-white"
                placeholder="City, Country"
                required
              />
            </div>
            <Button type="submit">Generate Chart</Button>
          </form>
          {Object.keys(chartData).length > 0 ? (
            <div className="grid grid-cols-2 gap-2">
              {planets.map(planet => (
                <div key={planet} className="bg-white/5 p-2 rounded">
                  <span className="font-semibold text-primary">{planet}:</span>
                  <br />
                  {chartData[planet].sign} {chartData[planet].degree}° in {chartData[planet].house}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white text-opacity-70">Enter your birth details and generate a chart to see your astrological placements.</p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default AstrologyChart