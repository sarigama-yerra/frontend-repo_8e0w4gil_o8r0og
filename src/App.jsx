import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Play, ChevronRight, Shield, Zap, Wand2 } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function Slide({ item, active }) {
  return (
    <motion.div
      layout
      className="shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
    >
      <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/40 border border-white/50 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]">
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/10 pointer-events-none" />
        <div className="p-5 flex items-center gap-4">
          <div className={`p-3 rounded-xl ${item.badgeBg} text-white shadow-inner`}>{item.icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.subtitle}</p>
          </div>
        </div>
        <div className="px-5 pb-5">
          <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

function App() {
  const [index, setIndex] = useState(0)
  const [isHover, setIsHover] = useState(false)

  const slides = useMemo(() => ([
    {
      title: 'Interactive 3D',
      subtitle: 'Playful & immersive',
      description: 'Engage users with a reactive 3D hero that follows their cursor and sets a bold, modern tone.',
      badgeBg: 'bg-purple-600',
      icon: <Wand2 size={18} />, 
    },
    {
      title: 'Fast by Default',
      subtitle: 'Instant feedback',
      description: 'Experience buttery-smooth motions powered by a high‑performance animation engine.',
      badgeBg: 'bg-indigo-600',
      icon: <Zap size={18} />, 
    },
    {
      title: 'Secure & Reliable',
      subtitle: 'Production-ready',
      description: 'Built with robust patterns and best practices to keep your data and users safe.',
      badgeBg: 'bg-blue-600',
      icon: <Shield size={18} />, 
    },
  ]), [])

  // Auto-advance slides
  useEffect(() => {
    if (isHover) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 3500)
    return () => clearInterval(id)
  }, [slides.length, isHover])

  const containerRef = useRef(null)

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950">
      {/* 3D Hero Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays to improve contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/30 to-slate-950/80" />
      <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-fuchsia-500/40 to-cyan-500/40" />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <header className="px-6 sm:px-10 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/20 border border-white/30 backdrop-blur-md flex items-center justify-center text-white">
              <Sparkles size={18} />
            </div>
            <span className="text-white/90 font-semibold tracking-wide">Vibe Studio</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button className="px-4 py-2 rounded-xl text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition">Features</button>
            <button className="px-4 py-2 rounded-xl text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition">Docs</button>
            <button className="px-4 py-2 rounded-xl text-slate-900 bg-white hover:bg-slate-100 border border-white/10 transition flex items-center gap-2">
              <Play size={16} />
              Get Started
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="px-6 sm:px-10 pt-6 pb-16 sm:pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 lg:col-span-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
              >
                Build modern apps with a living splash experience
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="mt-4 sm:mt-6 text-base sm:text-lg text-white/80 max-w-xl"
              >
                A dynamic, interactive hero powered by a 3D scene and smooth motion. Elegant, vibrant, and delightfully responsive.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="mt-6 sm:mt-8 flex items-center gap-3"
              >
                <button className="px-5 py-3 rounded-xl text-slate-900 bg-white hover:bg-slate-100 border border-white/10 transition flex items-center gap-2">
                  <ChevronRight size={18} />
                  Explore Templates
                </button>
                <button className="px-5 py-3 rounded-xl text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition">
                  Learn More
                </button>
              </motion.div>
            </div>
            <div className="md:col-span-5 lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-fuchsia-500/40 to-cyan-500/40 blur-xl" />
                <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/20">
                  <div className="aspect-[16/10] w-full" ref={containerRef}>
                    {/* Placeholder visual card with shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/0 to-white/10" />
                    <div className="h-full w-full grid place-items-center">
                      <div className="text-center px-6 py-8">
                        <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-2">Live Preview</p>
                        <p className="text-white/90 text-lg">Hover and scroll to explore</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sliding feature cards */}
        <section className="px-6 sm:px-10 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-5">
              <h2 className="text-white/90 text-xl sm:text-2xl font-semibold">What you get</h2>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Prev"
                  onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
                  className="h-9 w-9 rounded-lg border border-white/20 text-white/80 hover:text-white bg-white/10 hover:bg-white/15 transition grid place-items-center"
                >
                  ‹
                </button>
                <button
                  aria-label="Next"
                  onClick={() => setIndex((i) => (i + 1) % slides.length)}
                  className="h-9 w-9 rounded-lg border border-white/20 text-white/80 hover:text-white bg-white/10 hover:bg-white/15 transition grid place-items-center"
                >
                  ›
                </button>
              </div>
            </div>

            <div
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              className="relative"
            >
              <motion.div
                className="flex gap-5"
                animate={{ x: `-${index * 100}%` }}
                transition={{ type: 'spring', stiffness: 80, damping: 18 }}
                style={{ width: `${slides.length * 100}%` }}
              >
                {slides.concat(slides).map((item, i) => (
                  <Slide key={i + '-' + item.title} item={item} active={i % slides.length === index} />
                ))}
              </motion.div>

              {/* Dots */}
              <div className="mt-4 flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${index === i ? 'w-6 bg-white' : 'w-2 bg-white/50'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 sm:px-10 pb-10 text-center text-white/60">
          Built with love, motion, and a touch of 3D.
        </footer>
      </div>
    </div>
  )
}

export default App
