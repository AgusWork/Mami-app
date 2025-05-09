"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { X, AtSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EnhancedInput } from "./enchancedInput"

interface LoginPopupProps {
  isOpen: boolean
  onClose: () => void
  buttonRect?: DOMRect
}

const LoginPopup: React.FC<LoginPopupProps> = ({ isOpen, onClose, buttonRect }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false)
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("")

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 400)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.classList.contains("popup-overlay")) onClose()
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, onClose])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt with:", username, password)
  }

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault()
    setForgotPasswordMode(true)
  }

  const handleBackToLogin = (e: React.MouseEvent) => {
    e.preventDefault()
    setForgotPasswordMode(false)
  }

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Password reset requested for:", forgotPasswordEmail)
    alert(`Password reset link sent to ${forgotPasswordEmail}`)
    setForgotPasswordMode(false)
    setForgotPasswordEmail("")
  }

  const initialStyle = buttonRect
    ? {
        top: `${buttonRect.top + buttonRect.height / 2}px`,
        left: `${buttonRect.left + buttonRect.width / 2}px`,
        transform: "translate(-50%, -50%) scale(0.1)",
      }
    : {}

  if (!isVisible && !isOpen) return null

  const slices = [
    { top: "0%", height: "16.67%", delay: "0ms" },
    { top: "16.67%", height: "16.67%", delay: "50ms" },
    { top: "33.34%", height: "16.67%", delay: "100ms" },
    { top: "50.01%", height: "16.67%", delay: "150ms" },
    { top: "66.68%", height: "16.67%", delay: "200ms" },
    { top: "83.35%", height: "16.67%", delay: "250ms" },
  ]

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center popup-overlay transition-opacity duration-400 ease-out ${
        isOpen ? "bg-black/50 opacity-100" : "bg-black/0 opacity-0"
      }`}
    >
      <div
        className={`${
          forgotPasswordMode ? "bg-white" : "bg-cyan-700"
        } rounded-lg shadow-lg p-6 w-full max-w-md relative animate-popup-from-button ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        style={isOpen ? {} : initialStyle}
      >
        <button
          onClick={onClose}
          className={`absolute top-3 right-3 ${
            forgotPasswordMode ? "text-cyan-700" : "text-white"
          } hover:text-cyan-300 transition-colors`}
          aria-label="Cerrar"
        >
          <X size={24} />
        </button>

        <h2 className={`text-2xl font-bold mb-6 text-center ${forgotPasswordMode ? "text-cyan-700" : "text-white"}`}>
          {forgotPasswordMode ? "Restaurar Contraseña" : "Acceso Alumnos"}
        </h2>

        {!forgotPasswordMode ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <EnhancedInput
                id="username"
                type="text"
                label="Usuario"
                icon={<AtSign size={18} className="text-cyan-900" />}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-white text-cyan-900 w-full"
                required
              />
            </div>

            <div className="space-y-2">
              <EnhancedInput
                id="password"
                type="password"
                label="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white text-cyan-900 w-full"
                showPasswordToggle
                required
              />
            </div>

            <div className="pt-2">
              <Button type="submit" className="w-full bg-white text-cyan-700 hover:bg-cyan-100 transition-colors">
                Ingresar
              </Button>
            </div>

            <div className="text-center text-sm mt-4">
              <button type="button" className="text-cyan-300 hover:underline" onClick={handleForgotPassword}>
                ¿Olvidó su contraseña?
              </button>
            </div>
          </form>
        ) : (
          <div className="relative">
            <div className="absolute inset-0 z-0 overflow-hidden">
              {slices.map((slice, index) => (
                <div
                  key={index}
                  className="absolute w-full bg-white animate-slice"
                  style={{
                    top: slice.top,
                    height: slice.height,
                    animationDelay: slice.delay,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div className="space-y-2">
                  {/* REPLACE THIS: Email input with EnhancedInput */}
                  <EnhancedInput
                    id="forgotPasswordEmail"
                    type="email"
                    label="Correo Electrónico"
                    icon={<AtSign size={18} className="text-cyan-900" />}
                    value={forgotPasswordEmail}
                    onChange={(e) => setForgotPasswordEmail(e.target.value)}
                    className="bg-white text-cyan-900 w-full border-cyan-700"
                    required
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" className="w-full bg-cyan-700 text-white hover:bg-cyan-800 transition-colors">
                    Enviar Enlace de Recuperación
                  </Button>
                </div>

                <div className="text-center text-sm mt-4">
                  <button type="button" className="text-cyan-700 hover:underline" onClick={handleBackToLogin}>
                    Volver al inicio de sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LoginPopup
