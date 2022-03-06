import React from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	CardActionArea,
	CardActions,
	Link,
} from '@mui/material';

const styles = {
	cardImg: {
        // objectFit: 'contain',
        height: 210
	},
	card: {
		maxWidth: 345,
		padding: '1em',
		margin: '1em',
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
						<Link
							underline='none'
							variant='body1'
							href={project.link}
							target='_blank'
							rel='noreferrer'>
							Deployment
						</Link>
						<Link
							underline='none'
							variant='body1'
							href={project.fontendRepo}
							target='_blank'
							rel='noreferrer'>
							Frontend Repo
						</Link>
						{project.backendRepo && (
							<Link
								underline='none'
								variant='body1'
								href={project.backendRepo}
								target='_blank'
								rel='noreferrer'>
								Backend Repo
							</Link>
						)}
					</CardActions>
				</CardActionArea>
			</Card>
		);
}

export default ProjectCard;