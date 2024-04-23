import React from "react";
import { getLocaleData } from "@/utils/helpers"; // Import your localization helper function here

const ReservationNotice: React.FC<ReservationNoticeProps> = ({ locale }) => {
  // Get the localized reservation notice data
  const reservationNotice = getLocaleData(locale)

  if (!reservationNotice) {
    return null; // Return null if the reservation notice data is not available for the current locale
  }

  return (
    <div className="w-full bg-white/25 p-4">
      <div className="bg-white rounded-lg p-4">
        <div className="title font-semibold text-base md:text-lg lg:text-xl">{reservationNotice.RESERVATION_NOTICE.TITLE}</div>
        <div className="p-4 text-xs md:text-base">
          <div className="content">{reservationNotice.RESERVATION_NOTICE.CONTENT}</div>
          <div className="details">
            {reservationNotice.RESERVATION_NOTICE.DETAILS.map((detail, index) => (
              <div key={index}>{detail}</div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReservationNotice;
