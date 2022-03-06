import React from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Button,
	CardActionArea,
	CardActions,
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
						<Typography variant='body2'>
							{project.description}
						</Typography>
					</CardContent>
					<CardActions>
						<Button
							size='small'
							href={project.link}
							target='_blank'
							rel='noreferrer'>
							Deployment
						</Button>
						<Button
							size='small'
							href={project.fontendRepo}
							target='_blank'
							rel='noreferrer'>
							Frontend Repo
                    </Button>
                    {project.backendRepo && 
						<Button
							size='small'
							href={project.backendRepo}
							target='_blank'
							rel='noreferrer'>
							Backend Repo
						</Button>
                    }
					</CardActions>
				</CardActionArea>
			</Card>
		);
}

export default ProjectCard;