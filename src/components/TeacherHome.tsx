
import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import ClassOverviewCard from '../components/ClassOverviewCard';
import StudentCard from '../components/StudentCard';
import { ClassData, Student } from '../../types';
import { Search, Users, Book } from 'lucide-react';

// Dummy data - this would typically come from an API
const dummyClasses: ClassData[] = [
  {
    id: 'C101',
    name: 'Grade 10 English - Section A',
    studentCount: 32,
    averageProgress: 68,
    alerts: 4,
    students: Array.from({ length: 32 }, (_, i) => ({
      id: `S101-${i}`,
      name: `Student ${i + 1}`,
      avatar: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i}.jpg`,
      lastActivity: `${i % 10 + 1} hours ago`,
      progress: (i * 3) % 100,
      averageScore: 70 + (i % 20) - 10,
      timeSpent: `${i % 5 + 2}h ${i * 10 % 60}m`,
      isStruggling: i % 7 === 0,
      scoreHistory: [],
      assignments: [],
      grades: [],
    })),
  },
  {
    id: 'C102',
    name: 'Grade 11 Literature',
    studentCount: 28,
    averageProgress: 82,
    alerts: 1,
    students: Array.from({ length: 28 }, (_, i) => ({
      id: `S102-${i}`,
      name: `Student ${i + 1}`,
      avatar: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i+10}.jpg`,
      lastActivity: `${i % 12 + 1} hours ago`,
      progress: (i * 4) % 100,
      averageScore: 75 + (i % 15) - 7,
      timeSpent: `${i % 6 + 1}h ${i * 12 % 60}m`,
      isStruggling: i % 10 === 0,
      scoreHistory: [],
      assignments: [],
      grades: [],
    })),
  },
];

const TeacherHome: React.FC = () => {
  const [activeTab, setActiveTab] = useState('classes');
  const [searchTerm, setSearchTerm] = useState('');

  const allStudents = dummyClasses.flatMap(c => c.students);

  const filteredClasses = dummyClasses.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredStudents = allStudents.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Dashboard title="Teacher Dashboard">
      {/* Header with Search */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold text-gray-800">Overview</h2>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder={activeTab === 'classes' ? 'Search classes...' : 'Search students...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-6" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('classes')}
            className={`${activeTab === 'classes' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
          >
            <Book className="h-5 w-5 mr-2" />
            My Classes ({filteredClasses.length})
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`${activeTab === 'students' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
          >
            <Users className="h-5 w-5 mr-2" />
            All Students ({filteredStudents.length})
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'classes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClasses.map((classData) => (
              <ClassOverviewCard key={classData.id} classData={classData} />
            ))}
          </div>
        )}
        {activeTab === 'students' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStudents.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        )}
      </div>
    </Dashboard>
  );
};

export default TeacherHome;
