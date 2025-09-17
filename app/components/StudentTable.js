// app/components/StudentTable.js
'use client';
import { useState } from 'react';

export default function StudentTable({ data }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by student name..."
        className="mb-4 p-2 border border-blue-300 rounded-md w-full"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-black border">
          <thead className="bg-black-100">
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Class</th>
              <th className="py-2 px-4 border-b">Score</th>
              <th className="py-2 px-4 border-b">Persona</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((student) => (
              <tr key={student.student_id} className="hover:bg-black-50 text-center">
                <td className="py-2 px-4 border-b">{student.name}</td>
                <td className="py-2 px-4 border-b">{student.class}</td>
                <td className="py-2 px-4 border-b">{student.assessment_score}%</td>
                <td className="py-2 px-4 border-b">Cluster {student.persona_cluster}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}