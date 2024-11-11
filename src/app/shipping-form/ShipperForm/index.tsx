import { Button, Divider, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react"

interface ShipperFormProps {
		setActiveStep: (step: number) => void
}

const ShipperForm = ({ setActiveStep }: ShipperFormProps) => {
    return (
        <Flex flexDir="column">
					<Flex gap="20px" mb={4}>
						<FormControl isRequired>
							<FormLabel>Name</FormLabel>
							<Input type='string' />
						</FormControl>
						<FormControl isRequired>
							<FormLabel>Last name</FormLabel>
							<Input type='string' />
						</FormControl>
					</Flex>

					<Divider />

					<FormControl isRequired mb={4} mt={4}>
						<FormLabel>Street</FormLabel>
						<Input type='string' />
					</FormControl>

					<Flex gap="20px" mb={4}>
						<FormControl isRequired>
							<FormLabel>City</FormLabel>
							<Input type='string' />
						</FormControl>
						<FormControl isRequired>
							<FormLabel>Province</FormLabel>
							<Input type='string' />
						</FormControl>
						<FormControl isRequired>
							<FormLabel>ZipCode</FormLabel>
							<Input type='string' />
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

					<Flex justifyContent="end">
						<Button onClick={() => setActiveStep(2)}>Next</Button>
					</Flex>
				</Flex>
    )
}

export default ShipperForm