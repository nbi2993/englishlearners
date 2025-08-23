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
            lessons: [
                {
                    id: 70201,
                    title: { en: 'Lesson 1', vi: 'Bài học 1' },
                    aims: {
                        en: ['Talk about what makes a healthy lifestyle', 'Use indefinite quantifiers'],
                        vi: ['Nói về những gì tạo nên một lối sống lành mạnh', 'Sử dụng lượng từ bất định'],
                    },
                    vocabulary: [
                        { term: 'get (some) sleep', pronunciation: '/ɡet (səm) sliːp/', vietnamese: 'ngủ một chút' },
                        { term: 'eat fruit and vegetables', pronunciation: '/iːt fruːt ənd ˈvedʒtəblz/', vietnamese: 'ăn trái cây và rau' },
                        { term: 'eat fast food', pronunciation: '/iːt fæst fuːd/', vietnamese: 'ăn thức ăn nhanh' },
                        { term: 'drink soda', pronunciation: '/drɪŋk ˈsoʊdə/', vietnamese: 'uống soda' },
                        { term: 'healthy', pronunciation: '/ˈhelθi/', vietnamese: 'lành mạnh' },
                        { term: 'unhealthy', pronunciation: '/ʌnˈhelθi/', vietnamese: 'không lành mạnh' },
                    ],
                    grammar: [
                        { title: { en: 'Indefinite quantifiers', vi: 'Lượng từ bất định' }, explanation: { en: ['Use a little, not much, some, and lots of to say how much we do/have of something.', 'Use a little/not much with uncountable nouns. Use a lot/lots of with both uncountable and plural countable nouns.'], vi: ['Sử dụng a little, not much, some, và lots of để nói về số lượng chúng ta làm/có.', 'Sử dụng a little/not much với danh từ không đếm được. Sử dụng a lot/lots of với cả danh từ không đếm được và danh từ đếm được số nhiều.'] } },
                    ],
                    activities: [],
                }
            ]
        },
        {
            id: 3,
            title: { en: 'Unit 3: Music and Arts', vi: 'Bài 3: Âm nhạc và Nghệ thuật' },
            lessons: [
                {
                    id: 70301,
                    title: { en: 'Lesson 1', vi: 'Bài học 1' },
                    aims: {
                        en: ['Talk about music that you like', 'Use the Present Simple for facts'],
                        vi: ['Nói về loại nhạc bạn thích', 'Sử dụng thì Hiện tại đơn cho sự thật'],
                    },
                    vocabulary: [
                        { term: 'jazz', pronunciation: '/dʒæz/', vietnamese: 'nhạc jazz' },
                        { term: 'pop', pronunciation: '/pɑːp/', vietnamese: 'nhạc pop' },
                        { term: 'hip hop', pronunciation: '/ˈhɪp hɑːp/', vietnamese: 'nhạc hip hop' },
                        { term: 'classical music', pronunciation: '/ˈklæsɪkl ˈmjuːzɪk/', vietnamese: 'nhạc cổ điển' },
                        { term: 'rock', pronunciation: '/rɑːk/', vietnamese: 'nhạc rock' },
                        { term: 'country (music)', pronunciation: '/ˈkʌntri ˈmjuːzɪk/', vietnamese: 'nhạc đồng quê' },
                    ],
                    grammar: [
                        { title: { en: 'Present Simple for facts', vi: 'Thì Hiện tại đơn cho sự thật' }, explanation: { en: ['We can use the Present Simple to talk about things that we like and dislike, or to state facts.', 'I/You/We/They like jazz.', 'He/She/It likes hip hop.', 'Do you like pop? (Yes, I do./No, I don\'t.)'], vi: ['Chúng ta có thể sử dụng thì Hiện tại đơn để nói về những điều chúng ta thích và không thích, hoặc để nêu sự thật.', 'Tôi/Bạn/Chúng tôi/Họ thích nhạc jazz.', 'Anh ấy/Cô ấy/Nó thích nhạc hip hop.', 'Bạn có thích nhạc pop không? (Có./Không.)'] } },
                    ],
                    activities: [],
                }
            ]
        },
        {
            id: 4,
            title: { en: 'Unit 4: Community Services', vi: 'Bài 4: Dịch vụ cộng đồng' },
            lessons: [
                {
                    id: 70401,
                    title: { en: 'Lesson 1', vi: 'Bài học 1' },
                    aims: {
                        en: ["Suggest and plan a charity event", "Use 'should', 'Let\'s', and 'How about' to make suggestions"],
                        vi: ['Đề xuất và lên kế hoạch cho một sự kiện từ thiện', 'Sử dụng "should", "Let\'s", và "How about" để đưa ra đề nghị'],
                    },
                    vocabulary: [
                        { term: 'car wash', pronunciation: '/kɑːr wɑːʃ/', vietnamese: 'rửa xe' },
                        { term: 'bake sale', pronunciation: '/beɪk seɪl/', vietnamese: 'bán bánh gây quỹ' },
                        { term: 'craft fair', pronunciation: '/kræft fer/', vietnamese: 'hội chợ thủ công' },
                        { term: 'talent show', pronunciation: '/ˈtælənt ʃoʊ/', vietnamese: 'chương trình tài năng' },
                        { term: 'fun run', pronunciation: '/fʌn rʌn/', vietnamese: 'cuộc chạy vui' },
                    ],
                    grammar: [
                        { title: { en: "Using 'should', 'Let\'s', and 'How about' to make suggestions", vi: 'Sử dụng "should", "Let\'s", và "How about" để đưa ra đề nghị' }, explanation: { en: ['We can make suggestions to offer ideas or plans for someone to think about.', 'I think we should organize a fun run.', 'Let\'s have a fun run.', 'How about organizing a craft fair?'], vi: ['Chúng ta có thể đưa ra đề nghị để cung cấp ý tưởng hoặc kế hoạch cho ai đó suy nghĩ.', 'Tôi nghĩ chúng ta nên tổ chức một cuộc chạy vui.', 'Hãy tổ chức một cuộc chạy vui đi.', 'Còn việc tổ chức một hội chợ thủ công thì sao?'] } },
                    ],
                    activities: [],
                }
            ]
        },
        {
            id: 5,
            title: { en: 'Unit 5: Food and Drinks', vi: 'Bài 5: Đồ ăn và Thức uống' },
            lessons: [
                {
                    id: 70501,
                    title: { en: 'Lesson 1', vi: 'Bài học 1' },
                    aims: {
                        en: ['Talk about what food you need to buy', 'Use quantifiers and amounts', 'Ask for repetition'],
                        vi: ['Nói về thực phẩm bạn cần mua', 'Sử dụng các từ chỉ số lượng và khối lượng', 'Yêu cầu lặp lại'],
                    },
                    vocabulary: [
                        { term: 'spaghetti', pronunciation: '/spəˈɡeti/', vietnamese: 'mì Ý' },
                        { term: 'milliliters (ml)', pronunciation: '/ˈmɪliliːtərz/', vietnamese: 'mi-li-lít' },
                        { term: 'lemon', pronunciation: '/ˈlemən/', vietnamese: 'chanh vàng' },
                        { term: 'grams (g)', pronunciation: '/ɡræmz/', vietnamese: 'gam' },
                        { term: 'onion', pronunciation: '/ˈʌnjən/', vietnamese: 'hành tây' },
                        { term: 'teaspoon (tsp)', pronunciation: '/ˈtiːspuːn/', vietnamese: 'thìa cà phê' },
                        { term: 'tomato', pronunciation: '/təˈmeɪtoʊ/', vietnamese: 'cà chua' },
                    ],
                    grammar: [
                        { title: { en: 'Much and many', vi: 'Much và many' }, explanation: { en: ['We can use much and many for uncountable nouns (things you can\'t count) and plural countable nouns.', 'How much sugar do we need? - We need 100 grams of sugar.', 'How many eggs do we need? - We need two eggs.'], vi: ['Chúng ta có thể sử dụng much và many cho danh từ không đếm được và danh từ đếm được số nhiều.', 'Chúng ta cần bao nhiêu đường? - Chúng ta cần 100 gam đường.', 'Chúng ta cần bao nhiêu trứng? - Chúng ta cần hai quả trứng.'] } },
                    ],
                    activities: [],
                }
            ]
        },
        {
            id: 6,
            title: { en: 'Unit 6: Education', vi: 'Bài 6: Giáo dục' },
            lessons: [
                 {
                    id: 70601,
                    title: { en: 'Lesson 1', vi: 'Bài học 1' },
                    aims: {
                        en: ['Decline invitations and express obligations', 'Use the Present Simple and "have to"', 'Decline an invitation'],
                        vi: ['Từ chối lời mời và bày tỏ nghĩa vụ', 'Sử dụng thì Hiện tại đơn và "have to"', 'Từ chối một lời mời'],
                    },
                    vocabulary: [
                        { term: 'essay', pronunciation: '/ˈeseɪ/', vietnamese: 'bài luận' },
                        { term: 'project', pronunciation: '/ˈprɑːdʒekt/', vietnamese: 'dự án' },
                        { term: 'homework', pronunciation: '/ˈhoʊmwɜːrk/', vietnamese: 'bài tập về nhà' },
                        { term: 'book report', pronunciation: '/bʊk rɪˈpɔːrt/', vietnamese: 'báo cáo sách' },
                        { term: 'test', pronunciation: '/test/', vietnamese: 'bài kiểm tra' },
                        { term: 'presentation', pronunciation: '/ˌpriːzenˈteɪʃn/', vietnamese: 'bài thuyết trình' },
                    ],
                    grammar: [
                        { title: { en: 'have to', vi: 'have to' }, explanation: { en: ['We use have to + infinitive to talk about an action we need to do.', 'I/You/We/They have to study for a test.', 'He/She has to do homework.', 'Do I/you/we/they have to clean the classroom? (Yes, you do./No, you don\'t.)'], vi: ['Chúng ta sử dụng have to + động từ nguyên thể để nói về một hành động chúng ta cần làm.', 'Tôi/Bạn/Chúng tôi/Họ phải học bài cho bài kiểm tra.', 'Anh ấy/Cô ấy phải làm bài tập về nhà.', 'Tôi/bạn/chúng ta/họ có phải dọn dẹp lớp học không? (Có./Không.)'] } },
                    ],
                    activities: [],
                }
            ]
        },
        {
            id: 7,
            title: { en: 'Unit 7: Transportation', vi: 'Bài 7: Giao thông' },
            lessons: [
                 {
                    id: 70701,
                    title: { en: 'Lesson 1', vi: 'Bài học 1' },
                    aims: {
                        en: ['Describe and identify personal belongings', 'Use possessive pronouns and adjectives in order', 'Ask for confirmation'],
                        vi: ['Miêu tả và xác định đồ dùng cá nhân', 'Sử dụng đại từ sở hữu và tính từ theo thứ tự', 'Yêu cầu xác nhận'],
                    },
                    vocabulary: [
                        { term: 'boarding pass', pronunciation: '/ˈbɔːrdɪŋ pæs/', vietnamese: 'thẻ lên máy bay' },
                        { term: 'passport', pronunciation: '/ˈpæspɔːrt/', vietnamese: 'hộ chiếu' },
                        { term: 'customs', pronunciation: '/ˈkʌstəmz/', vietnamese: 'hải quan' },
                        { term: 'baggage claim', pronunciation: '/ˈbæɡɪdʒ kleɪm/', vietnamese: 'khu nhận hành lý' },
                        { term: 'suitcase', pronunciation: '/ˈsuːtkeɪs/', vietnamese: 'vali' },
                        { term: 'backpack', pronunciation: '/ˈbækpæk/', vietnamese: 'ba lô' },
                        { term: 'luggage', pronunciation: '/ˈlʌɡɪdʒ/', vietnamese: 'hành lý' },
                    ],
                    grammar: [
                        { title: { en: 'Ordering adjectives', vi: 'Trật tự tính từ' }, explanation: { en: ['We put adjectives in the order of size, age, color in our sentences.', 'Mine is a small new yellow backpack.'], vi: ['Chúng ta đặt các tính từ theo thứ tự kích thước, tuổi tác, màu sắc trong câu.', 'Của tôi là một chiếc ba lô màu vàng mới nhỏ.'] } },
                        { title: { en: 'Possessive Pronouns', vi: 'Đại từ sở hữu' }, explanation: { en: ['We use possessive pronouns to talk about what belongs to us.', 'Is that your suitcase? -> Mine is dark blue.'], vi: ['Chúng ta sử dụng đại từ sở hữu để nói về những gì thuộc về chúng ta.', 'Đó có phải là vali của bạn không? -> Của tôi màu xanh đậm.'] } },
                    ],
                    activities: [],
                }
            ]
        },
        {
            id: 8,
            title: { en: 'Unit 8: Festivals around the World', vi: 'Bài 8: Lễ hội trên khắp thế giới' },
            lessons: [
                 {
                    id: 70801,
                    title: { en: 'Lesson 1', vi: 'Bài học 1' },
                    aims: {
                        en: ['Talk about festivals around the world', 'Use the Future Simple'],
                        vi: ['Nói về các lễ hội trên khắp thế giới', 'Sử dụng thì Tương lai đơn'],
                    },
                    vocabulary: [
                        { term: 'lantern', pronunciation: '/ˈlæntərn/', vietnamese: 'đèn lồng' },
                        { term: 'bonfire', pronunciation: '/ˈbɑːnfaɪər/', vietnamese: 'lửa trại' },
                        { term: 'race', pronunciation: '/reɪs/', vietnamese: 'cuộc đua' },
                        { term: 'eating competition', pronunciation: '/ˈiːtɪŋ ˌkɑːmpəˈtɪʃn/', vietnamese: 'cuộc thi ăn' },
                        { term: 'sculpture', pronunciation: '/ˈskʌlptʃər/', vietnamese: 'tác phẩm điêu khắc' },
                        { term: 'water fight', pronunciation: '/ˈwɔːtər faɪt/', vietnamese: 'trận chiến nước' },
                        { term: 'hot air balloon', pronunciation: '/hɑːt er bəˈluːn/', vietnamese: 'khinh khí cầu' },
                    ],
                    grammar: [
                        { title: { en: 'Future Simple', vi: 'Thì Tương lai đơn' }, explanation: { en: ['We can use the Future Simple to give or ask for information about events in the future.', 'I/You/We/They/He/She/It will/will not/won\'t take place at the festival.', 'Will The Big Gs play this year? (Yes, they will./No, they won\'t.)'], vi: ['Chúng ta có thể sử dụng thì Tương lai đơn để cung cấp hoặc hỏi thông tin về các sự kiện trong tương lai.', 'Tôi/Bạn/Chúng tôi/Họ/Anh ấy/Cô ấy/Nó sẽ/sẽ không diễn ra tại lễ hội.', 'The Big Gs có chơi năm nay không? (Có./Không.)'] } },
                    ],
                    activities: [],
                }
            ]
        },
        {
            id: 9,
            title: { en: 'Unit 9: English in the World', vi: 'Bài 9: Tiếng Anh trên thế giới' },
            lessons: [
                 {
                    id: 70901,
                    title: { en: 'Lesson 1', vi: 'Bài học 1' },
                    aims: {
                        en: ['Talk about tourist attractions and cultures of English-speaking countries', 'Use articles'],
                        vi: ['Nói về các điểm du lịch và văn hóa của các nước nói tiếng Anh', 'Sử dụng mạo từ'],
                    },
                    vocabulary: [
                        { term: 'tour guide', pronunciation: '/tʊr ɡaɪd/', vietnamese: 'hướng dẫn viên du lịch' },
                        { term: 'stadium', pronunciation: '/ˈsteɪdiəm/', vietnamese: 'sân vận động' },
                        { term: 'flight', pronunciation: '/flaɪt/', vietnamese: 'chuyến bay' },
                        { term: 'historic', pronunciation: '/hɪˈstɔːrɪk/', vietnamese: 'cổ kính, có tính lịch sử' },
                        { term: 'jog', pronunciation: '/dʒɑːɡ/', vietnamese: 'chạy bộ' },
                        { term: 'ferry', pronunciation: '/ˈferi/', vietnamese: 'phà' },
                    ],
                    grammar: [
                        { title: { en: 'Articles', vi: 'Mạo từ' }, explanation: { en: ['Use the zero article (Ø) with the names of streets, cities, islands, lakes, rivers, beaches, towns, and most countries.', 'Use the with some countries (the United States of America, the United Kingdom, the Netherlands, the Philippines).', 'Use the with famous buildings, museums, most hotels, and restaurants.'], vi: ['Sử dụng mạo từ rỗng (Ø) với tên đường, thành phố, đảo, hồ, sông, bãi biển, thị trấn và hầu hết các quốc gia.', 'Sử dụng the với một số quốc gia (Hợp chủng quốc Hoa Kỳ, Vương quốc Anh, Hà Lan, Philippines).', 'Sử dụng the với các tòa nhà nổi tiếng, bảo tàng, hầu hết các khách sạn và nhà hàng.'] } },
                    ],
                    activities: [],
                }
            ]
        },
        {
            id: 10,
            title: { en: 'Unit 10: Energy Sources', vi: 'Bài 10: Nguồn năng lượng' },
            lessons: [
                 {
                    id: 71001,
                    title: { en: 'Lesson 1', vi: 'Bài học 1' },
                    aims: {
                        en: ['Talk about types and sources of energy', 'Use "more...than..." and "less...than..."', 'Ask for clarification'],
                        vi: ['Nói về các loại và nguồn năng lượng', 'Sử dụng "more...than..." và "less...than..."', 'Yêu cầu làm rõ'],
                    },
                    vocabulary: [
                        { term: 'renewable energy', pronunciation: '/rɪˈnuːəbl ˈenərdʒi/', vietnamese: 'năng lượng tái tạo' },
                        { term: 'non-renewable energy', pronunciation: '/ˌnɑːn rɪˈnuːəbl ˈenərdʒi/', vietnamese: 'năng lượng không tái tạo' },
                        { term: 'solar power', pronunciation: '/ˈsoʊlər ˈpaʊər/', vietnamese: 'năng lượng mặt trời' },
                        { term: 'wind power', pronunciation: '/wɪnd ˈpaʊər/', vietnamese: 'năng lượng gió' },
                        { term: 'oil', pronunciation: '/ɔɪl/', vietnamese: 'dầu' },
                        { term: 'coal', pronunciation: '/koʊl/', vietnamese: 'than đá' },
                        { term: 'natural gas', pronunciation: '/ˈnætʃərəl ɡæs/', vietnamese: 'khí tự nhiên' },
                        { term: 'hydropower', pronunciation: '/ˈhaɪdroʊpaʊər/', vietnamese: 'thủy điện' },
                    ],
                    grammar: [
                        { title: { en: 'more...than / less...than', vi: 'more...than / less...than' }, explanation: { en: ['We use more...than... and less...than... to compare different things.', 'Springfield uses 40% more coal than Twin Peaks.', 'Twin Peaks uses 40% less coal than Springfield.'], vi: ['Chúng ta sử dụng more...than... và less...than... để so sánh những thứ khác nhau.', 'Springfield sử dụng nhiều hơn 40% than đá so với Twin Peaks.', 'Twin Peaks sử dụng ít hơn 40% than đá so với Springfield.'] } },
                    ],
                    activities: [],
                }
            ]
        }
    ]
};