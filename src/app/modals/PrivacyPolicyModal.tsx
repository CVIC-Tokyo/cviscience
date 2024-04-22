import React from "react";
import { getLocaleData } from "@/utils/helpers";

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose, locale }) => {
  if (!isOpen) return null;

  const { PRIVACY_POLICY: privacyPolicy } = getLocaleData(locale);
  const localeData = getLocaleData(locale)

  return (
    <div className="fixed z-[100] inset-0 overflow-y-auto flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" onClick={onClose}></div>
      <div className="z-50 bg-white h-[90%] rounded-lg p-4 overflow-y-scroll w-[90%] md:w-[600px] lg:w-[800px]">
        <h2 className="text-lg font-bold mb-4">{privacyPolicy.TITLE}</h2>
        {privacyPolicy.CONTENT.map((content, index) => (
          <p key={index} className="mb-2">{content}</p>
        ))}
        <p className="font-semibold mb-2">{privacyPolicy.NOTE}</p>
        <h3 className="font-bold mb-2">{privacyPolicy.PURPOSE_OF_USE}</h3>
        <ul className="list-disc list-inside mb-4">
          {privacyPolicy.PURPOSE_CONTENT.map((content, index) => (
            <li key={index}>{content}</li>
          ))}
        </ul>
        <p>{privacyPolicy.ADDITIONAL_INFO}</p>
        <p className="font-semibold mt-4">{privacyPolicy.CLOSING}</p>
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="bg-cvic-red text-white px-4 py-2 rounded-md">
            {localeData.RESERVATION_MODAL.CLOSE}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
