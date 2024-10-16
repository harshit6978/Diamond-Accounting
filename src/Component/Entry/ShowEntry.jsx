import React from 'react'

const ShowEntry = () => {
    return (
        <div>




            <div class="flex flex-col">
                <div class="-m-1.5 overflow-x-auto">
                    <div class="p-1.5 min-w-full inline-block align-middle">
                        <div class="border overflow-hidden dark:border-neutral-700">
                            <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                <thead>
                                    <tr>
                                        <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Date(તારીખ)</th>
                                        <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Weight(વજન)</th>
                                        <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Price(ભાવ)</th>
                                        <th scope="col" class="px-2 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Total Payment(કુલ ચૂકવણી)</th>
                                        <th scope="col" class="px-2 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Percentage(ટકાવારી)</th>
                                        <th scope="col" class="px-2 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Party Name(પાર્ટીનું નામ)</th>
                                        <th scope="col" class="px-2 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Broker Name(દલાલનું નામ)</th>
                                        <th scope="col" class="px-2 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Payment(ચુકવણીની તારીખ)</th>
                                        <th scope="col" class="px-2 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Brokerage(દલાલી)</th>
                                        <th scope="col" class="px-2 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Amount After Brokerage</th>

                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr>
                                        <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">John Brown</td>
                                        <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">45</td>
                                        <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">45000</td>
                                        <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">45000</td>
                                        <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">45000</td>
                                        <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">45000</td>
                                        <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">45000</td>
                                        <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">45000</td>
                                        <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">45000</td>
                                        <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">45000</td>
                                    </tr>

                                 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ShowEntry
