import { Box, Flex, useRadio, Text } from "@chakra-ui/react"

function RadioCard(props: any) {
    const { icon, ...radioProps } = props
    const { getInputProps, getRadioProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getRadioProps()
  
    return (
      <Box as='label' width="full">
        <input {...input} />
        <Flex
          {...checkbox}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='md'
          boxShadow='md'
          alignItems="center"
          _checked={{
            bg: 'teal.600',
            color: 'white',
            borderColor: 'teal.600',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          px={5}
          py={3}
        >
        <Box mr={3}>
          {icon}
        </Box>
        <Box flexDir="column">
          <Text fontWeight={700} fontSize="md">
            {props.children.name}
          </Text>
          <Text fontSize="sm">
            {props.children.description}
          </Text>
        </Box>
        </Flex>
      </Box>
    )
  }
  
  export default RadioCard