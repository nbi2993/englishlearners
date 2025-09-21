
import React from 'react';
import Dashboard from '../components/Dashboard';
import ClassOverviewCard from '../components/ClassOverviewCard';
import StudentCard from '../components/StudentCard';
import { ClassData, Student } from '../../types'; // Import types

// Dummy data for classes and students
const dummyClasses: ClassData[] = [
  {
    name: 'Grade 10 English',
    students: [
      {
        id: '1',
        name: 'Alice Johnson',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        lastActivity: '2 hours ago',
        progress: 75,
        averageScore: 88,
        timeSpent: '10h 30m',
        isStruggling: false,
        scoreHistory: [],
        assignments: [],
        grades: [],
      },
      {
        id: '2',
        name: 'Bob Williams',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        lastActivity: '1 day ago',
        progress: 50,
        averageScore: 76,
        timeSpent: '8h 15m',
        isStruggling: true,
        scoreHistory: [],
        assignments: [],
        grades: [],
      },
    ],
  },
  // Add more dummy classes as needed
];

const TeacherHome: React.FC = () => {
  return (
    <Dashboard>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">My Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyClasses.map((classData, index) => (
            <ClassOverviewCard key={index} classData={classData} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">My Students</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyClasses.flatMap((classData) =>
            classData.students.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))
          )}
        </div>
      </div>
    </Dashboard>
  );
};

export default TeacherHome;
