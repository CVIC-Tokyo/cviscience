import React, { useState } from "react";
import { getLocaleData } from "@/utils/helpers";
import ReservationModal from "@/app/modals/ReservationModal";
import PrivacyPolicyModal from "@/app/modals/PrivacyPolicyModal";
import axios from "axios";

const initialConsultationData = [
  { date: "", timeSlot: "" },
  { date: "", timeSlot: "" },
  { date: "", timeSlot: "" },
];

const ConsultationForm: React.FC<ConsultationProps> = ({
  locale,
  selectedPlan,
  selectedTests,
  setSelectedPlan,
  setSelectedTests,
}) => {
  const localeData = getLocaleData(locale);
  const [privacyPolicyModalOpen, setPrivacyPolicyModalOpen] = useState(false);
  const [consultationData, setConsultationData] = useState(
    initialConsultationData,
  );
  // Other state variables...

  const handleConsultationDateChange = (index: number, date: string) => {
    const updatedData = [...consultationData];
    updatedData[index] = { ...updatedData[index], date: date };
    setConsultationData(updatedData);
  };

  const handleTimeSlotChange = (index: number, slot: string) => {
    const updatedData = [...consultationData];
    updatedData[index] = { ...updatedData[index], timeSlot: slot };
    setConsultationData(updatedData);
  };
  const handlePrivacyPolicyModalClose = () => {
    setPrivacyPolicyModalOpen(false);
  };

  const handlePrivacyPolicyClick = () => {
    setPrivacyPolicyModalOpen(true);
  };
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
  const [requests, setRequests] = useState("");
  const [formError, setFormError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  function calculateAge(dateOfBirth: string) {
    // Parse the date of birth string into a Date object
    const dob = new Date(dateOfBirth);

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in years
    let age = currentDate.getFullYear() - dob.getFullYear();

    // Adjust the age if the current date is before the birthday
    if (
      currentDate.getMonth() < dob.getMonth() ||
      (currentDate.getMonth() === dob.getMonth() &&
        currentDate.getDate() < dob.getDate())
    ) {
      age--;
    }

    return age;
  }
  const getCurrentDateTime = () => {
    const currentDate = new Date();
    return currentDate.toLocaleString(); // You can adjust the format as needed
  };

  const age = calculateAge(dateOfBirth);

  const formData = {
    selectedPlan,
    selectedTests,
    name,
    nameFurigana,
    surname,
    surnameFurigana,
    dateOfBirth,
    age,
    address,
    email,
    phoneNumber,
    preferredContact,
    consultationHistory,
    metalInBody,
    metalDetails,
    requests,
    consultationData,
  };

  const handleConfirmSubmit = async function () {
    try {
      const timestamp = getCurrentDateTime();
      await axios.post("/api", { formData, timestamp });
      console.log("Email sent successfully!");
      // Reset form fields
      setTimeout(() => {
        setModalOpen(false);
        setName("");
        setNameFurigana("");
        setSurname("");
        setSurnameFurigana("");
        setDateOfBirth("");
        setAddress("");
        setConsultationData(initialConsultationData);
        setEmail("");
        setPhoneNumber("");
        setPreferredContact("");
        setConsultationHistory("");
        setMetalInBody("");
        setMetalDetails("");
        setTermsAgreed(false);
        setRequests("");
        setSelectedPlan(null);
        setSelectedTests([]);
      }, 1000);
    } catch (error) {
      console.error("Failed to send email:", error);
      // Handle error
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setModalOpen(true);
    // Check if any required fields are empty
    if (
      name.trim() === "" ||
      selectedPlan === null ||
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
    } else setModalOpen(true);

    // Clear form error message if all required fields are filled
    setFormError("");
    console.log(formError);
    return;

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
            <label className="block font-semibold text-xs md:text-base">
              {localeData.CONSULTATION.NAME}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
            />
          </div>
          <div className="mb-4 p-1 md:p-2">
            <label className="block font-semibold text-xs md:text-base">
              {localeData.CONSULTATION.SURNAME}
            </label>
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
            <label className="block font-semibold text-xs md:text-base">
              {localeData.CONSULTATION.FURIGANA_NAME}
            </label>
            <input
              type="text"
              value={nameFurigana}
              onChange={(e) => setNameFurigana(e.target.value)}
              className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
            />
          </div>
          <div className="mb-4 p-1 md:p-2">
            <label className="block font-semibold text-xs md:text-base">
              {localeData.CONSULTATION.FURIGANA_SURNAME}
            </label>
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
            <label className="block font-semibold text-xs md:text-base">
              {localeData.CONSULTATION.PHONE}
            </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
            />
          </div>
          <div className="p-1 md:p-2">
            <label className="block font-semibold text-xs md:text-base">
              {localeData.CONSULTATION.EMAIL}
            </label>
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
            <label className="block font-semibold  p-1 md:p-2">
              {localeData.CONSULTATION.PREFERRED_CONTACT}
            </label>
            <label className="inline-flex items-center mt-1">
              <input
                type="checkbox"
                className="form-checkbox md:h-5 md:w-5 text-cvic-red"
                checked={preferredContact === "phone"}
                onChange={() => setPreferredContact("phone")}
              />
              <span className="ml-2 text-gray-700">
                {localeData.CONSULTATION.PHONE}
              </span>
            </label>
            <label className="inline-flex items-center mt-1">
              <input
                type="checkbox"
                className="form-checkbox md:h-5 md:w-5 text-cvic-red ml-2"
                checked={preferredContact === "email"}
                onChange={() => setPreferredContact("email")}
              />
              <span className="ml-2 text-gray-700">
                {localeData.CONSULTATION.EMAIL}
              </span>
            </label>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-2">
          <label className="block font-semibold text-xs md:text-base">
            {localeData.CONSULTATION.DATE_OF_BIRTH}
          </label>
          <input
            type="date"
            value={dateOfBirth}
            max={currentDate.toISOString().split("T")[0]} // Set maximum date to current date
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="block w-full lg:w-[75%] border border-gray-300 rounded-b-md px-3 py-2 mt-1"
          />
        </div>
        <div className="flex flex-col items-center justify-center p-2">
          <label className="block font-semibold text-xs md:text-base">
            {localeData.CONSULTATION.ADDRESS}
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="block w-full lg:w-[75%] border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row mb-4 md:items-center md:justify-center text-xs md:text-base"
          >
            <div className="p-1 md:p-2">
              <label className="block font-semibold text-sm md:text-base">
                {localeData.CONSULTATION.CONSULTATION_DATES_AND_DETAILS}{" "}
                {index + 1}
                {index === 0 ? "st" : index === 1 ? "nd" : "rd"} choice
              </label>
              <input
                type="date"
                value={consultationData[index].date}
                min={currentDate.toISOString().split("T")[0]} // Set minimum date to current date
                max={oneYearFromNow.toISOString().split("T")[0]} // Set maximum date to one year from now
                onChange={(e) =>
                  handleConsultationDateChange(index, e.target.value)
                }
                className="block w-full border border-gray-300 rounded-b-md px-3 py-2 mt-1"
              />
            </div>
            <div className="p-1 md:p-2">
              <label className="block mt-2 font-semibold text-xs md:text-sm">
                {localeData.CONSULTATION.TIME_SLOT}
              </label>
              <select
                value={consultationData[index].timeSlot}
                onChange={(e) => handleTimeSlotChange(index, e.target.value)}
                className="block w-full border border-gray-300 rounded-b-md px-3 py-2 mt-1"
              >
                {localeData.TIME_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
        <div className="flex flex-col w-full justify-center items-center text-xs md:text-base">
          <div className="p-1 md:p-2 lg:w-[75%]">
            <label className="block font-semibold text-xs md:text-base">
              {localeData.CONSULTATION.CONSULTATION_HISTORY}
            </label>
            <label className="inline-flex items-center mt-1">
              <input
                type="checkbox"
                className="form-checkbox md:h-5 md:w-5 text-cvic-red"
                checked={consultationHistory === "firstTime"}
                onChange={() => setConsultationHistory("firstTime")}
              />
              <span className="ml-2 text-gray-700">
                {localeData.CONSULTATION.FIRST_TIME_VISITING}
              </span>
            </label>
            <label className="inline-flex items-center mt-1">
              <input
                type="checkbox"
                className="form-checkbox ml-2 md:h-5 md:w-5 text-cvic-red"
                checked={consultationHistory === "visitedBefore"}
                onChange={() => setConsultationHistory("visitedBefore")}
              />
              <span className="ml-2 text-gray-700">
                {localeData.CONSULTATION.HAVE_VISITED_BEFORE}
              </span>
            </label>
            <div className="p-1 md:p-2">
              <textarea
                value={requests}
                placeholder={localeData.CONSULTATION.INQUIRIES}
                onChange={(e) => setRequests(e.target.value)}
                className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <div className="p-1 md:p-2 lg-[75%]">
            <label className="block font-semibold text-xs md:text-base">
              {localeData.CONSULTATION.PRESENCE_OF_METAL}
            </label>
            <label className="inline-flex items-center mt-1">
              <input
                type="checkbox"
                className="form-checkbox md:h-5 md:w-5 text-cvic-red"
                checked={metalInBody === "yes"}
                onChange={() => setMetalInBody("yes")}
              />
              <span className="ml-2 text-gray-700">
                {localeData.CONSULTATION.YES}
              </span>
            </label>
            <label className="inline-flex items-center mt-1">
              <input
                type="checkbox"
                className="form-checkbox md:h-5 md:w-5 text-cvic-red ml-2"
                checked={metalInBody === "no"}
                onChange={() => setMetalInBody("no")}
              />
              <span className="ml-2 text-gray-700">
                {localeData.CONSULTATION.NO}
              </span>
            </label>
          </div>
          {metalInBody === "yes" && (
            <div className="p-1 md:p-2 w-full lg:w-[75%]">
              <textarea
                value={metalDetails}
                placeholder={
                  localeData.CONSULTATION.DETAILS_OF_METAL_AND_DATE_OF_SURGERY
                }
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
          <button
            type="button"
            className="text-blue-500 underline cursor-pointer text-[10px] ml-2 md:text-sm"
            onClick={handlePrivacyPolicyClick}
          >
            {localeData.CONSULTATION.TERMS_OF_USE}
          </button>
        </div>
        {formError && (
          <div className="text-red-500 p-1 md:p-2">{formError}</div>
        )}
        <button
          type="submit"
          className="bg-cvic-red text-white px-4 py-2 rounded-md"
          disabled={!termsAgreed} // Disable button if terms are not agreed
        >
          {localeData.CONSULTATION.SUBMIT}
        </button>
      </form>
      <ReservationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleConfirmSubmit}
        locale={locale}
        formData={formData}
      >
        {/* Content of the modal */}
      </ReservationModal>
      <PrivacyPolicyModal
        isOpen={privacyPolicyModalOpen}
        onClose={handlePrivacyPolicyModalClose}
        locale={locale}
      ></PrivacyPolicyModal>
    </div>
  );
};

export default ConsultationForm;
