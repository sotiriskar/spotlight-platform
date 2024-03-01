<script>
  import LeftSideBar from './components/leftSideBar.svelte';
  import TopNavBar from './components/topNavBar.svelte';
  import Settings from './components/settings.svelte';
  import Overview from './components/overview.svelte';
  import Traffic from './components/traffic.svelte';
  import Store from './components/store.svelte';
  import Area from './components/area.svelte';
  import { leagueTable } from '$lib/stores.js';
  import { init, _ } from 'svelte-i18n';
  import '../lib/index.js';

  let initialLocale = 'en';
  if (typeof window !== 'undefined') {
    initialLocale = localStorage.getItem('locale') || 'en';
  }

  // init with localStorage or default to 'en'
  init({
    fallbackLocale: 'en',
    initialLocale: initialLocale
  });
</script>

<svelte:head>
    <title>DashBoard</title>
</svelte:head>
<div id="wrapper"  style="background-color: #dfe3ee;">
  <div class="flex">
    <LeftSideBar />
    <div class="flex flex-col w-full">
      <TopNavBar />
      {#if $leagueTable === 'overview'}
        <Overview />
      {:else if $leagueTable === 'area'}
        <Area />
      {:else if $leagueTable === 'traffic'}
        <Traffic />
      {:else if $leagueTable === 'store'}
        <Store />
      {:else if $leagueTable === 'settings'}
        <Settings />
      {:else}
        <p>{$_('page not found')}</p>
      {/if}
    </div>
  </div>
</div>
