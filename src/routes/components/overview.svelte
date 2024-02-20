<script>
  import { onMount } from 'svelte';
  import chartjs from 'chart.js/auto';

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
            // color

						datasets: [{
								label: 'Users',
								data: barchartValues,
                backgroundColor: '#FF2962'
						}]
				},
        options: {
          responsive: true,
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
                text: 'Users Per Period'
            },
            }
          }
        }
		});
	});

</script>

<main>
  <div class="grid grid-cols-5 grid-rows-2 gap-10 mt-10 ml-10 mr-10 mb-10">

    <!-- First item -->
    <div class="col-span-1 bg-white shadow-lg rounded-2xl p-5 max-w-md mx-auto flex justify-center items-center" style="height: 100%;">
      <div class="text-center">
        <p class="text-md text-black mt-2">Comparison of usage with network Users OPAP Store App</p>
        <h2 class="font-bold text-lg mt-5" style="color: #FF2962;">You are in the lowest ranking in minutes of use</h2>
      </div>
    </div>

    <!-- Second item -->
    <div class="col-span-3 row-span-2 bg-white shadow-lg rounded-2xl p-10 flex justify-center items-center" style="height: 100%; width: 100%; border-radius: 20px;">
        <canvas bind:this={barchart} id="myChart" style="height: 100%; width: 100%;"></canvas>
    </div>

    <!-- Third item -->
    <div class="col-span-1 bg-white shadow-lg rounded-2xl p-5 max-w-md mx-auto flex justify-center items-center" style="height: 100%;">
      <div class="text-center">
        <p class="text-md text-black mt-2">Today's App Users</p>
        <h2 class="font-bold text-lg mt-5" style="color: #FF2962;">15 Users</h2>
      </div>
    </div>

    <!-- Fourth item -->
    <div class="col-span-1 bg-white shadow-lg rounded-2xl p-5 max-w-md mx-auto flex justify-center items-center" style="height: 100%;">
      <div class="text-center">
        <p class="text-md text-black mt-2">Compare users with network Users OPAP Store App</p>
        <h2 class="font-bold text-lg mt-5" style="color: #FF2962;">You tend to perform like the network average in number of users</h2>
      </div>
    </div>

    <!-- Fifth item -->
    <div class="col-span-1 bg-white shadow-lg rounded-2xl p-5 max-w-md mx-auto flex justify-center items-center" style="height: 100%;">
      <div class="text-center">
        <p class="text-md text-black mt-2">Average usage Duration of usage OPAP Store App</p>
        <h2 class="font-bold text-lg mt-5" style="color: #FF2962;">00:08 hours : minutes</h2>
      </div>
    </div>

</main>
