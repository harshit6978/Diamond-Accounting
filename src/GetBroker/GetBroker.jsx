import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GetBroker = () => {
  const [broker, setBroker] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const brokersPerPage = 8; // Number of brokers to display per page

  useEffect(() => {
    getBroker();
  }, []);

  const getBroker = () => {
    axios
      .get('https://diamond-be.onrender.com/api/v1/broker/get-brokers')
      .then((res) => {
        setBroker(res.data.data);
      });
  };


  const deleteBroker = (id) => {
    axios
      .delete(`https://diamond-be.onrender.com/api/v1/broker/delete-brokers/${id}`)
      .then(() => {
        // Update the broker list by removing the deleted broker
        setBroker(broker.filter((item) => item.id !== id));
        getBroker()
      })
      .catch((error) => {
        console.error("Error deleting broker:", error);
      });

  }

  // Calculate pagination indices
  const indexOfLastBroker = currentPage * brokersPerPage;
  const indexOfFirstBroker = indexOfLastBroker - brokersPerPage;
  const currentBrokers = broker.slice(indexOfFirstBroker, indexOfLastBroker);

  // Calculate total pages
  const totalPages = Math.ceil(broker.length / brokersPerPage);

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
                    <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase dark:text-neutral-800">Broker Name (દલાલનું નામ)</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase dark:text-neutral-800">Mobile No (મોબાઇલ નં)</th>
                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-800">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {currentBrokers.map((val, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-500">{val.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{val.mobile_no}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                          onClick={() => deleteBroker(val._id)}                        >
                          Delete
                        </button>
                      </td>
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
  );
};

export default GetBroker;
