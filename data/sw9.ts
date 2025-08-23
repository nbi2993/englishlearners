import { CurriculumLevel, Unit, Lesson, VocabularyItem, GrammarPoint, Activity } from '../types';

// Raw curriculum data for "iLearn Smart World 9"
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
          'Use to-infinitives (for purpose) to give the purpose of study methods',
          'Use phrasal verbs to describe study methods',
        ],
        newWords: [
          'turn on',
          'method',
          'look for',
          'come across',
          'go over',
          'note down',
          'subtitles',
          'lyrics',
        ],
        grammar: {
          title: 'To-infinitives and Phrasal verbs',
          explanation: 'We can use to-infinitives to express the purpose of something. A phrasal verb is a verb combined with a particle (an adverb or a preposition or both). The meaning of a phrasal verb is different from each part in it. Some phrasal verbs are separable, some are inseparable.',
          examples: [
            'I read a lot in English to improve my skills.',
            'Look up the word if you don\'t know the meaning.',
            'Can you turn the subtitles on?',
            'I came across a great English website.',
          ],
        },
        pronunciation: {
          title: 'Rhythm: Stress content words in a sentence',
          focus: 'Stress content words in a sentence.',
          examples: [
            'I read the lyrics to understand the song.',
            'I watch lots of movies to learn new words.',
          ],
        },
        conversationSkill: null, // Not explicitly listed for Lesson 1
        activities: [
          { name: 'New Words: Read sentences, match words to definitions', type: 'vocabulary' },
          { name: 'Reading: Read online article, fill in the blanks', type: 'reading' },
          { name: 'Grammar: Circle correct words (Phrasal verbs)', type: 'grammar' },
          { name: 'Grammar: Match actions to purposes, write sentences', type: 'grammar' },
          { name: 'Pronunciation: Listen and cross out sentence that doesn\'t follow rhythm rule', type: 'pronunciation' },
          { name: 'Practice: Ask and answer about English study methods', type: 'speaking' },
          { name: 'Speaking: Fun Study Methods', type: 'speaking' },
        ],
      },
      {
        id: 'unit-1-lesson-2',
        title: 'Lesson 2',
        objectives: [
          'Discuss why you are learning English',
          'Use adverbial clauses and phrases of reason to explain why you are studying English',
        ],
        newWords: [
          'essential',
          'international',
          'overseas',
          'foreign',
          'worldwide',
          'opportunity',
          'content',
          'career',
        ],
        grammar: {
          title: 'Adverbial clauses/phrases of reason',
          explanation: 'These clauses and phrases explain why something happens. They can be introduced by as/since/because + clause or because of + noun phrase.',
          examples: [
            'My English improved because I practiced a lot.',
            'I\'m studying English because of the opportunities it will give me.',
          ],
        },
        pronunciation: {
          title: 'Sound changes: Contraction "will"',
          focus: '"... will..." is often contracted to "...I\'ll...". "...I\'ll..." sounds like /aɪl/.',
          examples: [
            'I\'ll earn more money.',
            'I\'ll improve quickly.',
          ],
        },
        conversationSkill: {
          title: 'Asking for a reason',
          phrases: ['Really? Why?', 'Why do you think so?'],
        },
        activities: [
          { name: 'New Words: Read definitions, fill in the blanks', type: 'vocabulary' },
          { name: 'Listening: Two friends talking about learning English, fill in the blanks', type: 'listening' },
          { name: 'Grammar: Fill in the blanks with as/since/because or because of', type: 'grammar' },
          { name: 'Grammar: Write replies using as/since/because or because of', type: 'grammar' },
          { name: 'Pronunciation: Listen and cross out sentence that doesn\'t follow sound change rule', type: 'pronunciation' },
          { name: 'Practice: Tell your partner why you are learning English', type: 'speaking' },
          { name: 'Speaking: Why Are You Learning English?', type: 'speaking' },
        ],
      },
      {
        id: 'unit-1-lesson-3',
        title: 'Lesson 3',
        objectives: [
          'Talk about reasons for doing different activities in English',
          'Write a reply email giving advice to a friend',
        ],
        newWords: [], // No new words explicitly listed for Lesson 3
        grammar: null, // No new grammar explicitly listed for Lesson 3
        pronunciation: null, // No new pronunciation explicitly listed for Lesson 3
        conversationSkill: null, // Not explicitly listed
        writingSkill: {
          title: 'Using sequence words to organize your writing',
          guidelines: [
            'To show the order or importance of ideas, you can use the ordinal numbers first, second, third,... and the adverb finally.',
            'Use them at the beginning of a sentence and write a comma after them.',
          ],
        },
        activities: [
          { name: 'Reading: Read email, choose best subject line', type: 'reading' },
          { name: 'Reading: Read email, choose correct answers', type: 'reading' },
          { name: 'Writing: Read about writing skill, circle sequence words', type: 'writing' },
          { name: 'Writing: Put sentences in order, write sequence words', type: 'writing' },
          { name: 'Speaking: Discuss fun activities to practice English', type: 'speaking' },
          { name: 'Speaking: Choose activities, decide order of importance', type: 'speaking' },
          { name: 'Writing: Write an email to your pen pal (100-120 words)', type: 'writing' },
        ],
      },
    ],
  },
  {
    id: 'unit-2',
    title: 'Unit 2: Life in the Past',
    lessons: [
      {
        id: 'unit-2-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Discuss family traditions and customs in the past and now',
          'Use "would" for repeated past actions',
        ],
        newWords: [
          'nuclear family',
          'relatives',
          'single',
          'extended family',
          'house husband',
          'generation',
          'breadwinner',
          'marriage',
          'divorced',
          'housewife',
        ],
        grammar: {
          title: '"Would"',
          explanation: 'We can use "would" to talk about repeated past actions that don\'t happen anymore. We need to give a specific time or occasion before or after the repeated action. We can use adverbs of frequency after "would". We don\'t use "would" for facts, states, or things people did most of the time, at a particular time, or only once; in these cases, we use the Past Simple.',
          examples: [
            'When I was a kid, I would walk home with my mom.',
            'Back then, we would often help cook and clean.',
            'He was a farmer. (Past state - use Past Simple)',
          ],
        },
        pronunciation: {
          title: 'Sounds: /ɪ/ and /iː/',
          focus: 'Focus on the /ɪ/ and /iː/ sounds.',
          examples: [
            'relative', 'single', 'breadwinner',
            'thirteen', 'Vietnamese', 'families',
          ],
        },
        conversationSkill: null, // Not explicitly listed for Lesson 1
        activities: [
          { name: 'New Words: Match underlined words with definitions', type: 'vocabulary' },
          { name: 'Reading: Read interview, main discussion topic', type: 'reading' },
          { name: 'Reading: Read interview, True/False/Doesn\'t say', type: 'reading' },
          { name: 'Grammar: Unscramble sentences (would)', type: 'grammar' },
          { name: 'Grammar: Complete sentences using "would" or Past Simple', type: 'grammar' },
          { name: 'Pronunciation: Listen and circle words with /ɪ/ or /iː/ sounds', type: 'pronunciation' },
          { name: 'Practice: Talk about memories of family life', type: 'speaking' },
          { name: 'Speaking: Family Now and Then', type: 'speaking' },
        ],
      },
      {
        id: 'unit-2-lesson-2',
        title: 'Lesson 2',
        objectives: [
          'Talk about memorable days in the past',
          'Use "used to" for past situations',
        ],
        newWords: [
          'bake',
          'sketch',
          'tuk-tuk',
          'clay pot',
          'stall',
          'nephew',
          'niece',
          'cottage',
        ],
        grammar: {
          title: '"Used to"',
          explanation: 'We can use "used to" to express a past situation or state (but no longer existing) or a repeated past action (but no longer continuing). We use "used to", not "would", for past states. "Used to" usually comes first to set context when used with "would".',
          examples: [
            'She used to have long hair.',
            'I used to play tennis every weekend.',
            'I used to live in London. (NOT: I would live in London.)',
          ],
        },
        pronunciation: {
          title: 'Intonation: Exclamations',
          focus: 'Intonation for exclamations usually falls.',
          examples: [
            'That sounds awesome!',
            'Lucky you!',
          ],
        },
        conversationSkill: {
          title: 'Showing interest',
          phrases: ['Lucky you!', 'That sounds (awesome).', 'Oh, I\'d love to hear (more) about it!'],
        },
        activities: [
          { name: 'New Words: Read words and definitions, match with pictures', type: 'vocabulary' },
          { name: 'Listening: Grandfather talking to granddaughter, how he feels, fill in blanks', type: 'listening' },
          { name: 'Grammar: Underline mistakes and write correct words ("used to")', type: 'grammar' },
          { name: 'Grammar: Write sentences using "used to" or "would"', type: 'grammar' },
          { name: 'Pronunciation: Listen and cross out sentence that doesn\'t follow intonation rule', type: 'pronunciation' },
          { name: 'Practice: Practice conversations with pictures and texts', type: 'speaking' },
          { name: 'Speaking: A Memorable Day', type: 'speaking' },
        ],
      },
      {
        id: 'unit-2-lesson-3',
        title: 'Lesson 3',
        objectives: [
          'Talk about the life of a family member',
          'Write about the life of a family member',
        ],
        newWords: [], // No new words explicitly listed for Lesson 3
        grammar: null, // No new grammar explicitly listed for Lesson 3
        pronunciation: null, // No new pronunciation explicitly listed for Lesson 3
        conversationSkill: null, // Not explicitly listed
        writingSkill: {
          title: 'Using time connectors',
          guidelines: [
            'To show when an event happened in relation to another event, we can use afterward, meanwhile, and eventually.',
            'We often use them at the beginning of a sentence (with a comma after) or before the main verb.',
          ],
        },
        activities: [
          { name: 'Reading: Read passage about Lan\'s grandmother, lesson learned', type: 'reading' },
          { name: 'Reading: Read passage, choose correct answers', type: 'reading' },
          { name: 'Writing: Read about writing skill, underline connectors', type: 'writing' },
          { name: 'Writing: Write sentences using prompts (time connectors)', type: 'writing' },
          { name: 'Speaking: The Life of My Family Member', type: 'speaking' },
          { name: 'Writing: Write a passage about the life of a family member (100-120 words)', type: 'writing' },
        ],
      },
    ],
  },
  {
    id: 'unit-3',
    title: 'Unit 3: Living Environment',
    lessons: [
      {
        id: 'unit-3-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Describe features of a smart house',
          'Use defining relative clauses with relative pronouns to talk about features of homes',
        ],
        newWords: [
          'furniture',
          'appliance',
          'system',
          'elevator',
          'sensors',
          'solar panels',
          'monitor',
          'voice assistant',
        ],
        grammar: {
          title: 'Defining relative clauses with relative pronouns',
          explanation: 'We can use defining relative clauses with relative pronouns (that, who, which, whose, whom) to give key information about the noun before them. This information is essential for understanding the sentence.',
          examples: [
            'This is a great home for families that/who like swimming.',
            'There is a smart garden that/which helps your plants grow better.',
            'This home is great for people whose children are young.',
          ],
        },
        pronunciation: {
          title: 'Sound changes/Rhythm: "...that can..." /ðækən/, "...that care..." /ðækɛər/',
          focus: 'Focus on the sound changes for "...that can..." and "...that care...".',
          examples: [
            'People that care about the environment should live here.',
            'Our house has walls that can move.',
          ],
        },
        conversationSkill: null, // Not explicitly listed for Lesson 1
        activities: [
          { name: 'New Words: Read sentences, match words with definitions', type: 'vocabulary' },
          { name: 'Reading: Read article about houses, choose best title', type: 'reading' },
          { name: 'Reading: Read article, complete the table', type: 'reading' },
          { name: 'Grammar: Circle who, whose, or which', type: 'grammar' },
          { name: 'Grammar: Combine sentences using relative clauses', type: 'grammar' },
          { name: 'Pronunciation: Listen and cross out sentence that doesn\'t follow sound change rule', type: 'pronunciation' },
          { name: 'Practice: Talk about smart homes', type: 'speaking' },
          { name: 'Speaking: A Cool and Smart House', type: 'speaking' },
        ],
      },
      {
        id: 'unit-3-lesson-2',
        title: 'Lesson 2',
        objectives: [
          'Talk about ways you would like your living environment to be different',
          'Use "wish" with the Past Simple to say what you want to change where you live',
        ],
        newWords: [
          'bunk beds',
          'neighborhood',
          'curtain',
          'nearby',
          'spa',
          'flat screen',
          'air conditioner',
          'game console',
        ],
        grammar: {
          title: '"Wish" with the Past Simple',
          explanation: 'We can use "wish" with the Past Simple to express a wish for a thing/situation that is not real in the present. We can use was/wasn\'t or were/weren\'t after I/he/she/it/singular noun.',
          examples: [
            'I wish my house was closer to the park.',
            'They wish their neighbors weren\'t noisy.',
            'He wishes it wasn\'t/weren\'t so boring in his neighborhood.',
          ],
        },
        pronunciation: {
          title: 'Sounds: /aɪ/',
          focus: 'Focus on the /aɪ/ sound.',
          examples: [
            'crime', 'nearby', 'like',
          ],
        },
        conversationSkill: {
          title: 'Asking the same question',
          phrases: ['What about yours?', 'What\'s yours like?', 'And you?'],
        },
        activities: [
          { name: 'New Words: Read definitions, fill in the blanks', type: 'vocabulary' },
          { name: 'Listening: Lisa talking to her friend about her home, how she feels, True/False', type: 'listening' },
          { name: 'Grammar: Fill in the blanks with correct verb form ("wish")', type: 'grammar' },
          { name: 'Grammar: Write sentences about what each person wishes', type: 'grammar' },
          { name: 'Pronunciation: Listen and circle words with /aɪ/ sound', type: 'pronunciation' },
          { name: 'Practice: Make sentences using pictures and prompts', type: 'speaking' },
          { name: 'Speaking: What Would You Change?', type: 'speaking' },
        ],
      },
      {
        id: 'unit-3-lesson-3',
        title: 'Lesson 3',
        objectives: [
          'Talk about your dream house',
          'Write a paragraph about your dream house',
        ],
        newWords: [], // No new words explicitly listed for Lesson 3
        grammar: null, // No new grammar explicitly listed for Lesson 3
        pronunciation: null, // No new pronunciation explicitly listed for Lesson 3
        conversationSkill: null, // Not explicitly listed
        writingSkill: {
          title: 'Using parallel structures',
          guidelines: [
            'Parallel structures are when you use the same pattern of words or phrases to show that two or more ideas have the same level of importance.',
            'We often use them when listing words in a series to avoid clunky sentences.',
          ],
        },
        activities: [
          { name: 'Reading: Read Alex\'s blog, main topic', type: 'reading' },
          { name: 'Reading: Read Alex\'s blog, choose correct answers', type: 'reading' },
          { name: 'Writing: Read about writing skill, underline parallel structures, write part of speech', type: 'writing' },
          { name: 'Writing: Rewrite underlined parts using parallel structures', type: 'writing' },
          { name: 'Speaking: My Dream House', type: 'speaking' },
          { name: 'Writing: Write a paragraph about your dream house (100-120 words)', type: 'writing' },
        ],
      },
    ],
  },
  {
    id: 'unit-4',
    title: 'Unit 4: Tourism',
    lessons: [
      {
        id: 'unit-4-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Give and discuss travel suggestions',
          'Use reported speech for suggestions about a vacation',
        ],
        newWords: [
          'pastry',
          'dumpling',
          'bakery',
          'monument',
          'socket adapter',
          'fanny pack',
          'sunblock',
          'hostel',
          'bed and breakfast',
        ],
        grammar: {
          title: 'Reported Speech (Statements, Yes/No, Wh-questions, Suggestions)',
          explanation: 'We can use reported speech to report what someone said. We often need to change the verb tenses, pronouns, possessive adjectives, and some adverbs of place and time. For suggestions, we can use suggested (that) + subject + bare infinitive or said (that) + subject + should/shouldn\'t + bare infinitive.',
          examples: [
            'Sarah said she was going to Paris the following week.',
            'Jane asked Peter if he wanted to go in June.',
            'Sally suggested (that) I go in July.',
          ],
        },
        pronunciation: {
          title: 'Sentence stress: Proper nouns',
          focus: 'Stress the last word in proper nouns with two words.',
          examples: [
            'Eiffel Tower', 'Central Park', 'Hyde Park',
          ],
        },
        conversationSkill: null, // Not explicitly listed for Lesson 1
        activities: [
          { name: 'New Words: Number the pictures, listen and repeat', type: 'vocabulary' },
          { name: 'Reading: Read email, choose best subject line', type: 'reading' },
          { name: 'Reading: Read email, write short answers', type: 'reading' },
          { name: 'Grammar: Complete sentences to report what people said', type: 'grammar' },
          { name: 'Grammar: Report what these people said', type: 'grammar' },
          { name: 'Pronunciation: Listen and cross out word that doesn\'t follow stress rule', type: 'pronunciation' },
          { name: 'Practice: Report the suggestions', type: 'speaking' },
          { name: 'Speaking: Planning a Great Vacation', type: 'speaking' },
        ],
      },
      {
        id: 'unit-4-lesson-2',
        title: 'Lesson 2',
        objectives: [
          'Ask for information and directions',
          'Use "could" for requests and wh-words before to-infinitives to ask for information or instructions',
        ],
        newWords: [
          'SIM card',
          'convenience store',
          'pharmacy',
          'gallery',
          'top up',
          'embassy',
        ],
        grammar: {
          title: '"Could" and wh-words before to-infinitives',
          explanation: 'We can use "could" to make polite requests. We can use it with wh-words and with wh-words + to-infinitives to ask indirect questions. We use tell for information and show for instructions.',
          examples: [
            'Could you tell me when the mall opens?',
            'Could you show me how to get to the museum?',
          ],
        },
        pronunciation: {
          title: 'Rhythm: Function words',
          focus: 'Don\'t stress function words in a sentence.',
          examples: [
            'Could you show me where to buy a SIM card?',
            'Could you show me how to get to the bus station?',
          ],
        },
        conversationSkill: {
          title: 'Holding your turn',
          phrases: ['By the way....', 'Also....'],
        },
        activities: [
          { name: 'New Words: Match underlined words to definitions', type: 'vocabulary' },
          { name: 'Listening: Teenage tourist asking for information, where she\'ll go first, True/False', type: 'listening' },
          { name: 'Grammar: Write questions using prompts', type: 'grammar' },
          { name: 'Grammar: Match questions to responses', type: 'grammar' },
          { name: 'Pronunciation: Listen and cross out sentence that doesn\'t follow rhythm rule', type: 'pronunciation' },
          { name: 'Practice: Practice conversation (asking for directions)', type: 'speaking' },
          { name: 'Speaking: Could You Help Me?', type: 'speaking' },
        ],
      },
      {
        id: 'unit-4-lesson-3',
        title: 'Lesson 3',
        objectives: [
          'Introduce a tourist destination and its people and food',
          'Write a short travel guide',
        ],
        newWords: [], // No new words explicitly listed for Lesson 3
        grammar: null, // No new grammar explicitly listed for Lesson 3
        pronunciation: null, // No new pronunciation explicitly listed for Lesson 3
        conversationSkill: null, // Not explicitly listed
        writingSkill: {
          title: 'Using descriptive language',
          guidelines: [
            'When writing descriptions of a place, person, or thing, we use descriptive language to create a clear image in the mind of our readers.',
            'We can do this by using stronger and more specific adjectives or describing how we see, hear, touch, taste, and smell the things around us.',
          ],
        },
        activities: [
          { name: 'Reading: Read travel guide, match pictures with paragraphs', type: 'reading' },
          { name: 'Reading: Read travel guide, choose correct answers', type: 'reading' },
          { name: 'Writing: Read about writing skill, underline descriptive language', type: 'writing' },
          { name: 'Writing: What other words/phrases can we use to describe things', type: 'writing' },
          { name: 'Writing: Think of examples in your country, use descriptive language', type: 'writing' },
          { name: 'Speaking: Making a Travel Guide', type: 'speaking' },
          { name: 'Writing: Write a short travel guide (100-120 words)', type: 'writing' },
        ],
      },
    ],
  },
  {
    id: 'unit-5',
    title: 'Unit 5: Healthy Living',
    lessons: [
      {
        id: 'unit-5-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Talk about health myths',
          'Use "suggest + gerund" to talk about what health experts say',
        ],
        newWords: [
          'nutrient',
          'calorie',
          'fat',
          'organ',
          'bone',
          'virus',
          'chemical',
          'detox',
        ],
        grammar: {
          title: '"Suggest + gerund"',
          explanation: 'We can use "suggest + gerund" to offer advice. Affirmative: suggest + gerund. Negative: suggest + not + gerund.',
          examples: [
            'The expert suggests focusing on using more calories than you eat to lose fat.',
            'Doctors suggest not drinking too much juice.',
          ],
        },
        pronunciation: {
          title: 'Sounds: /tr/ and /tʃ/',
          focus: 'Focus on the /tr/ and /tʃ/ sounds.',
          examples: [
            'truth', 'nutrient',
            'choose', 'teacher',
          ],
        },
        conversationSkill: null, // Not explicitly listed for Lesson 1
        activities: [
          { name: 'New Words: Read definitions, fill in the blanks', type: 'vocabulary' },
          { name: 'Reading: Read article about health, choose best title', type: 'reading' },
          { name: 'Reading: Read article, True/False/Doesn\'t say', type: 'reading' },
          { name: 'Grammar: Write sentences using prompts (suggest + gerund)', type: 'grammar' },
          { name: 'Grammar: Complete passage with "suggest" and correct verb form', type: 'grammar' },
          { name: 'Pronunciation: Listen and circle words with /tr/ or /tʃ/ sound', type: 'pronunciation' },
          { name: 'Practice: Ask and answer if health tips are myth or fact', type: 'speaking' },
          { name: 'Speaking: Myth or Fact?', type: 'speaking' },
        ],
      },
      {
        id: 'unit-5-lesson-2',
        title: 'Lesson 2',
        objectives: [
          'Talk about common health problems teens have and how to help',
          'Use adverbial clauses and phrases of concession to talk about surprising health facts',
        ],
        newWords: [
          'obese',
          'nourishing',
          'cafeteria',
          'risk',
          'promote',
          'addicted',
          'access',
          'maintain',
        ],
        grammar: {
          title: 'Adverbial clauses/phrases of concession',
          explanation: 'We can use these clauses and phrases (Although/Though + clause, Despite/In spite of + N/V-ing) to introduce an idea that contrasts with the main idea.',
          examples: [
            'Although he knows it\'s bad for him, he eats a lot of candy.',
            'Despite their harm, many people follow detox diets.',
          ],
        },
        pronunciation: {
          title: 'Sentence stress: Adverbial clauses of concession',
          focus: 'Stress the adverbial conjunction in sentences with adverbial clauses of concession.',
          examples: [
            'Although I know exercise is good for me, I\'m just too lazy.',
            'I like to eat chocolate cake though it\'s not good for me.',
          ],
        },
        conversationSkill: {
          title: 'Ending a discussion',
          phrases: ['That\'s all for today. Thank you for your (time).', 'Thanks for the (meeting). It was nice talking to you.'],
        },
        activities: [
          { name: 'New Words: Match underlined words to definitions', type: 'vocabulary' },
          { name: 'Listening: Three teens talking about a problem, whose idea liked most, fill in blanks', type: 'listening' },
          { name: 'Grammar: Fill in the blanks with although/though or despite/in spite of', type: 'grammar' },
          { name: 'Grammar: Choose sentence closest in meaning', type: 'grammar' },
          { name: 'Pronunciation: Listen and cross out sentence that doesn\'t follow stress rule', type: 'pronunciation' },
          { name: 'Practice: Tell your partner about healthy living', type: 'speaking' },
          { name: 'Speaking: Teens\' Health Problems', type: 'speaking' },
        ],
      },
      {
        id: 'unit-5-lesson-3',
        title: 'Lesson 3',
        objectives: [
          'Talk about the main ideas of an article on health',
          'Write a summary of a text',
        ],
        newWords: [], // No new words explicitly listed for Lesson 3
        grammar: null, // No new grammar explicitly listed for Lesson 3
        pronunciation: null, // No new pronunciation explicitly listed for Lesson 3
        conversationSkill: null, // Not explicitly listed
        writingSkill: {
          title: 'Summarizing a text',
          guidelines: [
            'Underline the main ideas and put them into groups. Use the paragraph titles to help you.',
            'Give each group of ideas a heading. Make the original headings shorter or summarize the main ideas into headings.',
            'Organize your writing in the same order. Follow the order of the information in the text you are summarizing.',
            'Write an introduction (and a conclusion) for your summary. Use your own words and write a conclusion if the original text has one.',
            'Write using the same style. Use the same language (formal or informal words).',
          ],
        },
        activities: [
          { name: 'Reading: Read summary, why headings organized this way', type: 'reading' },
          { name: 'Reading: Read summary, choose correct answers', type: 'reading' },
          { name: 'Writing: Read about writing skill, underline main ideas, put into groups', type: 'writing' },
          { name: 'Writing: Label bad summary with problems', type: 'writing' },
          { name: 'Speaking: Underline main ideas, group ideas, complete table', type: 'speaking' },
          { name: 'Writing: Summarize main information from text (100-120 words)', type: 'writing' },
        ],
      },
    ],
  },
  {
    id: 'unit-6',
    title: 'Unit 6: Natural Wonders',
    lessons: [
      {
        id: 'unit-6-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Describe and compare natural wonders',
          'Use comparative structures with intensifiers to compare natural wonders',
        ],
        newWords: [
          'rainforest',
          'scenic',
          'Mount',
          'formation',
          'spectacular',
          'outcrop',
          'accessible',
          'summit',
        ],
        grammar: {
          title: 'Comparative structures with intensifiers',
          explanation: 'We can use comparative structures to compare two things or people. We can do that with a comparative adjective or (not) as...as. We can use an intensifier (a bit, much, far) before a comparative adjective to emphasize or soften the comparison.',
          examples: [
            'I think Hạ Long Bay is much more beautiful than Mũi Né Beach.',
            'Sơn Đoòng Cave isn\'t as accessible as Én Cave.',
          ],
        },
        pronunciation: {
          title: 'Word stress: Three-syllable adjectives',
          focus: 'Stress the first syllable of most three-syllable adjectives.',
          examples: [
            'interesting', 'difficult', 'natural',
          ],
        },
        conversationSkill: null, // Not explicitly listed for Lesson 1
        activities: [
          { name: 'New Words: Read definitions, fill in the blanks', type: 'vocabulary' },
          { name: 'Reading: Read article about caves, feature NOT mentioned', type: 'reading' },
          { name: 'Reading: Read article, match descriptions to correct cave', type: 'reading' },
          { name: 'Grammar: Fill in the blanks with correct form of adjectives', type: 'grammar' },
          { name: 'Grammar: Look at star ratings, circle intensifier, write sentences', type: 'grammar' },
          { name: 'Pronunciation: Listen and cross out word that doesn\'t follow stress rule', type: 'pronunciation' },
          { name: 'Practice: Discuss natural wonders, decide best for each category', type: 'speaking' },
          { name: 'Speaking: Vietnam\'s Top 5 Natural Wonders', type: 'speaking' },
        ],
      },
      {
        id: 'unit-6-lesson-2',
        title: 'Lesson 2',
        objectives: [
          'Discuss ways to protect and preserve natural wonders',
          'Use "verb + gerund" to discuss ways to protect natural wonders',
        ],
        newWords: [
          'litter',
          'fine',
          'consider',
          'spoil',
          'disturb',
          'hunt',
          'ranger',
          'government',
        ],
        grammar: {
          title: 'Verb + gerund',
          explanation: 'We can use a gerund after some verbs: like, don\'t mind, hate, enjoy, love, prefer, dislike (to express general preference); keep, stop, avoid, consider, suggest, deny, finish, spend (time), etc.',
          examples: [
            'I like bringing food to the park, but I always clean up.',
            'People need to stop hunting wild animals.',
          ],
        },
        pronunciation: {
          title: 'Intonation: Showing contrast',
          focus: 'Intonation for contrasting sentences falls, then rises, then falls again.',
          examples: [
            'That\'s not a bad idea, but I think the police are too busy to work in the national park.',
          ],
        },
        conversationSkill: {
          title: 'Politely disagreeing',
          phrases: ['That\'s not a bad idea, but...', 'I understand what you\'re saying, but...'],
        },
        activities: [
          { name: 'New Words: Read words and definitions, fill in the blanks', type: 'vocabulary' },
          { name: 'Listening: Three teens talking about a problem, whose idea liked most, fill in blanks', type: 'listening' },
          { name: 'Grammar: Write sentences using prompts (verb + gerund)', type: 'grammar' },
          { name: 'Grammar: Complete sentences using a verb and gerund/noun', type: 'grammar' },
          { name: 'Pronunciation: Listen and cross out sentence that doesn\'t follow intonation rule', type: 'pronunciation' },
          { name: 'Practice: Ask and answer about feelings and solutions', type: 'speaking' },
          { name: 'Speaking: To Preserve and Protect', type: 'speaking' },
        ],
      },
      {
        id: 'unit-6-lesson-3',
        title: 'Lesson 3',
        objectives: [
          'Describe and give tourist information about a natural wonder',
          'Write an article about a natural wonder',
        ],
        newWords: [], // No new words explicitly listed for Lesson 3
        grammar: null, // No new grammar explicitly listed for Lesson 3
        pronunciation: null, // No new pronunciation explicitly listed for Lesson 3
        conversationSkill: null, // Not explicitly listed
        writingSkill: {
          title: 'Using non-defining relative clauses to write informative sentences',
          guidelines: [
            'We can add additional information about a subject using non-defining relative clauses.',
            'The relative pronouns/adverbs who, which, when, and where introduce non-defining relative clauses. The clauses are separated from the sentence with commas. We can\'t use the relative pronoun that with non-defining relative clauses.',
          ],
        },
        activities: [
          { name: 'Reading: Read article, choose best heading', type: 'reading' },
          { name: 'Reading: Read article, choose correct answers', type: 'reading' },
          { name: 'Writing: Read about writing skill, underline non-defining relative clauses', type: 'writing' },
          { name: 'Writing: Rewrite sentences using non-defining relative clauses', type: 'writing' },
          { name: 'Speaking: Amazing Places Around the World', type: 'speaking' },
          { name: 'Writing: Write an article about Mount Everest (100-120 words)', type: 'writing' },
        ],
      },
    ],
  },
  {
    id: 'unit-7',
    title: 'Unit 7: Urban Life',
    lessons: [
      {
        id: 'unit-7-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Introduce a story to discuss problems in your city and solutions to them',
          'Use the Past Continuous to introduce context',
        ],
        newWords: [
          'traffic jam',
          'struggle',
          'pedestrians',
          'sidewalks',
          'crosswalk',
          'motorbike accidents',
          'encourage',
          'ban',
        ],
        grammar: {
          title: 'The Past Continuous',
          explanation: 'We can use the Past Continuous to describe: a past action in progress when another action in the Past Simple interrupted it; an action in progress at a specific time in the past; an action in progress for a period of time in the past; two or more actions in progress at the same time in the past.',
          examples: [
            'I was walking to the store when I saw a street festival.',
            'At 8:00 yesterday morning, they were repairing the road.',
            'All yesterday afternoon, the workers were fixing the bridge.',
            'I was waiting for the bus while my friend was complaining about the traffic.',
          ],
        },
        pronunciation: {
          title: 'Sounds: /dʒ/',
          focus: 'Focus on the /dʒ/ sound.',
          examples: [
            'encourage', 'traffic jam',
          ],
        },
        conversationSkill: null, // Not explicitly listed for Lesson 1
        activities: [
          { name: 'New Words: Read sentences, match words to definitions', type: 'vocabulary' },
          { name: 'Reading: Read Lisa\'s blog post, what problems do they solve', type: 'reading' },
          { name: 'Reading: Read Lisa\'s blog post, fill in the blanks', type: 'reading' },
          { name: 'Grammar: Fill in the blanks with correct verb form (Past Continuous)', type: 'grammar' },
          { name: 'Grammar: Write sentences using prompts (Past Continuous)', type: 'grammar' },
          { name: 'Pronunciation: Listen and circle words with /dʒ/ sound', type: 'pronunciation' },
          { name: 'Practice: Practice conversation (Past Continuous)', type: 'speaking' },
          { name: 'Speaking: City Life: Problems and Solutions', type: 'speaking' },
        ],
      },
      {
        id: 'unit-7-lesson-2',
        title: 'Lesson 2',
        objectives: [
          'Describe problems in cities and their future impacts',
          'Use adverbial clauses of result to talk about the outcome of actions in cities',
        ],
        newWords: [
          'rise',
          'drop',
          'homeless',
          'owner',
          'attract',
          'direct',
          'crop',
          'congested',
        ],
        grammar: {
          title: 'Adverbial clauses of result',
          explanation: 'We can use adverbial clauses of result to show the result of an action or situation. They can be introduced by so + adjective/adverb + that or such + noun/noun phrase + that.',
          examples: [
            'The air is becoming so polluted that many people are getting sick.',
            'Air pollution is such a big problem that the government will have to do something.',
          ],
        },
        pronunciation: {
          title: 'Sentence stress: Adverbial clauses of result',
          focus: 'Stress the final word in adverbial clauses of result.',
          examples: [
            'Air pollution is getting so bad that people will start to get sick.',
          ],
        },
        conversationSkill: {
          title: 'Asking for clarification',
          phrases: ['Why would that (help/work)?', 'Sorry, can you explain that? I don\'t understand.'],
        },
        activities: [
          { name: 'New Words: Look at pictures, fill in the blanks', type: 'vocabulary' },
          { name: 'Listening: Two students talking about presentation, main topic, fill in blanks', type: 'listening' },
          { name: 'Grammar: Circle underlined part that needs correction', type: 'grammar' },
          { name: 'Grammar: Rewrite sentences with adverbial clauses of result', type: 'grammar' },
          { name: 'Pronunciation: Listen and cross out sentence that doesn\'t follow stress rule', type: 'pronunciation' },
          { name: 'Practice: Practice conversation (city problems)', type: 'speaking' },
          { name: 'Speaking: Is This Our Future?', type: 'speaking' },
        ],
      },
      {
        id: 'unit-7-lesson-3',
        title: 'Lesson 3',
        objectives: [
          'Talk about problems in a city',
          'Write a passage about problems in a city and their solutions',
        ],
        newWords: [], // No new words explicitly listed for Lesson 3
        grammar: null, // No new grammar explicitly listed for Lesson 3
        pronunciation: null, // No new pronunciation explicitly listed for Lesson 3
        conversationSkill: null, // Not explicitly listed
        writingSkill: {
          title: 'Writing body paragraphs for chain problem and solution passages',
          guidelines: [
            'Introduce the problem.',
            'Give more details about the effect of the problem.',
            'Give a solution to the problem.',
            'In chain problem and solution passages, we only talk about one problem in each body paragraph.',
          ],
        },
        activities: [
          { name: 'Reading: Read passage about Johannesburg, choose best title', type: 'reading' },
          { name: 'Reading: Read passage, choose correct answers', type: 'reading' },
          { name: 'Writing: Read about writing skill, circle introduction of problems, underline solutions', type: 'writing' },
          { name: 'Writing: Read sentences, write P/D/S', type: 'writing' },
          { name: 'Speaking: What\'s Wrong with Our City?', type: 'speaking' },
          { name: 'Writing: Write a problem and solution passage (100-120 words)', type: 'writing' },
        ],
      },
    ],
  },
  {
    id: 'unit-8',
    title: 'Unit 8: Jobs in the Future',
    lessons: [
      {
        id: 'unit-8-lesson-1',
        title: 'Lesson 1',
        objectives: [
          'Talk about how to get jobs in the future',
          'Use First Conditional with modals to give advice',
        ],
        newWords: [
          'plumber',
          'mechanic',
          'psychologist',
          'skincare specialist',
          'tutor',
          'apprenticeship',
          'research',
        ],
        grammar: {
          title: 'First Conditional with modals',
          explanation: 'We use the First Conditional to talk about future situations we believe are real or possible. We normally use will in the main clause, but we can also use a modal verb (can, could, should, must, may, or might) for different purposes (possibility, suggestion, advice, obligation).',
          examples: [
            'You must study hard if you want to be a psychologist.',
            'If you create an account, you can get a free lesson.',
          ],
        },
        pronunciation: {
          title: 'Sounds: Final /r/',
          focus: 'Focus on the final /r/ sound.',
          examples: [
            'plumber', 'tutor', 'doctor',
          ],
        },
        conversationSkill: {
          title: 'Showing thanks',
          phrases: ['Thanks for helping me.', 'I appreciate it.', 'Thank you so much.'],
        },
        activities: [
          { name: 'New Words: Read words and definitions, fill in the blanks', type: 'vocabulary' },
          { name: 'Listening: Teacher and student talking about future jobs, fill in blanks', type: 'listening' },
          { name: 'Grammar: Unscramble sentences (First Conditional with modals)', type: 'grammar' },
          { name: 'Grammar: Write correct modals in gaps', type: 'grammar' },
          { name: 'Pronunciation: Listen and circle words with final /r/ sound', type: 'pronunciation' },
          { name: 'Practice: Give advice and suggestions using pictures and prompts', type: 'speaking' },
          { name: 'Speaking: My Future Job', type: 'speaking' },
        ],
      },
      {
        id: 'unit-8-lesson-2',
        title: 'Lesson 2',
        objectives: [
          'Talk about different kinds of entertainment and media jobs in the future',
          'Use verbs + to-infinitives for future changes',
        ],
        newWords: [
          'innovation',
          'media',
          'video producer',
          'audience',
          'personalized',
          'virtual reality',
          'demand',
          'podcast',
        ],
        grammar: {
          title: 'Verbs + to-infinitives',
          explanation: 'We use to-infinitives after some verbs: aim, expect, decide, hope, plan, want.',
          examples: [
            'We aim to provide our audience with the best movie watching experience.',
            'People expect to see more virtual reality in the future.',
          ],
        },
        pronunciation: {
          title: 'Sound changes: "...can people..." /kæmpi:pl/, "...in media..." /ɪnmi:diə/',
          focus: 'Focus on the sound changes for "...can people..." and "...in media...".',
          examples: [
            'What jobs can people expect to do?',
            'The world of work in media will keep changing.',
          ],
        },
        conversationSkill: null, // Not explicitly listed for Lesson 2
        activities: [
          { name: 'New Words: Read sentences, match underlined words to definitions', type: 'vocabulary' },
          { name: 'Reading: Read article about entertainment and media, main topic', type: 'reading' },
          { name: 'Reading: Read article, answer questions', type: 'reading' },
          { name: 'Grammar: Underline mistakes and write correct words (verbs + to-infinitives)', type: 'grammar' },
          { name: 'Grammar: Complete sentences using phrases from box', type: 'grammar' },
          { name: 'Pronunciation: Listen and cross out sentence that doesn\'t follow sound change rule', type: 'pronunciation' },
          { name: 'Practice: Practice conversation (future changes in media)', type: 'speaking' },
          { name: 'Speaking: The Future of Jobs in Entertainment and Media', type: 'speaking' },
        ],
      },
      {
        id: 'unit-8-lesson-3',
        title: 'Lesson 3',
        objectives: [
          'Talk about popular jobs in the future',
          'Write an article about what jobs will be popular in the future and why',
        ],
        newWords: [], // No new words explicitly listed for Lesson 3
        grammar: null, // No new grammar explicitly listed for Lesson 3
        pronunciation: null, // No new pronunciation explicitly listed for Lesson 3
        conversationSkill: null, // Not explicitly listed
        writingSkill: {
          title: 'Highlighting important ideas and information',
          guidelines: [
            'To highlight important ideas and information from a wider group of information, you should use the following phrases: in particular, especially, and mainly.',
            'These phrases come after the main group of information they are highlighting. They can also go in the middle of a sentence. We separate them from the main sentence with commas.',
          ],
        },
        activities: [
          { name: 'Reading: Read article, choose best title', type: 'reading' },
          { name: 'Reading: Read article, choose correct answers', type: 'reading' },
          { name: 'Writing: Read about writing skill, underline highlighting phrases', type: 'writing' },
          { name: 'Writing: Rewrite sentences to highlight important ideas', type: 'writing' },
          { name: 'Speaking: Discuss popular jobs in the future, highlight examples', type: 'speaking' },
          { name: 'Speaking: Choose two jobs, complete table', type: 'speaking' },
          { name: 'Writing: Write an article about popular jobs in the future (100-120 words)', type: 'writing' },
        ],
      },
    ],
  },
];

const transformLessons = (lessons: any[], unitId: number): Lesson[] => {
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
