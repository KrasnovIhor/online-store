import { $authHost, $host } from '.';

export const createType = async (type) => {
	try {
		const { data } = await $authHost.post('api/type', type);

		return data;
	} catch (e) {
		alert(e);
	}
};

export const fetchTypes = async () => {
	try {
		const { data } = await $host.get('api/type');

		return data;
	} catch (e) {
		alert(e);
	}
};

export const createBrand = async (brand) => {
	try {
		const { data } = await $authHost.post('api/brand', brand);

		return data;
	} catch (e) {
		alert(e);
	}
};

export const fetchBrands = async () => {
	try {
		const { data } = await $host.get('api/brand');

		return data;
	} catch (e) {
		alert(e);
	}
};

export const createDevice = async (device) => {
	try {
		const { data } = await $authHost.post('api/device', device);
		return data;
	} catch (e) {
		alert(e);
	}
};

export const fetchDevices = async (typeId, brandId, page, limit = 5) => {
	try {
		const { data } = await $host.get('api/device', {
			params: { typeId, brandId, page, limit },
		});

		return data;
	} catch (e) {
		alert(e);
	}
};

export const fetchOneDevice = async (id) => {
	try {
		const { data } = await $host.get('api/device/' + id);

		return data;
	} catch (e) {
		alert(e);
	}
};
