<script>
  import Charts from './components/charts.svelte';
  import LeftSideBar from './components/leftSideBar.svelte';
  import TopNavBar from './components/topNavBar.svelte';
  import Stats from './components/stats.svelte';
  import { leagueTable } from '$lib/stores.js';
</script>


<div id="wrapper">
  <div class="flex">
    <LeftSideBar />
    <div class="flex flex-col w-full">
      <TopNavBar />
      {#if $leagueTable === 'overview'}
        <Charts />
      {:else if $leagueTable === 'dashboard'}
        <Stats />
      {/if}
    </div>
  </div>
</div>
