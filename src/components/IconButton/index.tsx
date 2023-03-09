import React, { ButtonHTMLAttributes } from 'react'
import { IconButtonContainer } from './styles'
import cartIcon from '../../assets/icon_cart.svg'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function IconButton ({ ...props }: IconButtonProps) {
	return (
		<IconButtonContainer {...props}>
			<img src={cartIcon} alt="" />
		</IconButtonContainer>
	)
}