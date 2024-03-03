<script>
  import Icon from '@iconify/svelte';
  import { _ } from 'svelte-i18n';

  export const logout = async () => {
    console.log('logout');
    const response = await fetch('?/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      window.location.href = '/login';
    }
  }
</script>

<header class="navbar bg-white sticky top-0 z-[1]">
  <nav class="flex-grow flex items-center space-x-4 justify-end mr-5">
    <div class="flex items-center space-x-4">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="data:image/jpeg;base64,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" />
          </div>
        </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box mt-2 w-40 bg-white">
            <li><a href="/settings">{$_('settings')}</a></li>
            <li><a href="/logout">{$_('logout')}</a></li>
          </ul>
      </div>
    </div>
  </nav>
</header>
