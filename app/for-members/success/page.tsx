"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"

interface SessionData {
  customer_email: string
}

function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const error = searchParams.get("error")

  const [session, setSession] = useState<SessionData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (sessionId) {
      const fetchSession = async () => {
        try {
          const res = await fetch(`/api/subscriptions/get_session?id=${sessionId}`)
          if (!res.ok) {
            throw new Error("Could not fetch session details.")
          }
          const data = await res.json()
          setSession(data)
        } catch (err) {
          console.error(err)
        } finally {
          setIsLoading(false)
        }
      }
      fetchSession()
    } else {
      setIsLoading(false)
    }
  }, [sessionId])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <Card className="w-full max-w-md text-center p-8">
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <XCircle className="h-6 w-6 text-red-600" />
            </div>
            <CardTitle className="mt-4">Payment Failed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">{error}</p>
            <Button asChild>
              <Link href="/for-members">Try Again</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (session) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <Card className="w-full max-w-md text-center p-8">
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="mt-4">Payment Successful!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Thank you for your payment. We will share the next steps on your
              email.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              Please allow a few minutes for the transaction to reflect in your
              account. For any issues or assistance, feel free to reach out to
              us at{" "}
              <a
                href="mailto:aussupport@onesto.co"
                className="underline"
              >
                aussupport@onesto.co
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <p>Invalid session or error.</p>
    </div>
  )
}

export default function SuccessPageWithSuspense() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader">Loading...</div>
        </div>
      }
    >
      <SuccessPage />
    </Suspense>
  )
}
