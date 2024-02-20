<script>
  import Icon from '@iconify/svelte';

  let selectedOption = 'English';
  const options = ['Ελληνικά', 'English'];

  function selectOption(option) {
    selectedOption = option;
  }
</script>


<header class="navbar bg-white sticky top-0 z-[1]">
  <nav class="flex-grow flex items-center space-x-4 justify-end mr-5">
    <div class="dropdown dropdown-end">
      <div tabindex="0" class="btn btn-ghost btn-sm rounded-btn text-lg"><Icon icon="ic:baseline-language" />{selectedOption}</div> 
      <ul tabindex="0" class="menu menu-sm dropdown-content z-[1] p-2 mt-5 shadow bg-base-100 rounded-box w-40 bg-white">
        {#each options as option}
          <li><a on:click={() => selectOption(option)}>{option}</a></li>
        {/each}
      </ul>
    </div>
    <div class="flex items-center space-x-4">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box mt-2 w-40 bg-white">
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>
