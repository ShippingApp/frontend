import { Button, useToast } from "@chakra-ui/react"

interface ToastNotificationProps {
  title: string
  description: string
  status: string
  duration: number
  isCloseable: boolean
}

const ToastNotification = () => {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'bottom-right'
          })
        }
      >
        Show Toast
      </Button>
    )
  }

  export default ToastNotification