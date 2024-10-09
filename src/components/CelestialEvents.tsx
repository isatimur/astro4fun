import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface CelestialEvent {
  date: string
  event: string
  description: string
}

const CelestialEvents: React.FC = () => {
  const [events, setEvents] = useState<CelestialEvent[]>([])

  useEffect(() => {
    // In a real app, this data would come from an API
    const dummyEvents: CelestialEvent[] = [
      {
        date: '2023-06-21',
        event: 'Summer Solstice',
        description: 'The longest day of the year in the Northern Hemisphere.'
      },
      {
        date: '2023-07-13',
        event: 'Super Full Moon',
        description: 'The Moon appears larger and brighter than usual.'
      },
      {
        date: '2023-08-12',
        event: 'Perseid Meteor Shower Peak',
        description: 'One of the best meteor showers of the year.'
      },
      {
        date: '2023-09-23',
        event: 'Autumnal Equinox',
        description: 'Day and night are nearly equal in length.'
      },
      {
        date: '2023-10-14',
        event: 'Solar Eclipse',
        description: 'An annular solar eclipse visible from North and South America.'
      }
    ]
    setEvents(dummyEvents)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Upcoming Celestial Events</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {events.map((event, index) => (
              <li key={index} className="bg-white/5 p-3 rounded">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-primary">{event.event}</span>
                  <span className="text-sm text-white/70">{event.date}</span>
                </div>
                <p className="text-sm text-white/90">{event.description}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default CelestialEvents