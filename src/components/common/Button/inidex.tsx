import * as React from 'react'
import Emoji from 'a11y-react-emoji'

import styles from './Button.module.scss'

interface IButtonProps {
	onClick: () => void,
	label: string,
	emoji: string,
}

export const Button: React.FunctionComponent<IButtonProps> = ({
	onClick,
	label,
	emoji
}) => {
	return (
		<div className={styles.btnContainier}>
			<button
				type="button"
				onClick={onClick}
			>
				{label}
				<Emoji symbol={emoji} label="love" />
			</button>
		</div>
	)
}
