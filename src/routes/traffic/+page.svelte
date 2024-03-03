<script>
  import LeftSideBar from '../../components/LeftSideBar.svelte';
  import TopNavBar from '../../components/TopNavBar.svelte';
  import { init, _ } from 'svelte-i18n';
  import chartjs from 'chart.js/auto';
  import { onMount } from 'svelte';
  import '$lib/index.js';

  let initialLocale = 'en';
  if (typeof window !== 'undefined') {
    initialLocale = localStorage.getItem('locale') || 'en';
  }

  // init with localStorage or default to 'en'
  init({
    fallbackLocale: 'en',
    initialLocale: initialLocale
  });

  let hours = [];
  for(let i = 7; i <= 23; i++) {
    hours.push(i + ":00");
  }

  let countsToday = [0, 4, 5, 6, 8, 7, 7, 12, 16, 18, 23, 25, 23, 20, 18, 15, 10, 8, 2, 1, 0]
  let countsPreviousWeek = [0, 2, 4, 6, 8, 10, 12, 12, 13, 15, 18, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0]

  // max value of countsToday and countsPreviousWeek
  let maxValueToday = Math.max(...countsToday);
  let maxValuePreviousWeek = Math.max(...countsPreviousWeek);
  let maxValue3 = Math.max(maxValueToday, maxValuePreviousWeek);

  let ctx;
  let linechart;

  onMount(async () => {
    ctx = linechart.getContext('2d');
    var chart = new chartjs(ctx, {
      type: 'line',
      data: {
        labels: hours,
        datasets: [{
          label: $_('visitors today'),
          data: countsToday,
          borderColor: '#FF2962',
          pointRadius: 0,
          fill: false
        }, {
          label: $_('visitor last week'),
          data: countsPreviousWeek,
          borderColor: '#FFDAE5',
          backgroundColor: 'rgba(255, 218, 229, 0.5)',
          pointRadius: 0,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max:  maxValue3 + 5,
          }
        }
      }
    });
  });

  let days = ['Feb 1', 'Feb 2', 'Feb 3', 'Feb 4', 'Feb 5', 'Feb 6', 'Feb 7'];
  let counts = [4, 6, 7, 10, 4, 6, 8];
  let linechart2;

  // max value of counts
  let maxValue2 = Math.max(...counts);

  onMount(async () => {
    ctx = linechart2.getContext('2d');
    var chart = new chartjs(ctx, {
      type: 'line',
      data: {
        labels: days,
        datasets: [{
          label: $_('visitors per period'),
          data: counts,
          borderColor: '#FF2962',
          backgroundColor: 'rgba(255, 41, 98, 0.5)',
          pointRadius: 0,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max:  maxValue2 + 5,
          }
        }
      }
    });
  });

  let week6Data = [3,6,7,5,3,5,6];
  let week7Data = [3,4,6,8,5,3,2];

  // find max value of sum of all arrays
  let maxValue =  Math.max(...week6Data) + Math.max(...week7Data);
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
          backgroundColor: '#FF2962',
        }, {
          label: 'Week 7',
          data: week7Data,
          backgroundColor: '#FFDAE5',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            max:  maxValue + 5,
          }
        }
      }
    });
  });
</script>

<svelte:head>
    <title>Spotlight - Traffic</title>
</svelte:head>
<div id="wrapper"  style="background-color: #dfe3ee;">
  <div class="flex">
    <LeftSideBar />
    <div class="flex flex-col w-full">
      <TopNavBar />
      <div class="grid grid-cols-4 gap-10 mt-10 ml-10 mr-10">

        <!-- First item -->
        <div class="col-span-4">
          <div class="bg-white shadow-lg rounded-2xl p-10 flex justify-center items-center " style="height: 100%;">
            <canvas style="height: 50vh" bind:this={linechart}></canvas>
          </div>
        </div>
      </div>
    
      <div class="grid grid-cols-3 gap-10 m-10">
    
          <!-- Second item -->
          <div class="col-span-2">
            <div class="bg-white shadow-lg rounded-2xl p-5 flex justify-center items-center" style="height: 100%;">
              <canvas style="height: 40vh" bind:this={linechart2}></canvas>
            </div>
          </div>
    
        <!-- Third item -->
        <div class="col-span-1 bg-white shadow-lg rounded-2xl p-5 flex justify-center items-center" style="height: 100%;">
          <div class="text-center overflow-hidden">
            <p class="text-md text-black mt-2">{$_('popular day')}</p>
            <h2 class="font-bold text-2xl mt-5" style="color: #FF2962;">{$_('wednesday')}</h2>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-10 mb-10 mx-10">
          <!-- Second item -->
          <div class="col-span-1 bg-white shadow-lg rounded-2xl p-5 flex justify-center items-center" style="height: 100%;">
            <div class="text-center overflow-hidden">
              <p class="text-md text-black mt-2">{$_('number of visitors')}</p>
              <h2 class="font-bold text-2xl mt-5" style="color: #FF2962;">27</h2>
            </div>
          </div>

        <!-- Third item -->
        <div class="col-span-2">
          <div class="bg-white shadow-lg rounded-2xl p-5 flex justify-center items-center pt-10" style="height: 100%;">
            <canvas style="height: 30vh" bind:this={barchart}/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
