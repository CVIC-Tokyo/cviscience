import React, { useState } from "react";
import { getLocaleData } from "@/utils/helpers";

const ConsultationForm: React.FC<ConsultationProps> = ({ locale }) => {
    const localeData = getLocaleData(locale);
  const [consultationDates, setConsultationDates] = useState<string[]>([
    "",
    "",
    "",
  ]);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<string[]>([
    "",
    "",
    "",
  ]);
  const [name, setName] = useState("");
  const [nameFurigana, setNameFurigana] = useState("");
  const [surname, setSurname] = useState("");
  const [surnameFurigana, setSurnameFurigana] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [preferredContact, setPreferredContact] = useState("");
  const [consultationHistory, setConsultationHistory] = useState("");
  const [metalInBody, setMetalInBody] = useState("");
  const [metalDetails, setMetalDetails] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [preferredContactTime, setPreferredContactTime] = useState("");
  const [formError, setFormError] = useState("");

  const handleConsultationDateChange = (index: number, date: string) => {
    const updatedDates = [...consultationDates];
    updatedDates[index] = date;
    setConsultationDates(updatedDates);
  };

  const handleTimeSlotChange = (index: number, slot: string) => {
    const updatedSlots = [...selectedTimeSlots];
    updatedSlots[index] = slot;
    setSelectedTimeSlots(updatedSlots);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Check if any required fields are empty
    if (
      name.trim() === "" ||
      surname.trim() === "" ||
      nameFurigana.trim() === "" ||
      surnameFurigana.trim() === "" ||
      dateOfBirth.trim() === "" ||
      address.trim() === "" ||
      email.trim() === "" ||
      phoneNumber.trim() === "" ||
      preferredContact === "" ||
      consultationHistory === "" ||
      (metalInBody === "yes" && metalDetails.trim() === "") ||
      !termsAgreed
    ) {
      // Set form error message
      setFormError(localeData.CONSULTATION.FORM_ERROR);
      return;
    }

    // Clear form error message if all required fields are filled
    setFormError("");

    // Handle form submission if all required fields are filled
    // Your form submission logic here
  };


  const currentDate = new Date();
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(currentDate.getFullYear() + 1);

  return (
    <div className="bg-white rounded-lg m-2 md:m-0 text-xs md:text-base">
      <form onSubmit={handleSubmit} className="p-4">
        <h2 className="text-base text-cvic-red md:text-lg font-bold mb-4">
          {localeData.CONSULTATION.CONSULTATION_DATES_AND_DETAILS}
        </h2>
        <div className="flex w-full justify-center">
          <div className="p-1 md:p-2 mb-4">
            <label className="block font-semibold text-xs md:text-base">{localeData.CONSULTATION.NAME}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
            />
          </div>
          <div className="mb-4 p-1 md:p-2">
            <label className="block font-semibold text-xs md:text-base">{localeData.CONSULTATION.SURNAME}</label>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="p-1 md:p-2 mb-4">
            <label className="block font-semibold text-xs md:text-base">{localeData.CONSULTATION.FURIGANA_NAME}</label>
            <input
              type="text"
              value={nameFurigana}
              onChange={(e) => setNameFurigana(e.target.value)}
              className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
            />
          </div>
          <div className="mb-4 p-1 md:p-2">
            <label className="block font-semibold text-xs md:text-base">{localeData.CONSULTATION.FURIGANA_SURNAME}</label>
            <input
              type="text"
              value={surnameFurigana}
              onChange={(e) => setSurnameFurigana(e.target.value)}
              className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="p-1 md:p-2">
            <label className="block font-semibold text-xs md:text-base">{localeData.CONSULTATION.PHONE}</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
            />
          </div>
          <div className="p-1 md:p-2">
            <label className="block font-semibold text-xs md:text-base">{localeData.CONSULTATION.EMAIL}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex items-center justify-start p-1 md:p-2 mb-4 text-xs md:text-base">
            <label className="block font-semibold  p-1 md:p-2">{localeData.CONSULTATION.PREFERRED_CONTACT}</label>
            <label className="inline-flex items-center mt-1">
              <input
                type="checkbox"
                className="form-checkbox md:h-5 md:w-5 text-cvic-red"
                checked={preferredContact === "phone"}
                onChange={() => setPreferredContact('phone')}
              />
              <span className="ml-2 text-gray-700">{localeData.CONSULTATION.PHONE}</span>
            </label>
            <label className="inline-flex items-center mt-1">
              <input
                type="checkbox"
                className="form-checkbox md:h-5 md:w-5 text-cvic-red ml-2"
                checked={preferredContact === "email"}
                onChange={() => setPreferredContact("email")}
              />
              <span className="ml-2 text-gray-700">{localeData.CONSULTATION.EMAIL}</span>
            </label>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-2">
          <label className="block font-semibold text-xs md:text-base">{localeData.CONSULTATION.DATE_OF_BIRTH}</label>
          <input
            type="date"
            value={dateOfBirth}
            max={currentDate.toISOString().split('T')[0]} // Set maximum date to current date
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="block w-full lg:w-[75%] border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>
        <div className="flex flex-col items-center justify-center p-2">
          <label className="block font-semibold text-xs md:text-base">{localeData.CONSULTATION.ADDRESS}</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="block w-full lg:w-[75%] border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>
        {[0, 1, 2].map((index) => (
          <div key={index} className="flex flex-col md:flex-row mb-4 md:items-center md:justify-center text-xs md:text-base">
            <div className="p-1 md:p-2">
              <label className="block font-semibold text-sm md:text-base">
                {localeData.CONSULTATION.CONSULTATION_DATES_AND_DETAILS} {index + 1}
                {index === 0 ? "st" : index === 1 ? "nd" : "rd"} choice
              </label>
              <input
                type="date"
                value={consultationDates[index]}
                min={currentDate.toISOString().split('T')[0]} // Set minimum date to current date
                max={oneYearFromNow.toISOString().split('T')[0]} // Set maximum date to one year from now
                onChange={(e) =>
                  handleConsultationDateChange(index, e.target.value)
                }
                className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
              />
            </div>
            <div className="p-1 md:p-2">
              <label className="block mt-2 font-semibold text-xs md:text-sm">{localeData.CONSULTATION.TIME_SLOT}</label>
              <input
                type="text"
                value={selectedTimeSlots[index]}
                onChange={(e) => handleTimeSlotChange(index, e.target.value)}
                placeholder={localeData.CONSULTATION.PREFFERED_TIME}
                className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
              />
            </div>
          </div>
        ))}

        <div className="flex flex-col w-full justify-center items-center text-xs md:text-base">
          <div className="p-1 md:p-2 lg:w-[75%]">
            <label className="block font-semibold text-xs md:text-base">{localeData.CONSULTATION.CONSULTATION_HISTORY}</label>
            <label className="inline-flex items-center mt-1">
              <input
                type="checkbox"
                className="form-checkbox md:h-5 md:w-5 text-cvic-red"
                checked={consultationHistory === "firstTime"}
                onChange={() => setConsultationHistory('firstTime')}
              />
              <span className="ml-2 text-gray-700">{localeData.CONSULTATION.FIRST_TIME_VISITING}</span>
            </label>
            <label className="inline-flex items-center mt-1">
              <input
                type="checkbox"
                className="form-checkbox ml-2 md:h-5 md:w-5 text-cvic-red"
                checked={consultationHistory === "visitedBefore"}
                onChange={() => setConsultationHistory("visitedBefore")}
              />
              <span className="ml-2 text-gray-700">{localeData.CONSULTATION.HAVE_VISITED_BEFORE}</span>
            </label>
          <div className="p-1 md:p-2">
            <textarea
              value={preferredContactTime}
              placeholder={localeData.CONSULTATION.INQUIRIES}
              onChange={(e) => setPreferredContactTime(e.target.value)}
              className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
            />
          </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <div className="p-1 md:p-2 lg-[75%]">
            <label className="block font-semibold text-xs md:text-base">{localeData.CONSULTATION.PRESENCE_OF_METAL}</label>
            <label className="inline-flex items-center mt-1">
              <input
                type="checkbox"
                className="form-checkbox md:h-5 md:w-5 text-cvic-red"
                checked={metalInBody === "yes"}
                onChange={() => setMetalInBody('yes')}
              />
              <span className="ml-2 text-gray-700">{localeData.CONSULTATION.YES}</span>
            </label>
            <label className="inline-flex items-center mt-1">
              <input
                type="checkbox"
                className="form-checkbox md:h-5 md:w-5 text-cvic-red ml-2"
                checked={metalInBody === "no"}
                onChange={() => setMetalInBody("no")}
              />
              <span className="ml-2 text-gray-700">{localeData.CONSULTATION.NO}</span>
            </label>
          </div>
          {metalInBody === "yes" && (
            <div className="p-1 md:p-2 lg:w-[75%]">
              <textarea
                value={metalDetails}
                placeholder={localeData.CONSULTATION.DETAILS_OF_METAL_AND_DATE_OF_SURGERY}
                onChange={(e) => setMetalDetails(e.target.value)}
                className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-center p-1 md:p-2 mb-4 text-xs md:text-base">
          <input
            type="checkbox"
            className="form-checkbox md:h-5 md:w-5 text-cvic-red mt-1"
            checked={termsAgreed}
            onChange={() => setTermsAgreed(!termsAgreed)}
          />
          <label className="block font-semibold  p-1 md:p-2">{localeData.CONSULTATION.TERMS_OF_USE}</label>
        </div>
        {formError && <div className="text-cvic-red p-1 md:p-2">{formError}</div>}
        <button
          type="submit"
          className="bg-cvic-red text-white px-4 py-2 rounded-md"
          disabled={!termsAgreed} // Disable button if terms are not agreed
        >
          {localeData.CONSULTATION.SUBMIT}
        </button>
      </form>
    </div>
  );
};

export default ConsultationForm;