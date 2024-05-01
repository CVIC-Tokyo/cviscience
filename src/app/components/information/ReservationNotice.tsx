import React from "react";
import { getLocaleData } from "@/utils/helpers"; // Import your localization helper function here

const ReservationNotice: React.FC<ReservationNoticeProps> = ({ locale }) => {
  // Get the localized reservation notice data
  const reservationNotice = getLocaleData(locale);

  if (!reservationNotice) {
    return null; // Return null if the reservation notice data is not available for the current locale
  }

  return (
    <div className="w-full bg-gradient-to-r from-cvic-red via-blue-500 to-cvic-red p-4 md:p-8">
      <div className="bg-white rounded-lg p-4 md:p-8 text-base md:text-lg text-gray-800 shadow-lg">
        <div className="title font-semibold text-sm md:text-base lg:text-3xl text-cvic-red mb-4 md:mb-6">
          {reservationNotice.RESERVATION_NOTICE.TITLE}
        </div>
        <div className="p-4 text-xs md:text-sm text-gray-700">
          <div className="content mb-4">
            {reservationNotice.RESERVATION_NOTICE.CONTENT}
          </div>
          <div className="details">
            {reservationNotice.RESERVATION_NOTICE.DETAILS.map(
              (detail, index) => (
                <div key={index} className="mb-2">
                  <span className="mr-2">&#8226;</span>
                  {detail}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationNotice;
