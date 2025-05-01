
"use client" // Ensure this runs only on the client

import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Function to check and update mobile status
    const checkMobileStatus = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Initial check after mount
    checkMobileStatus()

    // Add listener for window resize
    window.addEventListener("resize", checkMobileStatus)

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", checkMobileStatus)
  }, []) // Empty dependency array ensures this runs once on mount (client-side)

  return isMobile // Return the state, which might be initially undefined
}
      