// app/components/AttentionScatterPlot.js
'use client'; // This line is crucial! It tells Next.js this is a client-side component.

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function AttentionScatterPlot({ data }) {
  return (
    // ResponsiveContainer makes the chart adapt to the size of its parent container
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" dataKey="attention" name="Attention" unit="%" stroke="#6b7280" />
        <YAxis type="number" dataKey="assessment_score" name="Score" unit="%" stroke="#6b7280" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }} />
        <Legend />
        <Scatter name="Students" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}