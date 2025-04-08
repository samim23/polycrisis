import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex flex-wrap items-center justify-center gap-2 text-center text-sm">
        Polycrisis Guide - Developed by <Link to="https://samim.ai" className="underline">Studio Samim</Link>
        </div>
      </div>
    </footer>
  )
} 