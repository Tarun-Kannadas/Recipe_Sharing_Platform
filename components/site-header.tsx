'use client'

import { useAuth } from '@/lib/contexts/auth-context'
import Link from 'next/link'

export function SiteHeader() {
  const { user, signOut, loading } = useAuth()

  return (
    <header className="border-b border-border/60">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="size-6 rounded-md bg-primary" />
          <span className="text-base sm:text-lg font-semibold tracking-tight">RecipeShare</span>
        </Link>
        
        <nav className="flex items-center gap-4 text-sm">
          {loading ? (
            <div className="text-muted-foreground">Loading...</div>
          ) : user ? (
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Welcome, {user.email}</span>
              <button
                onClick={() => signOut()}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
