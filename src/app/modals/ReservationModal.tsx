import React from "react";
import { getLocaleData } from "@/utils/helpers";
import { ReservationModalProps } from "@/types/interface";

const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  formData,
  locale,
  selectedPlan,
  selectedTests,
}) => {
  if (!isOpen) return null;
  const localeData = getLocaleData(locale);

  const getCurrentDateTime = () => {
    const currentDate = new Date();
    return currentDate.toLocaleString(); // You can adjust the format as needed
  };

  return (
    <div className="fixed z-[100] inset-0 overflow-y-auto flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
        onClick={onClose}
      ></div>
      <div className="z-50 bg-white rounded-lg p-4 w-[90%] md:w-[600px] lg:w-[800px]">
        {/* Display user input for confirmation */}
        <div>
          <h2 className="text-lg font-bold mb-4">
            {localeData.RESERVATION_MODAL.TITLE}
          </h2>
          <div className="grid-cols-2 p-2">
            <p className="font-semibold">{selectedPlan}</p>
            <p>{selectedTests.join(", ")}</p>
          </div>
          <div className="grid grid-cols-2 gap-y-2">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="mb-4">
                <label className="block font-semibold text-xs md:text-base">
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </label>
                <p className="text-xs lg:text-base">{value}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Display timestamp */}
        <div className="text-right text-xs text-gray-500 mt-2">
          {getCurrentDateTime()}
        </div>
        {/* Buttons for submit or revise */}
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2 hover:scale-105 duration-500"
          >
            {localeData.RESERVATION_MODAL.CLOSE}
          </button>
          <button
            onClick={onSubmit}
            className="bg-cvic-red text-white px-4 py-2 rounded-md hover:scale-105 duration-500"
          >
            {localeData.RESERVATION_MODAL.CONFIRM}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
