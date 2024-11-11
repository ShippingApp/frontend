import { Button, Divider, Flex, FormControl,  FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react"
import ShippingServiceSelector from "./ShippingServiceSelector"

interface PackageFormProps {
    setActiveStep: (step: number) => void
}

const PackageForm = ({ setActiveStep }: PackageFormProps) => {
    return (
        <Flex flexDir="column">
					<FormControl isRequired mb={4}>
							<FormLabel>General description of the content</FormLabel>
							<Input type='text' />
					</FormControl>

					<Divider />

					<Flex gap="20px" mb={4} mt={4}>
						<FormControl isRequired>
              <FormLabel>N. of packages</FormLabel>
							<NumberInput size='md' defaultValue={1} min={1} >
								<NumberInputField />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Weight</FormLabel>
							<NumberInput size='md' defaultValue={0.1} min={0.1} precision={2}>
								<NumberInputField />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Value of contents</FormLabel>
                <Input type='text' />
            </FormControl>
       		</Flex>


					<Flex gap="20px" mb={4}>
						<FormControl>
              <FormLabel>Lenght</FormLabel>
							<NumberInput size='md' defaultValue={1} min={1} >
								<NumberInputField />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
            </FormControl>
						<FormControl>
              <FormLabel>Width</FormLabel>
							<NumberInput size='md' defaultValue={1} min={1} >
								<NumberInputField />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
            </FormControl>
						<FormControl>
              <FormLabel>Height</FormLabel>
							<NumberInput size='md' defaultValue={1} min={1} >
								<NumberInputField />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
            </FormControl>
					</Flex>

					<Divider />

					<ShippingServiceSelector />

          <Flex justifyContent="space-between">
						<Button onClick={() => setActiveStep(2)}>Back</Button>
						<Button onClick={() => setActiveStep(4)}>Next</Button>
					</Flex>
        </Flex>
    )
}

export default PackageForm