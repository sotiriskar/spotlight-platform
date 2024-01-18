<script>
    import Icon from '@iconify/svelte';
    import { onMount } from 'svelte';
    import chartjs from 'chart.js/auto';

    let selectedOption = 'English';
    const options = ['Ελληνικά', 'English'];

    function selectOption(option) {
    selectedOption = option;
    }

	let chartData;

	let chartValues = [37, 16, 25, 56, 42, 178, 64];
	let chartLabels = ['Jan 5', 'Jan 6', 'Jan 7', 'Jan 8', 'Jan 9', 'Jan 10', 'Jan 11'];
	let ctx;
	let chartCanvas;

	onMount(async (promise) => {
		  ctx = chartCanvas.getContext('2d');
			var chart = new chartjs(ctx, {
				type: 'bar',
				data: {
						labels: chartLabels,
						datasets: [{
								label: 'Users Per Period',
								backgroundColor: 'rgb(255, 99, 132)',
								borderColor: 'rgb(255, 99, 132)',
								data: chartValues
						}]
				}
		});

	});
</script>

<div id="wrapper">
    <header class="navbar bg-blue-500 text-neutral-content shadow-lg top-0 z-50 h-20">
        <div class="flex-1"></div>
        <div class="flex-none flex items-center space-x-4 mr-7">
            <div class="flex items-center space-x-4">
                <input type="checkbox" class="toggle" checked />
                <div class="dropdown dropdown-end">
                    <div tabindex="0" class="btn btn-ghost btn-sm rounded-btn text-lg"><Icon icon="ic:baseline-language" />{selectedOption}</div> <!-- Change text-lg to text-sm here -->
                    <ul tabindex="0" class="menu dropdown-content bg-base-100 rounded-box w-52">
                        {#each options as option}
                            <li><a on:click={() => selectOption(option)}>{option}</a></li>
                        {/each}
                    </ul>
                </div>
            </div>
            <div class="flex items-center space-x-4">
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <div class="flex">



    <aside class="sidebar bg-purple-800 shadow-lg h-screen w-60">
        <h1 class="text-white text-3xl font-bold pt-10 flex items-center justify-center">Spotlight</h1>
        <div class="flex items-center justify-center">
    </div>
    <div class="flex items-center justify-center pt-40"> <!-- Adjust the height calculation as needed -->
        <ul class="menu gap-7">
            <li>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                <span class="text-lg">Overview</span>
              </a>
            </li>
            <li>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  <span class="text-lg">Dashboard</span>
              </a>
              </li>
            <li>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span class="text-lg">Help</span>
            </a>
            </li>
          </ul>
          </div>
    </aside>
    <div class="flex">




        <main>
            <div id="content wrapper" class="flex flex-cols h-screen">
                <div class="flex items-center justify-center bg-white shadow-lg rounded-2xl p-10 m-10" style="height: 50vh; width: 70vh;">
                    <canvas bind:this={chartCanvas} id="myChart"></canvas>
                </div>

            </div>
        </main>
    </div>
    </div>
</div>
