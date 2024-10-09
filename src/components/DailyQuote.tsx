import React from 'react'
import { Card, CardContent } from './ui/card'

const quotes = [
  "The stars incline us, they do not bind us.",
  "As above, so below.",
  "The cosmos is within us. We are made of star-stuff.",
  "To the mind that is still, the whole universe surrenders.",
  "Millionaires don't use Astrology, billionaires do.",
]

const DailyQuote: React.FC = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <Card className="bg-white/5 backdrop-blur-sm">
      <CardContent className="p-4">
        <p className="text-white text-center italic">{randomQuote}</p>
      </CardContent>
    </Card>
  )
}

export default DailyQuote