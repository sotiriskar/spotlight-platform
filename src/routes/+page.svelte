<script>
  import LeftSideBar from '../components/LeftSideBar.svelte';
  import TopNavBar from '../components/TopNavBar.svelte';
  import { init, _ } from 'svelte-i18n';
  import chartjs from 'chart.js/auto';
  import { onMount } from 'svelte';
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

	let barchartValues = [37, 16, 25, 56, 42, 178, 64];
	let chartLabels = ['Jan 5', 'Jan 6', 'Jan 7', 'Jan 8', 'Jan 9', 'Jan 10', 'Jan 11'];
  let barchart;
	let ctx;

  let maxValue2 = Math.max(...barchartValues);

	onMount(async (promise) => {
		  ctx = barchart.getContext('2d');
			var chart = new chartjs(ctx, {
				type: 'bar',
				data: {
						labels: chartLabels,
						datasets: [{
                label: $_('users'),
								data: barchartValues,
                backgroundColor: '#FF2962'
						}]
				},
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            y: {
              max:  maxValue2 + 20,
            }
          },
          plugins: {
            legend: {
              display: true,
              title: {
                display: true,
                text: $_('users per period')
              }
            }
          }
        }
		});
	});
</script>

<svelte:head>
    <title>Spotlight - Overview</title>
</svelte:head>
<div id="wrapper"  style="background-color: #dfe3ee;">
  <div class="flex">
    <LeftSideBar />
    <div class="flex flex-col w-full h-full">
      <TopNavBar />

      <div class="grid grid-cols-6 grid-rows-2 gap-10 m-10">

        <!-- First item -->
        <div class="col-span-1 bg-white shadow-lg rounded-2xl p-5 flex justify-center items-center w-full overflow-hidden" style="height: 40vh;">
          <div class="text-center overflow-hidden">
            <p class="text-md text-black mt-2">{$_('comparison of usage')}</p>
            <h2 class="font-bold text-lg mt-5" style="color: #FF2962;">{$_('low rank')}</h2>
          </div>
        </div>

        <!-- Second item -->
        <div class="col-span-4 row-span-2 bg-white shadow-lg rounded-2xl p-10 flex justify-center items-center w-full h-full overflow-hidden">
            <canvas class="w-full h-full" bind:this={barchart}></canvas>
        </div>

        <!-- Third item -->
        <div class="col-span-1 bg-white shadow-lg rounded-2xl p-5 flex justify-center items-center w-full overflow-hidden" style="height: 40vh;">
          <div class="text-center overflow-hidden">
            <p class="text-md text-black mt-2">{$_('app users')}</p>
            <h2 class="font-bold text-lg mt-5" style="color: #FF2962;">15 {$_('users')}</h2>
          </div>
        </div>

        <!-- Fourth item -->
        <div class="col-span-1 bg-white shadow-lg rounded-2xl p-5 flex justify-center items-center w-full overflow-hidden" style="height: 40vh;">
          <div class="text-center overflow-hidden">
            <p class="text-md text-black mt-2">{$_('compare users')}</p>
            <h2 class="font-bold text-lg mt-5" style="color: #FF2962;">{$_('low rank')}</h2>
          </div>
        </div>

        <!-- Fifth item -->
        <div class="col-span-1 bg-white shadow-lg rounded-2xl p-5 flex justify-center items-center w-full overflow-hidden" style="height: 40vh;">
          <div class="text-center overflow-hidden">
            <p class="text-md text-black mt-2">{$_('average usage')}</p>
            <h2 class="font-bold text-lg mt-5" style="color: #FF2962;">00:08 {$_('hh:mm')}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
