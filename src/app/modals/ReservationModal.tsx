import React from "react";
import { getLocaleData } from "@/utils/helpers";

const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  formData,
  locale,
}) => {
  if (!isOpen) return null;
  const localeData = getLocaleData(locale);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg overflow-y-scroll lg:overflow-hidden shadow-xl h-[90%] w-[95%] lg:w-full lg:h-auto lg:max-w-lg">
        {/* Modal header */}
        <div className="bg-gray-900 py-4 px-6 text-white">
          <h2 className="text-lg font-bold">
            {localeData.RESERVATION_MODAL.TITLE}
          </h2>
        </div>
        {/* Modal body */}
        <div className="p-6">
          {/* Form fields */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              {localeData.RESERVATION_FORM.selectedPlan}:
            </label>
            <p className="text-sm">{formData.selectedPlan}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              {localeData.RESERVATION_FORM.selectedTests}:
            </label>
            <p className="text-sm">{formData.selectedTests.join(", ")}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              {localeData.RESERVATION_FORM.name}:
            </label>
            <p className="text-sm">
              {formData.name} {formData.surname}
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              {localeData.RESERVATION_FORM.nameFurigana}:
            </label>
            <p className="text-sm">
              {formData.nameFurigana} {formData.surnameFurigana}
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              {localeData.RESERVATION_FORM.dateOfBirth}:
            </label>
            <p className="text-sm">{formData.dateOfBirth}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              {localeData.RESERVATION_FORM.address}:
            </label>
            <p className="text-sm">{formData.address}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              {localeData.RESERVATION_FORM.email}:
            </label>
            <p className="text-sm">{formData.email}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              {localeData.RESERVATION_FORM.phone}:
            </label>
            <p className="text-sm">{formData.phoneNumber}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              {localeData.RESERVATION_FORM.preferredContact}:
            </label>
            <p className="text-sm">{formData.preferredContact}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              {localeData.RESERVATION_FORM.consultationHistory}:
            </label>
            <p className="text-sm">{formData.consultationHistory}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              {localeData.RESERVATION_FORM.metalInBody}:
            </label>
            <p className="text-sm">{formData.metalInBody}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              {localeData.RESERVATION_FORM.metalDetails}:
            </label>
            <p className="text-sm">{formData.metalDetails}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              {localeData.RESERVATION_FORM.requests}:
            </label>
            <p className="text-sm">{formData.requests}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              {localeData.RESERVATION_FORM.consultationData}:
            </label>
            {formData.consultationData.map((data, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-2"
              >
                <p className="text-sm">{data.date}</p>
                <p className="text-sm">||</p>
                <p className="text-sm">{data.timeSlot}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Modal footer */}
        <div className="flex justify-end p-4 bg-gray-100">
          <button
            onClick={onClose}
            className="text-gray-600 bg-gray-200 px-4 py-2 rounded-md mr-2 hover:bg-gray-300 focus:outline-none"
          >
            {localeData.RESERVATION_MODAL.CLOSE}
          </button>
          <button
            onClick={onSubmit}
            className="text-white bg-cvic-red px-4 py-2 rounded-md hover:bg-cvic-red-dark focus:outline-none"
          >
            {localeData.RESERVATION_MODAL.CONFIRM}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
