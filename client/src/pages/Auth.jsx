import { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { observer } from 'mobx-react-lite';

import { Container, Form, Card, Button, Row } from 'react-bootstrap';

import { login, registration } from '../http/userAPI';

import {
	LOGIN_ROUTE,
	REGISTRATION_ROUTE,
	SHOP_ROUTE,
} from '../utils/constants';
import { Context } from '..';

const Auth = observer(() => {
	const { user } = useContext(Context);

	const location = useLocation();
	const navigate = useNavigate();
	const isLogin = location.pathname === LOGIN_ROUTE;

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const click = async () => {
		try {
			let data;
			if (isLogin) {
				data = await login(email, password);
			} else {
				data = await registration(email, password);
			}
			user.setUser(data);
			user.setIsAuth(true);

			setEmail('');
			setPassword('');
			navigate(SHOP_ROUTE);
		} catch (e) {
			alert(e.message);
		}
	};

	return (
		<Container
			className='d-flex justify-content-center align-items-center'
			style={{ height: window.innerHeight - 54 }}>
			<Card style={{ width: 600 }} className='p-5'>
				<h2>{isLogin ? 'Authorization' : 'Registration'}</h2>
				<Form className='d-flex flex-column'>
					<Form.Control
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='mt-3'
						placeholder='Enter your email...'
					/>
					<Form.Control
						value={password}
						type='password'
						onChange={(e) => setPassword(e.target.value)}
						className='mt-3'
						placeholder='Enter your password...'
					/>
					<Row className='justify-content-between mt-3 ps-3 pe-3' xs='auto'>
						{isLogin ? (
							<div className='p-0'>
								Don't have an account?{' '}
								<NavLink to={REGISTRATION_ROUTE}>Sign in!</NavLink>
							</div>
						) : (
							<div className='p-0'>
								Have an account? <NavLink to={LOGIN_ROUTE}>Login!</NavLink>
							</div>
						)}
						<Button onClick={click} variant='outline-success'>
							{isLogin ? 'Login' : 'Sign in'}
						</Button>
					</Row>
				</Form>
			</Card>
		</Container>
	);
});

export default Auth;
