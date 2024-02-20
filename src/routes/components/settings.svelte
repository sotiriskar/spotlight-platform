<script>
  import { locale, init, register, _ } from 'svelte-i18n';
  import {leagueTable} from '$lib/stores.js';
  import chartjs from 'chart.js/auto';
  import Icon from '@iconify/svelte';
  import en from '../../en.json';
  import gr from '../../gr.json';

  function handleClick(value) {
    leagueTable.set(value);
    window.scrollTo(0, 0);
  }

  let selectedOption = 'English';
  const options = ['Ελληνικά', 'English'];

  // Register the translation files
  register('en', () => Promise.resolve(en));
  register('gr', () => Promise.resolve(gr));

  function selectOption(option) {
    selectedOption = option;
    // Map the option to the corresponding locale
    const newLocale = option === 'English' ? 'en' : 'gr';
    // Change the locale
    locale.set(newLocale);
  }
</script>

<main>
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
</main>
  