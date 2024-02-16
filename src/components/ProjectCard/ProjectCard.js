import React from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	CardActionArea,
	CardActions,
	Button
} from '@mui/material';

const styles = {
	cardImg: {
		height: 210,
	},
	card: {
		maxWidth: 345,
		padding: '1em',
		margin: '1em',
		backgroundColor: '#343E3D',
	},
	buttonText: {
		color: '#8BAAAD',
		fontSize: '0.5em',
	},
};

function ProjectCard({project}) {
    return (
			<Card style={styles.card}>
				<CardActionArea>
					<CardMedia
						component='img'
						image={project.image}
						alt={project.title}
						style={styles.cardImg}
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{project.title}
						</Typography>
						<Typography variant='body2'>{project.description}</Typography>
					</CardContent>
					<CardActions>
						<Button
							style={styles.buttonText}
							underline='none'
							href={project.link}
							target='_blank'
							rel='noreferrer'>
							Deployment
						</Button>
						<Button
							style={styles.buttonText}
							underline='none'
							href={project.frontendRepo}
							target='_blank'
							rel='noreferrer'>
							Frontend Repo
						</Button>
						{project.backendRepo && (
							<Button
								style={styles.buttonText}
								underline='none'
								href={project.backendRepo}
								target='_blank'
								rel='noreferrer'>
								Backend Repo
							</Button>
						)}
					</CardActions>
				</CardActionArea>
			</Card>
		);
}

export default ProjectCard;