import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'

export default function LoaderFullScreen() {
	return (
		<Box
			sx={{
				display: 'flex',
				zIndex: 100000,
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'white',
			}}
		>
			<CircularProgress color="warning" />
		</Box>
	)
}
