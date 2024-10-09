import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { ZodiacSign } from '../types'

const ZodiacOfTheDay: React.FC = () => {
  const [zodiacOfDay, setZodiacOfDay] = useState<ZodiacSign>('Aries')
  const [fact, setFact] = useState('')

  useEffect(() => {
    const zodiacSigns: ZodiacSign[] = [
      'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
      'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
    ]
    const randomSign = zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)]
    setZodiacOfDay(randomSign)

    const facts = [
      "is ruled by Mars, the planet of action and desire.",
      "is an earth sign, known for its stability and practicality.",
      "is represented by the twins, symbolizing duality and communication.",
      "is a water sign, deeply connected to emotions and intuition.",
      "is ruled by the Sun, representing vitality and self-expression.",
      "is associated with Mercury, the planet of communication and analysis.",
      "is the only sign represented by an inanimate object - the scales.",
      "is known for its intensity and passion in all aspects of life.",
      "is a fire sign, characterized by its enthusiasm and love for adventure.",
      "is ruled by Saturn, the planet of discipline and responsibility.",
      "is an air sign, often associated with innovation and humanitarianism.",
      "is the last sign of the zodiac, known for its dreamy and intuitive nature."
    ]
    setFact(facts[zodiacSigns.indexOf(randomSign)])
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <Card className="bg-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Zodiac of the Day</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center mb-4">
            <img src={`/zodiac-icons/${zodiacOfDay.toLowerCase()}.svg`} alt={zodiacOfDay} className="w-16 h-16 mr-4" />
            <h3 className="text-3xl font-bold text-white">{zodiacOfDay}</h3>
          </div>
          <p className="text-white text-opacity-70 text-center">
            {zodiacOfDay} {fact}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ZodiacOfTheDay