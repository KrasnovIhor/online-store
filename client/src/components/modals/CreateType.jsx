import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createType } from '../../http/deviceAPI';

const CreateType = ({ show, onHide }) => {
	const [value, setValue] = useState('');

	const addType = (e) => {
		e.preventDefault();

		createType({ name: value }).then(() => {
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
				<Modal.Title id='contained-modal-title-vcenter'>Add Type</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={addType}>
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
				<Button variant='outline-success' onClick={addType}>
					Add
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CreateType;
