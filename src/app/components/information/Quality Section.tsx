import React from "react";

const QualitySection = () => (
  <section className="bg-gray-100 py-16">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">High QualitysoPass »Q-PASS</h2>
        <p className="text-lg text-gray-700">最新・最良の心臓画像診断</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Quality */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quality</h3>
          <p className="text-lg mb-4">
            高度な診断技術<br />
            CVICでは、2台の心臓MRI装置、1台の心臓CT装置、2台の心エコー装置を用いて心臓検査を実施しています。
          </p>
          {/* List of equipment */}
          <ul className="list-disc pl-8">
            <li>Canon社製心臟MRI装置</li>
            <li>オランダのフィリップス社製心臓MRI装置</li>
            <li>Canon社製の心臓CTの最上位機種である 320列マルチスライスCT装置</li>
            <li>Canon社製心臓エコー装置</li>
            <li>オランダのフィリップス社製心臓エコー装置</li>
          </ul>
          <p className="text-lg mt-4">
            豊富な経験に基づき、質の高い診断と治療指針を提供いたします。
          </p>
        </div>
        {/* Performance */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Performance</h3>
          <p className="text-lg mb-4">
            豊富な検査実績<br />
            CVICは2015年7月現在で、月間295件の心臓CT、月間250件の心臓MRIをこなし、国内最高レベル（検査件数日本一）の検査実績があります。
          </p>
          {/* Access */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-4">Access</h3>
            <p className="text-lg mb-4">
              良好なアクセス<br />
              CVICは地下鉄4線（東西線、南北線、有楽町線、大江戸線）、JR総武線の乗り入れている飯田橋駅から徒歩5分の交通至便の場所にあります。
            </p>
            {/* Speed */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Speed</h3>
              <p className="text-lg mb-4">
                迅速な検査と当日3D結果説明<br />
                心臓画像診断は、非常に待ち時間の長い査のつで、通常1か月以上の待ち時間であることが多いです。CVICは、心臓に特化することにより、心賊CTは当日検査から、心臓MRIは1週間以内と検査待ちが非常に短いのが特徴です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default QualitySection;
