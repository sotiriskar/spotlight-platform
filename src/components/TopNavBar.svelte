<script>
  import { _ } from 'svelte-i18n';
  import logo from '$lib/assets/profile-icon.png';
</script>

<header class="navbar bg-white sticky top-0 z-[1]">
  <nav class="flex-grow flex items-center space-x-4 justify-end mr-5">
    <div class="flex items-center space-x-4">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img alt="bespot-logo" src="{logo}" />
          </div>
        </div>
          <ul class="menu menu-sm dropdown-content z-[1] p-2 shadow rounded-box mt-2 w-40 bg-white">
            <li>
              <a href="/settings">{$_('settings')}</a>
            </li>
            <li>
              <a href="/logout">{$_('logout')}</a>
            </li>
          </ul>
      </div>
    </div>
  </nav>
</header>
