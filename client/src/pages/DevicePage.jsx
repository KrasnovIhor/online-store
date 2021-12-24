import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Card, Col, Container, Image, Row, Button } from 'react-bootstrap';

import { fetchOneDevice } from '../http/deviceAPI';

import bigStar from '../assets/star_big.png';

const DevicePage = () => {
	const [device, setDevice] = useState({ info: [] });
	const { id } = useParams();

	useEffect(() => {
		fetchOneDevice(id).then((data) => setDevice(data));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container className='mt-3'>
			<Row>
				<Col md={4}>
					<Image
						width={300}
						height={300}
						src={process.env.REACT_APP_API_URL + device?.img}
					/>
				</Col>
				<Col md={4}>
					<Row className='align-items-center justify-content-center'>
						<h2 className='text-center'>{device?.name}</h2>
						<div
							className='d-flex align-items-center justify-content-center'
							style={{
								background: `url(${bigStar}) no-repeat center center`,
								width: 240,
								height: 240,
								backgroundSize: 'cover',
								fontSize: 64,
							}}>
							{device?.rating}
						</div>
					</Row>
				</Col>
				<Col md={4}>
					<Card
						className='d-flex flex-column justify-content-around align-items-center'
						style={{
							height: '100%',
							fontSize: 32,
							border: '5px solid lightgray',
						}}>
						<h3>From: {device?.price}$</h3>
						<Button variant='outline-dark'>Add to Basket</Button>
					</Card>
				</Col>
			</Row>
			<Row className='d-flex flex-column mt-3'>
				<h2>Specs</h2>
				{device.info.map((info, i) => (
					<Row
						key={info.id}
						style={{ background: !(i % 2) && 'lightgray', padding: 10 }}>
						{info.title}: {info.description}
					</Row>
				))}
			</Row>
		</Container>
	);
};

export default DevicePage;
