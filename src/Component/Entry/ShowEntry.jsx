import React from 'react'

const ShowEntry = () => {
    return (
        <div className='overflow-hidden'>
            <div class="flex flex-col  h-[500px]">
                <div class="-m-1.5 overflow-x-hidden ">
                    <div class="p-1.5 min-w-full inline-block align-middle">
                        <div class="border overflow-hidden dark:border-neutral-700">
                            <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                <thead>
                                    <tr className='bg-blue-700 text-white'>
                                        <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Date(તારીખ)</th>
                                        <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Weight(વજન)</th>
                                        <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Price(ભાવ)</th>
                                        <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Total Payment(કુલ ચૂકવણી)</th>
                                        <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Percentage(ટકાવારી)</th>
                                        <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Party Name(પાર્ટીનું નામ)</th>
                                        <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Broker Name(દલાલનું નામ)</th>
                                        <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Payment(ચુકવણીની તારીખ)</th>
                                        <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Brokerage(દલાલી)</th>
                                        <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Amount After Brokerage</th>

                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr>
                                        <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-500">John Brown</td>
                                        <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">45</td>
                                        <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">45000</td>
                                        <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">45000</td>
                                        <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">45000</td>
                                        <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">45000</td>
                                        <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">45000</td>
                                        <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">45000</td>
                                        <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">45000</td>
                                        <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">45000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>



            <nav aria-label="Page navigation example">
  <ul class="flex items-center -space-x-px h-8 text-sm justify-center">
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Previous</span>
        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Next</span>
        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </li>
  </ul>
</nav>


        </div>
    )
}

export default ShowEntry
