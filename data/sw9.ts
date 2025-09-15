import { CurriculumLevel, Unit, CurriculumLesson, VocabularyItem, GrammarPoint, Activity } from '../types';

const sw9RawData = [
  {
    id: 'unit-1',
    title: 'Unit 1: English in the World',
    lessons: [
      {
        id: 'unit-1-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Talk about different ways to learn English',
          'Use to-infinitives for purpose',
        ],
        newWords: [
          'method',
          'subtitles',
          'lyrics',
          'vocabulary',
          'practice',
          'fluent',
          'improve',
          'progress',
        ],
        grammar: {
          title: 'To-infinitives for Purpose',
          explanation: 'Use to + verb to explain why we do something.',
          examples: [
            'I watch movies to learn new words.',
            'She reads books to improve her vocabulary.',
            'We practice speaking to become more fluent.',
          ],
        },
        activities: [
          { name: 'Learning Methods Vocabulary', type: 'vocabulary' },
          { name: 'Purpose Clauses Practice', type: 'grammar' },
          { name: 'Study Plan Writing', type: 'writing' },
        ],
      }
    ],
  },
  {
    id: 'unit-2',
    title: 'Unit 2: The Environment',
    lessons: [
      {
        id: 'unit-2-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Discuss environmental issues',
          'Use conditionals to talk about cause and effect',
        ],
        newWords: [
          'pollution',
          'recycle',
          'renewable',
          'sustainable',
          'conservation',
          'waste',
          'energy',
          'climate',
        ],
        grammar: {
          title: 'First and Second Conditionals',
          explanation: 'Use conditionals to discuss real and imaginary situations.',
          examples: [
            'If we recycle more, we will reduce waste.',
            'If everyone used renewable energy, pollution would decrease.',
            'What would happen if we didn\'t protect the environment?',
          ],
        },
        activities: [
          { name: 'Environmental Vocabulary', type: 'vocabulary' },
          { name: 'Conditional Practice', type: 'grammar' },
          { name: 'Environmental Essay', type: 'writing' },
        ],
      }
    ],
  },
  {
    id: 'unit-3',
    title: 'Unit 3: Education',
    lessons: [
      {
        id: 'unit-3-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Talk about education systems',
          'Use passive voice to describe processes',
        ],
        newWords: [
          'curriculum',
          'assessment',
          'certificate',
          'qualification',
          'degree',
          'graduate',
          'academic',
          'study',
        ],
        grammar: {
          title: 'Passive Voice',
          explanation: 'Use passive voice when the focus is on the action rather than who does it.',
          examples: [
            'Students are tested regularly.',
            'Certificates are awarded at graduation.',
            'Many subjects are taught in English.',
          ],
        },
        activities: [
          { name: 'Education Vocabulary', type: 'vocabulary' },
          { name: 'Passive Voice Practice', type: 'grammar' },
          { name: 'Education System Description', type: 'writing' },
        ],
      }
    ],
  },
  {
    id: 'unit-4',
    title: 'Unit 4: Technology and Society',
    lessons: [
      {
        id: 'unit-4-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Discuss impact of technology',
          'Use perfect tenses to link past and present',
        ],
        newWords: [
          'innovation',
          'digital',
          'artificial',
          'virtual',
          'social media',
          'online',
          'device',
          'network',
        ],
        grammar: {
          title: 'Perfect Tenses',
          explanation: 'Use perfect tenses to show how past events affect the present.',
          examples: [
            'Technology has changed our lives dramatically.',
            'Social media had already transformed communication before the pandemic.',
            'By 2030, AI will have become more advanced.',
          ],
        },
        activities: [
          { name: 'Technology Vocabulary', type: 'vocabulary' },
          { name: 'Perfect Tenses Practice', type: 'grammar' },
          { name: 'Technology Impact Essay', type: 'writing' },
        ],
      }
    ],
  },
  {
    id: 'unit-5',
    title: 'Unit 5: Globalization',
    lessons: [
      {
        id: 'unit-5-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Discuss global connections',
          'Use reported speech to relay information',
        ],
        newWords: [
          'international',
          'culture',
          'trade',
          'economy',
          'exchange',
          'diversity',
          'global',
          'local',
        ],
        grammar: {
          title: 'Reported Speech',
          explanation: 'Use reported speech to tell others what someone said.',
          examples: [
            'He said that globalization had changed business.',
            'They reported that cultural exchange was important.',
            'The expert explained that local markets were adapting.',
          ],
        },
        activities: [
          { name: 'Globalization Vocabulary', type: 'vocabulary' },
          { name: 'Reported Speech Practice', type: 'grammar' },
          { name: 'Global Impact Writing', type: 'writing' },
        ],
      }
    ],
  },
  {
    id: 'unit-6',
    title: 'Unit 6: Career Choices',
    lessons: [
      {
        id: 'unit-6-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Discuss future careers',
          'Use modals for possibility and prediction',
        ],
        newWords: [
          'career',
          'profession',
          'skill',
          'qualification',
          'experience',
          'interview',
          'resume',
          'workplace',
        ],
        grammar: {
          title: 'Modal Verbs for Future',
          explanation: 'Use modal verbs to discuss future possibilities.',
          examples: [
            'You might need additional qualifications.',
            'The job market could change significantly.',
            'Workers will have to learn new skills.',
          ],
        },
        activities: [
          { name: 'Career Vocabulary', type: 'vocabulary' },
          { name: 'Modal Verbs Practice', type: 'grammar' },
          { name: 'Career Plan Writing', type: 'writing' },
        ],
      }
    ],
  },
  {
    id: 'unit-7',
    title: 'Unit 7: Arts and Entertainment',
    lessons: [
      {
        id: 'unit-7-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Discuss various art forms',
          'Use relative clauses for description',
        ],
        newWords: [
          'performance',
          'exhibition',
          'creative',
          'artistic',
          'audience',
          'venue',
          'culture',
          'entertainment',
        ],
        grammar: {
          title: 'Relative Clauses',
          explanation: 'Use relative clauses to add information about people and things.',
          examples: [
            'The artist, who is from Vietnam, creates modern art.',
            'The gallery where we saw the exhibition is famous.',
            'This is the music that inspired me.',
          ],
        },
        activities: [
          { name: 'Arts Vocabulary', type: 'vocabulary' },
          { name: 'Relative Clauses Practice', type: 'grammar' },
          { name: 'Art Review Writing', type: 'writing' },
        ],
      }
    ],
  },
  {
    id: 'unit-8',
    title: 'Unit 8: Science and Discovery',
    lessons: [
      {
        id: 'unit-8-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Discuss scientific developments',
          'Use passive forms with modals',
        ],
        newWords: [
          'research',
          'experiment',
          'discovery',
          'innovation',
          'laboratory',
          'theory',
          'evidence',
          'conclusion',
        ],
        grammar: {
          title: 'Passive with Modals',
          explanation: 'Use passive forms with modal verbs to discuss possibilities and requirements.',
          examples: [
            'The experiment must be conducted carefully.',
            'New discoveries might be made soon.',
            'The results should be analyzed thoroughly.',
          ],
        },
        activities: [
          { name: 'Science Vocabulary', type: 'vocabulary' },
          { name: 'Passive Modals Practice', type: 'grammar' },
          { name: 'Scientific Report Writing', type: 'writing' },
        ],
      }
    ],
  },
];

