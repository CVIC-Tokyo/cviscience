import React from "react";
import "../../../styles/globals.css";
import DoctorsInfo from "@/app/components/information/DoctorsInfo";

const DoctorsPage: React.FC<DoctorsPageProps> = () => {
  return (
    <div className="page-container">
      <div className="w-full h-full bg-white/20 border-2 border-white p-2">
        <div className="w-full h-[150px] md:h-[250px] lg:h-[500px] bg-doctors_full bg-center bg-cover"/>
          <div className="w-full h-auto mb-4">
            <DoctorsInfo />
          </div>
      </div>  
    </div>
  );
};

export default DoctorsPage;
