import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ZodiacSelector, HoroscopeDisplay, DailyQuote, ZodiacInfo, MoonPhase, CompatibilityCalculator, ZodiacOfTheDay, AstrologyChart, TarotCard, NumerologyCalculator, AstrologyQuiz, CelestialEvents, AstrologicalAffirmations, ZodiacCompatibility, AstrologyInsights } from './components'
import { ZodiacSign } from './types'
import { BackgroundBeams } from './components/ui/background-beams'
import { Button } from './components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Drawer } from './components/ui/drawer'
import { Menu } from 'lucide-react'

function App() {
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null)
  const [activeTab, setActiveTab] = useState('daily')
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    const savedSign = localStorage.getItem('selectedSign') as ZodiacSign | null
    if (savedSign) {
      setSelectedSign(savedSign)
    }
  }, [])

  useEffect(() => {
    if (selectedSign) {
      localStorage.setItem('selectedSign', selectedSign)
    }
  }, [selectedSign])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setIsDrawerOpen(false)
  }

  const tabContent = {
    daily: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <DailyQuote />
          <MoonPhase />
          <TarotCard />
        </div>
        <ZodiacOfTheDay />
        {selectedSign && <AstrologicalAffirmations sign={selectedSign} />}
      </>
    ),
    horoscope: (
      <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-6 mt-8">
        <ZodiacSelector onSelectSign={setSelectedSign} selectedSign={selectedSign} />
        {selectedSign && (
          <motion.div
            key={selectedSign}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <HoroscopeDisplay sign={selectedSign} />
            <ZodiacInfo sign={selectedSign} />
          </motion.div>
        )}
      </div>
    ),
    compatibility: <ZodiacCompatibility />,
    tools: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AstrologyChart />
        <NumerologyCalculator />
      </div>
    ),
    learn: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AstrologyQuiz />
        <AstrologyInsights />
      </div>
    ),
    events: <CelestialEvents />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 overflow-hidden">
      <BackgroundBeams />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-6xl z-10 relative"
      >
        <h1 className="text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Celestial Insights</h1>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden mb-4">
          <Button onClick={() => setIsDrawerOpen(true)} variant="outline" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:block">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              <TabsTrigger value="daily">Daily Insights</TabsTrigger>
              <TabsTrigger value="horoscope">Your Horoscope</TabsTrigger>
              <TabsTrigger value="compatibility">Compatibility</TabsTrigger>
              <TabsTrigger value="tools">Astrology Tools</TabsTrigger>
              <TabsTrigger value="learn">Learn Astrology</TabsTrigger>
              <TabsTrigger value="events">Celestial Events</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Mobile Drawer */}
        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <div className="p-4">
            <Button onClick={() => handleTabChange('daily')} className="w-full mb-2">Daily Insights</Button>
            <Button onClick={() => handleTabChange('horoscope')} className="w-full mb-2">Your Horoscope</Button>
            <Button onClick={() => handleTabChange('compatibility')} className="w-full mb-2">Compatibility</Button>
            <Button onClick={() => handleTabChange('tools')} className="w-full mb-2">Astrology Tools</Button>
            <Button onClick={() => handleTabChange('learn')} className="w-full mb-2">Learn Astrology</Button>
            <Button onClick={() => handleTabChange('events')} className="w-full">Celestial Events</Button>
          </div>
        </Drawer>

        {/* Content */}
        <div className="mt-8">
          {tabContent[activeTab as keyof typeof tabContent]}
        </div>
      </motion.div>
    </div>
  )
}

export default App