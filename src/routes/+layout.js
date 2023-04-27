export const load = ({ url }) => {
	return {
		darkMode: !!url.searchParams.get('darkMode'),
	};
};
