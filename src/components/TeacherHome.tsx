
import React from 'react';
import { User } from '../../types';
import Dashboard from './Dashboard';
import ClassOverviewCard from './ClassOverviewCard';
import StudentCard from './StudentCard';

interface TeacherHomeProps {
  user: User;
}

const TeacherHome: React.FC<TeacherHomeProps> = ({ user }) => {
  // Mock data for demonstration
  const classes = [
    { id: '1', name: 'English 101', studentCount: 25, averageGrade: 88 },
    { id: '2', name: 'History 202', studentCount: 30, averageGrade: 92 },
  ];

  const students = [
    { id: '1', name: 'Alice', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
    { id: '2', name: 'Bob', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e' },
    { id: '3', name: 'Charlie', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f' },
  ];

  return (
    <Dashboard title={`Welcome, Teacher ${user.name}!`}>
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-2xl font-bold mb-4">Class Overview</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {classes.map((c) => (
            <ClassOverviewCard key={c.id} classData={c} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">My Students</h2>
        <div className="space-y-4">
          {students.map((s) => (
            <StudentCard key={s.id} student={s} />
          ))}
        </div>
      </div>
    </Dashboard>
  );
};

export default TeacherHome;
