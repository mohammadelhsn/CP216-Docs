import type { SxProps, Theme } from '@mui/material';

const sx = (styles: SxProps<Theme>) => styles;

export const cardContentStyles = sx({
	paddingTop: '25px',
	borderRadius: '10px',
	boxShadow: '0 3px 8px rgba(0, 0, 0, 0.05)',
	transition: 'transform 0.2s ease',
});

export const cardBodyStyles = sx({
	paddingTop: '25px',
});

export const cardActionStyles = sx({
	justifyContent: 'flex-start',
	paddingLeft: '1.5',
	paddingBottom: '0',
	paddingTop: '25px',
});

export const buttonStyles = sx({
	color: 'primary',
	textDecoration: 'none',
	fontWeight: 'bold',
	fontSize: '0.9em',
});

export const dividerStyle = sx({
	margin: '2rem 0',
	marginLeft: 0,
});

export const sampleOutput = sx({
	p: 2,
	mb: 3,
	bgcolor: 'background.paper',
	fontFamily: 'monospace',
	whiteSpace: 'pre-wrap',
});

export const chipStyle = sx({
	marginRight: '0.8rem',
	bgcolor: 'background.paper',
});

export const projectsBox = sx({ flexGrow: 1, padding: '3rem 2rem' });

export const projectsHeader = sx({
	textAlign: 'center',
	marginBottom: '2rem',
});

export const projectsGrid = sx({
	gap: '2rem',
	height: '100%',
	gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
});

export const textStyle = sx({
	display: 'flex',
	alignItems: 'center', // use "center" instead of "top" for visual balance
	mb: 1, // space between heading and subheading
	flexWrap: 'wrap', // allow wrapping inside flex container
	wordBreak: 'break-word', // break long words if needed
});

export const iconStyles = sx({
	color: 'primary.main',
	mr: 1.5,
});

export const containerStyles = sx({
	px: { xs: 2, sm: 3 },
	py: { xs: 4, sm: 6 },
});
