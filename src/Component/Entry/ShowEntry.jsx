import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

const ShowEntry = () => {
  const [diamondEntry, setDiamondEntry] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const brokersPerPage = 8;
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    getBroker();
  }, []);

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

  const totalPages = Math.ceil(diamondEntry.length / brokersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Open modal and set selected row details
  const openModal = (row) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRow(null);
  };

  const deleteEntry = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://diamond-be.onrender.com/api/v1/daimond/delete-diamond/${id}`)
          .then(() => {
            setDiamondEntry(diamondEntry.filter((entry) => entry._id !== id));
          })
          .catch((error) => {
            console.error("There was an error deleting the entry!", error);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });



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
                  className="py-2 px-3 ps-9 block w-full shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border border-grey dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Search for items"
                />
              </div>
            </div>
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead className="bg-gray-50">
                  <tr className="bg-black text-white">
                    <th scope="col" className="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">Date(તારીખ)</th>
                    <th scope="col" className=" py-3 text-start text-xs font-medium text-white uppercase dark:text-neutral-100">Party Name(પાર્ટીનું નામ)</th>
                    <th scope="col" className=" py-3 text-start text-xs font-medium text-white uppercase dark:text-neutral-100">Broker Name(દલાલનું નામ)</th>
                    <th scope="col" className=" py-3 text-start text-xs font-medium text-white uppercase dark:text-neutral-100">Payment(ચુકવણીની તારીખ)</th>
                    <th scope="col" className=" py-3 text-start text-xs font-medium text-white uppercase dark:text-neutral-100">Amount After Brokerage</th>
                    <th scope="col" className=" py-3 text-start text-xs font-medium text-white uppercase dark:text-neutral-100">More</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {currentBrokers.map((ele, index) => (
                    <tr key={index}>
                      <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-500">
                        {new Date(ele.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit'
                        })}
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{ele.partyName}</td>
                      <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{ele.brokerName.name}</td>
                      <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-500">
                        {new Date(ele.paymentDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit'
                        })}
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">{ele.amountAfterBrokerage}</td>

                      <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-500">
                        <button onClick={() => openModal(ele)} className="text-blue-600 hover:text-blue-800"><i className="pi pi-list mr-3"></i></button>
                        <button className="text-blue-600 hover:text-blue-800" onClick={() => deleteEntry(ele._id)}><i className="pi pi-trash mr-3"></i></button>
                        <button className="text-blue-600 hover:text-blue-800"><i className="pi pi-pen-to-square"></i></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="py-1 px-4">
              <nav className="flex items-center space-x-1" aria-label="Pagination">
                <button onClick={handlePrevious} disabled={currentPage === 1} className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 dark:hover:bg-neutral-700 dark:hover:text-white dark:focus:bg-neutral-700" aria-label="Previous">
                  «
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`min-w-[40px] flex justify-center items-center text-gray-800 py-2.5 text-sm rounded-full ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'dark:hover:text-white dark:focus:bg-neutral-700 dark:hover:bg-neutral-700'}`}
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

      {/* Modal */}
      {showModal && selectedRow && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{selectedRow.partyName} Details</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Weight:</strong> {selectedRow.weight}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Price:</strong> {selectedRow.price}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Total Payment:</strong> {selectedRow.totalPayment}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Percentage:</strong> {selectedRow.percentage}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Brokerage: </strong> {selectedRow.brokerage}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Amount After Brokerage: </strong> {selectedRow.amountAfterBrokerage}</p>

            <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowEntry;
