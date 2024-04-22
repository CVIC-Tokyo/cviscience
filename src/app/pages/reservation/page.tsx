'use client'

import React, { useState } from 'react';
import { getLocaleData } from '@/utils/helpers';
import { useGlobalContext } from '@/context/store';
import '../../../styles/globals.css'

const DockSelector: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);

  const selectPlan = (plan: string) => {
    setSelectedPlan(plan);
  };

  const toggleTest = (test: string) => {
    const isSelected = selectedTests.includes(test);
    if (isSelected) {
      setSelectedTests(selectedTests.filter(item => item !== test));
    } else {
      setSelectedTests([...selectedTests, test]);
    }
  };

  return (
    <div className='page-container'>
        <div className='bg-white flex flex-col items-center justify-center'>
            <div className="p-4">
            <h2 className="text-lg font-bold mb-2">Select Dock Plan</h2>
            <div className="space-y-2">
                {localeData.DOCK_PLANS.map(plan => (
                <div
                    key={plan.TITLE}
                    className={`cursor-pointer p-2 rounded-lg ${
                    selectedPlan === plan.TITLE ? 'bg-cvic-red text-white' : 'bg-gray-200'
                    }`}
                    onClick={() => selectPlan(plan.TITLE)}
                >
                    {plan.TITLE} - {plan.PRICE}
                </div>
                ))}
            </div>

            <h2 className="text-lg font-bold mt-4 mb-2">Select Optional Tests</h2>
            <div className="space-y-2">
                {localeData.OPTIONAL_TESTS.map(test => (
                <div
                    key={test.TITLE}
                    className={`flex items-center cursor-pointer p-2 rounded-lg ${
                    selectedTests.includes(test.TITLE) ? 'bg-cvic-red text-white' : 'bg-gray-200'
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
  );
};

export default DockSelector;