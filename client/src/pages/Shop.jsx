import { useContext, useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';
import { Context } from '..';

import { Container, Row, Col, Spinner } from 'react-bootstrap';

import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';
import Pages from '../components/Pages';

const Shop = observer(() => {
	const { device } = useContext(Context);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchTypes().then((data) => device.setTypes(data));
		fetchBrands().then((data) => device.setBrands(data));
		fetchDevices(null, null, 1, 2)
			.then((data) => {
				device.setDevices(data.rows);
				device.setTotalCount(data.count);
			})
			.finally(() => setLoading(false));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		fetchDevices(
			device.selectedType.id,
			device.selectedBrand.id,
			device.page,
			2
		)
			.then((data) => {
				device.setDevices(data.rows);
				device.setTotalCount(data.count);
			})
			.finally(() => setLoading(false));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [device.page, device.selectedType.id, device.selectedBrand.id]);

	return (
		<Container>
			<Row>
				<Col md={3}>
					{loading ? <Spinner animation='border' /> : <TypeBar />}
				</Col>
				<Col md={9}>
					{loading ? <Spinner animation='border' /> : <BrandBar />}
					<DeviceList />
					<Pages />
				</Col>
			</Row>
		</Container>
	);
});

export default Shop;
