import React from 'react'
import { motion } from 'framer-motion'
import { ZodiacSign } from '../types'
import { Button } from './ui/button'

const zodiacSigns: ZodiacSign[] = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
]

interface ZodiacSelectorProps {
  onSelectSign: (sign: ZodiacSign) => void
  selectedSign: ZodiacSign | null
}

const ZodiacSelector: React.FC<ZodiacSelectorProps> = ({ onSelectSign, selectedSign }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-6">
      {zodiacSigns.map((sign, index) => (
        <motion.div
          key={sign}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Button
            onClick={() => onSelectSign(sign)}
            variant={selectedSign === sign ? "default" : "ghost"}
            className={`flex flex-col items-center justify-center p-2 h-20 w-full ${
              selectedSign === sign ? 'bg-primary text-white' : 'hover:bg-white/10'
            }`}
          >
            <img src={`/zodiac-icons/${sign.toLowerCase()}.svg`} alt={sign} className="w-8 h-8 mb-1" />
            <span className="text-xs">{sign}</span>
          </Button>
        </motion.div>
      ))}
    </div>
  )
}

export default ZodiacSelector