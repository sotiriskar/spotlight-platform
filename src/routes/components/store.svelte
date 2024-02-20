<script>
  import chartjs from 'chart.js/auto';
  import { _ } from 'svelte-i18n';
</script>


<main>
  <div class="grid grid-cols-3 gap-10 mt-10 ml-10 mr-10" style="height: 40%;">

    <!-- First item -->
    <div class="col-span-1 bg-white shadow-lg rounded-2xl p-5 flex justify-center items-center" style="height: 100%;">
      <div class="text-center">
        <p class="text-md text-black mt-2">{$_('unique users')}</p>
        <h2 class="font-bold text-2xl mt-5" style="color: #FF2962;">2447 {$_('users')}</h2>
      </div>
    </div>

    <!-- Second item -->
    <div class="col-span-1 bg-white shadow-lg rounded-2xl p-5 flex justify-center items-center" style="height: 100%;">
      <div class="text-center">
        <p class="text-md text-black mt-2">{$_('total usage')}</p>
        <h2 class="font-bold text-2xl mt-5" style="color: #FF2962;">1653 {$_('hours')}</h2>
      </div>
    </div>

    <!-- Third item -->
    <div class="col-span-1 bg-white shadow-lg rounded-2xl p-5 flex justify-center items-center" style="height: 100%;">
      <div class="text-center">
        <p class="text-md text-black mt-2">{$_('average usage time')}</p>
        <h2 class="font-bold text-2xl mt-5" style="color: #FF2962;">00:08 {$_('hh:mm')}</h2>
      </div>
    </div>
  </div>

    <div class="grid grid-cols-4 gap-10 mt-10 mb-10 ml-10 mr-10">

      <!-- Fourth item -->
      <div class="col-span-2 grid-rows-2 bg-white shadow-lg rounded-2xl p-5 flex justify-center items-center" style="height: 100%;">
        <table class="text-black max-w-4xl mx-auto overflow-hidden bg-white rounded" style="height: 100%; width: 100%;">
          <thead>
            <tr>
              <th class="border border-gray-300 p-2" style="height: 100%; width: 100%;">{$_('device number')}</th>
              <th class="border border-gray-300 p-2">{$_('date of last use')}</th>
              <th class="border border-gray-300 p-2">{$_('store code')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td class="border border-gray-300 p-2 text-center">Beacon 1</td>
                <td class="border border-gray-300 p-2 text-center">18/02/24</td>
                <td class="border border-gray-300 p-2 text-center">100695</td>
            </tr>
            <tr>
                <td class="border border-gray-300 p-2 text-center">Beacon 2</td>
                <td class="border border-gray-300 p-2 text-center">18/02/24</td>
                <td class="border border-gray-300 p-2 text-center">100695</td>
            </tr>
            <tr>
                <td class="border border-gray-300 p-2 text-center">Beacon 3</td>
                <td class="border border-gray-300 p-2 text-center">18/02/24</td>
                <td class="border border-gray-300 p-2 text-center">100695</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2 text-center">Beacon 4</td>
              <td class="border border-gray-300 p-2 text-center">18/02/24</td>
              <td class="border border-gray-300 p-2 text-center">100695</td>
          </tr>
          </tbody>
        </table>
      </div>

    <!-- Fifth item  -->
    <div class="grid grid-cols-1 grid-rows-2 gap-10">
      <div class="col-span-1 bg-white shadow-lg rounded-2xl p-5 flex justify-center items-center" style="height: 100%;">
        <div class="text-center">
          <p class="text-md text-black mt-2">{$_('device number')}</p>
          <h2 class="font-bold text-2xl mt-5" style="color: #FF2962;">3 Beacons</h2>
        </div>
      </div>

      <div class="col-span-1 bg-white shadow-lg rounded-2xl p-5 flex justify-center items-center" style="height: 100%;">
        <div class="text-center">
          <p class="text-md text-black mt-2">{$_('floors')}</p>
          <h2 class="font-bold text-2xl mt-5" style="color: #FF2962;">1 {$_('floor')}</h2>
        </div>
      </div>
    </div>

    <div class="col-span-1 grid-rows-2 bg-white shadow-lg rounded-2xl p-5 flex justify-center items-center" style="height: 100%;">
      <div class="text-center">
        <p class="text-md text-black mt-2">{$_('store info')}</p>
        <h2 class="font-bold text-2xl mt-5" style="color: #FF2962;">{$_('active')}</h2>
      </div>
    </div>
  </div>
</main>
