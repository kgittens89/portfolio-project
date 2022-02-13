import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import flow from '../../assets/flow.png';
import spaceman from '../../assets/spaceman-winner.jpeg';
import cook from '../../assets/Main.png';
import './Projects.css'


function Projects() {
	return (
		<>
			<div className='component t'>
				<h2>Projects</h2>
				<div className='projects'>
					<Card
						sx={{
							maxWidth: 345,
							padding: '1em',
							margin: '1em',
						}}>
						<CardActionArea>
							<CardMedia
								component='img'
								height='200'
								image={spaceman}
								alt='Spaceman Game'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Spaceman Game
								</Typography>
								<Typography variant='body2'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Necessitatibus, optio. Eos quod reiciendis autem corporis?
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									size='small'
									href='https://kgittens89.github.io/spaceman-Game/'
									target='_blank'
									rel='noreferrer'>
									Deployment
								</Button>
								<Button
									size='small'
									href='https://github.com/kgittens89/spaceman-Game/tree/main'
									target='_blank'
									rel='noreferrer'>
									Repository
								</Button>
							</CardActions>
						</CardActionArea>
					</Card>

					<Card
						sx={{
							maxWidth: 345,
							padding: '1em',
							margin: '1em',
						}}>
						<CardActionArea>
							<CardMedia
								component='img'
								height='200'
								image={cook}
								alt="Let's Cook"
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									Let's Cook
								</Typography>
								<Typography variant='body2'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Necessitatibus, optio. Eos quod reiciendis autem corporis?
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									size='small'
									href='https://lets-cook-guys.netlify.app/'
									target='_blank'
									rel='noreferrer'>
									Deployment
								</Button>
								<Button
									size='small'
									href='https://github.com/kgittens89/lets-cook'
									target='_blank'
									rel='noreferrer'>
									Repository
								</Button>
							</CardActions>
						</CardActionArea>
					</Card>
					<Card
						sx={{
							maxWidth: 345,
							padding: '1em',
							margin: '1em',
						}}>
						<CardActionArea>
							<CardMedia
								component='img'
								height='200'
								image={flow}
								alt='The Flow Factory'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									The Flow Factory
								</Typography>
								<Typography variant='body2'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Necessitatibus, optio. Eos quod reiciendis autem corporis?
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									size='small'
									href='https://clever-montalcini-9e14ea.netlify.app/'
									target='_blank'
									rel='noreferrer'>
									Deployment
								</Button>
								<Button
									size='small'
									href='https://github.com/kgittens89/yoga-frontend'
									target='_blank'
									rel='noreferrer'>
									Repository
								</Button>
							</CardActions>
						</CardActionArea>
					</Card>
				</div>
			</div>
		</>
	);
}

export default Projects;