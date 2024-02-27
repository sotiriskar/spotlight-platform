<script>
  import { _ } from 'svelte-i18n';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;

  async function submit() {
    if (form?.store) {
      sessionStorage.setItem('store', form.store);
      window.location.href = '/';
    }
  }

</script>

<div class="font-asap flex items-center justify-center min-h-screen" 
     style="background: url('/login_bg.png') no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;">
  <form class="login bg-white p-10 rounded-lg shadow-2xl" style="width: 500px" method="POST" action="?/login" on:submit|preventDefault={submit}>
		<div class="flex justify-center">
			<img src="https://workable-application-form.s3.amazonaws.com/advanced/production/61e0f160344d40f0d105fbb6/7cf88f43-4478-9e80-9db7-876a2b56eb5f" alt="logo" class="flex justify-center pt-2" />
		</div>
		<h1 class="text-3xl text-black font-bold mb-5 pt-10">{$_('login')}</h1>
    <input name="store" value={form?.store ?? ''} type="text" class="block rounded-lg bg-gray-100 w-full border-0 p-2 my-4" placeholder="Store Code">
    <input name="password" class="block rounded-lg bg-gray-100 w-full border-0 p-2 my-4" type="password" placeholder="Password">
    {#if form?.missing}<p class="error text-red-500 text-sm">{$_('store required')}</p>{/if}
    {#if form?.incorrect}<p class="error text-red-500 text-sm">{$_('invalid store')}</p>{/if}
    <div class="flex justify-between items-center">
      <button type="submit" class="font-asap cursor-pointer text-white uppercase w-20 border-0 py-2 mt-2 ml-1 rounded-lg bg-red-500 hover:bg-red-600">{$_('login')}</button>
      <a href="/forgot-password" class="text-sm text-red-500 hover:text-red-600">{$_('forgot password')}</a>
    </div>
  </form>
</div>
