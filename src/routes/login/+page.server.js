import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ cookies, request }) => {
        const data = await request.formData();
        const store = data.get('store');
        const password = data.get('password');

		if (!store || !password) {
			return fail(400, { store, missing: true });
		}

        // Check if the username and password are 'admin'
        if (store !== 'admin' || password !== 'admin') {
            return fail(400, { store, incorrect: true });
        }

        // If the credentials are correct, set the sessionid cookie
        cookies.set('sessionid', 'admin', { path: '/' });

		if (store === 'admin' && password === 'admin') {
			return { success: true, redirect: '/'}
		}
    }
};