import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ShowEntry = () => {

  const [diamondEntry, setDiamondEntry] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const brokersPerPage = 8;
  useEffect(() => {
    getBroker()
  }, [])

  console.log(diamondEntry, "lkljhgfdfcgvbnm, ");

  const getBroker = () => {
    axios
      .get('https://diamond-be.onrender.com/api/v1/daimond/get-diamond/')
      .then((res) => {
        setDiamondEntry(res.data.data);
      });
  };

  const indexOfLastBroker = currentPage * brokersPerPage;
  const indexOfFirstBroker = indexOfLastBroker - brokersPerPage;
  const currentBrokers = diamondEntry.slice(indexOfFirstBroker, indexOfLastBroker);

  // Calculate total pages
  const totalPages = Math.ceil(diamondEntry.length / brokersPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle Next and Previous
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    // <div className='overflow-hidden'>
    //   <div class="flex flex-col  h-[500px]">
    //     <div class="-m-1.5 overflow-x-hidden ">
    //       <div class="p-1.5 min-w-full inline-block align-middle">
    //         <div class="border overflow-hidden dark:border-neutral-700">
    //           <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
    //             <thead>
    //               <tr className='bg-blue-700 text-white'>
    //                 <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Date(તારીખ)</th>
    //                 <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Weight(વજન)</th>
    //                 <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Price(ભાવ)</th>
    //                 <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Total Payment(કુલ ચૂકવણી)</th>
    //                 <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Percentage(ટકાવારી)</th>
    //                 <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Party Name(પાર્ટીનું નામ)</th>
    //                 <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Broker Name(દલાલનું નામ)</th>
    //                 <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Payment(ચુકવણીની તારીખ)</th>
    //                 <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Brokerage(દલાલી)</th>
    //                 <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Amount After Brokerage</th>

    //               </tr>
    //             </thead>
    //             <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
    //               {
    //                 diamondEntry.map((ele) => {
    //                   return (

    //                     <tr>
    //                       <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-500">{new Date(ele.date).toLocaleDateString('en-US', {
    //                         year: 'numeric',
    //                         month: '2-digit',
    //                         day: '2-digit'
    //                       })}</td>
    //                       <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{ele.weight}</td>
    //                       <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{ele.price}</td>
    //                       <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{ele.totalPayment}</td>
    //                       <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{ele.percentage}</td>
    //                       <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{ele.partyName}</td>
    //                       <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{ele.brokerName}</td>
    //                       <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{new Date(ele.paymentDate).toLocaleDateString('en-US', {
    //                         year: 'numeric',
    //                         month: '2-digit',
    //                         day: '2-digit'
    //                       })}</td>
    //                       <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{ele.brokerage}</td>
    //                       <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{ele.amountAfterBrokerage}</td>
    //                     </tr>
    //                   )
    //                 })
    //               }
    //             </tbody>
    //           </table>
    //         </div>
    //       </div>
    //     </div>
    //   </div>



    //   <nav aria-label="Page navigation example">
    //     <ul class="flex items-center -space-x-px h-8 text-sm justify-center">
    //       <li>
    //         <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    //           <span class="sr-only">Previous</span>
    //           <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    //             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
    //           </svg>
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    //       </li>
    //       <li>
    //         <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    //       </li>
    //       <li>
    //         <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    //       </li>
    //       <li>
    //         <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    //       </li>
    //       <li>
    //         <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    //       </li>
    //       <li>
    //         <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    //           <span class="sr-only">Next</span>
    //           <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    //             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
    //           </svg>
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>


    // </div>

    <div className="flex flex-col px-14 pt-5 ">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <div className="py-3 px-4">
              <div className="relative max-w-xs">
                <label className="sr-only">Search</label>
                <input
                  type="text"
                  name="hs-table-with-pagination-search"
                  id="hs-table-with-pagination-search"
                  className="py-2 px-3 ps-9 block w-full  shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border border-grey dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Search for items"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                  <svg className="size-4 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead className="bg-gray-50">
                  <tr className='bg-gray-300'>
                    <th scope="col" class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Date(તારીખ)</th>
                    <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-800">Weight(વજન)</th>
                    <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-800">Price(ભાવ)</th>
                    <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-800">Total Payment(કુલ ચૂકવણી)</th>
                    <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-800">Percentage(ટકાવારી)</th>
                    <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-800">Party Name(પાર્ટીનું નામ)</th>
                    <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-800">Broker Name(દલાલનું નામ)</th>
                    <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-800">Payment(ચુકવણીની તારીખ)</th>
                    <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-800">Brokerage(દલાલી)</th>
                    <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-800">Amount After Brokerage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {diamondEntry.map((ele, index) => (
                    <tr>
                      <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-500">{new Date(ele.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                      })}</td>
                      <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{ele.weight}</td>
                      <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{ele.price}</td>
                      <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{ele.totalPayment}</td>
                      <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{ele.percentage}</td>
                      <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{ele.partyName}</td>
                      <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{ele.brokerName}</td>
                      <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{new Date(ele.paymentDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                      })}</td>
                      <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{ele.brokerage}</td>
                      <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{ele.amountAfterBrokerage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="py-1 px-4">
              <nav className="flex items-center space-x-1" aria-label="Pagination">
                <button onClick={handlePrevious} disabled={currentPage === 1} className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm  rounded-full text-gray-800 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus:bg-neutral-700" aria-label="Previous">
                  «
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`min-w-[40px] flex justify-center items-center text-gray-800 py-2.5 text-sm rounded-full ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'dark:hover:text-white dark:focus:bg-neutral-700 dark:hover:bg-neutral-700'
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button onClick={handleNext} disabled={currentPage === totalPages} className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 dark:hover:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" aria-label="Next">
                  »
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowEntry
