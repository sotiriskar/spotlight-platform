<script>
  import { onMount } from 'svelte';
  import chartjs from 'chart.js/auto';

  let playingArea1 = [100, 130, 120, 80, 50, 60, 63];
  let playingArea2 = [150, 110, 70, 80, 60, 70, 85];
  let playingArea3 = [90, 60, 65, 63, 50, 45, 36];
  let playingArea4 = [70, 80, 85, 50, 65, 70, 60];
  let kinoArea = [80, 90, 80, 70, 60, 50, 60];
  let out = [30, 32, 41, 35, 37, 45, 28];
  let ctx;

  let linechartLabels = ['Jan 5', 'Jan 6', 'Jan 7', 'Jan 8', 'Jan 9', 'Jan 10', 'Jan 11'];
  let linechart;  

  onMount(async (promise) => {
      ctx = linechart.getContext('2d');
      var chart = new chartjs(ctx, {
        type: 'line',
        data: {
            labels: linechartLabels,
            datasets: [{
              // must be changed to "PLAYING AREA 1", "PLAYING AREA 2", "PLAYING AREA 3", "PLAYING AREA 4", "OUT", "KINO AREA 6"
                label: 'PLAYING AREA 1',
                data: playingArea1
            }
            ,{
                label: 'PLAYING AREA 2',
                data: playingArea2  
            },{
                label: 'PLAYING AREA 3',
                data: playingArea3
            },{
                label: 'PLAYING AREA 4',
                data: playingArea4
            },{
                label: 'OUT',
                data: out
            },{
                label: 'KINO AREA',
                data: kinoArea
            }
          ]
        }
    });
  });

  // make polar area chart for "PLAYING AREA 1", "PLAYING AREA 2", "PLAYING AREA 3", "PLAYING AREA 4", "OUT", "KINO AREA 6"
  let polarAreaChartValues = [20, 17, 13, 10, 5, 3];
  let polarAreaChartLabels = ['PLAYING AREA 1', 'PLAYING AREA 2', 'PLAYING AREA 3', 'PLAYING AREA 4', 'OUT', 'KINO AREA 6'];
  let polarAreaChart;

  onMount(async (promise) => {
      ctx = polarAreaChart.getContext('2d');
      var chart = new chartjs(ctx, {
        type: 'polarArea',
        data: {
            labels: polarAreaChartLabels,
            datasets: [{
                data: polarAreaChartValues
            }
          ]
        }
    });
  });

  let chart2Labels = ['PLAYING AREA 1', 'PLAYING AREA 2', 'PLAYING AREA 3', 'PLAYING AREA 4', 'OUT', 'KINO AREA 6'];
  let barchart2;

  let barPlayArea1 = [20, 17, 13, 10, 5, 3];
  let barPlayArea2 = [20, 17, 13, 10, 5, 3];
  let barPlayArea3 = [20, 17, 13, 10, 5, 3];
  let barPlayArea4 = [20, 17, 13, 10, 5, 3];
  let barOut = [20, 17, 13, 10, 5, 3];
  let barKinoArea = [20, 17, 13, 10, 5, 3];

  // find max value of sum of all arrays
  let maxValue3 =  Math.max(...barPlayArea1) + Math.max(...barPlayArea2) + Math.max(...barPlayArea3) + Math.max(...barPlayArea4) + Math.max(...barOut) + Math.max(...barKinoArea);

  onMount(async (promise) => {
      ctx = barchart2.getContext('2d');
      var chart = new chartjs(ctx, {
        type: 'bar',
        data: {
            labels: chart2Labels,
            datasets: [{
                label: 'PLAYING AREA 1',
                data: barPlayArea1
            },{
                label: 'PLAYING AREA 2',
                data: barPlayArea2
            },{
                label: 'PLAYING AREA 3',
                data: barPlayArea3
            },{
                label: 'PLAYING AREA 4',
                data: barPlayArea4
            },{
                label: 'OUT',
                data: barOut,
            },{
                label: 'KINO AREA',
                data: barKinoArea,
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,

              max:  maxValue3 + 20,
            }
          }
        }
    });
});
</script>

<main>
  <div class="grid grid-cols-4 gap-10 mt-10 ml-10 mr-10">
    <div class="col-span-4">

      <!-- First item -->
      <div class="bg-white shadow-lg rounded-2xl flex justify-center items-center" style="height: 400px;">
        <canvas bind:this={barchart2} id="myChart"></canvas>
    </div>

    </div>
  </div>
  <div class="grid grid-cols-3 gap-4 m-10">
    <div class="col-span-2">

      <!-- Second item -->
      <div class="bg-white shadow-lg rounded-2xl p-3 flex justify-center items-center" style="height: 400px;">
        <canvas bind:this={linechart} id="myChart"></canvas>
      </div>

    </div>
    <div class="col-span-1">

      <!-- Third item -->
      <div class="bg-white shadow-lg rounded-2xl flex justify-center items-center" style="height: 400px;">
        <canvas bind:this={polarAreaChart} id="myChart"></canvas>
    </div>
  </div>
</main>
