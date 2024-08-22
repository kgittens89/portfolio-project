import React from "react";
import { Card } from "react-bootstrap";

const MediumCard = ({ article }) => {
	return (
		<Card className='mb-3'>
			<Card.Body>
				<Card.Title>{article.title}</Card.Title>
				<Card.Subtitle className='text-muted'>
					{new Date(article.pubDate).toLocaleDateString()}
				</Card.Subtitle>
				<a href={article.link} variant='primary'>
					Read More
				</a>
			</Card.Body>
		</Card>
	);
};

export default MediumCard;
