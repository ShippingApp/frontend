import { Flex, HStack, useRadioGroup } from "@chakra-ui/react"
import { FaShippingFast } from "react-icons/fa"
import { MdLocalShipping } from "react-icons/md"
import RadioCard from "./RadioCard"
import { use, useState } from "react"

type ShippingService = {
	key: string
	name: string
	description: string
	icon: JSX.Element
}

const options : ShippingService[] = [
	{
		key: 'fast-shipping',
		name: "Fast Shipping",
		description: "Get your package in 2-3 days",
		icon: <FaShippingFast size={30}/> 
	},
	{
		key:'standard-shipping',
		name: "Standard Shipping",
		description: "Get your package in 5-7 days",
		icon: <MdLocalShipping size={30}/>
	}
]

const ShippingServiceSelector = () => {

	
  const { value, getRootProps, getRadioProps } = useRadioGroup({
    name: 'shipping-service',
    defaultValue: options[0].key,
  })

	const group = getRootProps()
    return (
      <HStack {...group} mt={4} mb={4} width="100%" gap="20px">
				{options.map((value) => {
					const radio = getRadioProps({ value: value.key })
					return (
						<RadioCard key={value.key} icon={value.icon} {...radio}>
							{value}
						</RadioCard>
        )
      })}
      </HStack>
    )
}

export default ShippingServiceSelector