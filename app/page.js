// app/page.js

// --- 1. Import Dependencies & Components ---
import studentData from '../data/student_data.json';
import OverviewStats from './components/OverviewStats';
import SkillBarChart from './components/SkillBarChart';
import AttentionScatterPlot from './components/AttentionScatterPlot';
import StudentTable from './components/StudentTable';

// --- 2. Define the Main Page Component ---
export default function Home() {
  return (
    <main className="container mx-auto p-4 sm:p-8 bg-gray-50 min-h-screen">
      
      {/* --- Header Section --- */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Cognitive Skills & Student Performance Dashboard</h1>
        <p className="text-lg text-gray-600 mt-2">Analyzing the link between student skills and academic success.</p>
      </header>

      {/* --- Overview Stats Section --- */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Dashboard Overview 📊</h2>
        <OverviewStats data={studentData} />
      </section>

      {/* --- Charts Section (Scatter & Bar) --- */}
      <section className="grid md:grid-cols-2 gap-8 my-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Attention vs. Assessment Score</h2>
          <AttentionScatterPlot data={studentData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Average Cognitive Skills</h2>
          <SkillBarChart data={studentData} />
        </div>
      </section>

      {/* --- Student Table Section --- */}
      <section className="my-8 bg-black p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-black-700 mb-4">Student Details 🧑‍🎓</h2>
        <StudentTable data={studentData} />
      </section>
      
      {/* --- Key Insights Section --- */}
      <section className="my-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Key Insights 🧠</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Strong Correlation:</strong> The data shows a strong positive correlation between a student's
            attention level and their final assessment score.
          </li>
          <li>
            <strong>Student Personas:</strong> Four distinct learning personas were identified using clustering, which can help educators tailor their teaching methods.
          </li>
          <li>
            <strong>Predictive Model:</strong> A machine learning model was successfully built to predict student performance based on their cognitive skills.
          </li>
        </ul>
      </section>

    </main>
  );
}
