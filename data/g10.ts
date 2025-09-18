
import { CurriculumLevel } from '../types';

export const g10Data: CurriculumLevel = {
    level: 10,
    title: { en: 'Global Success 10', vi: 'Tiếng Anh 10 - Global Success' },
    subtitle: { en: 'High School - Grade 10', vi: 'Trung học phổ thông - Lớp 10' },
    ebookPdfUrl: 'https://drive.google.com/file/d/1-024g_2X1n3g9a5kK9d8r7c6j5bY3z2r/view', // Placeholder URL
    units: [
        // Unit 1: Family Life
        {
            id: 1001,
            title: { en: 'Unit 1: Family Life', vi: 'Bài 1: Cuộc sống gia đình' },
            lessons: [
                {
                    id: 100101,
                    title: { en: 'Core Skills & Knowledge', vi: 'Kiến thức & Kỹ năng cốt lõi' },
                    aims: {
                        en: [
                            'Learn vocabulary related to family life and household chores.',
                            'Use the present simple and present continuous tenses.',
                            'Understand and use consonant clusters /br/, /kr/, and /tr/.',
                            'Read for specific information about the benefits of chores.',
                            'Discuss why children should or should not do household chores.',
                            'Listen to a talk show about family life.',
                            'Write about family routines and express opinions.',
                            'Learn about family values in the UK.'
                        ],
                        vi: [
                            'Học từ vựng liên quan đến cuộc sống gia đình và việc nhà.',
                            'Sử dụng thì hiện tại đơn và hiện tại tiếp diễn.',
                            'Hiểu và sử dụng các cụm phụ âm /br/, /kr/, và /tr/.',
                            'Đọc để lấy thông tin cụ thể về lợi ích của việc nhà.',
                            'Thảo luận tại sao trẻ em nên hoặc không nên làm việc nhà.',
                            'Nghe một talk show về cuộc sống gia đình.',
                            'Viết về các thói quen trong gia đình và bày tỏ quan điểm.',
                            'Tìm hiểu về các giá trị gia đình ở Vương quốc Anh.'
                        ]
                    },
                    vocabulary: [
                        { term: 'household chores', pronunciation: '/ˈhaʊs.hoʊld tʃɔːrz/', vietnamese: 'việc nhà' },
                        { term: 'routine', pronunciation: '/ruːˈtiːn/', vietnamese: 'thói quen' },
                        { term: 'benefit', pronunciation: '/ˈbɛn.ə.fɪt/', vietnamese: 'lợi ích' },
                        { term: 'family values', pronunciation: '/ˈfæm.əl.i ˈvæl.juːz/', vietnamese: 'giá trị gia đình' }
                    ],
                    grammar: [
                        { title: { en: 'Present simple and present continuous', vi: 'Thì hiện tại đơn và hiện tại tiếp diễn' }, explanation: { en: [], vi: [] } }
                    ],
                    activities: []
                }
            ]
        },
        // Unit 2: Humans and the Environment
        {
            id: 1002,
            title: { en: 'Unit 2: Humans and the Environment', vi: 'Bài 2: Con người và môi trường' },
            lessons: [
                {
                    id: 100201,
                    title: { en: 'Core Skills & Knowledge', vi: 'Kiến thức & Kỹ năng cốt lõi' },
                    aims: {
                        en: [
                            'Learn vocabulary about human activities and the environment.',
                            'Use "will" and "be going to" for the future, and the passive voice.',
                            'Understand and use consonant clusters /kl/, /pl/, /gr/, and /pr/.',
                            'Read for main ideas about a green lifestyle.',
                            'Talk about ways to live green.',
                            'Listen to an announcement about a green event.',
                            'Write about ways to improve the environment.',
                            'Understand the concept of a carbon footprint.'
                        ],
                        vi: [
                            'Học từ vựng về hoạt động của con người và môi trường.',
                            'Sử dụng "will" và "be going to" cho tương lai, và thể bị động.',
                            'Hiểu và sử dụng các cụm phụ âm /kl/, /pl/, /gr/, và /pr/.',
                            'Đọc để lấy ý chính về lối sống xanh.',
                            'Nói về các cách để sống xanh.',
                            'Nghe thông báo về một sự kiện xanh.',
                            'Viết về các cách cải thiện môi trường.',
                            'Hiểu về khái niệm dấu chân carbon.'
                        ]
                    },
                    vocabulary: [
                        { term: 'green lifestyle', pronunciation: '/griːn ˈlaɪf.staɪl/', vietnamese: 'lối sống xanh' },
                        { term: 'carbon footprint', pronunciation: '/ˈkɑːr.bən ˈfʊt.prɪnt/', vietnamese: 'dấu chân carbon' },
                        { term: 'passive voice', pronunciation: '/ˈpæs.ɪv vɔɪs/', vietnamese: 'thể bị động' }
                    ],
                    grammar: [
                        { title: { en: 'Future with "will" and "be going to"; Passive voice', vi: 'Tương lai với "will" và "be going to"; Thể bị động' }, explanation: { en: [], vi: [] } }
                    ],
                    activities: []
                }
            ]
        },
        // Unit 3: Music
        {
            id: 1003,
            title: { en: 'Unit 3: Music', vi: 'Bài 3: Âm nhạc' },
            lessons: [
                {
                    id: 100301,
                    title: { en: 'Core Skills & Knowledge', vi: 'Kiến thức & Kỹ năng cốt lõi' },
                    aims: {
                        en: [
                            'Learn vocabulary related to music.',
                            'Use compound sentences, and to-infinitives/bare-infinitives.',
                            'Understand stress in two-syllable words.',
                            'Read about a famous TV music show.',
                            'Talk about a TV music show.',
                            'Listen to an interview about a music festival.',
                            'Write a blog post about a music event experience.',
                            'Learn about Chau van singing.'
                        ],
                        vi: [
                            'Học từ vựng liên quan đến âm nhạc.',
                            'Sử dụng câu ghép, và động từ nguyên mẫu có "to"/không có "to".',
                            'Hiểu trọng âm trong từ hai âm tiết.',
                            'Đọc về một chương trình âm nhạc nổi tiếng trên TV.',
                            'Nói về một chương trình âm nhạc trên TV.',
                            'Nghe một cuộc phỏng vấn về lễ hội âm nhạc.',
                            'Viết blog về trải nghiệm tại một sự kiện âm nhạc.',
                            'Tìm hiểu về Hát Chầu văn.'
                        ]
                    },
                    vocabulary: [
                        { term: 'music festival', pronunciation: '/ˈmjuː.zɪk ˈfes.tɪ.vəl/', vietnamese: 'lễ hội âm nhạc' },
                        { term: 'compound sentence', pronunciation: '/ˈkɒm.paʊnd ˈsen.təns/', vietnamese: 'câu ghép' }
                    ],
                    grammar: [
                        { title: { en: 'Compound sentences; to-infinitives and bare infinitives', vi: 'Câu ghép; Động từ nguyên mẫu có "to" và không có "to"' }, explanation: { en: [], vi: [] } }
                    ],
                    activities: []
                }
            ]
        },
        // Unit 4: For a Better Community
        {
            id: 1004,
            title: { en: 'Unit 4: For a Better Community', vi: 'Bài 4: Vì một cộng đồng tốt đẹp hơn' },
            lessons: [
                {
                    id: 100401,
                    title: { en: 'Core Skills & Knowledge', vi: 'Kiến thức & Kỹ năng cốt lõi' },
                    aims: {
                        en: [
                            'Learn vocabulary for community development.',
                            'Use the past simple and past continuous with "when" and "while".',
                            'Understand stress in two-syllable words with the same spelling.',
                            'Read about a volunteer club.',
                            'Talk about the benefits of volunteer activities.',
                            'Listen to an announcement for volunteers.',
                            'Write a letter of application for a volunteer job.',
                            'Learn about Save the Children organization.'
                        ],
                        vi: [
                            'Học từ vựng về phát triển cộng đồng.',
                            'Sử dụng thì quá khứ đơn và quá khứ tiếp diễn với "when" và "while".',
                            'Hiểu trọng âm trong các từ hai âm tiết cùng cách viết.',
                            'Đọc về một câu lạc bộ tình nguyện.',
                            'Nói về lợi ích của các hoạt động tình nguyện.',
                            'Nghe thông báo tuyển tình nguyện viên.',
                            'Viết thư xin việc tình nguyện.',
                            'Tìm hiểu về tổ chức Cứu trợ Trẻ em (Save the Children).'
                        ]
                    },
                    vocabulary: [
                        { term: 'community development', pronunciation: '/kəˈmjuː.nə.ti dɪˈvel.əp.mənt/', vietnamese: 'phát triển cộng đồng' },
                        { term: 'volunteer', pronunciation: '/ˌvɒl.ənˈtɪər/', vietnamese: 'tình nguyện viên' }
                    ],
                    grammar: [
                        { title: { en: 'Past simple and past continuous with "when" and "while"', vi: 'Thì quá khứ đơn và quá khứ tiếp diễn với "when" và "while"' }, explanation: { en: [], vi: [] } }
                    ],
                    activities: []
                }
            ]
        },
        // Unit 5: Inventions
        {
            id: 1005,
            title: { en: 'Unit 5: Inventions', vi: 'Bài 5: Các phát minh' },
            lessons: [
                {
                    id: 100501,
                    title: { en: 'Core Skills & Knowledge', vi: 'Kiến thức & Kỹ năng cốt lõi' },
                    aims: {
                        en: [
                            'Learn vocabulary related to inventions.',
                            'Use the present perfect tense, gerunds, and to-infinitives.',
                            'Understand stress in three-syllable nouns.',
                            'Read about an invention.',
                            'Talk about inventions and their uses.',
                            'Listen to instructions on how to use an invention.',
                            'Write about the benefits of an invention.',
                            'Understand computer hardware basics.'
                        ],
                        vi: [
                            'Học từ vựng liên quan đến các phát minh.',
                            'Sử dụng thì hiện tại hoàn thành, danh động từ và động từ nguyên mẫu có "to".',
                            'Hiểu trọng âm trong danh từ ba âm tiết.',
                            'Đọc về một phát minh.',
                            'Nói về các phát minh và công dụng của chúng.',
                            'Nghe hướng dẫn cách sử dụng một phát minh.',
                            'Viết về lợi ích của một phát minh.',
                            'Hiểu về phần cứng máy tính.'
                        ]
                    },
                    vocabulary: [
                        { term: 'invention', pronunciation: '/ɪnˈven.ʃən/', vietnamese: 'phát minh' },
                        { term: 'gerund', pronunciation: '/ˈdʒer.ənd/', vietnamese: 'danh động từ' }
                    ],
                    grammar: [
                        { title: { en: 'Present perfect; Gerunds and to-infinitives', vi: 'Thì hiện tại hoàn thành; Danh động từ và động từ nguyên mẫu có "to"' }, explanation: { en: [], vi: [] } }
                    ],
                    activities: []
                }
            ]
        },
        // Unit 6: Gender Equality
        {
            id: 1006,
            title: { en: 'Unit 6: Gender Equality', vi: 'Bài 6: Bình đẳng giới' },
            lessons: [
                {
                    id: 100601,
                    title: { en: 'Core Skills & Knowledge', vi: 'Kiến thức & Kỹ năng cốt lõi' },
                    aims: {
                        en: [
                            'Learn vocabulary about gender equality.',
                            'Use the passive voice with modal verbs.',
                            'Understand stress in three-syllable adjectives and verbs.',
                            'Read about gender equality.',
                            'Talk about career choices.',
                            'Listen about the first woman in space.',
                            'Write about jobs for men and women.',
                            'Learn about women's football.'
                        ],
                        vi: [
                            'Học từ vựng về bình đẳng giới.',
                            'Sử dụng thể bị động với động từ khuyết thiếu.',
                            'Hiểu trọng âm trong tính từ và động từ ba âm tiết.',
                            'Đọc về bình đẳng giới.',
                            'Nói về lựa chọn nghề nghiệp.',
                            'Nghe về người phụ nữ đầu tiên bay vào không gian.',
                            'Viết về công việc cho nam và nữ.',
                            'Tìm hiểu về bóng đá nữ.'
                        ]
                    },
                    vocabulary: [
                        { term: 'gender equality', pronunciation: '/ˈdʒen.dər ɪˈkwɒl.ə.ti/', vietnamese: 'bình đẳng giới' },
                        { term: 'career choice', pronunciation: '/kəˈrɪər tʃɔɪs/', vietnamese: 'lựa chọn nghề nghiệp' }
                    ],
                    grammar: [
                        { title: { en: 'Passive voice with modal verbs', vi: 'Thể bị động với động từ khuyết thiếu' }, explanation: { en: [], vi: [] } }
                    ],
                    activities: []
                }
            ]
        },
        // Unit 7: Viet Nam and International Organisations
        {
            id: 1007,
            title: { en: 'Unit 7: Viet Nam and International Organisations', vi: 'Bài 7: Việt Nam và các tổ chức quốc tế' },
            lessons: [
                {
                    id: 100701,
                    title: { en: 'Core Skills & Knowledge', vi: 'Kiến thức & Kỹ năng cốt lõi' },
                    aims: {
                        en: [
                            'Learn vocabulary about international organisations.',
                            'Use comparative and superlative adjectives.',
                            'Understand stress in words of more than three syllables.',
                            'Read about UNICEF's support for education in Viet Nam.',
                            'Talk about community programmes.',
                            'Listen about Viet Nam's participation in international organisations.',
                            'Write about Viet Nam's participation.',
                            'Learn about FAO activities in Viet Nam.'
                        ],
                        vi: [
                            'Học từ vựng về các tổ chức quốc tế.',
                            'Sử dụng so sánh hơn và so sánh nhất của tính từ.',
                            'Hiểu trọng âm trong các từ có nhiều hơn ba âm tiết.',
                            'Đọc về sự hỗ trợ của UNICEF cho giáo dục Việt Nam.',
                            'Nói về các chương trình cho cộng đồng.',
                            'Nghe về sự tham gia của Việt Nam vào các tổ chức quốc tế.',
                            'Viết về sự tham gia của Việt Nam vào các tổ chức quốc tế.',
                            'Tìm hiểu về các hoạt động của FAO tại Việt Nam.'
                        ]
                    },
                    vocabulary: [
                        { term: 'international organisation', pronunciation: '/ˌɪn.təˈnæʃ.ən.əl ˌɔː.ɡən.aɪˈzeɪ.ʃən/', vietnamese: 'tổ chức quốc tế' },
                        { term: 'UNICEF', pronunciation: '/ˈjuː.nɪ.sef/', vietnamese: 'UNICEF' }
                    ],
                    grammar: [
                        { title: { en: 'Comparative and superlative adjectives', vi: 'So sánh hơn và so sánh nhất của tính từ' }, explanation: { en: [], vi: [] } }
                    ],
                    activities: []
                }
            ]
        },
        // Unit 8: New Ways to Learn
        {
            id: 1008,
            title: { en: 'Unit 8: New Ways to Learn', vi: 'Bài 8: Những cách học mới' },
            lessons: [
                {
                    id: 100801,
                    title: { en: 'Core Skills & Knowledge', vi: 'Kiến thức & Kỹ năng cốt lõi' },
                    aims: {
                        en: [
                            'Learn vocabulary about different ways of learning.',
                            'Use defining and non-defining relative clauses.',
                            'Understand sentence stress.',
                            'Read about online vs. face-to-face learning.',
                            'Talk about pros and cons of online learning.',
                            'Listen to instructions for a blended learning class.',
                            'Write about the benefits of blended learning.',
                            'Learn about modern schools.'
                        ],
                        vi: [
                            'Học từ vựng về các cách học khác nhau.',
                            'Sử dụng mệnh đề quan hệ xác định và không xác định.',
                            'Hiểu trọng âm câu.',
                            'Đọc về học trực tuyến và học trực tiếp.',
                            'Nói về ưu và nhược điểm của việc học trực tuyến.',
                            'Nghe hướng dẫn chuẩn bị cho lớp học kết hợp.',
                            'Viết về lợi ích của việc học kết hợp.',
                            'Tìm hiểu về các trường học hiện đại.'
                        ]
                    },
                    vocabulary: [
                        { term: 'blended learning', pronunciation: '/ˈblen.dɪd ˈlɜː.nɪŋ/', vietnamese: 'học kết hợp' },
                        { term: 'relative clause', pronunciation: '/ˈrel.ə.tɪv klɔːz/', vietnamese: 'mệnh đề quan hệ' }
                    ],
                    grammar: [
                        { title: { en: 'Defining and non-defining relative clauses', vi: 'Mệnh đề quan hệ xác định và không xác định' }, explanation: { en: [], vi: [] } }
                    ],
                    activities: []
                }
            ]
        },
        // Unit 9: Protecting the Environment
        {
            id: 1009,
            title: { en: 'Unit 9: Protecting the Environment', vi: 'Bài 9: Bảo vệ môi trường' },
            lessons: [
                {
                    id: 100901,
                    title: { en: 'Core Skills & Knowledge', vi: 'Kiến thức & Kỹ năng cốt lõi' },
                    aims: {
                        en: [
                            'Learn vocabulary about environmental issues and protection.',
                            'Use reported speech.',
                            'Understand rhythm in sentences.',
                            'Read about environmental problems.',
                            'Talk about solutions for the environment.',
                            'Listen about ways to protect endangered animals.',
                            'Write about a wildlife protection organisation.',
                            'Learn about Earth Hour.'
                        ],
                        vi: [
                            'Học từ vựng về các vấn đề và cách bảo vệ môi trường.',
                            'Sử dụng câu tường thuật.',
                            'Hiểu nhịp điệu trong câu.',
                            'Đọc về các vấn đề môi trường.',
                            'Nói về các giải pháp cho môi trường.',
                            'Nghe về các cách bảo vệ động vật có nguy cơ tuyệt chủng.',
                            'Viết về một tổ chức bảo vệ động vật hoang dã.',
                            'Tìm hiểu về Giờ Trái Đất.'
                        ]
                    },
                    vocabulary: [
                        { term: 'reported speech', pronunciation: '/rɪˌpɔː.tɪd ˈspiːtʃ/', vietnamese: 'câu tường thuật' },
                        { term: 'endangered animals', pronunciation: '/ɪnˈdeɪn.dʒərd ˈæn.ɪ.məlz/', vietnamese: 'động vật có nguy cơ tuyệt chủng' }
                    ],
                    grammar: [
                        { title: { en: 'Reported speech', vi: 'Câu tường thuật' }, explanation: { en: [], vi: [] } }
                    ],
                    activities: []
                }
            ]
        },
        // Unit 10: Ecotourism
        {
            id: 1010,
            title: { en: 'Unit 10: Ecotourism', vi: 'Bài 10: Du lịch sinh thái' },
            lessons: [
                {
                    id: 101001,
                    title: { en: 'Core Skills & Knowledge', vi: 'Kiến thức & Kỹ năng cốt lõi' },
                    aims: {
                        en: [
                            'Learn vocabulary related to ecotourism.',
                            'Use conditional sentences type 1 and 2.',
                            'Understand intonation.',
                            'Read a leaflet about ecotours.',
                            'Talk about how to be an ecotourist.',
                            'Listen to a tour guide's speech.',
                            'Write a website advertisement for an ecotour.',
                            'Understand the environmental impact of tourism.'
                        ],
                        vi: [
                            'Học từ vựng liên quan đến du lịch sinh thái.',
                            'Sử dụng câu điều kiện loại 1 và loại 2.',
                            'Hiểu ngữ điệu.',
                            'Đọc một tờ rơi về các tour du lịch sinh thái.',
                            'Nói về cách để trở thành một khách du lịch sinh thái.',
                            'Nghe bài phát biểu của hướng dẫn viên du lịch.',
                            'Viết quảng cáo trên web cho một tour du lịch sinh thái.',
                            'Hiểu tác động của du lịch đến môi trường.'
                        ]
                    },
                    vocabulary: [
                        { term: 'ecotourism', pronunciation: '/ˈiː.koʊˌtʊə.rɪ.zəm/', vietnamese: 'du lịch sinh thái' },
                        { term: 'conditional sentence', pronunciation: '/kənˈdɪʃ.ən.əl ˈsen.təns/', vietnamese: 'câu điều kiện' }
                    ],
                    grammar: [
                        { title: { en: 'Conditional sentences type 1 and 2', vi: 'Câu điều kiện loại 1 và loại 2' }, explanation: { en: [], vi: [] } }
                    ],
                    activities: []
                }
            ]
        }
    ]
};
