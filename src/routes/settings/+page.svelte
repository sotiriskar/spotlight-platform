<script>
  import LeftSideBar from '../../components/LeftSideBar.svelte';
  import TopNavBar from '../../components/TopNavBar.svelte';
  import { locale, init, register, _ } from 'svelte-i18n';
  import { onMount } from 'svelte';
  import '$lib/index.js';

  import en from '../../en.json';
  import gr from '../../gr.json';

  let initialLocale = 'en';
  if (typeof window !== 'undefined') {
    initialLocale = localStorage.getItem('locale') || 'en';
  }

  // init with localStorage or default to 'en'
  init({
    fallbackLocale: 'en',
    initialLocale: initialLocale
  });

  let currentLocale;
  let selectedOption;

  onMount(() => {
    // Load the locale and selected option from localStorage or default to 'en' and 'English'
    currentLocale = localStorage.getItem('locale') || 'en';
    selectedOption = localStorage.getItem('selectedOption') || (currentLocale === 'en' ? 'English' : 'Ελληνικά');
    locale.set(currentLocale);
  });

  // Whenever the locale changes, save it to localStorage
  locale.subscribe(value => {
    currentLocale = value;
    localStorage.setItem('locale', value);
  });

  // Register the translation files
  register('en', () => Promise.resolve(en));
  register('gr', () => Promise.resolve(gr));
  const options = ['Ελληνικά', 'English'];

  function selectOption(option) {
    selectedOption = option;
    const newLocale = option === 'English' ? 'en' : 'gr';
    localStorage.setItem('selectedOption', option);
    locale.set(newLocale);
  }
</script>

<svelte:head>
    <title>Spotlight - Settings</title>
</svelte:head>
<div id="wrapper"  style="background-color: #dfe3ee;">
  <div class="flex">
    <LeftSideBar />
    <div class="flex flex-col w-full">
      <TopNavBar />
      <div class="w-full max-w-xs m-10 g-10">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
          Display Language
        </label>
        <div class="relative">
          <select bind:value={selectedOption} on:change="{() => selectOption(selectedOption)}" class="appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
            {#each options as option (option)}
              <option>{option}</option>
            {/each}
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M0 6l10 10 10-10z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
