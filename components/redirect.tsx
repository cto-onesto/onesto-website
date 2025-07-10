"use client"

import { useEffect } from "react"

export default function Redirect({ to, newTab = false }: { to: string; newTab?: boolean }) {
  useEffect(() => {
    if (newTab) {
      window.open(to, "_blank")
    } else {
      window.location.href = to
    }
  }, [to, newTab])

  return null
}
