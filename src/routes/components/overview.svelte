<script>
  import { onMount } from 'svelte';
  import chartjs from 'chart.js/auto';
  import { _ } from 'svelte-i18n';

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
          maintainAspectRatio: false,
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

<main>
  <div class="grid grid-cols-5 grid-rows-2 gap-10" style="height: 100%; padding: 5%;">

    <!-- First item -->
    <div class="col-span-1 bg-white shadow-lg rounded-2xl p-5 max-w-md mx-auto flex justify-center items-center" style="height: 100%;">
      <div class="text-center">
        <p class="text-md text-black mt-2" style="height: 100%; width: 100%;">{$_('comparison of usage')}</p>
        <h2 class="font-bold text-lg mt-5" style="color: #FF2962;">{$_('low rank')}</h2>
      </div>
    </div>

    <!-- Second item -->
    <div class="col-span-3 row-span-2 bg-white shadow-lg rounded-2xl p-10 flex justify-center items-center" style="height: 100%;">
        <canvas bind:this={barchart} style="height: 100%; width: 100%;"></canvas>
    </div>

    <!-- Third item -->
    <div class="col-span-1 bg-white shadow-lg rounded-2xl p-5 max-w-md mx-auto flex justify-center items-center" style="height: 100%;">
      <div class="text-center">
        <p class="text-md text-black mt-2">{$_('app users')}</p>
        <h2 class="font-bold text-lg mt-5" style="color: #FF2962;">15 {$_('users')}</h2>
      </div>
    </div>

    <!-- Fourth item -->
    <div class="col-span-1 bg-white shadow-lg rounded-2xl p-5 max-w-md mx-auto flex justify-center items-center" style="height: 100%;">
      <div class="text-center">
        <p class="text-md text-black mt-2">{$_('compare users')}</p>
        <h2 class="font-bold text-lg mt-5" style="color: #FF2962;">{$_('low rank')}</h2>
      </div>
    </div>

    <!-- Fifth item -->
    <div class="col-span-1 bg-white shadow-lg rounded-2xl p-5 max-w-md mx-auto flex justify-center items-center" style="height: 100%;">
      <div class="text-center">
        <p class="text-md text-black mt-2">{$_('average usage')}</p>
        <h2 class="font-bold text-lg mt-5" style="color: #FF2962;">00:08 {$_('hh:mm')}</h2>
      </div>
    </div>

</main>
