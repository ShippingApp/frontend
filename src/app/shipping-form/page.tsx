'use client'

import SimpleThreeColumns from '@/components/InfoBar'
import { Box, Button, Step, StepDescription, StepIcon, StepIndicator, StepNumber, Stepper, StepSeparator, StepStatus, StepTitle, useSteps, useToast } from '@chakra-ui/react'
import ShipperForm from './ShipperForm'
import ReceiverForm from './ReceiverForm'
import PackageForm from './PackageForm'

const steps = [
  { title: 'First', description: 'Shipper' },
  { title: 'Second', description: 'Receiver' },
  { title: 'Third', description: 'Package' },
	{ title: 'Forth', description: 'Payment' },
]

const ShippingForm = () : JSX.Element => {
    const toast = useToast()
		const { activeStep, setActiveStep } = useSteps({
			index: 1,
			count: steps.length,
		})
    return (
        <Box width={{ base: '100%', lg: '60%' }} >
					{/* <SimpleThreeColumns /> */}
				
					<Stepper index={activeStep} mb={6}>
						{steps.map((step, index) => (
							<Step key={index}>
								<StepIndicator>
									<StepStatus
										complete={<StepIcon />}
										incomplete={<StepNumber />}
										active={<StepNumber />}
									/>
								</StepIndicator>

								<Box flexShrink='0'>
									<StepTitle>{step.title}</StepTitle>
									<StepDescription>{step.description}</StepDescription>
								</Box>

								<StepSeparator />
							</Step>
						))}
					</Stepper>

					{(activeStep === 1) && <ShipperForm setActiveStep={setActiveStep}/>}
					{(activeStep === 2) && <ReceiverForm setActiveStep={setActiveStep} />}
					{(activeStep === 3) && <PackageForm setActiveStep={setActiveStep} />}


					{/* <Button
							onClick={() =>
							toast({
									title: 'Account created.',
									description: "We've created your account for you.",
									status: 'success',
									duration: 9000,
									isClosable: true,
							})
							}
					>
							Show Toast
					</Button> */}
        </Box>
    )
  }

  export default ShippingForm