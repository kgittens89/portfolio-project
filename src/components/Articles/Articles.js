import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import MediumCard from "./MediumCard";

const Articles = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		fetch(
			'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40kmg052189'
		)
			.then((res) => res.json())
			.then((data) => setArticles(data.items));
	}, []);
  
    if (!articles) return null;
	return (
		<Row>
			{articles.map((article, index) => (
				<Col key={index} lg='4' md='4' className='mb-3'>
					<MediumCard article={article} />
				</Col>
			))}
		</Row>
	);
};

export default Articles;
