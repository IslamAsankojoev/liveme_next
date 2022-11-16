import { Alert } from '@mui/material'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import React from 'react'

import { BannerArea } from '../components'

export default function Components() {
	const [open, setOpen] = React.useState(false)

	const handleClick = (TransitionLeft) => {
		setOpen(true)
	}

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		setOpen(false)
	}

	return (
		<>
			<BannerArea />
			<br />
			<br />
			<br />
			<br />
			<section className="contact_area section_gap_bottom">
				<div className="container">
					<Button variant="outlined" onClick={handleClick}>
						Оформить заказ
					</Button>
					<Snackbar
						open={open}
						anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
						autoHideDuration={1000}
						onClose={handleClose}
					>
						<Alert
							variant={'filled'}
							onClose={handleClose}
							severity="success"
							sx={{ width: '100%' }}
						>
							Заказ оформлен!
						</Alert>
					</Snackbar>
				</div>
			</section>
		</>
	)
}
