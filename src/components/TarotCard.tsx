import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

const tarotCards = [
  { name: 'The Fool', meaning: 'New beginnings, spontaneity, and a free spirit' },
  { name: 'The Magician', meaning: 'Manifestation, resourcefulness, and inspired action' },
  { name: 'The High Priestess', meaning: 'Intuition, sacred knowledge, and divine feminine' },
  { name: 'The Empress', meaning: 'Femininity, beauty, nature, and abundance' },
  { name: 'The Emperor', meaning: 'Authority, structure, control, and fatherhood' },
  { name: 'The Hierophant', meaning: 'Spiritual wisdom, religious beliefs, conformity, tradition' },
  { name: 'The Lovers', meaning: 'Love, harmony, relationships, values alignment, choices' },
  { name: 'The Chariot', meaning: 'Control, willpower, success, action, determination' },
  { name: 'Strength', meaning: 'Strength, courage, persuasion, influence, compassion' },
  { name: 'The Hermit', meaning: 'Soul-searching, introspection, being alone, inner guidance' },
]

const TarotCard: React.FC = () => {
  const [card, setCard] = useState(tarotCards[0])
  const [isFlipped, setIsFlipped] = useState(false)

  const drawNewCard = () => {
    setIsFlipped(false)
    setTimeout(() => {
      const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)]
      setCard(randomCard)
      setIsFlipped(true)
    }, 300)
  }

  useEffect(() => {
    drawNewCard()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-white">Daily Tarot Card</CardTitle>
        </CardHeader>
        <CardContent>
          <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="w-full h-48 bg-purple-700 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">Tarot</span>
                </div>
              </div>
              <div className="flip-card-back">
                <h3 className="text-xl font-bold text-white mb-2">{card.name}</h3>
                <p className="text-white text-opacity-70">{card.meaning}</p>
              </div>
            </div>
          </div>
          <Button onClick={drawNewCard} className="mt-4 w-full">Draw New Card</Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default TarotCard