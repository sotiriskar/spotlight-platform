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
						datasets: [{
								label: 'Users Per Period',
								data: barchartValues
						}]
				},
        options: {
          responsive: true,
          scales: {
            y: {
              max:  maxValue2 + 20,
            }
          }
        }
		});
	});

</script>

<main>
  <div class="grid grid-cols-5 grid-rows-2 gap-10 mt-10 ml-10 mr-10 mb-10">
    <div class="col-span-1">

        <!-- First item -->
        <div class="bg-white shadow-lg rounded-2xl p-10" style="height: 100%;">
          <table class="w-full max-w-4xl mx-auto overflow-hidden bg-white divide-y divide-gray-300 rounded-lg">
              <thead>
                  <tr>
                      <th>Comparison of usage with network Users OPAP Store App-100695</th>
                  </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="font-size: 1em;">You are in the lowest ranking
                    in minutes of use</td>
                </tr>
              </tbody>
          </table>
        </div>
    </div>

    <!-- Second item -->
    <div class="col-span-3 row-span-2">
      <div class="bg-white shadow-lg rounded-2xl p-3 flex justify-center items-center" style="height: 100%;">
        <canvas bind:this={barchart} id="myChart" height="300%"></canvas>
      </div>
    </div>

      <!-- Third item -->
    <div class="col-span-1">
      <div class="bg-white shadow-lg rounded-2xl p-10" style="height: 100%;">
        <table class="w-full max-w-4xl mx-auto overflow-hidden bg-white divide-y divide-gray-300 rounded-lg">
          <thead>
            <tr>
              <th>Today App users-100695</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-size: 2em;">15 Users</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Fourth item (new row) -->
    <div class="col-span-1">
      <div class="bg-white shadow-lg rounded-2xl p-10" style="height: 100%;">
        <table class="w-full max-w-4xl mx-auto overflow-hidden bg-white divide-y divide-gray-300 rounded-lg">
          <thead>
            <tr>
              <th style="font-size: .8em;">Compare users with network Users OPAP Store App-100695</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-size: 1em;">You tend to perform like the network average
                in number of users</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Fifth item (new row) -->
    <div class="col-span-1">
      <div class="bg-white shadow-lg rounded-2xl p-10" style="height: 100%;">
        <table class="w-full max-w-4xl mx-auto overflow-hidden bg-white divide-y divide-gray-300 rounded-lg">
          <thead>
            <tr>
              <th>Average usage Duration of usage OPAP Store App-100695</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-size: 1em;">00:04
                hours : minutes</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</main>
