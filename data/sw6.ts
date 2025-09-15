import { CurriculumLevel } from '../types';

export const sw6Data: CurriculumLevel = {
    level: 6,
    title: { en: 'i-Learn Smart World 6', vi: 'i-Learn Smart World 6' },
    subtitle: { en: 'Secondary School - Grade 6', vi: 'Trung học cơ sở - Lớp 6' },
    ebookPdfUrl: 'https://drive.google.com/file/d/1d2FOa20bf6nNhl3cASbnlgwSWcWIqX_u/view?usp=sharing',
    units: [
      {
        id: 1,
        title: { en: 'Unit 1: Home', vi: 'Bài 1: Nhà cửa' },
        lessons: [
          {
            id: 60101,
            title: { en: 'Lesson 1', vi: 'Bài học 1' },
            aims: {
              en: ['Ask about people\'s homes', 'Use the Present Simple with Yes/No questions'],
              vi: ['Hỏi về nhà của mọi người', 'Sử dụng thì Hiện tại đơn với câu hỏi Yes/No'],
            },
            vocabulary: [
              { term: 'pool', pronunciation: '/puːl/', vietnamese: 'hồ bơi' },
              { term: 'balcony', pronunciation: '/ˈbælkəni/', vietnamese: 'ban công' },
              { term: 'garage', pronunciation: '/ɡəˈrɑːʒ/', vietnamese: 'nhà để xe' },
              { term: 'yard', pronunciation: '/jɑːrd/', vietnamese: 'sân' },
              { term: 'gym', pronunciation: '/dʒɪm/', vietnamese: 'phòng tập thể dục' },
              { term: 'apartment', pronunciation: '/əˈpɑːrtmənt/', vietnamese: 'căn hộ' },
            ],
            grammar: [
              { title: { en: 'Present Simple', vi: 'Thì Hiện tại đơn' }, explanation: { en: ['We use the Present Simple to talk about things that are facts or are true for a long time.', 'I/You/We/They live in an apartment.', 'He/She/It lives in a house.', 'Do you live in a house? (Yes, I do./No, I don\'t.)', 'Does she live in a house? (Yes, she does./No, she doesn\'t.)'], vi: ['Chúng ta dùng thì Hiện tại đơn để nói về những sự thật hoặc những điều đúng trong một thời gian dài.', 'Tôi/Bạn/Chúng tôi/Họ sống trong một căn hộ.', 'Anh ấy/Cô ấy/Nó sống trong một ngôi nhà.', 'Bạn có sống trong một ngôi nhà không? (Có./Không.)', 'Cô ấy có sống trong một ngôi nhà không? (Có./Không.)'] } },
            ],
            activities: [
              {
                type: 'Warm-up',
                description: {
                  en: ['Look at the pictures of different homes (pool, balcony, etc.). Which one is most similar to your home? Tell a partner.'],
                  vi: ['Nhìn vào các bức tranh về những ngôi nhà khác nhau (hồ bơi, ban công, v.v.). Ngôi nhà nào giống nhà bạn nhất? Hãy nói với bạn cặp của mình.'],
                },
              },
              {
                type: 'Practice',
                description: {
                  en: ['Work in pairs. Ask your partner questions about their home using "Do you live in...?" and "Does your house have...?"'],
                  vi: ['Làm việc theo cặp. Hỏi bạn của bạn về nhà của họ, sử dụng "Do you live in...?" và "Does your house have...?"'],
                },
              },
            ],
          },
          {
            id: 60102,
            title: { en: 'Lesson 2', vi: 'Bài học 2' },
            aims: {
                en: ['Talk about family members and housework', 'Use the Present Simple with Wh-questions'],
                vi: ['Nói về các thành viên trong gia đình và công việc nhà', 'Sử dụng thì Hiện tại đơn với câu hỏi Wh-'],
            },
            vocabulary: [
                { term: 'do the laundry', pronunciation: '/duː ðə ˈlɔːndri/', vietnamese: 'giặt giũ' },
                { term: 'make dinner', pronunciation: '/meɪk ˈdɪnər/', vietnamese: 'nấu bữa tối' },
                { term: 'make the bed', pronunciation: '/meɪk ðə bed/', vietnamese: 'dọn giường' },
                { term: 'do the shopping', pronunciation: '/duː ðə ˈʃɑːpɪŋ/', vietnamese: 'đi mua sắm' },
                { term: 'do the dishes', pronunciation: '/duː ðə ˈdɪʃɪz/', vietnamese: 'rửa chén' },
                { term: 'clean the kitchen', pronunciation: '/kliːn ðə ˈkɪtʃɪn/', vietnamese: 'dọn dẹp nhà bếp' },
            ],
            grammar: [
                { title: { en: 'Present Simple with Wh-questions', vi: 'Thì Hiện tại đơn với câu hỏi Wh-' }, explanation: { en: ['What housework do you do? - I make breakfast.', 'Who does the dishes? - My sister does.'], vi: ['Bạn làm công việc nhà gì? - Tôi làm bữa sáng.', 'Ai rửa chén? - Chị tôi rửa.'] } },
                { title: { en: "Possessive 's", vi: 'Sở hữu cách \'s' }, explanation: { en: ['You can add \'s onto a noun or proper noun to show possession.', 'E.g., Ken\'s father cleans the kitchen.'], vi: ['Bạn có thể thêm \'s vào sau một danh từ hoặc danh từ riêng để thể hiện sự sở hữu.', 'Ví dụ: Bố của Ken dọn dẹp nhà bếp.'] } },
            ],
            activities: [
              {
                type: 'Practice',
                description: {
                  en: ['Complete the sentences about housework using the correct verbs from the vocabulary list.'],
                  vi: ['Hoàn thành các câu về công việc nhà bằng cách sử dụng các động từ đúng từ danh sách từ vựng.'],
                },
              },
              {
                type: 'Wrap-up',
                description: {
                  en: ["Write a short paragraph about the housework you and your family members do. Use the possessive 's. (e.g., My mother cleans the kitchen. My father's job is doing the shopping.)"],
                  vi: ["Viết một đoạn văn ngắn về công việc nhà mà bạn và các thành viên trong gia đình làm. Sử dụng sở hữu cách 's. (Ví dụ: Mẹ tôi dọn dẹp nhà bếp. Công việc của bố tôi là đi mua sắm.)"],
                },
              },
            ],
          },
          {
            id: 60103,
            title: { en: 'Lesson 3: Geography', vi: 'Bài học 3: Địa lý' },
            aims: {
                en: ['Ask about villages, towns, and cities', 'Read a paragraph about a city in Vietnam', 'Write a paragraph about your hometown'],
                vi: ['Hỏi về làng, thị trấn và thành phố', 'Đọc một đoạn văn về một thành phố ở Việt Nam', 'Viết một đoạn văn về quê hương của bạn'],
            },
            vocabulary: [
                { term: 'south', pronunciation: '/saʊθ/', vietnamese: 'phía nam' },
                { term: 'west', pronunciation: '/west/', vietnamese: 'phía tây' },
                { term: 'north', pronunciation: '/nɔːrθ/', vietnamese: 'phía bắc' },
                { term: 'east', pronunciation: '/iːst/', vietnamese: 'phía đông' },
                { term: 'center', pronunciation: '/ˈsentər/', vietnamese: 'trung tâm' },
            ],
            grammar: [],
            activities: [
              {
                type: 'Warm-up',
                description: {
                  en: ['On a map of Vietnam, point to the north, south, east, west, and center.'],
                  vi: ['Trên bản đồ Việt Nam, chỉ ra phía bắc, nam, đông, tây và trung tâm.'],
                },
              },
              {
                type: 'Practice',
                description: {
                  en: ['Write a sentence about a famous city in Vietnam and its location. (e.g., "Hanoi is in the north of Vietnam.")'],
                  vi: ['Viết một câu về một thành phố nổi tiếng ở Việt Nam và vị trí của nó. (ví dụ: "Hà Nội ở phía bắc Việt Nam.")'],
                },
              },
            ],
          }
        ],
      },
      {
        id: 2,
        title: { en: 'Unit 2: School', vi: 'Bài 2: Trường học' },
        lessons: [
            {
                id: 60201,
                title: { en: 'Lesson 1', vi: 'Bài học 1' },
                aims: {
                    en: ["Talk about school subjects you like or don't like", "Use 'and' and 'or' for positive and negative statements", 'Use Possessive Pronouns'],
                    vi: ['Nói về các môn học bạn thích hoặc không thích', 'Sử dụng "and" và "or" cho câu khẳng định và phủ định', 'Sử dụng Đại từ sở hữu'],
                },
                vocabulary: [
                    { term: 'history', pronunciation: '/ˈhɪstəri/', vietnamese: 'lịch sử' },
                    { term: 'P.E. (physical education)', pronunciation: '/ˌpiː ˈiː/', vietnamese: 'thể dục' },
                    { term: 'I.T. (information technology)', pronunciation: '/ˌaɪ ˈtiː/', vietnamese: 'tin học' },
                    { term: 'music', pronunciation: '/ˈmjuːzɪk/', vietnamese: 'âm nhạc' },
                    { term: 'geography', pronunciation: '/dʒiˈɑːɡrəfi/', vietnamese: 'địa lý' },
                    { term: 'literature', pronunciation: '/ˈlɪtərətʃər/', vietnamese: 'văn học' },
                    { term: 'physics', pronunciation: '/ˈfɪzɪks/', vietnamese: 'vật lý' },
                    { term: 'biology', pronunciation: '/baɪˈɑːlədʒi/', vietnamese: 'sinh học' },
                ],
                grammar: [
                    { title: { en: "Using 'and' / 'or'", vi: 'Sử dụng "and" / "or"' }, explanation: { en: ["Use 'and' to join two or more nouns in a positive sentence. (I like math and biology.)", "Use 'or' to join two or more nouns in a negative sentence. (I don't like math or biology.)"], vi: ['Sử dụng "and" để nối hai hoặc nhiều danh từ trong câu khẳng định. (Tôi thích toán và sinh học.)', 'Sử dụng "or" để nối hai hoặc nhiều danh từ trong câu phủ định. (Tôi không thích toán hay sinh học.)'] } },
                    { title: { en: "Possessive Pronouns", vi: 'Đại từ sở hữu' }, explanation: { en: ["Use possessive pronouns (mine/yours) so we don't say the same words again. (My favorite subject's physics. What's yours?)"], vi: ['Sử dụng đại từ sở hữu (của tôi/của bạn) để không phải lặp lại từ. (Môn học yêu thích của tôi là vật lý. Của bạn là gì?)'] } },
                ],
                activities: [
                  {
                    type: 'Practice',
                    description: {
                      en: ["Complete the sentences with 'and' or 'or'. (1. I like history ___ art. 2. He doesn't like physics ___ biology.)"],
                      vi: ["Hoàn thành các câu với 'and' hoặc 'or'. (1. Tôi thích lịch sử ___ nghệ thuật. 2. Anh ấy không thích vật lý ___ sinh học.)"],
                    },
                  },
                  {
                    type: 'Wrap-up',
                    description: {
                      en: ["In pairs, ask and answer about your favorite subjects. Use possessive pronouns. (A: What's your favorite subject? B: Mine is music. What's yours?)"],
                      vi: ["Làm việc theo cặp, hỏi và trả lời về các môn học yêu thích của bạn. Sử dụng đại từ sở hữu. (A: Môn học yêu thích của bạn là gì? B: Của tôi là âm nhạc. Còn của bạn thì sao?)"],
                    },
                  },
                ],
            },
             {
                id: 60202,
                title: { en: 'Lesson 2', vi: 'Bài học 2' },
                aims: {
                    en: ['Talk about school activities', 'Use "like + verb-ing"'],
                    vi: ['Nói về các hoạt động ở trường', 'Sử dụng "like + động từ-ing"'],
                },
                vocabulary: [
                   { term: 'indoor activities', pronunciation: '/ˈɪndɔːr ækˈtɪvətiz/', vietnamese: 'hoạt động trong nhà' },
                   { term: 'outdoor activities', pronunciation: '/ˈaʊtdɔːr ækˈtɪvətiz/', vietnamese: 'hoạt động ngoài trời' },
                   { term: 'arts and crafts', pronunciation: '/ɑːrts ænd kræfts/', vietnamese: 'nghệ thuật và thủ công' },
                   { term: 'drama club', pronunciation: '/ˈdrɑːmə klʌb/', vietnamese: 'câu lạc bộ kịch' },
                   { term: 'sign up', pronunciation: '/saɪn ʌp/', vietnamese: 'đăng ký' },
                ],
                grammar: [
                    { title: { en: 'like + verb-ing', vi: 'like + động từ-ing' }, explanation: { en: ["We use like + verb-ing to talk about things we like to do often. (Do you like reading books?)", "after consonant+e: remove e and replace with -ing (make -> making)", "after consonant+vowel+consonant of one-syllable verbs: double the last consonant and add -ing (swim -> swimming)", "do not double the final consonant when the word ends in w, x, or y (play -> playing)"], vi: ['Chúng ta sử dụng like + động từ-ing để nói về những việc chúng ta thích làm thường xuyên. (Bạn có thích đọc sách không?)', 'sau phụ âm+e: bỏ e và thay bằng -ing (make -> making)', 'sau phụ âm+nguyên âm+phụ âm của động từ một âm tiết: nhân đôi phụ âm cuối và thêm -ing (swim -> swimming)', 'không nhân đôi phụ âm cuối khi từ kết thúc bằng w, x, hoặc y (play -> playing)'] } },
                ],
                activities: [
                  {
                    type: 'Practice',
                    description: {
                      en: ['Change the verbs in brackets into the correct form. (e.g., I like (play) soccer. -> I like playing soccer.)'],
                      vi: ['Chuyển động từ trong ngoặc sang dạng đúng. (ví dụ: I like (play) soccer. -> I like playing soccer.)'],
                    },
                  },
                  {
                    type: 'Wrap-up',
                    description: {
                      en: ['Write down two indoor activities and two outdoor activities you like doing.'],
                      vi: ['Viết ra hai hoạt động trong nhà và hai hoạt động ngoài trời bạn thích làm.'],
                    },
                  },
                ],
            },
            {
                id: 60203,
                title: { en: 'Lesson 3: Literature', vi: 'Bài học 3: Văn học' },
                aims: {
                    en: ['Talk about different kinds of books', 'Read a book review about a Vietnamese book', 'Write a book review'],
                    vi: ['Nói về các loại sách khác nhau', 'Đọc bài bình luận về một cuốn sách Việt Nam', 'Viết một bài bình luận sách'],
                },
                vocabulary: [
                   { term: 'fantasy', pronunciation: '/ˈfæntəsi/', vietnamese: 'truyện giả tưởng' },
                   { term: 'novel', pronunciation: '/ˈnɑːvl/', vietnamese: 'tiểu thuyết' },
                   { term: 'adventure', pronunciation: '/ədˈventʃər/', vietnamese: 'phiêu lưu' },
                   { term: 'mystery', pronunciation: '/ˈmɪstəri/', vietnamese: 'bí ẩn' },
                   { term: 'author', pronunciation: '/ˈɔːθər/', vietnamese: 'tác giả' },
                ],
                grammar: [],
                activities: [
                   {
                    type: 'Warm-up',
                    description: {
                      en: ['Match the book genres (fantasy, adventure, etc.) to their descriptions.'],
                      vi: ['Nối các thể loại sách (giả tưởng, phiêu lưu, v.v.) với mô tả của chúng.'],
                    },
                  },
                  {
                    type: 'Practice',
                    description: {
                      en: ['Ask a partner: "What kind of books do you like?" and "Who is your favorite author?"'],
                      vi: ['Hỏi bạn cặp: "Bạn thích loại sách nào?" và "Tác giả yêu thích của bạn là ai?"'],
                    },
                  },
                ],
            }
        ],
      },
      {
        id: 3,
        title: { en: 'Unit 3: Friends', vi: 'Bài 3: Bạn bè' },
        lessons: [
            {
                id: 60301,
                title: { en: 'Lesson 1', vi: 'Bài học 1' },
                aims: {
                    en: ["Describe someone's personal appearance", "Use the Present Simple and the Present Continuous", "End a friendly conversation"],
                    vi: ['Miêu tả ngoại hình của một người', 'Sử dụng thì Hiện tại đơn và Hiện tại tiếp diễn', 'Kết thúc một cuộc trò chuyện thân mật'],
                },
                vocabulary: [
                   { term: 'tall', pronunciation: '/tɔːl/', vietnamese: 'cao' },
                   { term: 'slim', pronunciation: '/slɪm/', vietnamese: 'mảnh khảnh' },
                   { term: 'glasses', pronunciation: '/ˈɡlæsɪz/', vietnamese: 'kính' },
                   { term: 'red', pronunciation: '/red/', vietnamese: 'màu đỏ' },
                   { term: 'long', pronunciation: '/lɔːŋ/', vietnamese: 'dài' },
                   { term: 'blond', pronunciation: '/blɑːnd/', vietnamese: 'vàng hoe (tóc)' },
                   { term: 'short', pronunciation: '/ʃɔːrt/', vietnamese: 'ngắn, thấp' },
                   { term: 'blue', pronunciation: '/bluː/', vietnamese: 'màu xanh da trời' },
                ],
                grammar: [
                    { title: { en: 'Present Continuous', vi: 'Thì Hiện tại tiếp diễn' }, explanation: { en: ["We use the Present Continuous to talk about ongoing actions. We use the verb be + verb-ing.", "I am wearing a green dress.", "He/She is wearing a yellow shirt.", "What are you wearing? (Yes, she is./No, she isn't.)"], vi: ['Chúng ta dùng thì Hiện tại tiếp diễn để nói về các hành động đang diễn ra. Chúng ta dùng động từ be + động từ-ing.', 'Tôi đang mặc một chiếc váy màu xanh.', 'Anh ấy/Cô ấy đang mặc một chiếc áo sơ mi màu vàng.', 'Bạn đang mặc gì? (Vâng, cô ấy đang mặc./Không, cô ấy không mặc.)'] } },
                ],
                activities: [
                   {
                    type: 'Practice',
                    description: {
                      en: ['Look at a picture of a person. Describe what they are wearing using the Present Continuous. (e.g., "She is wearing a blue T-shirt.")'],
                      vi: ['Nhìn vào một bức tranh của một người. Miêu tả họ đang mặc gì bằng cách sử dụng thì Hiện tại Tiếp diễn. (ví dụ: "Cô ấy đang mặc một chiếc áo phông màu xanh.")'],
                    },
                  },
                   {
                    type: 'Wrap-up',
                    description: {
                      en: ["Write three sentences describing a classmate's appearance. (e.g., 'He is tall. He has short hair.')"],
                      vi: ["Viết ba câu miêu tả ngoại hình của một bạn cùng lớp. (ví dụ: 'Bạn ấy cao. Bạn ấy có tóc ngắn.')"],
                    },
                  },
                ],
            }
        ]
      },
      {
        id: 4,
        title: { en: 'Unit 4: Festivals and Free Time', vi: 'Bài 4: Lễ hội và Thời gian rảnh' },
        lessons: [
            {
                id: 60401,
                title: { en: 'Lesson 1', vi: 'Bài học 1' },
                aims: {
                    en: ["Talk about how often you do activities", "Use adverbs of frequency"],
                    vi: ['Nói về tần suất bạn làm các hoạt động', 'Sử dụng trạng từ chỉ tần suất'],
                },
                vocabulary: [
                   { term: 'often', pronunciation: '/ˈɔːfn/', vietnamese: 'thường' },
                   { term: 'never', pronunciation: '/ˈnevər/', vietnamese: 'không bao giờ' },
                   { term: 'sometimes', pronunciation: '/ˈsʌmtaɪmz/', vietnamese: 'thỉnh thoảng' },
                   { term: 'always', pronunciation: '/ˈɔːlweɪz/', vietnamese: 'luôn luôn' },
                   { term: 'rarely', pronunciation: '/ˈrerli/', vietnamese: 'hiếm khi' },
                   { term: 'usually', pronunciation: '/ˈjuːʒuəli/', vietnamese: 'thường xuyên' },
                ],
                grammar: [
                    { title: { en: 'Adverbs of Frequency', vi: 'Trạng từ chỉ tần suất' }, explanation: { en: ["We use adverbs of frequency to talk about how often we do things.", "I usually play soccer on the weekends.", "He/She rarely goes shopping.", "How often do you play soccer?"], vi: ['Chúng ta sử dụng trạng từ chỉ tần suất để nói về tần suất chúng ta làm việc gì đó.', 'Tôi thường chơi bóng đá vào cuối tuần.', 'Anh ấy/Cô ấy hiếm khi đi mua sắm.', 'Bạn có thường chơi bóng đá không?'] } },
                ],
                activities: [
                   {
                    type: 'Practice',
                    description: {
                      en: ["Put the adverb in the correct place in the sentence. (e.g., 'I go to the movies.' (often) -> 'I often go to the movies.')"],
                      vi: ["Đặt trạng từ vào đúng vị trí trong câu. (ví dụ: 'I go to the movies.' (often) -> 'I often go to the movies.')"],
                    },
                  },
                   {
                    type: 'Wrap-up',
                    description: {
                      en: ["Write three sentences about yourself using 'always', 'sometimes', and 'never'."],
                      vi: ["Viết ba câu về bản thân bạn sử dụng 'always', 'sometimes', và 'never'."],
                    },
                  },
                ],
            }
        ]
      },
      {
        id: 5,
        title: { en: 'Unit 5: Around Town', vi: 'Bài 5: Quanh thị trấn' },
        lessons: [
            {
                id: 60501,
                title: { en: 'Lesson 1', vi: 'Bài học 1' },
                aims: {
                    en: ["Buy clothes in a clothing store", "Use demonstratives and object pronouns", "Start a conversation to offer help"],
                    vi: ['Mua quần áo trong cửa hàng', 'Sử dụng đại từ chỉ định và đại từ tân ngữ', 'Bắt đầu cuộc trò chuyện để đề nghị giúp đỡ'],
                },
                vocabulary: [
                   { term: 'large', pronunciation: '/lɑːrdʒ/', vietnamese: 'lớn' },
                   { term: 'extra large', pronunciation: '/ˈekstrə lɑːrdʒ/', vietnamese: 'cỡ rất lớn' },
                   { term: 'jeans', pronunciation: '/dʒiːnz/', vietnamese: 'quần jean' },
                   { term: 'changing room', pronunciation: '/ˈtʃeɪndʒɪŋ ruːm/', vietnamese: 'phòng thay đồ' },
                   { term: 'medium', pronunciation: '/ˈmiːdiəm/', vietnamese: 'cỡ vừa' },
                   { term: 'sweater', pronunciation: '/ˈswetər/', vietnamese: 'áo len' },
                   { term: 'customer', pronunciation: '/ˈkʌstəmər/', vietnamese: 'khách hàng' },
                   { term: 'sales assistant', pronunciation: '/seɪlz əˈsɪstənt/', vietnamese: 'nhân viên bán hàng' },
                ],
                grammar: [
                    { title: { en: 'Demonstratives', vi: 'Đại từ chỉ định' }, explanation: { en: ["Use this/that/these/those to show which things we talk about.", "this/that for singular nouns. these/those for plural nouns."], vi: ['Sử dụng this/that/these/those để chỉ những thứ chúng ta đang nói đến.', 'this/that cho danh từ số ít. these/those cho danh từ số nhiều.'] } },
                    { title: { en: 'Object Pronouns', vi: 'Đại từ tân ngữ' }, explanation: { en: ["Use Object Pronouns (it/them) after a verb or a preposition.", "I like this jacket. Can I try it on?"], vi: ['Sử dụng Đại từ tân ngữ (it/them) sau một động từ hoặc giới từ.', 'Tôi thích chiếc áo khoác này. Tôi có thể mặc thử nó không?'] } },
                ],
                activities: [
                   {
                    type: 'Practice',
                    description: {
                      en: ["Fill in the blanks with 'this', 'that', 'these', or 'those' based on pictures."],
                      vi: ["Điền vào chỗ trống với 'this', 'that', 'these', hoặc 'those' dựa trên hình ảnh."],
                    },
                  },
                   {
                    type: 'Wrap-up',
                    description: {
                      en: ["Role-play a shopping scenario. One student is the customer, one is the sales assistant. Use the vocabulary and grammar from the lesson."],
                      vi: ["Đóng vai một tình huống mua sắm. Một học sinh là khách hàng, một là nhân viên bán hàng. Sử dụng từ vựng và ngữ pháp của bài học."],
                    },
                  },
                ],
            }
        ]
      },
      {
        id: 6,
        title: { en: 'Unit 6: Community Services', vi: 'Bài 6: Dịch vụ cộng đồng' },
        lessons: [
            {
                id: 60601,
                title: { en: 'Lesson 1', vi: 'Bài học 1' },
                aims: {
                    en: ["Talk about public services in your town", "Use definite and indefinite articles", "Use prepositions of place"],
                    vi: ['Nói về các dịch vụ công cộng trong thị trấn của bạn', 'Sử dụng mạo từ xác định và không xác định', 'Sử dụng giới từ chỉ nơi chốn'],
                },
                vocabulary: [
                   { term: 'police station', pronunciation: '/pəˈliːs ˈsteɪʃn/', vietnamese: 'đồn cảnh sát' },
                   { term: 'library', pronunciation: '/ˈlaɪbreri/', vietnamese: 'thư viện' },
                   { term: 'hospital', pronunciation: '/ˈhɑːspɪtl/', vietnamese: 'bệnh viện' },
                   { term: 'train station', pronunciation: '/treɪn ˈsteɪʃn/', vietnamese: 'ga tàu' },
                   { term: 'post office', pronunciation: '/poʊst ˈɔːfɪs/', vietnamese: 'bưu điện' },
                   { term: 'bus station', pronunciation: '/bʌs ˈsteɪʃn/', vietnamese: 'bến xe buýt' },
                ],
                grammar: [
                    { title: { en: 'Articles', vi: 'Mạo từ' }, explanation: { en: ["Use a/an in front of a singular noun when we talk about it for the first time.", "Use the when it's clear from the context what we're talking about."], vi: ['Sử dụng a/an trước một danh từ số ít khi chúng ta nói về nó lần đầu tiên.', 'Sử dụng the khi ngữ cảnh đã rõ chúng ta đang nói về cái gì.'] } },
                    { title: { en: 'Prepositions of Place', vi: 'Giới từ chỉ nơi chốn' }, explanation: { en: ["Use prepositions of place to say where things are.", "E.g., next to, between, opposite."], vi: ['Sử dụng giới từ chỉ nơi chốn để nói vị trí của mọi vật.', 'Ví dụ: bên cạnh, ở giữa, đối diện.'] } },
                ],
                activities: [
                   {
                    type: 'Practice',
                    description: {
                      en: ["Look at a map of a town. Make sentences about the location of buildings using prepositions like 'next to', 'between', and 'opposite'."],
                      vi: ["Nhìn vào bản đồ của một thị trấn. Tạo câu về vị trí của các tòa nhà bằng cách sử dụng các giới từ như 'bên cạnh', 'ở giữa', và 'đối diện'."],
                    },
                  },
                   {
                    type: 'Wrap-up',
                    description: {
                      en: ["Write a short paragraph describing where you live and what public services are near your home."],
                      vi: ["Viết một đoạn văn ngắn mô tả nơi bạn sống và các dịch vụ công cộng nào ở gần nhà bạn."],
                    },
                  },
                ],
            }
        ]
      },
      {
        id: 7,
        title: { en: 'Unit 7: Movies', vi: 'Bài 7: Phim ảnh' },
        lessons: [
            {
                id: 60701,
                title: { en: 'Lesson 1', vi: 'Bài học 1' },
                aims: {
                    en: ["Make and respond to suggestions about movies", "Use prepositions of time", "Start a friendly conversation"],
                    vi: ['Đưa ra và trả lời các đề nghị về phim', 'Sử dụng giới từ chỉ thời gian', 'Bắt đầu một cuộc trò chuyện thân mật'],
                },
                vocabulary: [
                   { term: 'comedy', pronunciation: '/ˈkɑːmədi/', vietnamese: 'hài kịch' },
                   { term: 'science fiction', pronunciation: '/ˈsaɪəns ˈfɪkʃn/', vietnamese: 'khoa học viễn tưởng' },
                   { term: 'horror', pronunciation: '/ˈhɔːrər/', vietnamese: 'kinh dị' },
                   { term: 'action', pronunciation: '/ˈækʃn/', vietnamese: 'hành động' },
                   { term: 'drama', pronunciation: '/ˈdrɑːmə/', vietnamese: 'chính kịch' },
                   { term: 'animated', pronunciation: '/ˈænɪmeɪtɪd/', vietnamese: 'hoạt hình' },
                ],
                grammar: [
                    { title: { en: 'Prepositions of Time', vi: 'Giới từ chỉ thời gian' }, explanation: { en: ["Use on with days of the week and dates (on Saturday, on March 6).", "Use at with specific times (at 3 p.m.).", "Use in with periods of time (in the summer)."], vi: ['Sử dụng on với các ngày trong tuần và ngày tháng (on Saturday, on March 6).', 'Sử dụng at với thời gian cụ thể (at 3 p.m.).', 'Sử dụng in với các khoảng thời gian (in the summer).'] } },
                ],
                activities: [
                   {
                    type: 'Practice',
                    description: {
                      en: ["Fill in the blanks with 'on', 'at', or 'in'. (e.g., The party is ___ Saturday ___ 8 p.m.)"],
                      vi: ["Điền vào chỗ trống với 'on', 'at', hoặc 'in'. (ví dụ: Bữa tiệc diễn ra vào ___ thứ Bảy lúc ___ 8 giờ tối)"],
                    },
                  },
                   {
                    type: 'Wrap-up',
                    description: {
                      en: ["With a partner, make plans to see a movie. Decide on the movie type, day, and time. (e.g., 'Let's watch an action movie on Friday at 7 p.m.')"],
                      vi: ["Cùng với bạn cặp, hãy lên kế hoạch đi xem phim. Quyết định loại phim, ngày và giờ. (ví dụ: 'Chúng ta hãy xem một bộ phim hành động vào thứ Sáu lúc 7 giờ tối.')"],
                    },
                  },
                ],
            }
        ]
      },
      {
        id: 8,
        title: { en: 'Unit 8: The World around Us', vi: 'Bài 8: Thế giới quanh ta' },
        lessons: [
            {
                id: 60801,
                title: { en: 'Lesson 1', vi: 'Bài học 1' },
                aims: {
                    en: ["Discuss plans for a trip", "Use the modals 'should' and 'can'", "Ask for confirmation"],
                    vi: ['Thảo luận về kế hoạch cho một chuyến đi', 'Sử dụng các động từ khuyết thiếu "should" và "can"', 'Yêu cầu xác nhận'],
                },
                vocabulary: [
                   { term: 'rafting', pronunciation: '/ˈræftɪŋ/', vietnamese: 'chèo bè' },
                   { term: 'canyon', pronunciation: '/ˈkænjən/', vietnamese: 'hẻm núi' },
                   { term: 'cave', pronunciation: '/keɪv/', vietnamese: 'hang động' },
                   { term: 'hiking', pronunciation: '/ˈhaɪkɪŋ/', vietnamese: 'đi bộ đường dài' },
                   { term: 'kayaking', pronunciation: '/ˈkaɪækɪŋ/', vietnamese: 'chèo thuyền kayak' },
                   { term: 'campsite', pronunciation: '/ˈkæmpsaɪt/', vietnamese: 'khu cắm trại' },
                ],
                grammar: [
                    { title: { en: 'Modals', vi: 'Động từ khuyết thiếu' }, explanation: { en: ["Use should to ask for and give advice.", "Use can to talk about possibility.", "I/You/We/They should go to Greenwater Cave.", "Should I travel there? (Yes, you should./No, you shouldn't.)"], vi: ['Sử dụng should để hỏi và đưa ra lời khuyên.', 'Sử dụng can để nói về khả năng.', 'Tôi/Bạn/Chúng tôi/Họ nên đến Hang Greenwater.', 'Tôi có nên đi du lịch đến đó không? (Có, bạn nên./Không, bạn không nên.)'] } },
                ],
                activities: [
                   {
                    type: 'Practice',
                    description: {
                      en: ["Give advice for different situations using 'should' or 'shouldn't'. (e.g., 'I want to go hiking.' -> 'You should wear good shoes.')"],
                      vi: ["Đưa ra lời khuyên cho các tình huống khác nhau bằng cách sử dụng 'should' hoặc 'shouldn't'. (ví dụ: 'Tôi muốn đi bộ đường dài.' -> 'Bạn nên đi giày tốt.')"],
                    },
                  },
                   {
                    type: 'Wrap-up',
                    description: {
                      en: ["Plan a trip to a natural place with a partner. Discuss what you can do and what you should bring."],
                      vi: ["Lên kế hoạch cho một chuyến đi đến một nơi tự nhiên với bạn cặp. Thảo luận về những gì bạn có thể làm và những gì bạn nên mang theo."],
                    },
                  },
                ],
            }
        ]
      },
      {
        id: 9,
        title: { en: 'Unit 9: Houses in the Future', vi: 'Bài 9: Ngôi nhà trong tương lai' },
        lessons: [
            {
                id: 60901,
                title: { en: 'Lesson 1', vi: 'Bài học 1' },
                aims: {
                    en: ["Compare homes now and in the future", "Use the Future Simple", "Use indefinite quantifiers", "Show you don't understand"],
                    vi: ['So sánh nhà ở hiện tại và trong tương lai', 'Sử dụng thì Tương lai đơn', 'Sử dụng lượng từ bất định', 'Thể hiện bạn không hiểu'],
                },
                vocabulary: [
                   { term: 'in a city', pronunciation: '/ɪn ə ˈsɪti/', vietnamese: 'trong thành phố' },
                   { term: 'underground', pronunciation: '/ˈʌndərɡraʊnd/', vietnamese: 'dưới lòng đất' },
                   { term: 'under the sea', pronunciation: '/ˈʌndər ðə siː/', vietnamese: 'dưới biển' },
                   { term: 'on the sea', pronunciation: '/ɑːn ðə siː/', vietnamese: 'trên biển' },
                ],
                grammar: [
                    { title: { en: 'Future Simple', vi: 'Thì Tương lai đơn' }, explanation: { en: ["Use the Future Simple with 'think' to give our ideas about the future.", "I think people will live in megacities.", "I don't think people will live in megacities."], vi: ['Sử dụng thì Tương lai đơn với "think" để đưa ra ý tưởng của chúng ta về tương lai.', 'Tôi nghĩ mọi người sẽ sống trong các siêu đô thị.', 'Tôi không nghĩ mọi người sẽ sống trong các siêu đô thị.'] } },
                    { title: { en: 'Indefinite quantifiers', vi: 'Lượng từ bất định' }, explanation: { en: ["Use indefinite quantifiers before nouns to show the amount or quantity.", "E.g., few/some, many/lots of/a lot of."], vi: ['Sử dụng lượng từ bất định trước danh từ để chỉ số lượng.', 'Ví dụ: few/some, many/lots of/a lot of.'] } },
                ],
                activities: [
                   {
                    type: 'Practice',
                    description: {
                      en: ["Make predictions about the future using 'I think... will...' or 'I don't think... will...'. (e.g., 'I think houses will have robots.')"],
                      vi: ["Đưa ra dự đoán về tương lai bằng cách sử dụng 'I think... will...' hoặc 'I don't think... will...'. (ví dụ: 'Tôi nghĩ nhà cửa sẽ có robot.')"],
                    },
                  },
                   {
                    type: 'Wrap-up',
                    description: {
                      en: ["Draw your ideal house of the future. Describe it to a partner using the new vocabulary and grammar."],
                      vi: ["Vẽ ngôi nhà lý tưởng của bạn trong tương lai. Mô tả nó cho bạn cặp của bạn bằng cách sử dụng từ vựng và ngữ pháp mới."],
                    },
                  },
                ],
            }
        ]
      },
      {
        id: 10,
        title: { en: 'Cities around the World', vi: 'Các thành phố trên thế giới' },
        lessons: [
            {
                id: 61001,
                title: { en: 'Lesson 1', vi: 'Bài học 1' },
                aims: {
                    en: ["Identify landmarks in cities around the world", "Use First Conditional sentences", "Show interest"],
                    vi: ['Xác định các địa danh ở các thành phố trên thế giới', 'Sử dụng câu điều kiện loại 1', 'Thể hiện sự quan tâm'],
                },
                vocabulary: [
                   { term: 'statue', pronunciation: '/ˈstætʃuː/', vietnamese: 'tượng' },
                   { term: 'museum', pronunciation: '/mjuˈziːəm/', vietnamese: 'bảo tàng' },
                   { term: 'palace', pronunciation: '/ˈpæləs/', vietnamese: 'cung điện' },
                   { term: 'tower', pronunciation: '/ˈtaʊər/', vietnamese: 'tháp' },
                   { term: 'opera house', pronunciation: '/ˈɑːprə haʊs/', vietnamese: 'nhà hát opera' },
                   { term: 'cathedral', pronunciation: '/kəˈθiːdrəl/', vietnamese: 'nhà thờ lớn' },
                   { term: 'bridge', pronunciation: '/brɪdʒ/', vietnamese: 'cây cầu' },
                   { term: 'park', pronunciation: '/pɑːrk/', vietnamese: 'công viên' },
                ],
                grammar: [
                    { title: { en: 'First Conditional', vi: 'Câu điều kiện loại 1' }, explanation: { en: ["Use the First Conditional to talk about real possibilities in the future.", "If it rains, I will watch the ballet.", "If it's snowy, I will not go to the cathedral."], vi: ['Sử dụng câu điều kiện loại 1 để nói về các khả năng có thật trong tương lai.', 'Nếu trời mưa, tôi sẽ xem ba lê.', 'Nếu trời có tuyết, tôi sẽ không đến nhà thờ lớn.'] } },
                ],
                activities: [
                   {
                    type: 'Practice',
                    description: {
                      en: ["Complete the first conditional sentences. (e.g., 'If I go to New York, I will visit...')"],
                      vi: ["Hoàn thành các câu điều kiện loại một. (ví dụ: 'Nếu tôi đến New York, tôi sẽ đến thăm...')"],
                    },
                  },
                   {
                    type: 'Wrap-up',
                    description: {
                      en: ["Plan a dream trip. Write three sentences about what you will do if you visit your dream city. (e.g., 'If I go to Rome, I will eat lots of pasta.')"],
                      vi: ["Lên kế hoạch cho một chuyến đi trong mơ. Viết ba câu về những gì bạn sẽ làm nếu bạn đến thăm thành phố trong mơ của mình. (ví dụ: 'Nếu tôi đến Rome, tôi sẽ ăn thật nhiều mì ống.')"],
                    },
                  },
                ],
            }
        ]
      }
    ]
  };
