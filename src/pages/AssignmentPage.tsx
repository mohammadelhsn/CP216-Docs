/** =========== REACT & ROUTER ============ */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

/** =========== MUI ICONS ============ */
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ListIcon from '@mui/icons-material/List';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

/** =========== MUI COMPONENTS ============ */
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

/** =========== LOCAL COMPONENTS ============ */
import ItemList from '../components/ItemList';
import Loading from '../components/Loading';
import SectionWrapper from '../components/Section';

/** =========== DATA & STYLES ============ */
import Settings from '../data/Settings';
import { containerStyles, textStyle } from '../data/Styles';
import type { AssessmentDataType, LabsAssignmentsOpts } from '../data/Data';

// Lab/Assignment page for individual 

const LabAssignmentPage = (opts: LabsAssignmentsOpts) => {
	const { num } = useParams<{ num: string; }>();
	const navigate = useNavigate(); // Hook for navigation
	const [dataSource, setDataSource] = useState<AssessmentDataType>();
	const [loading, setLoading] = useState<boolean>(true);
	useEffect(() => {
		const fetchData = async () => {
			try {
				if (opts.type === 'assignment') {
					const res = await Settings.api.getAssignment(num?.slice(-2));
					if (res?.data) {
						setDataSource(res.data as AssessmentDataType);
					}
				} else {
					const res = await Settings.api.getLab(num?.slice(-2));
					if (res?.data) {
						setDataSource(res.data as AssessmentDataType);
					}
				}
			} catch (err) {
				console.error('Failed to fetch data:', err);
			} finally {
				setLoading(false);
			}
		};

		if (num) {
			fetchData();
		}
	}, [num, opts.type]);
	if (loading) {
		return (
			<Loading />
		);
	}
	if (!dataSource) {
		return (
			<Container maxWidth="md" sx={{ mt: 8, textAlign: 'center', flexGrow: '1' }}>
				<SentimentVeryDissatisfiedIcon sx={{ fontSize: 60, color: 'error.main', mb: 2 }} />
				<Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
					Oops!
				</Typography>
				<Typography variant="h6" gutterBottom color="text.secondary">
					Looks like this {opts.type === 'assignment' ? 'assignment' : 'lab'} doesn’t exist.
				</Typography>
				<Typography variant="body1" color="text.secondary">
					Maybe you mistyped the URL? Or this one’s lost in space 🪐
				</Typography>
			</Container>
		);
	}

	return (
		<Container maxWidth="lg" sx={containerStyles}>
			<Box mb={2}>
				<IconButton onClick={() => navigate(-1)} aria-label="Go back">
					<ArrowBackIcon />
				</IconButton>
			</Box>
			<Box>
				<Typography variant="h2" sx={textStyle}>
					<MenuBookIcon fontSize='inherit' sx={{
						color: 'primary.main',
						mr: 1.5,
					}} /> {dataSource.name}
				</Typography>
				<Typography variant="h5" sx={{ fontStyle: 'italic' }}>
					Here are the documented {dataSource.name}.
				</Typography>
				<Divider sx={{ my: 4 }} />
			</Box>
			<Box>
				<SectionWrapper title="Tasks" icon={ListIcon}>
					<ItemList
						itemType="task"
						taskStr={num || ''}
						count={dataSource.tasks.length}
					/>
				</SectionWrapper>
			</Box>
		</Container >
	);
};

export default LabAssignmentPage;