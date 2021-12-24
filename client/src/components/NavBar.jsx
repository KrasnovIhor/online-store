import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Context } from '../index';

import { Navbar, Container, Nav, Button } from 'react-bootstrap';

import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/constants';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
	const { user } = useContext(Context);
	const navigate = useNavigate();

	const logOut = () => {
		user.setUser({});
		user.setIsAuth(false);
		localStorage.removeItem('token');
	};

	return (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
					BuyDevice
				</NavLink>
				{user.isAuth ? (
					<Nav className='ms-auto' style={{ color: 'white' }}>
						<Button
							onClick={() => navigate(ADMIN_ROUTE)}
							variant={'outline-light'}>
							Admin Panel
						</Button>
						<Button onClick={logOut} variant={'outline-light'} className='ms-2'>
							Log out
						</Button>
					</Nav>
				) : (
					<Nav className='ml-auto' style={{ color: 'white' }}>
						<Button
							variant={'outline-light'}
							onClick={() => navigate(LOGIN_ROUTE)}>
							Authorization
						</Button>
					</Nav>
				)}
			</Container>
		</Navbar>
	);
});

export default NavBar;
