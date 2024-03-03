<script>
  import logo from '$lib/assets/bespot_logo-01.png';
	import { page } from '$app/stores';
  import { _, init } from 'svelte-i18n';

  let initialLocale = 'en';
  if (typeof window !== 'undefined') {
    initialLocale = localStorage.getItem('locale') || 'en';
  }

  // init with localStorage or default to 'en'
  init({
    fallbackLocale: 'en',
    initialLocale: initialLocale
  });

	export let form;
	const redirectTo = $page.url.searchParams.get('redirectTo') || '/';
</script>

<svelte:head>
    <title>SpotLight - Login</title>
</svelte:head>
<div class="font-asap flex items-center justify-center min-h-screen" 
    style="background: url('/login_bg.png') no-repeat center center fixed;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;"
>
  <form class="login bg-white p-10 rounded-lg shadow-2xl" style="width: 500px" action="/login?/login&redirectTo={redirectTo}" method="post">
		<div class="flex justify-center">
			<img src={logo} alt="BeSpot" class="w-35" />
		</div>
		<h1 class="text-3xl text-black font-bold mb-5 pt-10">{$_('login')}</h1>
    <input type="text" name="username" placeholder="Username" value={form?.username ?? ''} class="block rounded-lg bg-gray-100 w-full border-0 p-2 my-4" />
    <input type="password" name="password" placeholder="Password" class="block rounded-lg bg-gray-100 w-full border-0 p-2 my-4" />
    <p class="text-red-500 text-xs italic m-3">{form?.message || ''}</p>
    <div class="flex justify-between items-center">
      <button type="submit" class="font-asap cursor-pointer text-white uppercase w-20 border-0 py-2 mt-2 ml-1 rounded-lg bg-red-500 hover:bg-red-600">{$_('login')}</button>
      <a href="/forgot-password" class="text-sm text-red-500 hover:text-red-600">{$_('forgot password')}</a>
    </div>
  </form>
</div>
