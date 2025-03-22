import React from 'react'

function ExperienceSection() {
  return (
    <section className="w-full max-w-4xl p-6 bg-gray-100 my-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Additional Experience (School Projects)</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Village Hustle Survey (September 2024 – 10 days)</h3>
          <ul className="list-disc list-inside mt-2">
            <li>Conducted community-based data collection to identify common income-generating activities in villages around Zomba.</li>
            <li>Designed and implemented a Google Sheets-based data collection system to ensure efficient survey management.</li>
            <li>Role: Data Collection & Analysis</li>
            <li>Outcome: Provided insights into local economic activities to inform development programs.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">WiFi Utilization Survey (December 2024 – 20 days)</h3>
          <ul className="list-disc list-inside mt-2">
            <li>Investigated WiFi usage patterns on Mubarak Complex College campus to improve connectivity.</li>
            <li>Developed a custom data collection app and created Excel-based dashboards for analysis.</li>
            <li>Role: App Development, Data Analysis, and Reporting</li>
            <li>Outcome: Provided actionable recommendations for WiFi infrastructure optimization.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection