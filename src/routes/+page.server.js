import { redirect } from "@sveltejs/kit";

export const load = ({ cookies, url }) => {
	if (!cookies.get('username')) {
		throw redirect(307, `/login?redirectTo=${url.pathname}`);
	}
};
