// app/components/SkillBarChart.js
'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function SkillBarChart({ data }) {
  // We can simplify this by showing the average of each skill
  const avgData = [
    { name: 'Comprehension', value: data.reduce((acc, s) => acc + s.comprehension, 0) / data.length },
    { name: 'Attention', value: data.reduce((acc, s) => acc + s.attention, 0) / data.length },
    { name: 'Focus', value: data.reduce((acc, s) => acc + s.focus, 0) / data.length },
    { name: 'Retention', value: data.reduce((acc, s) => acc + s.retention, 0) / data.length },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={avgData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#6b7280" />
        <YAxis unit="%" stroke="#6b7280" />
        <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }} />
        <Legend />
        <Bar dataKey="value" name="Average Skill Level" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}