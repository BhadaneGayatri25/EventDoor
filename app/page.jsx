"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Moon,
  Sun,
  Menu,
  X,
  Star,
  Award,
  Users,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import Image from "next/image"

export default function EventDoorWebsite() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formState, setFormState] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      // Show scroll to top button
      if (scrollPosition > 400) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
      // Change navbar appearance on scroll
      if (scrollPosition > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 64 // 4rem = 64px
      const elementPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormState(null)

    console.log("[v0] Form submission started")
    const formData = new FormData(e.target)
    const body = Object.fromEntries(formData.entries())
    console.log("[v0] Form data prepared:", body)

    try {
      console.log("[v0] Sending request to /api/contact")
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      console.log("[v0] Response status:", res.status)
      const data = await res.json()
      console.log("[v0] Response data:", data)

      setFormState(data)
      if (data.success) {
        e.target.reset()
        console.log("[v0] Form reset after successful submission")
      }
    } catch (error) {
      console.error("[v0] Network error:", error)
      setFormState({
        success: false,
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isClient) {
    return null
  }

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? "dark" : ""}`}>
      {/* Sticky Navbar */}
      <nav
        className={`sticky top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white dark:bg-black backdrop-blur-md border-b border-transparent dark:border-black shadow-lg"
            : "bg-black dark:bg-black backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src={darkMode ? "/ED-Full-White-Logo.png" : "/eventdoor-logo.png"}
                alt="Event Door Logo"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("values")}
                  className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Values
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  Contact Us
                </button>
              </div>
            </div>
            {/* Dark Mode Toggle & Mobile Menu */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-colors duration-200"
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
          {/* Enhanced Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/20 dark:bg-black/40 backdrop-blur-md border-t border-white/20 dark:border-gray-700/50">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left text-white dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 hover:bg-white/10 dark:hover:bg-gray-800/50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-white dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 hover:bg-white/10 dark:hover:bg-gray-800/50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("values")}
                className="block w-full text-left text-white dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 hover:bg-white/10 dark:hover:bg-gray-800/50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Values
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left text-white dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 hover:bg-white/10 dark:hover:bg-gray-800/50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left bg-blue-600/80 hover:bg-blue-700/90 text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mt-2 backdrop-blur-sm"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content area that scrolls */}
      <main className="flex-1">
        {/* Video Overlay with Floating Elements template */}
        <section id="home" className="relative h-screen overflow-hidden bg-black">
          {/* Enhanced Background with Multiple Layers */}
          <div className="absolute inset-0">
            {/* Primary gradient background */}
            <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute top-40 right-40 w-48 h-48 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-100"></div>
              <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-200"></div>
            </div>
          </div>

          {/* Enhanced Floating Particles with More Variety */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Small bouncing particles */}
            <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-100"></div>
            <div className="absolute bottom-32 left-40 w-5 h-5 bg-pink-400 rounded-full animate-bounce delay-200"></div>
            <div className="absolute bottom-20 right-20 w-3 h-3 bg-indigo-400 rounded-full animate-bounce delay-300"></div>

            {/* Additional floating elements */}
            <div className="absolute top-1/3 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-500"></div>
            <div className="absolute top-2/3 right-10 w-6 h-6 bg-yellow-400 rounded-full animate-bounce delay-700"></div>
            <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-red-400 rounded-full animate-bounce delay-1200"></div>

            <div className="absolute top-32 right-1/4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce delay-300"></div>
            <div className="absolute bottom-40 left-1/4 w-6 h-6 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-bounce delay-800"></div>
          </div>

          {/* Main Content with Enhanced Glassmorphism */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-12 border border-white/30 shadow-2xl">
                <h1 className="text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  Welcome to{" "}
                  <span className="text-white bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text animate-pulse">
                    Event Door
                  </span>
                </h1>
                <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                  Your one-stop solution for premium swags, bespoke event planning, and unforgettable experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
                  >
                    Explore Our Services
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="border-2 border-white text-white bg-black/30 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all transform hover:scale-105 backdrop-blur-sm"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full animate-pulse mt-2"></div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Who We Are
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6 sm:mb-8"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    Event Door is your one-stop solution for all things events. We provide a diverse range of services,
                    including corporate swags, bespoke event planning, and speaker arrangements, ensuring a perfect
                    blend of innovation and excellence.
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    With a passion for crafting memorable experiences, we bring meticulous attention to detail,
                    delivering outstanding results that resonate with your vision.
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Whether it's a corporate event, a product launch, or a conference, Event Door is committed to
                    delivering tailored solutions that exceed expectations.
                  </p>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]">
                  <Image
                    src="swag.jpeg"
                    alt="Event Door Tech Gifts"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section id="values" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Values
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6 sm:mb-8"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-900 transform hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    Quality First
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    We never compromise on the quality of our products and services.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-900 transform hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    Customer Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Your success is our success. We're dedicated to exceeding expectations.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-900 transform hover:scale-105 sm:col-span-2 lg:col-span-1">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Constantly evolving and bringing new ideas to life.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                What Our Clients Say
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6 sm:mb-8"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-0 shadow-xl">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-base sm:text-lg text-gray-700 dark:text-gray-300 text-center mb-6 sm:mb-8 italic leading-relaxed">
                    "Event Door delivered exceptional swags for our Google Developers event. The custom caps, notebooks,
                    and water bottles were a huge hit among attendees. The quality was top-notch, and their team ensured
                    everything was delivered on time. Highly recommend them for any corporate event!"
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">Aarav Mehta</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                      Event Organizer, Google Developers
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-0 shadow-xl">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-base sm:text-lg text-gray-700 dark:text-gray-300 text-center mb-6 sm:mb-8 italic leading-relaxed">
                    "Outstanding service and quality products! Event Door helped us create memorable experiences for our
                    tech conference. Their attention to detail and customer service exceeded our expectations. Will
                    definitely work with them again for future events."
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">Priya Sharma</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                      Marketing Director, TechCorp
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Have Questions? We're Here to Help!
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Reach out for product inquiries, event planning, or any customization needs.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-6 sm:mt-8"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
                  Get in Touch
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">+918208787046</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">help@eventdoor.in</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Address</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Surat, Gujarat, GJ 394210</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Contact Form */}
              <Card className="bg-white dark:bg-gray-900 border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    We'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Form Status Alert */}
                  {formState && (
                    <Alert
                      className={`mb-6 ${
                        formState.success
                          ? "border-green-200 bg-green-50 dark:bg-green-900/20"
                          : "border-red-200 bg-red-50 dark:bg-red-900/20"
                      }`}
                    >
                      {formState.success ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-red-600" />
                      )}
                      <AlertDescription
                        className={
                          formState.success ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"
                        }
                      >
                        {formState.message}
                      </AlertDescription>
                    </Alert>
                  )}

                  {/* Change form to use onSubmit */}
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          required
                          className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          required
                          className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Event Planning Inquiry"
                        required
                        className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your event requirements..."
                        rows={4}
                        required
                        className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 text-base sm:text-lg rounded-full transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed right-8 bottom-8 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50"
            aria-label="Scroll to top"
          >
            <div className="animate-bounce-slow">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
          </button>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="mb-6">
                <Image src="/ED-Full-White-Logo.png" alt="Event Door Logo" width={150} height={40} />
              </h3>
              <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
                Your one-stop shop for premium swags and event essentials.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/eventdoor" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a href="https://x.com/eventdoor_in" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a href="https://www.instagram.com/event_door.in/" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a href="https://www.linkedin.com/company/eventdoor.in/posts/?feedView=all" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
               
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 sm:mb-6">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">
                    Values
                  </a>
                </li>
                
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 sm:mb-6">Contact Info</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm sm:text-base">help@eventdoor.in</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm sm:text-base">+918208787046</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm sm:text-base">Surat, Gujarat, GJ 394210</span>
                </div>
              </div>
            </div>
            {/* Business Hours */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 sm:mb-6">Business Hours</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm sm:text-base">Monday - Friday</span>
                  <span className="text-white text-sm sm:text-base font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm sm:text-base">Saturday</span>
                  <span className="text-white text-sm sm:text-base font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm sm:text-base">Sunday</span>
                  <span className="text-red-400 text-sm sm:text-base font-medium">Closed</span>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-700">
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Emergency support available 24/7 for ongoing events
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-sm sm:text-base">© 2025 Event Door. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
