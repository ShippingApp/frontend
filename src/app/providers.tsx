'use client'

import { ChakraProvider, theme } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return(
    <ChakraProvider
      theme={theme}
      toastOptions={{defaultOptions: {position: 'bottom-right'}}}
    >
      {children}
    </ChakraProvider>
  )
}