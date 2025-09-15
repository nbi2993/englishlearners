import { CurriculumLevel, Unit, CurriculumLesson, VocabularyItem, GrammarPoint, Activity } from '../types';

const sw8RawData = [
  {
    id: 'unit-1',
    title: 'Unit 1: Free Time',
    lessons: [
      {
        id: 'unit-1-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Talk about leisure activities, likes, and dislikes',
          'Use verbs (to express preference) + gerund',
        ],
        newWords: [
          'chat',
          'fishing',
          'hang out',
          'jogging',
          'jewelry',
          'handball',
          'rock climbing',
          'board games',
        ],
        grammar: {
          title: 'Verbs (to express preference) + gerund',
          explanation: 'We can use verb + gerund (V-ing) to talk about things we prefer, like, and dislike.',
          examples: [
            'I like watching handball on the weekends.',
            'Daniel prefers swimming in the pool.',
            'Jane doesn\'t really like dancing.',
          ],
        },
        activities: [
          { name: 'Vocabulary Practice', type: 'vocabulary' },
          { name: 'Grammar Exercises', type: 'grammar' },
          { name: 'Speaking Activity', type: 'speaking' },
        ],
      }
    ],
  },
  {
    id: 'unit-2',
    title: 'Unit 2: The Media',
    lessons: [
      {
        id: 'unit-2-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Discuss different types of media',
          'Use the Present Perfect with just, already, and yet',
        ],
        newWords: [
          'newspaper',
          'magazine',
          'podcast',
          'broadcast',
          'article',
          'headline',
          'editor',
          'journalist',
        ],
        grammar: {
          title: 'Present Perfect with just, already, yet',
          explanation: 'We use these adverbs with Present Perfect to talk about recent events or expectations.',
          examples: [
            'I have just read the news.',
            'She has already watched that show.',
            'Have you written your article yet?',
          ],
        },
        activities: [
          { name: 'Media Vocabulary', type: 'vocabulary' },
          { name: 'Present Perfect Practice', type: 'grammar' },
          { name: 'News Report Writing', type: 'writing' },
        ],
      }
    ],
  },
  {
    id: 'unit-3',
    title: 'Unit 3: Living in the Future',
    lessons: [
      {
        id: 'unit-3-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Talk about future predictions',
          'Use will and going to for future plans and predictions',
        ],
        newWords: [
          'robot',
          'artificial',
          'technology',
          'virtual',
          'gadget',
          'invention',
          'innovation',
          'smart device',
        ],
        grammar: {
          title: 'Will vs Going to',
          explanation: 'Use will for predictions and going to for planned future events.',
          examples: [
            'Robots will help us in the future.',
            'I am going to buy a new phone next week.',
            'The weather will be sunny tomorrow.',
          ],
        },
        activities: [
          { name: 'Future Technology Vocabulary', type: 'vocabulary' },
          { name: 'Future Tense Practice', type: 'grammar' },
          { name: 'Future Predictions Writing', type: 'writing' },
        ],
      }
    ],
  },
  {
    id: 'unit-4',
    title: 'Unit 4: Health and Fitness',
    lessons: [
      {
        id: 'unit-4-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Discuss healthy lifestyle habits',
          'Use modal verbs for advice and obligation',
        ],
        newWords: [
          'exercise',
          'nutrition',
          'balanced',
          'workout',
          'healthy',
          'lifestyle',
          'vitamin',
          'mineral',
        ],
        grammar: {
          title: 'Modal Verbs for Advice',
          explanation: 'Use should, must, and have to for giving advice and talking about obligations.',
          examples: [
            'You should exercise regularly.',
            'We must eat a balanced diet.',
            'Students have to get enough sleep.',
          ],
        },
        activities: [
          { name: 'Health Vocabulary', type: 'vocabulary' },
          { name: 'Modal Verbs Practice', type: 'grammar' },
          { name: 'Health Advice Writing', type: 'writing' },
        ],
      }
    ],
  },
  {
    id: 'unit-5',
    title: 'Unit 5: Natural World',
    lessons: [
      {
        id: 'unit-5-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Describe natural phenomena',
          'Use passive voice to describe natural processes',
        ],
        newWords: [
          'ecosystem',
          'climate',
          'habitat',
          'species',
          'environment',
          'conservation',
          'endangered',
          'biodiversity',
        ],
        grammar: {
          title: 'Passive Voice',
          explanation: 'Use passive voice to describe processes where the focus is on what happens rather than who does it.',
          examples: [
            'Trees are planted to prevent erosion.',
            'Many species are protected by law.',
            'The environment is affected by pollution.',
          ],
        },
        activities: [
          { name: 'Nature Vocabulary', type: 'vocabulary' },
          { name: 'Passive Voice Practice', type: 'grammar' },
          { name: 'Environmental Writing', type: 'writing' },
        ],
      }
    ],
  },
  {
    id: 'unit-6',
    title: 'Unit 6: Around the World',
    lessons: [
      {
        id: 'unit-6-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Discuss different cultures and customs',
          'Use relative clauses to give extra information',
        ],
        newWords: [
          'culture',
          'tradition',
          'custom',
          'festival',
          'celebration',
          'ritual',
          'ceremony',
          'heritage',
        ],
        grammar: {
          title: 'Relative Clauses',
          explanation: 'Use who, which, and that to give extra information about people and things.',
          examples: [
            'The festival, which is held annually, attracts many tourists.',
            'People who live abroad often experience culture shock.',
            'This is the custom that we follow during New Year.',
          ],
        },
        activities: [
          { name: 'Cultural Vocabulary', type: 'vocabulary' },
          { name: 'Relative Clauses Practice', type: 'grammar' },
          { name: 'Cultural Description Writing', type: 'writing' },
        ],
      }
    ],
  },
  {
    id: 'unit-7',
    title: 'Unit 7: Science in Life',
    lessons: [
      {
        id: 'unit-7-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Talk about scientific discoveries',
          'Use conditionals to discuss cause and effect',
        ],
        newWords: [
          'experiment',
          'research',
          'discovery',
          'hypothesis',
          'evidence',
          'observation',
          'theory',
          'conclusion',
        ],
        grammar: {
          title: 'First Conditional',
          explanation: 'Use first conditional to talk about possible future results of actions.',
          examples: [
            'If we conduct more research, we will find the answer.',
            'Scientists will make new discoveries if they get funding.',
            'If you observe carefully, you will see the pattern.',
          ],
        },
        activities: [
          { name: 'Science Vocabulary', type: 'vocabulary' },
          { name: 'Conditional Practice', type: 'grammar' },
          { name: 'Scientific Writing', type: 'writing' },
        ],
      }
    ],
  },
  {
    id: 'unit-8',
    title: 'Unit 8: Modern Life',
    lessons: [
      {
        id: 'unit-8-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Discuss modern lifestyle and technology',
          'Use reported speech to relay information',
        ],
        newWords: [
          'digital',
          'online',
          'social media',
          'internet',
          'device',
          'application',
          'wireless',
          'connection',
        ],
        grammar: {
          title: 'Reported Speech',
          explanation: 'Use reported speech to tell others what someone said.',
          examples: [
            'He said that he used social media every day.',
            'She told me that she preferred digital books.',
            'They reported that internet usage had increased.',
          ],
        },
        activities: [
          { name: 'Technology Vocabulary', type: 'vocabulary' },
          { name: 'Reported Speech Practice', type: 'grammar' },
          { name: 'Modern Life Essay', type: 'writing' },
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
        const unitId = 800 + unitNum;
        const titleParts = unit.title.split(': ');
        const enTitle = titleParts.length > 1 ? titleParts[1] : unit.title;
        return {
            id: unitId,
            title: { en: enTitle, vi: enTitle },
            lessons: transformLessons(unit.lessons, unitId),
        };
    });
};

export const sw8Data: CurriculumLevel = {
    level: 8,
    title: { en: 'i-Learn Smart World 8', vi: 'i-Learn Smart World 8' },
    subtitle: { en: 'Secondary School - Grade 8', vi: 'Trung học cơ sở - Lớp 8' },
    ebookPdfUrl: 'https://drive.google.com/file/d/1_d28c35S1s-0aD2E9M6f4gH5jK7nOp8l/view?usp=sharing',
    units: transformUnits(sw8RawData),
};