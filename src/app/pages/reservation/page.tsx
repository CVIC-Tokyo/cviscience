"use client";

import React, { useState } from "react";
import { getLocaleData } from "@/utils/helpers";
import { useGlobalContext } from "@/context/store";
import "../../../styles/globals.css";
import ConsultationForm from "@/app/components/information/ConsultaionForm";
import ReservationProcess from "@/app/components/information/ReservationProcess";
import ReservationNotice from "@/app/components/information/ReservationNotice";

const DockSelector: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);

  const selectPlan = (plan: string) => {
    if (plan === selectedPlan) {
      setSelectedPlan(null);
    } else setSelectedPlan(plan);
  };

  const toggleTest = (test: string) => {
    const isSelected = selectedTests.includes(test);
    if (isSelected) {
      setSelectedTests(selectedTests.filter((item) => item !== test));
    } else {
      setSelectedTests([...selectedTests, test]);
    }
  };

  return (
    <div className="page-container">
      <div className="py-2">
        <ReservationProcess locale={locale} />
      </div>
        <div className="w-full my-4">
          <ReservationNotice locale={locale} />
        </div>
      <div className="bg-white/25 flex flex-col items-center justify-around md:flex-row md:items-start md:justify-around p-2">
        <div className="w-full">
          <div className="bg-white rounded-lg p-4 m-2">
            <h2 className="text-base text-cvic-red md:text-lg font-bold mb-2">
              {localeData.RESERVATION.DOCK}
            </h2>
            <div className="space-y-2">
              {localeData.DOCK_PLANS.map((plan) => (
                <div
                  key={plan.TITLE}
                  className={`cursor-pointer hover:bg-cvic-red hover:text-white text-xs md:text-base p-2 rounded-lg ${
                    selectedPlan === plan.TITLE
                      ? "bg-cvic-red text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => selectPlan(plan.TITLE)}
                >
                  {plan.TITLE} - {plan.PRICE}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg p-4 m-2">
              <h2 className="text-base text-cvic-red md:text-lg font-bold mt-4 mb-2">
                {localeData.RESERVATION.INSPECTION}
              </h2>
              <div className="space-y-2">
                {localeData.OPTIONAL_TESTS.map((test) => (
                  <div
                    key={test.TITLE}
                    className={`flex items-center hover:bg-cvic-red hover:text-white text-xs md:text-base cursor-pointer p-2 rounded-lg ${
                      selectedTests.includes(test.TITLE)
                        ? "bg-cvic-red text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => toggleTest(test.TITLE)}
                  >
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedTests.includes(test.TITLE)}
                      readOnly
                    />
                    {test.TITLE} - {test.PRICE}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full m-2">
          <ConsultationForm locale={locale} selectedPlan={selectedPlan} selectedTests={selectedTests} />
        </div>
      </div>
    </div>
  );
};

export default DockSelector;
