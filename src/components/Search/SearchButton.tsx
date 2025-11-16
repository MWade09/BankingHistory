'use client'

import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SearchDialog from './SearchDialog'

export default function SearchButton() {
  const [open, setOpen] = useState(false)

  // Keyboard shortcut (Ctrl/Cmd + K)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        className="relative h-10 w-full justify-start text-sm text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 border-slate-700 hover:border-amber-600/50 transition-all sm:w-64 md:w-80"
      >
        <Search className="mr-2 h-4 w-4" />
        <span className="hidden md:inline-flex">Search chapters, quotes, timeline...</span>
        <span className="inline-flex md:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-2 hidden h-6 select-none items-center gap-1 rounded border border-slate-600 bg-slate-900 px-1.5 font-mono text-xs font-medium text-slate-400 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <SearchDialog open={open} onOpenChange={setOpen} />
    </>
  )
}
