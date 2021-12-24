import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Routes, Navigate, Route } from 'react-router';
import { Context } from '..';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/constants';

const AppRouter = observer(() => {
	const { user } = useContext(Context);

	return (
		<Routes>
			{user.isAuth &&
				authRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))}
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} />
			))}
			<Route path='*' element={<Navigate replace to={SHOP_ROUTE} />} />
		</Routes>
	);
});

export default AppRouter;
