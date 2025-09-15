import { CurriculumLevel, Unit, CurriculumLesson, VocabularyItem, GrammarPoint, Activity } from '../types';

// Raw curriculum data for "iLearn Smart World 8"
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
          explanation: 'We can use verb + gerund (V-ing) to talk about things we prefer, like, and dislike. Some verbs that we often use are: prefer, love, enjoy, like, don\'t (really) like, hate.',
          examples: [
            'I like watching handball on the weekends.',
            'Daniel prefers swimming in the pool to swimming in the sea.',
            'Jane doesn\'t really like dancing. She prefers singing.',
            'My brothers hate playing board games.',
          ],
        },
        pronunciation: {
          title: '/s/ or /z/ sound',
          focus: 'At the end of words, "s" can sound like /s/ or /z/.',
          examples: ['sports', 'books', 'games', 'friends'],
        },
        conversationSkill: null, // Not explicitly listed for Lesson 1, but "Let's Talk!" is a conversation activity.
        activities: [
          { name: 'New Words: Number the pictures, Listen and repeat', type: 'vocabulary' },
          { name: 'New Words: Write new words into table and add more', type: 'vocabulary' },
          { name: 'Reading: Read passages, Circle person who prefers indoor activities', type: 'reading' },
          { name: 'Reading: Match phrases and person they describe', type: 'reading' },
          { name: 'Grammar: Fill in the blanks (Verbs + gerund)', type: 'grammar' },
          { name: 'Grammar: Circle correct words (Verbs + gerund)', type: 'grammar' },
          { name: 'Grammar: Write sentences using gerunds and prompts', type: 'grammar' },
          { name: 'Pronunciation: Listen and write /s/ or /z/', type: 'pronunciation' },
          { name: 'Practice: Ask and answer using pictures and prompts', type: 'speaking' },
          { name: 'Speaking: Survey - Free Time Activities', type: 'speaking' },
        ],
      },
      {
        id: 'unit-1-lesson-2',
        title: 'Lesson 2',
        objectives: [
          'Make free time activity plans with friends',
          'Use Present Simple for future meaning and prepositions of time',
        ],
        newWords: [
          'knitting',
          'karate',
          'roller skating',
          'sewing',
          'practice',
          'shuttlecock',
          'cycling',
          'table tennis',
        ],
        grammar: {
          title: 'Present Simple for future meaning and Prepositions of time',
          explanation: 'We can use Present Simple for future meaning to talk about a set schedule. We often do this by saying the day or time of the scheduled activity. We can use prepositions of time (from...to..., until) to talk about when we will do something.',
          examples: [
            'I have soccer practice at 7 tonight.',
            'I have English club on Friday at 8 p.m.',
            'Do you want to go cycling from 5 to 6 p.m.?',
            'I have English club until 5 p.m.',
          ],
        },
        pronunciation: {
          title: '/sk/ sound',
          focus: 'Focus on the /sk/ sound.',
          examples: ['skating', 'basketball', 'school'],
        },
        conversationSkill: {
          title: 'Starting a telephone conversation',
          phrases: ['Hi, (Ethan). How\'s it going?', 'Hey, what\'s up?'],
        },
        activities: [
          { name: 'New Words: Read definitions, match words with pictures', type: 'vocabulary' },
          { name: 'Listening: Two people making plans, complete table', type: 'listening' },
          { name: 'Grammar: Fill in the blanks (Present Simple for future, prepositions)', type: 'grammar' },
          { name: 'Grammar: Circle correct words (Present Simple for future, prepositions)', type: 'grammar' },
          { name: 'Grammar: Answer questions using schedule', type: 'grammar' },
          { name: 'Pronunciation: Focus on /sk/ sound, listen and cross out different sound', type: 'pronunciation' },
          { name: 'Practice: Practice conversation with prepositions', type: 'speaking' },
          { name: 'Speaking: Let\'s Make Plans!', type: 'speaking' },
        ],
      },
      {
        id: 'unit-1-lesson-3',
        title: 'Lesson 3',
        objectives: [
          'Talk about your favorite hobby',
          'Write a passage about your favorite hobby',
        ],
        newWords: [], // No new words explicitly listed for Lesson 3
        grammar: null, // No new grammar explicitly listed for Lesson 3, focuses on writing skill
        pronunciation: null, // No new pronunciation explicitly listed for Lesson 3
        conversationSkill: null, // Not explicitly listed
        writingSkill: {
          title: 'Writing basic descriptive passages',
          guidelines: [
            'Start with a topic sentence: tell the readers what your passage is about.',
            'Write about 3-5 supporting ideas to explain your topic. You can answer questions what, when, where, who, how, etc. about the topic to think of ideas to write about.',
            'End with a concluding sentence: say your main topic again in different words.',
          ],
        },
        activities: [
          { name: 'Reading: Read Linh\'s passage, choose best beginning sentence', type: 'reading' },
          { name: 'Reading: Read Linh\'s passage, answer questions', type: 'reading' },
          { name: 'Writing: Read about writing skill, underline parts in Linh\'s passage', type: 'writing' },
          { name: 'Writing: Unscramble sentences and number them', type: 'writing' },
          { name: 'Speaking: My Favorite Hobby - Discuss hobbies', type: 'speaking' },
          { name: 'Speaking: My Favorite Hobby - Choose hobby, discuss points', type: 'speaking' },
          { name: 'Writing: Write a simple passage about your favorite hobby (80-100 words)', type: 'writing' },
        ],
      },
    ],
  },
  {
    id: 'unit-2',
    title: 'Unit 2: Life in the Country',
    lessons: [
      {
        id: 'unit-2-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Talk about life in the country and the city',
          'Use countable and uncountable nouns with indefinite quantifiers',
        ],
        newWords: [
          'entertainment',
          'nature',
          'noise',
          'peace',
          'fresh',
          'vehicle',
          'room',
          'facility',
        ],
        grammar: {
          title: 'Quantifiers with countable/uncountable nouns',
          explanation: 'We can use countable/uncountable nouns with the quantifiers: lots of/a lot of, too much, too many, and not enough to talk about amounts. Note: too much, too many, and not enough all have a negative meaning.',
          examples: [
            'There are lots of people.',
            'There is too much work to do.',
            'There are too many cars on the road.',
            'There isn\'t enough time to play.',
          ],
        },
        pronunciation: {
          title: '/tʃ/ sound',
          focus: 'Focus on the /tʃ/ sound.',
          examples: ['much', 'nature'],
        },
        conversationSkill: {
          title: 'Politely disagreeing',
          phrases: ['That\'s true, but...', 'Yes, but...', 'Really? (...)'],
        },
        activities: [
          { name: 'New Words: Read definitions, fill in the blanks', type: 'vocabulary' },
          { name: 'Listening: Joe and Mai talking about city/country life, fill in blanks', type: 'listening' },
          { name: 'Grammar: Fill in the blanks (Quantifiers)', type: 'grammar' },
          { name: 'Grammar: Circle correct words (Quantifiers)', type: 'grammar' },
          { name: 'Grammar: Write sentences using prompts (Quantifiers)', type: 'grammar' },
          { name: 'Pronunciation: Focus on /tʃ/ sound, listen and cross out different sound', type: 'pronunciation' },
          { name: 'Practice: Practice conversation', type: 'speaking' },
          { name: 'Speaking: Is it better to live in the city or the country?', type: 'speaking' },
        ],
      },
      {
        id: 'unit-2-lesson-2',
        title: 'Lesson 2',
        objectives: [
          'Talk about folk games and activities in the country',
          'Use verbs (to express preference) + to-infinitives and adverbs of frequency',
        ],
        newWords: [
          'hometown',
          'traditional',
          'tug of war',
          'jump rope',
          'pick flowers',
          'spinning tops',
          'herd buffalo',
        ],
        grammar: {
          title: 'Verbs (to express preference) + to-infinitives and Adverbs of frequency',
          explanation: 'We can use verbs with to-infinitives to talk about activities people like or prefer to do. We can use adverbs of frequency (never, rarely, sometimes, often, usually, always) to say how often things happen.',
          examples: [
            'They like to play tug of war here.',
            'She usually plays tug of war with her cousins.',
            'We always play sports at the park.',
          ],
        },
        pronunciation: {
          title: 'Intonation for questions',
          focus: 'Intonation for Yes/No questions rises.',
          examples: ['Does he like to play folk games?', 'Do they like to jump rope?'],
        },
        conversationSkill: null, // Not explicitly listed
        activities: [
          { name: 'New Words: Read sentences, match words with definitions', type: 'vocabulary' },
          { name: 'Reading: Read blog post, circle correct answers', type: 'reading' },
          { name: 'Grammar: Fill in the blanks (Verbs + to-infinitives, adverbs of frequency)', type: 'grammar' },
          { name: 'Grammar: Unscramble sentences', type: 'grammar' },
          { name: 'Grammar: Write sentences using prompts', type: 'grammar' },
          { name: 'Pronunciation: Listen and cross out sentence that doesn\'t follow intonation rule', type: 'pronunciation' },
          { name: 'Practice: Ask and answer about what young people like to do', type: 'speaking' },
          { name: 'Speaking: Fun and Games in the Country', type: 'speaking' },
        ],
      },
      {
        id: 'unit-2-lesson-3',
        title: 'Lesson 3',
        objectives: [
          'Talk about festivals in the country',
          'Write an announcement for a festival in the country',
        ],
        newWords: [], // No new words explicitly listed for Lesson 3
        grammar: null, // No new grammar explicitly listed for Lesson 3, focuses on writing skill
        pronunciation: null, // No new pronunciation explicitly listed for Lesson 3
        conversationSkill: null, // Not explicitly listed
        writingSkill: {
          title: 'Writing long-form announcements',
          guidelines: [
            'Write a heading. Say what the event is.',
            'Write a summary sentence about what, where, and when the festival is.',
            'Give a call to action. Ask the readers to take part or join in.',
            'Say the cost.',
            'Say the different activities and food at the festival.',
          ],
        },
        activities: [
          { name: 'Reading: Read announcement, main purpose', type: 'reading' },
          { name: 'Reading: Read announcement, True/False/Doesn\'t say', type: 'reading' },
          { name: 'Writing: Read about writing skill, underline parts in announcement', type: 'writing' },
          { name: 'Writing: Reorder parts of the announcement', type: 'writing' },
          { name: 'Speaking: Planning a Traditional Festival - Discuss activities and food', type: 'speaking' },
          { name: 'Speaking: Planning a Traditional Festival - Plan a festival', type: 'speaking' },
          { name: 'Writing: Write an announcement for the festival (80-100 words)', type: 'writing' },
        ],
      },
    ],
  },
  {
    id: 'unit-3',
    title: 'Unit 3: Protecting the Environment',
    lessons: [
      {
        id: 'unit-3-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Talk about the effects of pollution',
          'Use First Conditional',
        ],
        newWords: [
          'affect',
          'cause',
          'pollute',
          'disease',
          'wildlife',
          'tourism',
          'environment',
          'damage',
        ],
        grammar: {
          title: 'First Conditional with "if" or "unless"',
          explanation: 'We use First Conditional to talk about future situations we think are real or will happen and their results. We can use unless to say what will happen if we don\'t do something.',
          examples: [
            'If people keep burning trash, the air will be polluted.',
            'Unless we stop burning trash, the air will be polluted.',
          ],
        },
        pronunciation: {
          title: '/t/ sound',
          focus: 'Focus on the /t/ sound.',
          examples: ['affect', 'pollute', 'protect'],
        },
        conversationSkill: null, // Not explicitly listed
        activities: [
          { name: 'New Words: Read definitions, fill in the blanks', type: 'vocabulary' },
          { name: 'Reading: Read essay, choose best introduction', type: 'reading' },
          { name: 'Reading: Read essay, True/False/Doesn\'t say', type: 'reading' },
          { name: 'Grammar: Fill in the blanks (First Conditional)', type: 'grammar' },
          { name: 'Grammar: Fill in the blanks with correct verb form (First Conditional)', type: 'grammar' },
          { name: 'Grammar: Write First Conditional sentences using notes', type: 'grammar' },
          { name: 'Pronunciation: Focus on /t/ sound, listen and cross out different sound', type: 'pronunciation' },
          { name: 'Practice: Ask and answer about effects of pollution', type: 'speaking' },
          { name: 'Speaking: Effects of Pollution - Plan a presentation', type: 'speaking' },
        ],
      },
      {
        id: 'unit-3-lesson-2',
        title: 'Lesson 2',
        objectives: [
          'Give advice about how to reduce pollution',
          'Use conjunctions to make compound and complex sentences',
        ],
        newWords: [
          'recycle',
          'reuse',
          'reduce',
          'save',
          'waste',
          'clean up',
          'electricity',
          'air conditioner',
        ],
        grammar: {
          title: 'Compound sentences with "and" and Complex sentences with "so (that)"',
          explanation: 'We can use "and" to add another idea and join the ideas together. We can use "so that" to show purpose. We usually leave out "that" after "so" in informal situations.',
          examples: [
            'We should use the school bus, and we can start a "walk to school" group.',
            'We should have cheap public transportation so (that) we can reduce air pollution.',
          ],
        },
        pronunciation: {
          title: 'Word stress for most two-syllable verbs',
          focus: 'Stress the second syllable for most two-syllable verbs.',
          examples: ['reuse', 'collect', 'reduce'],
        },
        conversationSkill: {
          title: 'Encouraging the speaker to continue',
          phrases: ['What else...?', 'Anything else?'],
        },
        activities: [
          { name: 'New Words: Match words with descriptions', type: 'vocabulary' },
          { name: 'New Words: Say what you can/can\'t recycle, reuse, or save', type: 'vocabulary' },
          { name: 'Listening: Amy and Daniel talking about reducing pollution, fill in blanks', type: 'listening' },
          { name: 'Grammar: Tick/Cross and rewrite sentences (conjunctions)', type: 'grammar' },
          { name: 'Grammar: Combine sentences using "and" or "so (that)"', type: 'grammar' },
          { name: 'Pronunciation: Focus on word stress, listen and cross out different stress', type: 'pronunciation' },
          { name: 'Practice: Ask and answer about how to reduce pollution', type: 'speaking' },
          { name: 'Speaking: Solutions to Pollution - Make a poster', type: 'speaking' },
        ],
      },
      {
        id: 'unit-3-lesson-3',
        title: 'Lesson 3',
        objectives: [
          'Talk about ways to protect the environment',
          'Write a short guide to make your school greener',
        ],
        newWords: [], // No new words explicitly listed for Lesson 3
        grammar: null, // No new grammar explicitly listed for Lesson 3, focuses on writing skill
        pronunciation: null, // No new pronunciation explicitly listed for Lesson 3
        conversationSkill: null, // Not explicitly listed
        writingSkill: {
          title: 'Writing guides',
          guidelines: [
            'Create a title. Tell everyone what this guide is for.',
            'Write an introduction. Tell everyone what the topic is and that you are going to tell them how to do it.',
            'Create clear, short headings. Begin each point with a clear heading. Remember to use imperatives.',
            'Explain each step. Under your headings, give more information about how to do it or why it\'s important. Your sentences should be clear and easy to understand.',
          ],
        },
        activities: [
          { name: 'Reading: Read guide, write correct heading for each section', type: 'reading' },
          { name: 'Reading: Read guide, circle correct answers', type: 'reading' },
          { name: 'Writing: Read about writing skill, circle imperatives and underline reasons', type: 'writing' },
          { name: 'Writing: Read guide, write headings for each section', type: 'writing' },
          { name: 'Speaking: Make Our School Greener - Discuss ways', type: 'speaking' },
          { name: 'Speaking: Make Our School Greener - Choose solutions, discuss points', type: 'speaking' },
          { name: 'Writing: Write a guide to make your school greener (80-100 words)', type: 'writing' },
        ],
      },
    ],
  },
  {
    id: 'unit-4',
    title: 'Unit 4: Disasters',
    lessons: [
      {
        id: 'unit-4-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Talk about disasters',
          'Use Wh-questions',
        ],
        newWords: [
          'typhoon',
          'blizzard',
          'drought',
          'wildfire',
          'flood',
          'avalanche',
          'landslide',
          'tsunami',
          'earthquake',
          'heat wave',
        ],
        grammar: {
          title: 'Wh-questions',
          explanation: 'We can use Wh-questions to ask for detailed information about an action or event.',
          examples: [
            'When was the biggest wildfire?',
            'What was the biggest tsunami?',
            'How many people died in the flood?',
            'How much damage did the flood cause?',
          ],
        },
        pronunciation: {
          title: 'Sound changes for "...was..."',
          focus: '"...was..." often sounds like /wəz/.',
          examples: ['Where was the flood?', 'It was in Japan.'],
        },
        conversationSkill: null, // Not explicitly listed
        activities: [
          { name: 'New Words: Match words with pictures', type: 'vocabulary' },
          { name: 'Reading: Read quick facts, topic NOT mentioned', type: 'reading' },
          { name: 'Reading: Read quick facts, True/False/Doesn\'t say', type: 'reading' },
          { name: 'Grammar: Fill in the blanks (Wh-questions)', type: 'grammar' },
          { name: 'Grammar: Write questions for underlined information', type: 'grammar' },
          { name: 'Pronunciation: Focus on sound changes for "...was...", listen and cross out different sound', type: 'pronunciation' },
          { name: 'Practice: Ask and answer about world\'s biggest disasters', type: 'speaking' },
          { name: 'Speaking: Play the Disasters Quiz Show!', type: 'speaking' },
        ],
      },
      {
        id: 'unit-4-lesson-2',
        title: 'Lesson 2',
        objectives: [
          'Give advice on what to do in a disaster',
          'Use prepositions of place and movement',
        ],
        newWords: [
          'escape plan',
          'board up',
          'emergency services',
          'fire extinguisher',
          'stock up on',
          'flashlight',
          'first aid kit',
          'supplies',
        ],
        grammar: {
          title: 'Prepositions of place and movement',
          explanation: 'We can use prepositions of place (inside, outside, under, near) to show where something or someone is. We can use prepositions of movement (into, to) to show movement from one place to another.',
          examples: [
            'Stay inside your house.',
            'You shouldn\'t go into flood water.',
          ],
        },
        pronunciation: {
          title: 'Sentence stress for negative advice',
          focus: 'Stress "shouldn\'t" for negative advice.',
          examples: ['You shouldn\'t open the windows.', 'We shouldn\'t try to swim.'],
        },
        conversationSkill: {
          title: 'Working through tasks in groups',
          phrases: ['What\'s next?', 'Next is (fires). What should we...?'],
        },
        activities: [
          { name: 'New Words: Match bold words with pictures', type: 'vocabulary' },
          { name: 'Listening: Two students talking about safety tips, number tips', type: 'listening' },
          { name: 'Listening: Fill in the blanks (why follow safety tips)', type: 'listening' },
          { name: 'Grammar: Fill in the blanks (prepositions)', type: 'grammar' },
          { name: 'Grammar: Circle correct words (prepositions)', type: 'grammar' },
          { name: 'Grammar: Fill in the blanks with words from box (prepositions)', type: 'grammar' },
          { name: 'Pronunciation: Focus on sentence stress, listen and cross out different stress', type: 'pronunciation' },
          { name: 'Practice: Ask and answer about safety tips', type: 'speaking' },
          { name: 'Speaking: What to do in a Disaster - Make a poster', type: 'speaking' },
        ],
      },
      {
        id: 'unit-4-lesson-3',
        title: 'Lesson 3',
        objectives: [
          'Talk about the dangers of disasters and what you should do',
          'Write an emergency announcement for a disaster',
        ],
        newWords: [], // No new words explicitly listed for Lesson 3
        grammar: null, // No new grammar explicitly listed for Lesson 3, focuses on writing skill
        pronunciation: null, // No new pronunciation explicitly listed for Lesson 3
        conversationSkill: null, // Not explicitly listed
        writingSkill: {
          title: 'Writing emergency announcements',
          guidelines: [
            'Heading - Note the emergency type, who is sending the announcement, and when.',
            'What/Where/When notes - Keep these short and simple.',
            'Summary - Briefly note the cause and main dangers.',
            'Instructions - Note what people should do as point form notes.',
          ],
        },
        activities: [
          { name: 'Reading: Read emergency announcement, choose best heading', type: 'reading' },
          { name: 'Reading: Read emergency announcement, write short answers', type: 'reading' },
          { name: 'Writing: Read about writing skill, circle and number parts of announcement', type: 'writing' },
          { name: 'Writing: Number sentences to match parts of announcement', type: 'writing' },
          { name: 'Speaking: Discuss dangers of disasters and what to do', type: 'speaking' },
          { name: 'Speaking: Imagine your job to warn town, complete table', type: 'speaking' },
          { name: 'Writing: Write an emergency announcement (80-100 words)', type: 'writing' },
        ],
      },
    ],
  },
  {
    id: 'unit-5',
    title: 'Unit 5: Science and Technology',
    lessons: [
      {
        id: 'unit-5-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Ask and answer about devices',
          'Use Wh-questions and Yes/No questions',
        ],
        newWords: [
          'storage',
          'weight',
          'screen',
          'inch (")',
          'gigabyte (GB)',
          'tablet',
        ],
        grammar: {
          title: 'Wh-questions and Yes/No questions',
          explanation: 'We can use Wh-questions to ask for detailed information about things, people, events, etc. We can use Yes/No questions to ask about specific things. We ask them to get one of two answers, yes or no.',
          examples: [
            'What\'s the screen size?',
            'How much is this tablet?',
            'Does this phone have a good screen?',
            'Is it easy to use?',
          ],
        },
        pronunciation: {
          title: '/eɪ/ sound',
          focus: 'Focus on the /eɪ/ sound.',
          examples: ['weight', 'play', 'space'],
        },
        conversationSkill: null, // Not explicitly listed
        activities: [
          { name: 'New Words: Fill in the blanks', type: 'vocabulary' },
          { name: 'Reading: Read article, choose best title', type: 'reading' },
          { name: 'Reading: Read article, answer questions', type: 'reading' },
          { name: 'Grammar: Fill in the blanks (Wh-questions and Yes/No questions)', type: 'grammar' },
          { name: 'Grammar: Write questions and answers using prompts', type: 'grammar' },
          { name: 'Pronunciation: Focus on /eɪ/ sound, listen and cross out different sound', type: 'pronunciation' },
          { name: 'Practice: Practice conversation (choosing a laptop)', type: 'speaking' },
          { name: 'Speaking: Buying a New Laptop or Tablet', type: 'speaking' },
        ],
      },
      {
        id: 'unit-5-lesson-2',
        title: 'Lesson 2',
        objectives: [
          'Compare robots',
          'Use comparative adverbs',
        ],
        newWords: [
          'rescue',
          'lift',
          'complete',
          'navigate',
          'carefully',
          'quietly',
          'recognize',
          'safely',
        ],
        grammar: {
          title: 'Comparative adverbs',
          explanation: 'We can use comparative adverbs to compare two actions.',
          examples: [
            'Tsunami moves more slowly than Octopus 1.',
            'Wall-D can jump higher than Twitchy.',
          ],
        },
        pronunciation: {
          title: 'Word stress for words ending in "-ly"',
          focus: 'Stress the first syllable for most 3-syllable words ending in "-ly".',
          examples: ['carefully', 'quietly', 'perfectly'],
        },
        conversationSkill: {
          title: 'Showing agreement',
          phrases: ['I agree.', 'You\'re right.'],
        },
        activities: [
          { name: 'New Words: Match underlined words with definitions', type: 'vocabulary' },
          { name: 'Listening: Report about robot competition, True/False', type: 'listening' },
          { name: 'Grammar: Fill in the blank (comparative adverbs)', type: 'grammar' },
          { name: 'Grammar: Fill in the blanks (comparative adverbs)', type: 'grammar' },
          { name: 'Grammar: Write sentences using adverbs and information', type: 'grammar' },
          { name: 'Pronunciation: Focus on word stress, listen and cross out different stress', type: 'pronunciation' },
          { name: 'Practice: Make sentences using comparative adverbs', type: 'speaking' },
          { name: 'Speaking: Which Robot For the Job?', type: 'speaking' },
        ],
      },
      {
        id: 'unit-5-lesson-3',
        title: 'Lesson 3',
        objectives: [
          'Talk about smartphones',
          'Write an email about a new smartphone',
        ],
        newWords: [], // No new words explicitly listed for Lesson 3
        grammar: null, // No new grammar explicitly listed for Lesson 3, focuses on writing skill
        pronunciation: null, // No new pronunciation explicitly listed for Lesson 3
        conversationSkill: null, // Not explicitly listed
        writingSkill: {
          title: 'Using conjunctions to make longer, more interesting sentences',
          guidelines: [
            'Use "and" to link ideas in one sentence, or "also" to link two sentences.',
            'Use "but" to link contrasting ideas in one sentence, or "however" to link two sentences.',
            'Use "so" to talk about results.',
          ],
        },
        activities: [
          { name: 'Reading: Read Kate\'s email, feature NOT mentioned', type: 'reading' },
          { name: 'Reading: Read Kate\'s email, fill in the blanks', type: 'reading' },
          { name: 'Writing: Read about writing skill, underline conjunctions', type: 'writing' },
          { name: 'Writing: Fill in the blanks with conjunctions', type: 'writing' },
          { name: 'Speaking: Buying a New Phone - Choose features, choose phone', type: 'speaking' },
          { name: 'Speaking: Buying a New Phone - Talk about points for email', type: 'speaking' },
          { name: 'Writing: Write an email to your friend about smartphone (80-100 words)', type: 'writing' },
        ],
      },
    ],
  },
  {
    id: 'unit-6',
    title: 'Unit 6: Life on Other Planets',
    lessons: [
      {
        id: 'unit-6-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Make predictions about where humans will live in the future',
          'Use Future Simple',
        ],
        newWords: [
          'Earth',
          'temperature',
          'gravity',
          'Mars',
          'Venus',
          'space station',
          'oxygen',
        ],
        grammar: {
          title: 'Future Simple (will)',
          explanation: 'We can use "will" to predict what we think will happen based on our own opinions and experiences.',
          examples: [
            'I think that in 2150, people will live on Mars.',
            'In 30 years, Earth will be more crowded.',
            'Humans won\'t live on the moon.',
          ],
        },
        pronunciation: {
          title: 'Intonation for Interest/opinion words',
          focus: 'Intonation falls on interest/opinion words and the sound is longer.',
          examples: ['That\'s terrible!', 'That sounds dangerous.'],
        },
        conversationSkill: null, // Not explicitly listed
        activities: [
          { name: 'New Words: Look at pictures, fill in the blanks', type: 'vocabulary' },
          { name: 'Reading: Read magazine article, what is it about?', type: 'reading' },
          { name: 'Reading: Read magazine article, answer questions', type: 'reading' },
          { name: 'Grammar: Fill in the blanks (Future Simple)', type: 'grammar' },
          { name: 'Grammar: Unscramble sentences', type: 'grammar' },
          { name: 'Grammar: Fill in the blanks with words from box', type: 'grammar' },
          { name: 'Pronunciation: Focus on intonation, listen and cross out different sound', type: 'pronunciation' },
          { name: 'Practice: Ask and answer using prompts (Future Simple)', type: 'speaking' },
          { name: 'Speaking: Our Next Home - Make predictions', type: 'speaking' },
        ],
      },
      {
        id: 'unit-6-lesson-2',
        title: 'Lesson 2',
        objectives: [
          'Talk about possible UFO and alien sightings in the past',
          'Use Past Continuous and Past Simple',
        ],
        newWords: [
          'UFOs',
          'flying saucers',
          'disk-shaped',
          'appeared',
          'strange',
          'disappeared',
          'aliens',
          'huge',
          'tiny',
          'terrified',
        ],
        grammar: {
          title: 'Past Continuous and Past Simple',
          explanation: 'We use this to describe an action that continued for a period of time in the past. We often use it to introduce a story, then use the Past Simple to show the main event that interrupted the continuous action.',
          examples: [
            'I was doing my homework when suddenly I heard a loud noise outside.',
            'We were walking home when we saw a strange light in the sky.',
          ],
        },
        pronunciation: {
          title: 'Sound changes for "...-ing..."',
          focus: '"...-ing..." often sounds like /ɪn/.',
          examples: ['I was walking through the forest.', 'What were they doing?'],
        },
        conversationSkill: {
          title: 'Showing interest',
          phrases: ['That\'s (strange).', 'That sounds (scary).'],
        },
        activities: [
          { name: 'New Words: Read text, number definitions', type: 'vocabulary' },
          { name: 'Listening: Two interviews, how people felt, fill in blanks', type: 'listening' },
          { name: 'Grammar: Fill in the blank (Past Continuous and Past Simple)', type: 'grammar' },
          { name: 'Grammar: Fill in the blanks with words from box', type: 'grammar' },
          { name: 'Grammar: Write sentences using prompts and "when"', type: 'grammar' },
          { name: 'Pronunciation: Focus on sound changes, listen and cross out different sound', type: 'pronunciation' },
          { name: 'Practice: Practice conversation (Past Continuous and Past Simple)', type: 'speaking' },
          { name: 'Speaking: Alien and UFO Sightings - Interview', type: 'speaking' },
        ],
      },
      {
        id: 'unit-6-lesson-3',
        title: 'Lesson 3',
        objectives: [
          'Talk about seeing UFOs and aliens',
          'Write a story about seeing visitors from another planet',
        ],
        newWords: [], // No new words explicitly listed for Lesson 3
        grammar: null, // No new grammar explicitly listed for Lesson 3, focuses on writing skill
        pronunciation: null, // No new pronunciation explicitly listed for Lesson 3
        conversationSkill: null, // Not explicitly listed
        writingSkill: {
          title: 'Writing narrative passages',
          guidelines: [
            'Start by saying the main thing that your story is about.',
            'Introduce the situation and main characters.',
            'Write the events of the story in the order that they happened. Add details about what you saw, heard, and felt.',
            'End the story by giving your feelings or opinions about what happened in the story.',
          ],
        },
        activities: [
          { name: 'Reading: Read blog post, do Andy and brother agree?', type: 'reading' },
          { name: 'Reading: Read blog post, True/False/Doesn\'t say', type: 'reading' },
          { name: 'Writing: Read about writing skill, underline descriptive sentences', type: 'writing' },
          { name: 'Writing: Reorder the narrative passage', type: 'writing' },
          { name: 'Speaking: Strange Visitor from Another Planet - Discuss UFOs and aliens', type: 'speaking' },
          { name: 'Speaking: Strange Visitor from Another Planet - Plan a story', type: 'speaking' },
          { name: 'Writing: Write a narrative passage (80-100 words)', type: 'writing' },
        ],
      },
    ],
  },
  {
    id: 'unit-7',
    title: 'Unit 7: Teens',
    lessons: [
      {
        id: 'unit-7-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Talk about dreams and dream jobs',
          'Use possessive pronouns',
        ],
        newWords: [
          'dream',
          'director',
          'vlogger',
          'musician',
          'game designer',
          'veterinarian',
          'dentist',
          'engineer',
          'journalist',
          'flight attendant',
        ],
        grammar: {
          title: 'Possessive pronouns',
          explanation: 'We can use possessive pronouns (mine, yours, his, hers, ours, and theirs) to replace words when talking about things or ideas that belong to people. These ideas can be opinions, plans, and dreams.',
          examples: [
            'My dream is to be a doctor. What\'s yours?',
            'Mine is to become a game designer.',
          ],
        },
        pronunciation: {
          title: '/iː/ sound',
          focus: 'Focus on the /iː/ sound.',
          examples: ['dream', 'be', 'teacher'],
        },
        conversationSkill: {
          title: 'Responding to ideas',
          phrases: ['That\'s a (good) idea.', 'That sounds (great).'],
        },
        activities: [
          { name: 'New Words: Look at pictures, fill in the blanks', type: 'vocabulary' },
          { name: 'Listening: Margaret talking to her mother, dream come true?, fill in blanks', type: 'listening' },
          { name: 'Grammar: Fill in the blanks (possessive pronouns)', type: 'grammar' },
          { name: 'Grammar: Rewrite underlined parts using possessive pronouns', type: 'grammar' },
          { name: 'Pronunciation: Focus on /iː/ sound, listen and cross out different sound', type: 'pronunciation' },
          { name: 'Practice: Practice conversation (dream jobs)', type: 'speaking' },
          { name: 'Speaking: What is your dream job? - Survey', type: 'speaking' },
        ],
      },
      {
        id: 'unit-7-lesson-2',
        title: 'Lesson 2',
        objectives: [
          'Report how teen celebrities live',
          'Use reported speech for statements',
        ],
        newWords: [
          'celebrity',
          'millionaire',
          'mansion',
          'home theater',
          'sports cars',
          'helicopter',
          'jet',
          'yacht',
        ],
        grammar: {
          title: 'Reported speech for statements',
          explanation: 'We can use reported speech to repeat what people said in the past in our own words. We usually begin with subject + said (that) or subject + told + object (that). We often change Present Simple to Past Simple, and "can" to "could". We also change pronouns and possessive adjectives.',
          examples: [
            'Jane said she had a helicopter and a mansion.',
            'He told me he couldn\'t sing.',
          ],
        },
        pronunciation: {
          title: 'Final /d/ sound',
          focus: 'Focus on the final /d/ sound.',
          examples: ['reported', 'told', 'said'],
        },
        conversationSkill: null, // Not explicitly listed
        activities: [
          { name: 'New Words: Match underlined words to pictures', type: 'vocabulary' },
          { name: 'Reading: Read article about TJ Rockwilder, does he live like normal teen?, circle answers', type: 'reading' },
          { name: 'Grammar: Fill in the blanks (reported speech)', type: 'grammar' },
          { name: 'Grammar: Complete sentences to report what people said', type: 'grammar' },
          { name: 'Pronunciation: Focus on final /d/ sound, listen and circle word', type: 'pronunciation' },
          { name: 'Practice: Ask and answer about what people said using reported speech', type: 'speaking' },
          { name: 'Speaking: Reporting an Interview with a Teenage Celebrity', type: 'speaking' },
        ],
      },
      {
        id: 'unit-7-lesson-3',
        title: 'Lesson 3',
        objectives: [
          'Talk about problems teens have where you live',
          'Write a passage about a problem teenagers have',
        ],
        newWords: [], // No new words explicitly listed for Lesson 3
        grammar: null, // No new grammar explicitly listed for Lesson 3
        pronunciation: null, // No new pronunciation explicitly listed for Lesson 3
        conversationSkill: null, // Not explicitly listed
        writingSkill: {
          title: 'Writing problem and solution passages',
          guidelines: [
            'Introduce the problem.',
            'Explain the problem in detail. You can talk about its causes and/or effects.',
            'Give solutions and explain why they work.',
            'Summarize your main points and say how your solutions will solve the problem.',
          ],
        },
        activities: [
          { name: 'Reading: Read Alex\'s passage about stress, main cause', type: 'reading' },
          { name: 'Reading: Read Alex\'s passage, answer questions', type: 'reading' },
          { name: 'Writing: Read about writing skill, how many causes/solutions?', type: 'writing' },
          { name: 'Writing: Read sentences, write P for problem or S for solution', type: 'writing' },
          { name: 'Speaking: The Biggest Problems for Teenagers - Discuss problems', type: 'speaking' },
          { name: 'Speaking: The Biggest Problems for Teenagers - Choose problem, discuss points', type: 'speaking' },
          { name: 'Writing: Write a problem and solution passage (80-100 words)', type: 'writing' },
        ],
      },
    ],
  },
  {
    id: 'unit-8',
    title: 'Unit 8: Traditions of Ethnic Groups in Vietnam',
    lessons: [
      {
        id: 'unit-8-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Talk about the culture of ethnic groups in Vietnam',
          'Use articles',
        ],
        newWords: [
          'headscarf',
          'pottery',
          'embroidery',
          'cloth',
          'basket',
          'ethnic',
          'silver',
          'pattern',
          'product',
        ],
        grammar: {
          title: 'Articles (the, a/an, zero article)',
          explanation: 'We can use the definite article (the) when our listener/reader knows the particular person, people, or thing(s) we\'re talking about, or when there is only one of that thing. We can use the indefinite article (a/an) when we talk about one thing or one member of a group of things. We use the zero article (Ø) when we talk about things in general or when we use names of people and places.',
          examples: [
            'The Chăm people have a traditional dance.',
            'The M\'Nông people in (Ø) Đắk Nông Province have lots of (Ø) interesting folk tales.',
          ],
        },
        pronunciation: {
          title: 'Word stress for two-syllable adjectives',
          focus: 'Stress the first syllable for most two-syllable adjectives.',
          examples: ['ethnic', 'silver', 'shiny'],
        },
        conversationSkill: null, // Not explicitly listed
        activities: [
          { name: 'New Words: Match words with pictures', type: 'vocabulary' },
          { name: 'New Words: Fill in the blanks with correct words', type: 'vocabulary' },
          { name: 'Reading: Read article about Chăm people, main topic', type: 'reading' },
          { name: 'Reading: Read article, circle best fit for blank, fill in blanks', type: 'reading' },
          { name: 'Reading: Read article, similarities and differences', type: 'reading' },
          { name: 'Grammar: Fill in the blanks (articles)', type: 'grammar' },
          { name: 'Grammar: Unscramble sentences', type: 'grammar' },
          { name: 'Grammar: Fill in the blanks with a, an, the, or zero article', type: 'grammar' },
          { name: 'Pronunciation: Focus on word stress, listen and cross out different stress', type: 'pronunciation' },
          { name: 'Practice: Practice conversation (articles)', type: 'speaking' },
          { name: 'Speaking: The People of Vietnam - Ask and complete notes', type: 'speaking' },
        ],
      },
      {
        id: 'unit-8-lesson-2',
        title: 'Lesson 2',
        objectives: [
          'Report a conversation with an ethnic minority about crafts, food, and culture',
          'Use reported speech for questions',
        ],
        newWords: [
          'blouse',
          'apron',
          'sticky rice',
          'steamed',
          'utensils',
          'corn',
        ],
        grammar: {
          title: 'Reported speech for questions',
          explanation: 'We can use reported speech to say or repeat questions that someone asked before the time of speaking. To report a Wh-question: Speaker + asked + listener + Wh-question (in a past statement form). To report a Yes/No question: Speaker + asked + listener + if/whether + Yes/No question (in a past statement form).',
          examples: [
            'I asked him what food he liked best.',
            'I asked her if she had any brothers or sisters.',
          ],
        },
        pronunciation: {
          title: '/oʊ/ sound',
          focus: 'Focus on the sound /oʊ/.',
          examples: ['grow', 'sewing', 'oh'],
        },
        conversationSkill: {
          title: 'Showing interest to get more information',
          phrases: ['Oh?', 'And?'],
        },
        activities: [
          { name: 'New Words: Look at pictures, fill in the blanks', type: 'vocabulary' },
          { name: 'Listening: Sarah telling John about vacation, John\'s opinion, circle correct answer', type: 'listening' },
          { name: 'Grammar: Fill in the blanks (reported speech for questions)', type: 'grammar' },
          { name: 'Grammar: Circle correct words (reported speech for questions)', type: 'grammar' },
          { name: 'Grammar: Complete sentences to report questions', type: 'grammar' },
          { name: 'Pronunciation: Focus on /oʊ/ sound, listen and cross out different sound', type: 'pronunciation' },
          { name: 'Practice: Report questions and answers', type: 'speaking' },
          { name: 'Speaking: Meeting Someone Interesting - Tell friend about vacation', type: 'speaking' },
        ],
      },
      {
        id: 'unit-8-lesson-3',
        title: 'Lesson 3',
        objectives: [
          'Talk about fun things to do at ethnic villages in Vietnam',
          'Write a passage about a trip to an ethnic village in Vietnam',
        ],
        newWords: [], // No new words explicitly listed for Lesson 3
        grammar: null, // No new grammar explicitly listed for Lesson 3
        pronunciation: null, // No new pronunciation explicitly listed for Lesson 3
        conversationSkill: null, // Not explicitly listed
        writingSkill: {
          title: 'Giving supporting information',
          guidelines: [
            'Facts - give true information to support the main point. The information answers questions like who, what, when,...?',
            'Examples - give specific examples to support the main point',
            'Opinions - give your personal opinions to help support the main point',
          ],
        },
        activities: [
          { name: 'Reading: Read Lan\'s passage, choose best topic sentence', type: 'reading' },
          { name: 'Reading: Read Lan\'s passage, answer questions', type: 'reading' },
          { name: 'Writing: Read about writing skill, underline facts, examples, opinions', type: 'writing' },
          { name: 'Writing: Read topic sentence and supporting information, write F/E/O', type: 'writing' },
          { name: 'Speaking: Trips to Ethnic Villages in Vietnam - Ask and take notes', type: 'speaking' },
          { name: 'Writing: Write a passage about one of the trips (80-100 words)', type: 'writing' },
        ],
      },
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