// Fix: Changed return type from Lesson[] to CurriculumLesson[] to match the object structure being created.
const transformLessons = (lessons: any[], unitId: number): CurriculumLesson[] => {
    return lessons.map((lesson, lessonIndex) => {
        const lessonNum = parseInt((lesson.title.split(' ').pop() || '1'));
        const grammarPoints: GrammarPoint[] = [];
        if (lesson.grammar) {
            grammarPoints.push({
                title: { en: lesson.grammar.title, vi: lesson.grammar.title },
                explanation: { en: [lesson.grammar.explanation, ...lesson.grammar.examples], vi: [lesson.grammar.explanation, ...lesson.grammar.examples] },
            });
        }
        return {
            id: unitId * 100 + lessonNum,
            title: { en: lesson.title, vi: `Bài ${lessonNum}` },
            aims: { en: lesson.objectives, vi: lesson.objectives },
            vocabulary: lesson.newWords.map((word: string) => ({ term: word, vietnamese: word, pronunciation: '' })),
            grammar: grammarPoints,
            activities: lesson.activities.map((act: any) => ({ type: 'Practice', description: { en: [act.name], vi: [act.name] } })),
        };
    });
};

const transformUnits = (units: any[]): Unit[] => {
    return units.map((unit) => {
        const unitNum = parseInt((unit.id.split('-').pop() || '1'));
        const unitId = 900 + unitNum;
        const titleParts = unit.title.split(': ');
        const enTitle = titleParts.length > 1 ? titleParts[1] : unit.title;
        return {
            id: unitId,
            title: { en: enTitle, vi: enTitle },
            lessons: transformLessons(unit.lessons, unitId),
        };
    });
};

export const sw9Data: CurriculumLevel = {
    level: 9,
    title: { en: 'i-Learn Smart World 9', vi: 'i-Learn Smart World 9' },
    subtitle: { en: 'Secondary School - Grade 9', vi: 'Trung học cơ sở - Lớp 9' },
    ebookPdfUrl: 'https://drive.google.com/file/d/1Zt3yq4n5k6jL7p8cQ9rXf9wY2bA0sE1f/view?usp=sharing',
    units: transformUnits(sw9RawData),
};