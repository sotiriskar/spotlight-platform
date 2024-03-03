import { redirect } from '@sveltejs/kit';

export const load = ({ cookies }) => {
    if (cookies.get('username')) {
        cookies.delete('username', { path: '/' });
		throw redirect(307, '/login');
    } else {
		throw redirect(307, '/');
	}
};
