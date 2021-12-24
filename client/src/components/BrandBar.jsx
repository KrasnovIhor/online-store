import { useContext } from 'react';
import { Context } from '..';

import { observer } from 'mobx-react-lite';

import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
	const { device } = useContext(Context);

	return (
		<Row className='mt-2' xs='auto'>
			{device.brands.map((brand) => (
				<Card
					style={{ cursor: 'pointer' }}
					className='p-3 mx-2'
					key={brand.id}
					border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
					onClick={() => device.setSelectedBrand(brand)}>
					{brand.name}
				</Card>
			))}
		</Row>
	);
});

export default BrandBar;
