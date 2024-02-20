<script>
  import { onMount } from 'svelte';
  import chartjs from 'chart.js/auto';

  let hours = [];
  for(let i = 7; i <= 23; i++) {
    hours.push(i + ":00");
  }

  let countsToday = [0, 4, 5, 6, 8, 7, 7, 12, 16, 18, 23, 25, 23, 20, 18, 15, 10, 8, 2, 1, 0]
  let countsPreviousWeek = [0, 2, 4, 6, 8, 10, 12, 12, 13, 15, 18, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0]

  let ctx;
  let linechart;

  onMount(async () => {
    ctx = linechart.getContext('2d');
    var chart = new chartjs(ctx, {
      type: 'line',
      data: {
        labels: hours,
        datasets: [{
          label: 'Visitors Today',
          data: countsToday,
          borderColor: 'blue',
          pointRadius: 0,
          fill: false
        }, {
          label: 'Visitors of the corresponding day of the previous week',
          data: countsPreviousWeek,
          borderColor: 'green',
          pointRadius: 0,
          fill: true
        }]
      }
    });
  });

  let days = ['Feb 1', 'Feb 2', 'Feb 3', 'Feb 4', 'Feb 5', 'Feb 6', 'Feb 7'];
  let counts = [4, 6, 7, 10, 4, 6, 8];
  let linechart2;

  onMount(async () => {
    ctx = linechart2.getContext('2d');
    var chart = new chartjs(ctx, {
      type: 'line',
      data: {
        labels: days,
        datasets: [{
          label: 'Visitors per selected period-100694',
          data: counts,
          borderColor: 'blue',
          pointRadius: 0,
          fill: false
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Visitors per selected period-100694'
        }
      }
    });
  });

  let weeks = ['Week 6', 'Week 7'];
  let week6Data = [3,6,7,5,3,5,6];
  let week7Data = [3,4,6,8,5,3,2];
  let barchart;

  onMount(async () => {
    ctx = barchart.getContext('2d');
    var chart = new chartjs(ctx, {
      type: 'bar',
      data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
          label: 'Week 6',
          data: week6Data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
        }, {
          label: 'Week 7',
          data: week7Data,
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
        }]
      },
      options: {
        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [{ stacked: true }]
        }
      }
    });
  });
</script>
  
<main>
  <div class="grid grid-cols-4 gap-10 mt-10 ml-10 mr-10">

    <!-- First item -->
    <div class="col-span-4">
      <div class="bg-white shadow-lg rounded-2xl p-10 flex justify-center items-center " style="height: 100%;">
        <canvas bind:this={linechart}></canvas>
      </div>
    </div>

  </div>

  <div class="grid grid-cols-3 gap-10 m-10">

      <!-- Second item -->
      <div class="col-span-2">
        <div class="bg-white shadow-lg rounded-2xl p-5 flex justify-center items-center" style="height: 400px;">
          <canvas bind:this={linechart2}></canvas>
        </div>
      </div>

    <!-- Third item -->
    <div class="col-span-1">
      <div class="bg-white shadow-lg rounded-2xl flex justify-center items-center" style="height: 400px;">
        <canvas id="myChart"></canvas>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-10 m-10">
      <!-- Second item -->
      <div class="col-span-1">
        <div class="bg-white shadow-lg rounded-2xl p-3 flex justify-center items-center" style="height: 400px;">
          <canvas></canvas>
        </div>
      </div>

    <!-- Third item -->
    <div class="col-span-2">
      <div class="bg-white shadow-lg rounded-2xl p-5 flex justify-center items-center pt-10" style="height: 400px;">
        <canvas bind:this={barchart} id="myChart">
      </div>
    </div>
  </div>

  </main>
