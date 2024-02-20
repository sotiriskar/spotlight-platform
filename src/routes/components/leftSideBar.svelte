<script>
  import {leagueTable} from '$lib/stores.js';
  import { _ } from 'svelte-i18n';

  function handleClick(value) {
    leagueTable.set(value);
    window.scrollTo(0, 0);
  }
</script>

<aside class="sidebar bg-white h-screen sticky top-0 z-[1]" style="width: 280px;">
  <h1 class="text-3xl font-bold pt-10 flex items-center justify-center" style="color: #FF2962">Spotlight</h1>
  <div class="flex items-center justify-center pt-20">
    <ul class="menu gap-7 text-gray-400">
      <li>
        <a on:click={() => handleClick('overview')} class:text-black={$leagueTable === 'overview'}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24">
            <path fill="currentColor" d="m16.18 19.6l-2.01-3.48c.98-.72 1.66-1.84 1.8-3.12H20a8.55 8.55 0 0 1-3.82 6.6M13 7.03V3c4.3.26 7.74 3.7 8 8h-4.03A4.488 4.488 0 0 0 13 7.03M7 12.5c0 .64.13 1.25.38 1.8L3.9 16.31A8.42 8.42 0 0 1 3 12.5C3 7.97 6.54 4.27 11 4v4.03c-2.25.25-4 2.15-4 4.47m4.5 8.5c-2.97 0-5.58-1.5-7.1-3.82l3.48-2.01A4.47 4.47 0 0 0 11.5 17c.64 0 1.25-.13 1.8-.38l2.01 3.48c-1.15.58-2.44.9-3.81.9" />
          </svg>
          <span class="text-lg">{$_('overview')}</span>
        </a>
      </li>
      <li>
        <a on:click={() => handleClick('area')} class:text-black={$leagueTable === 'area'}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24">
            <path fill="currentColor" d="M18.5 13c-1.9 0-3.5 1.61-3.5 3.5c0 2.61 3.5 6.5 3.5 6.5s3.5-3.89 3.5-6.5c0-1.89-1.6-3.5-3.5-3.5m0 4.81c-.7 0-1.2-.6-1.2-1.2c0-.7.6-1.2 1.2-1.2s1.2.59 1.2 1.2c.1.6-.5 1.2-1.2 1.2M15.91 23H7a2 2 0 0 1-2-2V3c0-1.11.89-2 2-2h10a2 2 0 0 1 2 2v8.03c-.16-.03-.33-.03-.5-.03c-.5 0-1 .08-1.5.22V5H7v14h6.54c.6 1.5 1.58 2.97 2.37 4" />
          </svg>
          <span class="text-lg">{$_('area')}</span>
        </a>
      </li>
      <li>
        <a on:click={() => handleClick('traffic')} class:text-black={$leagueTable === 'traffic'}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24">
            <path fill="currentColor" d="m6.03 12.03l2 3.47l-2.53 3.18L2 12.62zM17 18v-2.71c.88-.39 1.5-1.26 1.5-2.29c0-.57-.2-1.1-.53-1.5l1.97-1.15c1.01-.59 1.36-1.88.77-2.89l-1.38-2.4a2.125 2.125 0 0 0-2.89-.78L8.31 9c-.95.53-1.28 1.75-.73 2.71l1.5 2.6c.55.95 1.78 1.28 2.73.73l1.88-1.08c.25.59.72 1.07 1.31 1.33V18c0 1.1.9 2 2 2h5v-2z" />
          </svg>
          <span class="text-lg">{$_('traffic')}</span>
        </a>
      </li>
      <li>
        <a on:click={() => handleClick('store')} class:text-black={$leagueTable === 'store'}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 18H6v-4h6m9 0v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6m0-10H4v2h16z" />
          </svg>
          <span class="text-lg">{$_('store')}</span>
        </a>
      </li>
      <li>
        <a class:text-black={$leagueTable === 'help'}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24">
            <path fill="currentColor" d="M11 7v2h2V7zm3 10v-2h-1v-4h-3v2h1v2h-1v2zm8-5c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8" />
          </svg>
          <span class="text-lg">{$_('help')}</span>
        </a>
      </li>
    </ul>
  </div>
</aside>
