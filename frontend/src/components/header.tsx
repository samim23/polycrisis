import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  
  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background left-0 right-0">
      <div className="container max-w-5xl flex h-16 items-center px-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mr-auto">
          <Link to="/" className="flex items-center gap-1 text-blue-700">
            <Globe className="h-4 w-4" />
            <span className="text-xl font-black tracking-tight uppercase">Polycrisis</span>
          </Link>
        </div>

        {/* Desktop Navigation - Centered with larger text */}
        <nav className="hidden md:flex items-center gap-6 mx-auto">
          <Link 
            to="/" 
            className={cn(
              "text-base font-medium transition-colors relative",
              isActive('/') 
                ? "text-primary after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-primary" 
                : "hover:text-primary"
            )}
          >
            Overview
          </Link>
          <Link 
            to="/risks" 
            className={cn(
              "text-base font-medium transition-colors relative",
              isActive('/risks') 
                ? "text-primary after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-primary" 
                : "hover:text-primary"
            )}
          >
            Risks
          </Link>
          <Link 
            to="/preparation" 
            className={cn(
              "text-base font-medium transition-colors relative",
              isActive('/preparation') 
                ? "text-primary after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-primary" 
                : "hover:text-primary"
            )}
          >
            Preparation
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "text-base font-medium transition-colors relative",
              isActive('/about') 
                ? "text-primary after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-primary" 
                : "hover:text-primary"
            )}
          >
            About
          </Link>
          {/* <Link 
            to="/resources" 
            className={cn(
              "text-base font-medium transition-colors relative",
              isActive('/resources') 
                ? "text-primary after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-primary" 
                : "hover:text-primary"
            )}
          >
            Resources
          </Link> */}
        </nav>

        {/* Spacer div to balance the header */}
        <div className="hidden md:block ml-auto">
          {/* Empty div to balance the logo */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-background border-b",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="container py-4 space-y-4">
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className={cn(
                "text-sm font-medium transition-colors relative",
                isActive('/') 
                  ? "text-primary border-l-2 border-primary pl-2" 
                  : "hover:text-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Overview
            </Link>
            <Link 
              to="/risks" 
              className={cn(
                "text-sm font-medium transition-colors relative",
                isActive('/risks') 
                  ? "text-primary border-l-2 border-primary pl-2" 
                  : "hover:text-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Risks
            </Link>
            <Link 
              to="/preparation" 
              className={cn(
                "text-sm font-medium transition-colors relative",
                isActive('/preparation') 
                  ? "text-primary border-l-2 border-primary pl-2" 
                  : "hover:text-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Preparation
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "text-sm font-medium transition-colors relative",
                isActive('/about') 
                  ? "text-primary border-l-2 border-primary pl-2" 
                  : "hover:text-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            {/* <Link 
              to="/resources" 
              className={cn(
                "text-sm font-medium transition-colors relative",
                isActive('/resources') 
                  ? "text-primary border-l-2 border-primary pl-2" 
                  : "hover:text-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link> */}
          </nav>
        </div>
      </div>
    </header>
  )
}
