import { CurriculumLevel } from '../types';

export const sw7Data: CurriculumLevel = {
    level: 7,
    title: { en: 'i-Learn Smart World 7', vi: 'i-Learn Smart World 7' },
    subtitle: { en: 'Secondary School - Grade 7', vi: 'Trung học cơ sở - Lớp 7' },
    ebookPdfUrl: 'https://drive.google.com/file/d/1H9LEAJS2xZALd7CUryibtkjKtOXIpEBM/view?usp=sharing',
    units: [
        {
            id: 1,
            title: { en: 'Unit 1: Free Time', vi: 'Bài 1: Thời gian rảnh' },
            lessons: [
                {
                    id: 70101,
                    title: { en: 'Lesson 1', vi: 'Bài học 1' },
                    aims: {
                        en: ['Ask and answer about hobbies', 'Use the Present Simple for habits'],
                        vi: ['Hỏi và trả lời về sở thích', 'Sử dụng thì Hiện tại đơn cho thói quen'],
                    },
                    vocabulary: [
                        { term: 'collect soccer stickers', pronunciation: '/kəˈlekt ˈsɑːkər ˈstɪkərz/', vietnamese: 'sưu tầm nhãn dán bóng đá' },
                        { term: 'build models', pronunciation: '/bɪld ˈmɑːdlz/', vietnamese: 'xây dựng mô hình' },
                        { term: 'bake cakes', pronunciation: '/beɪk keɪks/', vietnamese: 'nướng bánh' },
                        { term: 'make vlogs', pronunciation: '/meɪk vlɔːɡz/', vietnamese: 'làm vlog' },
                        { term: 'read comics', pronunciation: '/riːd ˈkɑːmɪks/', vietnamese: 'đọc truyện tranh' },
                        { term: 'play online games', pronunciation: '/pleɪ ˈɑːnlaɪn ɡeɪmz/', vietnamese: 'chơi game online' },
                    ],
                    grammar: [
                        { title: { en: 'Present Simple for habits', vi: 'Thì Hiện tại đơn cho thói quen' }, explanation: { en: ['We can use the Present Simple to talk about habits or things that happen regularly.', 'I/You/We/They play soccer.', 'He/She reads comics.', 'What do you do in your free time? - I play soccer on Tuesday evenings.'], vi: ['Chúng ta có thể sử dụng thì Hiện tại đơn để nói về thói quen hoặc những điều xảy ra thường xuyên.', 'Tôi/Bạn/Chúng tôi/Họ chơi bóng đá.', 'Anh ấy/Cô ấy đọc truyện tranh.', 'Bạn làm gì vào thời gian rảnh? - Tôi chơi bóng đá vào các buổi tối thứ Ba.'] } },
                    ],
                    activities: [
                      {
                        type: 'Warm-up',
                        description: {
                          en: ['Look at the list of hobbies. Which ones do you do in your free time? Discuss with a partner.'],
                          vi: ['Nhìn vào danh sách sở thích. Bạn làm những gì trong thời gian rảnh? Thảo luận với bạn cặp.'],
                        },
                      },
                      {
                        type: 'Practice',
                        description: {
                          en: ['Write three sentences about what you do in your free time using the Present Simple. (e.g., "I often read comics.")'],
                          vi: ['Viết ba câu về những gì bạn làm trong thời gian rảnh bằng thì Hiện tại đơn. (ví dụ: "Tôi thường đọc truyện tranh.")'],
                        },
                      },
                    ],
                },
                {
                    id: 70102,
                    title: { en: 'Lesson 2', vi: 'Bài học 2' },
                    aims: {
                        en: ['Make future plans', 'Use the Present Continuous for future plans and prepositions of place', 'Start a friendly conversation'],
                        vi: ['Lên kế hoạch tương lai', 'Sử dụng thì Hiện tại tiếp diễn cho kế hoạch tương lai và giới từ chỉ nơi chốn', 'Bắt đầu một cuộc trò chuyện thân mật'],
                    },
                    vocabulary: [
                        { term: 'sports center', pronunciation: '/spɔːrts ˈsentər/', vietnamese: 'trung tâm thể thao' },
                        { term: 'bowling alley', pronunciation: '/ˈboʊlɪŋ ˈæli/', vietnamese: 'sân chơi bowling' },
                        { term: 'theater', pronunciation: '/ˈθiːətər/', vietnamese: 'nhà hát' },
                        { term: 'ice rink', pronunciation: '/aɪs rɪŋk/', vietnamese: 'sân băng' },
                        { term: 'water park', pronunciation: '/ˈwɔːtər pɑːrk/', vietnamese: 'công viên nước' },
                        { term: 'market', pronunciation: '/ˈmɑːrkɪt/', vietnamese: 'chợ' },
                        { term: 'fair', pronunciation: '/fer/', vietnamese: 'hội chợ' },
                    ],
                    grammar: [
                        { title: { en: 'Present Continuous for future plans', vi: 'Thì Hiện tại tiếp diễn cho kế hoạch tương lai' }, explanation: { en: ['We can use the Present Continuous to talk about future plans.', 'I\'m going to the sports center tonight.', 'He/She is going to the bowling alley this evening.'], vi: ['Chúng ta có thể sử dụng thì Hiện tại tiếp diễn để nói về các kế hoạch trong tương lai.', 'Tôi sẽ đến trung tâm thể thao tối nay.', 'Anh ấy/Cô ấy sẽ đến sân chơi bowling tối nay.'] } },
                        { title: { en: 'Prepositions of place', vi: 'Giới từ chỉ nơi chốn' }, explanation: { en: ['We use prepositions of place to talk about where something or someone is located.', 'in front of, behind, next to, opposite.'], vi: ['Chúng ta sử dụng giới từ chỉ nơi chốn để nói về vị trí của một cái gì đó hoặc ai đó.', 'ở phía trước, phía sau, bên cạnh, đối diện.'] } },
                    ],
                    activities: [
                      {
                        type: 'Practice',
                        description: {
                          en: ["Look at a map of a town. Ask and answer questions about the locations of places using prepositions. (e.g., 'Where is the theater?' 'It's next to the sports center.')"],
                          vi: ["Nhìn vào bản đồ của một thị trấn. Hỏi và trả lời các câu hỏi về vị trí của các địa điểm bằng cách sử dụng giới từ. (ví dụ: 'Nhà hát ở đâu?' 'Nó ở bên cạnh trung tâm thể thao.')"],
                        },
                      },
                      {
                        type: 'Wrap-up',
                        description: {
                          en: ["In pairs, make plans for the weekend using the Present Continuous for future plans. (e.g., 'What are you doing on Saturday?' 'I'm going to the water park.')"],
                          vi: ["Làm việc theo cặp, lập kế hoạch cho cuối tuần bằng cách sử dụng thì Hiện tại tiếp diễn cho các kế hoạch tương lai. (ví dụ: 'Bạn làm gì vào thứ Bảy?' 'Tôi sẽ đi công viên nước.')"],
                        },
                      },
                    ],
                },
                {
                    id: 70103,
                    title: { en: 'Lesson 3', vi: 'Bài học 3' },
                    aims: {
                        en: ['Talk about extreme sports', 'Write emails inviting people to join you in an activity'],
                        vi: ['Nói về các môn thể thao mạo hiểm', 'Viết email mời mọi người tham gia một hoạt động'],
                    },
                    vocabulary: [
                        { term: 'skateboarding', pronunciation: '/ˈskeɪtbɔːrdɪŋ/', vietnamese: 'trượt ván' },
                        { term: 'surfing', pronunciation: '/ˈsɜːrfɪŋ/', vietnamese: 'lướt sóng' },
                        { term: 'rock climbing', pronunciation: '/rɑːk ˈklaɪmɪŋ/', vietnamese: 'leo núi đá' },
                        { term: 'zorbing', pronunciation: '/ˈzɔːrbɪŋ/', vietnamese: 'trượt bóng zorbing' },
                    ],
                    grammar: [],
                    activities: [],
                }
            ]
        },
        {
            id: 2,
            title: { en: 'Unit 2: Health', vi: 'Bài 2: Sức khỏe' },
            lessons: [],
        }
    ]
};
