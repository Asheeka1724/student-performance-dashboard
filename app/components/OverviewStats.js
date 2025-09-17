// app/components/OverviewStats.js
'use client';

const OverviewStats = ({ data }) => {
  // Calculate averages
  const avgScore = data.reduce((acc, s) => acc + s.assessment_score, 0) / data.length;
  const avgAttention = data.reduce((acc, s) => acc + s.attention, 0) / data.length;
  const avgComprehension = data.reduce((acc, s) => acc + s.comprehension, 0) / data.length;
  
  const stats = [
    { label: 'Average Score', value: `${avgScore.toFixed(1)}%` },
    { label: 'Average Attention', value: `${avgAttention.toFixed(1)}%` },
    { label: 'Total Students', value: data.length },
    { label: 'Avg. Comprehension', value: `${avgComprehension.toFixed(1)}%` },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
          <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default OverviewStats;