import { useState } from 'react';

import { Modal, Button, Form } from 'react-bootstrap';

import { createBrand } from '../../http/deviceAPI';

const CreateBrand = ({ show, onHide }) => {
	const [value, setValue] = useState('');

	const addBrand = (e) => {
		e.preventDefault();

		createBrand({ name: value }).then(() => {
			setValue('');
			onHide();
		});
	};

	return (
		<Modal
			show={show}
			onHide={onHide}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>Add Brand</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={addBrand}>
					<Form.Control
						value={value}
						onChange={(e) => setValue(e.target.value.trim())}
						placeholder='Enter Type...'
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-danger' onClick={onHide}>
					Close
				</Button>
				<Button variant='outline-success' onClick={addBrand}>
					Add
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CreateBrand;
