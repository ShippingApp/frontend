import { Button, Divider, Flex, FormControl,  FormLabel, Input } from "@chakra-ui/react"

interface ReceiverFormProps {
    setActiveStep: (step: number) => void
}

const ReceiverForm = ({ setActiveStep } : ReceiverFormProps) => {
    return (
        <Flex flexDir="column">
        <Flex gap="20px" mb={4}>
            <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type='text' />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Last name</FormLabel>
                <Input type='text' />
            </FormControl>
        </Flex>

        <Divider />

        <FormControl isRequired mb={4} mt={4}>
            <FormLabel>Street</FormLabel>
            <Input type='text' />
        </FormControl>

        <Flex gap="20px" mb={4}>
            <FormControl isRequired>
                <FormLabel>City</FormLabel>
                <Input type='text' />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Province</FormLabel>
                <Input type='text' />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>ZipCode</FormLabel>
                <Input type='text' />
            </FormControl>
        </Flex>

        <Divider />

        <Flex gap="20px" mb={4} mt={4}>
            <FormControl isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input type='tel' />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
            </FormControl>
            
        </Flex>

        <Flex justifyContent="space-between">
            <Button onClick={() => setActiveStep(1)}>Back</Button>
            <Button onClick={() => setActiveStep(3)}>Next</Button>
        </Flex>
    </Flex>
    )
}

export default ReceiverForm