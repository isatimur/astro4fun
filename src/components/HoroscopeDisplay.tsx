import React from 'react'
import { motion } from 'framer-motion'
import { ZodiacSign } from '../types'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { getHoroscope } from '../utils/horoscope'

interface HoroscopeDisplayProps {
  sign: ZodiacSign
}

const HoroscopeDisplay: React.FC<HoroscopeDisplayProps> = ({ sign }) => {
  const { dailyHoroscope, weeklyHoroscope, monthlyHoroscope, luckyStar, luckyNumber, compatibility } = getHoroscope(sign)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <Card className="bg-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white flex items-center">
            <img src={`/zodiac-icons/${sign.toLowerCase()}.svg`} alt={sign} className="w-6 h-6 mr-2" />
            {sign} Horoscope
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="daily">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>
            <TabsContent value="daily">
              <p className="text-gray-200">{dailyHoroscope}</p>
            </TabsContent>
            <TabsContent value="weekly">
              <p className="text-gray-200">{weeklyHoroscope}</p>
            </TabsContent>
            <TabsContent value="monthly">
              <p className="text-gray-200">{monthlyHoroscope}</p>
            </TabsContent>
          </Tabs>
          <div className="grid grid-cols-2 gap-4 text-sm mt-4">
            <div className="bg-white/5 p-2 rounded">
              <span className="font-semibold text-primary">Lucky Star:</span> {luckyStar}
            </div>
            <div className="bg-white/5 p-2 rounded">
              <span className="font-semibold text-primary">Lucky Number:</span> {luckyNumber}
            </div>
            <div className="col-span-2 bg-white/5 p-2 rounded">
              <span className="font-semibold text-primary">Compatibility:</span> {compatibility}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default HoroscopeDisplay