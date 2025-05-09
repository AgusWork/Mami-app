"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"

interface EnhancedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: React.ReactNode
  showPasswordToggle?: boolean
}

const EnhancedInput = React.forwardRef<HTMLInputElement, EnhancedInputProps>(
  ({ className, type, label, icon, showPasswordToggle, ...props }, ref) => {
    const [focused, setFocused] = React.useState(false)
    const [showPassword, setShowPassword] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(!!props.value || !!props.defaultValue)

    const inputType = type === "password" && showPassword ? "text" : type

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true)
      props.onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false)
      props.onBlur?.(e)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(!!e.target.value)
      props.onChange?.(e)
    }

    const isFloating = focused || hasValue

    return (
      <div className="relative">
        {label && (
          <label
            className={cn(
              "absolute transition-all duration-200 pointer-events-none",
              isFloating
                ? "text-xs -translate-y-6 left-0 text-white"
                : "text-muted-foreground text-sm top-1/2 -translate-y-1/2 left-3",
              props.disabled && "opacity-50",
              icon && !isFloating && "left-10",
            )}
          >
            {label}
          </label>
        )}

        <div className="relative">
          {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</div>}

          <input
            type={inputType}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              icon && "pl-10",
              showPasswordToggle && type === "password" && "pr-10",
              className,
            )}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props}
          />

          {showPasswordToggle && type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>
      </div>
    )
  },
)

EnhancedInput.displayName = "EnhancedInput"

export { EnhancedInput }
