<script>
  import Overview from './components/overview.svelte';
  import LeftSideBar from './components/leftSideBar.svelte';
  import TopNavBar from './components/topNavBar.svelte';
  import Traffic from './components/traffic.svelte';
  import Store from './components/store.svelte';
  import Area from './components/area.svelte';
  import { leagueTable } from '$lib/stores.js';
</script>


<div id="wrapper">
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
      {:else}
        <p>Page not found</p>
      {/if}
    </div>
  </div>
</div>
