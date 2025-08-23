import { CurriculumLevel } from '../types';

export const prepareToHighData: CurriculumLevel = {
    level: 100,
    title: { en: 'Prepare to High', vi: 'Củng cố THPT' },
    subtitle: { en: 'English File Pre-Intermediate', vi: 'English File Pre-Intermediate' },
    ebookPdfUrl: 'https://drive.google.com/file/d/1fImgS2uVsefwwqnaYSNKctXKK540ht0A/view?usp=sharing',
    units: [
        {
            id: 1001,
            title: { en: 'Foundation', vi: 'Nền tảng' },
            lessons: [
                {
                    id: 100101, day: 1,
                    title: { en: 'A world of words: Introductions', vi: 'Buổi 1-2: Giới thiệu, làm quen' },
                    aims: { en: ['Introduce oneself, talk about hobbies'], vi: ['Giới thiệu bản thân, nói về sở thích'] },
                    vocabulary: [{ term: 'Greeting', vietnamese: 'Chào hỏi' }, { term: 'Hobby', vietnamese: 'Sở thích' }, { term: 'Habit', vietnamese: 'Thói quen' }],
                    grammar: [{ title: { en: 'Present Simple & verb "to be"', vi: 'Thì hiện tại đơn & động từ "to be"' }, explanation: { en: ['Using Present Simple for habits and facts.'], vi: ['Sử dụng thì Hiện tại đơn cho thói quen và sự thật.'] } }],
                    activities: [{ type: 'Practice', description: { en: ['Practice introductions'], vi: ['Thực hành giới thiệu bản thân'] } }, { type: 'Test', description: { en: ['Speaking Test 1: Introduce yourself, talk about hobbies.'], vi: ['Speaking Test 1: Giới thiệu bản thân, sở thích.'] } }]
                },
                {
                    id: 100102, day: 2,
                    title: { en: 'Family and friends', vi: 'Buổi 3-4: Gia đình, bạn bè' },
                    aims: { en: ['Describe family and friends'], vi: ['Miêu tả gia đình và bạn bè'] },
                    vocabulary: [{ term: 'Family', vietnamese: 'Gia đình' }, { term: 'Friends', vietnamese: 'Bạn bè' }, { term: 'Relationship', vietnamese: 'Mối quan hệ' }],
                    grammar: [{ title: { en: 'Verb "to have", Present Continuous', vi: 'Động từ "to have", thì hiện tại tiếp diễn' }, explanation: { en: ['Using "have/has" for possession.', 'Using Present Continuous for actions happening now.'], vi: ['Sử dụng "have/has" cho sở hữu.', 'Sử dụng thì Hiện tại tiếp diễn cho hành động đang diễn ra.'] } }],
                    activities: [{ type: 'Practice', description: { en: ['Group discussion about families'], vi: ['Thảo luận nhóm về gia đình'] } }, { type: 'Test', description: { en: ['Speaking Test 2: Describe a close friend.'], vi: ['Speaking Test 2: Mô tả một người bạn thân.'] } }]
                },
                {
                    id: 100103, day: 3,
                    title: { en: 'Daily life', vi: 'Buổi 5-6: Cuộc sống hàng ngày' },
                    aims: { en: ['Describe daily activities'], vi: ['Mô tả các hoạt động hàng ngày'] },
                    vocabulary: [{ term: 'Daily routine', vietnamese: 'Thói quen hàng ngày' }, { term: 'Activity', vietnamese: 'Hoạt động' }],
                    grammar: [{ title: { en: 'Present Simple vs. Present Continuous', vi: 'Hiện tại đơn vs. Hiện tại tiếp diễn' }, explanation: { en: ['Comparing routines and current actions.'], vi: ['So sánh thói quen và hành động hiện tại.'] } }],
                    activities: [{ type: 'Practice', description: { en: ['Write about a typical day'], vi: ['Viết về một ngày điển hình'] } }]
                },
                {
                    id: 100104, day: 4,
                    title: { en: 'Free time', vi: 'Buổi 7-8: Thời gian rảnh' },
                    aims: { en: ['Talk about hobbies and free time'], vi: ['Nói về sở thích và thời gian rảnh'] },
                    vocabulary: [{ term: 'Free time', vietnamese: 'Thời gian rảnh' }, { term: 'Hobby', vietnamese: 'Sở thích' }],
                    grammar: [{ title: { en: 'Present Perfect', vi: 'Thì hiện tại hoàn thành' }, explanation: { en: ['Talking about experiences.'], vi: ['Nói về trải nghiệm.'] } }],
                    activities: [{ type: 'Practice', description: { en: ['Discuss hobbies'], vi: ['Thảo luận về sở thích'] } }, { type: 'Test', description: { en: ['Speaking Test 3: Talk about your hobbies.'], vi: ['Speaking Test 3: Nói về sở thích của bạn.'] } }]
                },
                {
                    id: 100105, day: 5,
                    title: { en: 'Places and travel', vi: 'Buổi 9-10: Du lịch, kỳ nghỉ' },
                    aims: { en: ['Talk about travel and vacations'], vi: ['Nói về du lịch và kỳ nghỉ'] },
                    vocabulary: [{ term: 'Travel', vietnamese: 'Du lịch' }, { term: 'Vacation', vietnamese: 'Kỳ nghỉ' }],
                    grammar: [{ title: { en: 'Past Simple, Past Perfect', vi: 'Thì quá khứ đơn, quá khứ hoàn thành' }, explanation: { en: ['Describing past events in sequence.'], vi: ['Mô tả các sự kiện trong quá khứ theo trình tự.'] } }],
                    activities: [{ type: 'Practice', description: { en: ['Write about a trip'], vi: ['Viết về một chuyến đi'] } }, { type: 'Test', description: { en: ['Speaking Test 4: Describe a memorable vacation.'], vi: ['Speaking Test 4: Mô tả một kỳ nghỉ đáng nhớ.'] } }]
                },
                {
                    id: 100106, day: 6,
                    title: { en: 'Health and sport', vi: 'Buổi 11-12: Sức khỏe, thể thao' },
                    aims: { en: ['Discuss health and sports'], vi: ['Thảo luận về sức khỏe và thể thao'] },
                    vocabulary: [{ term: 'Health', vietnamese: 'Sức khỏe' }, { term: 'Sport', vietnamese: 'Thể thao' }],
                    grammar: [{ title: { en: 'Modal verbs (can, could)', vi: 'Động từ khiếm khuyết (can, could)' }, explanation: { en: ['Expressing ability.'], vi: ['Diễn đạt khả năng.'] } }],
                    activities: [{ type: 'Practice', description: { en: ['Discuss sports and health'], vi: ['Thảo luận về thể thao và sức khỏe'] } }]
                },
                {
                    id: 100107, day: 7,
                    title: { en: 'Weather and environment', vi: 'Buổi 13-14: Thời tiết, môi trường' },
                    aims: { en: ['Discuss weather and the environment'], vi: ['Thảo luận về thời tiết và môi trường'] },
                    vocabulary: [{ term: 'Weather', vietnamese: 'Thời tiết' }, { term: 'Environment', vietnamese: 'Môi trường' }],
                    grammar: [{ title: { en: 'Future Simple, Conditional Type 1', vi: 'Thì tương lai đơn, Câu điều kiện loại 1' }, explanation: { en: ['Making predictions and talking about possibilities.'], vi: ['Đưa ra dự đoán và nói về các khả năng.'] } }],
                    activities: [{ type: 'Practice', description: { en: ['Write about protecting the environment'], vi: ['Viết về bảo vệ môi trường'] } }, { type: 'Test', description: { en: ['Speaking Test 5: Talk about the environment.'], vi: ['Speaking Test 5: Nói về môi trường.'] } }]
                },
                {
                    id: 100108, day: 8,
                    title: { en: 'Culture and customs', vi: 'Buổi 15-16: Văn hóa, phong tục' },
                    aims: { en: ['Describe cultures and customs'], vi: ['Mô tả văn hóa và phong tục'] },
                    vocabulary: [{ term: 'Culture', vietnamese: 'Văn hóa' }, { term: 'Customs', vietnamese: 'Phong tục' }],
                    grammar: [{ title: { en: 'Conditional Type 2', vi: 'Câu điều kiện loại 2' }, explanation: { en: ['Talking about imaginary situations.'], vi: ['Nói về các tình huống tưởng tượng.'] } }],
                    activities: [{ type: 'Practice', description: { en: ['Present about a traditional custom'], vi: ['Thuyết trình về một phong tục truyền thống'] } }, { type: 'Test', description: { en: ['Speaking Test 6: Describe a custom.'], vi: ['Speaking Test 6: Mô tả một phong tục.'] } }]
                },
                 {
                    id: 100109, day: 9,
                    title: { en: 'Technology and media', vi: 'Buổi 17-18: Công nghệ, giải trí' },
                    aims: { en: ['Discuss technology and entertainment'], vi: ['Thảo luận về công nghệ và giải trí'] },
                    vocabulary: [{ term: 'Technology', vietnamese: 'Công nghệ' }, { term: 'Entertainment', vietnamese: 'Giải trí' }],
                    grammar: [{ title: { en: 'Present Perfect Continuous', vi: 'Thì hiện tại hoàn thành tiếp diễn' }, explanation: { en: ['Describing ongoing actions.'], vi: ['Mô tả các hành động đang diễn ra.'] } }],
                    activities: [{ type: 'Practice', description: { en: ['Discuss technology', 'Write a movie review'], vi: ['Thảo luận về công nghệ', 'Viết bài đánh giá phim'] } }]
                },
                {
                    id: 100110, day: 10,
                    title: { en: 'Shopping and fashion', vi: 'Buổi 19-20: Mua sắm, thời trang' },
                    aims: { en: ['Talk about shopping and fashion'], vi: ['Nói về mua sắm và thời trang'] },
                    vocabulary: [{ term: 'Shopping', vietnamese: 'Mua sắm' }, { term: 'Fashion', vietnamese: 'Thời trang' }],
                    grammar: [{ title: { en: 'Conditional Type 3', vi: 'Câu điều kiện loại 3' }, explanation: { en: ['Talking about unreal past situations.'], vi: ['Nói về các tình huống không có thật trong quá khứ.'] } }],
                    activities: [{ type: 'Practice', description: { en: ['Discuss fashion trends'], vi: ['Thảo luận về xu hướng thời trang'] } }, { type: 'Test', description: { en: ['Speaking Test 7: Talk about fashion.'], vi: ['Speaking Test 7: Nói về thời trang.'] } }]
                },
                {
                    id: 100111, day: 11,
                    title: { en: 'Transport and work', vi: 'Buổi 21-22: Giao thông, nghề nghiệp' },
                    aims: { en: ['Discuss transportation and careers'], vi: ['Thảo luận về giao thông và nghề nghiệp'] },
                    vocabulary: [{ term: 'Transport', vietnamese: 'Giao thông' }, { term: 'Work', vietnamese: 'Công việc' }],
                    grammar: [{ title: { en: 'Modal verbs (must, have to)', vi: 'Động từ khiếm khuyết (must, have to)' }, explanation: { en: ['Expressing obligation.'], vi: ['Diễn đạt nghĩa vụ.'] } }],
                    activities: [{ type: 'Practice', description: { en: ['Write about your dream job'], vi: ['Viết về công việc mơ ước của bạn'] } }]
                },
                {
                    id: 100112, day: 12,
                    title: { en: 'Events and festivals', vi: 'Buổi 23-24: Sự kiện, lễ hội' },
                    aims: { en: ['Describe events and festivals'], vi: ['Mô tả các sự kiện và lễ hội'] },
                    vocabulary: [{ term: 'Events', vietnamese: 'Sự kiện' }, { term: 'Festivals', vietnamese: 'Lễ hội' }],
                    grammar: [{ title: { en: 'Clauses of cause and effect', vi: 'Mệnh đề chỉ nguyên nhân, kết quả' }, explanation: { en: ['Explaining reasons and outcomes.'], vi: ['Giải thích lý do và kết quả.'] } }],
                    activities: [{ type: 'Practice', description: { en: ['Present about a festival'], vi: ['Thuyết trình về một lễ hội'] } }, { type: 'Test', description: { en: ['Speaking Test 8: Talk about a festival.'], vi: ['Speaking Test 8: Nói về một lễ hội.'] } }]
                },
                {
                    id: 100113, day: 13,
                    title: { en: 'IELTS/TOEFL Practice', vi: 'Buổi 25-36: Ôn tập và luyện thi IELTS/TOEFL' },
                    aims: { en: ['Practice for IELTS/TOEFL exams'], vi: ['Luyện thi IELTS/TOEFL'] },
                    vocabulary: [{ term: 'Exam practice', vietnamese: 'Luyện thi' }],
                    grammar: [{ title: { en: 'Comprehensive Review', vi: 'Ôn tập tổng hợp' }, explanation: { en: ['Reviewing all learned grammar points.'], vi: ['Ôn tập lại tất cả các điểm ngữ pháp đã học.'] } }],
                    activities: [{ type: 'Practice', description: { en: ['Mock tests (Listening, Reading, Writing, Speaking)'], vi: ['Thi thử (Nghe, Đọc, Viết, Nói)'] } }, { type: 'Test', description: { en: ['Speaking Test 9: Comprehensive test.'], vi: ['Speaking Test 9: Kiểm tra tổng hợp.'] } }]
                }
            ]
        }
    ]
};

const createLessonsForUnit = (unitId: number, baseTitle: { en: string; vi: string; }, sessions: { en: string; vi: string; }[]) => {
    return sessions.map((session, index) => ({
        id: unitId * 100 + index + 1,
        day: index + 1,
        title: session,
        aims: { en: [`Develop skills related to ${baseTitle.en}`], vi: [`Phát triển kỹ năng liên quan đến ${baseTitle.vi}`] },
        vocabulary: [],
        grammar: [],
        activities: []
    }));
};

export const theNewHigh1Data: CurriculumLevel = {
    level: 10,
    title: { en: 'The New High 1', vi: 'The New High 1' },
    subtitle: { en: 'Grade 10 - English File Intermediate', vi: 'Lớp 10 - English File Intermediate' },
    ebookPdfUrl: 'https://drive.google.com/file/d/1VOtQzgRX5-C_qLstcaOnheszohbHce6H/view?usp=drive_link',
    units: [
        { id: 1001, title: { en: 'Introduction', vi: 'Giới thiệu và làm quen' } },
        { id: 1002, title: { en: 'Family and Relationships', vi: 'Gia đình và mối quan hệ' } },
        { id: 1003, title: { en: 'School and Learning', vi: 'Trường học và học tập' } },
        { id: 1004, title: { en: 'Daily Life', vi: 'Cuộc sống hàng ngày' } },
        { id: 1005, title: { en: 'Leisure and Hobbies', vi: 'Thời gian rảnh và sở thích' } },
        { id: 1006, title: { en: 'Travel and Holidays', vi: 'Du lịch và kỳ nghỉ' } },
        { id: 1007, title: { en: 'Health and Fitness', vi: 'Sức khỏe và thể thao' } },
        { id: 1008, title: { en: 'Weather and Climate', vi: 'Thời tiết và khí hậu' } },
        { id: 1009, title: { en: 'Environment', vi: 'Môi trường và thiên nhiên' } },
        { id: 1010, title: { en: 'Culture and Customs', vi: 'Văn hóa và phong tục' } },
        { id: 1011, title: { en: 'Technology and Inventions', vi: 'Công nghệ và phát minh' } },
        { id: 1012, title: { en: 'Arts and Music', vi: 'Nghệ thuật và âm nhạc' } },
        { id: 1013, title: { en: 'Film and Entertainment', vi: 'Phim ảnh và giải trí' } },
        { id: 1014, title: { en: 'Shopping and Fashion', vi: 'Mua sắm và thời trang' } },
        { id: 1015, title: { en: 'Transportation', vi: 'Giao thông và phương tiện' } },
        { id: 1016, title: { en: 'Work and Careers', vi: 'Công việc và nghề nghiệp' } },
        { id: 1017, title: { en: 'Science and Research', vi: 'Khoa học và nghiên cứu' } },
        { id: 1018, title: { en: 'Events and Festivals', vi: 'Các sự kiện và lễ hội' } },
        { id: 1019, title: { en: 'Food and Drink', vi: 'Thực phẩm và đồ uống' } },
        { id: 1020, title: { en: 'Health and Nutrition', vi: 'Sức khỏe và dinh dưỡng' } },
        { id: 1021, title: { en: 'Environment and Ecology', vi: 'Môi trường và sinh thái' } },
        { id: 1022, title: { en: 'The Animal World', vi: 'Thế giới động vật' } },
        { id: 1023, title: { en: 'Plants and Trees', vi: 'Thực vật và cây cối' } },
        { id: 1024, title: { en: 'Outdoor Activities', vi: 'Các hoạt động ngoài trời' } },
    ].map((unit, index) => ({
        ...unit,
        lessons: createLessonsForUnit(unit.id, unit.title, Array.from({ length: 6 }, (_, i) => ({ en: `Session ${index * 6 + i + 1}`, vi: `Buổi ${index * 6 + i + 1}` })))
    }))
};

export const theNewHigh2Data: CurriculumLevel = {
    level: 11,
    title: { en: 'The New High 2', vi: 'The New High 2' },
    subtitle: { en: 'Grade 11 - English File Upper-Intermediate', vi: 'Lớp 11 - English File Upper-Intermediate' },
    ebookPdfUrl: 'https://drive.google.com/file/d/1T-FfoJUUbuyDDunohmy-Q-meHntx5zqD/view?usp=drive_link',
    units: [
        { id: 1101, title: { en: 'Friendship and Love', vi: 'Tình bạn và tình yêu' } },
        { id: 1102, title: { en: 'Family and Relationships', vi: 'Gia đình và mối quan hệ' } },
        { id: 1103, title: { en: 'Living Environment', vi: 'Môi trường sống' } },
        { id: 1104, title: { en: 'City and Countryside', vi: 'Thành phố và nông thôn' } },
        { id: 1105, title: { en: 'Careers and Future', vi: 'Nghề nghiệp và tương lai' } },
        { id: 1106, title: { en: 'Social Issues', vi: 'Các vấn đề xã hội' } },
        { id: 1107, title: { en: 'Nature and Science', vi: 'Thiên nhiên và khoa học' } },
        { id: 1108, title: { en: 'World Cultures', vi: 'Văn hóa các nước' } },
        { id: 1109, title: { en: 'Travel and Exploration', vi: 'Du lịch và khám phá' } },
        { id: 1110, title: { en: 'Sports and Health', vi: 'Thể thao và sức khỏe' } },
        { id: 1111, title: { en: 'Books and Literature', vi: 'Sách và văn học' } },
        { id: 1112, title: { en: 'History and Events', vi: 'Lịch sử và sự kiện' } },
        { id: 1113, title: { en: 'Economy and Commerce', vi: 'Kinh tế và thương mại' } },
        { id: 1114, title: { en: 'Politics and Society', vi: 'Chính trị và xã hội' } },
        { id: 1115, title: { en: 'Technology and Digital Life', vi: 'Công nghệ và cuộc sống số' } },
        { id: 1116, title: { en: 'Environment and Climate Change', vi: 'Môi trường và biến đổi khí hậu' } },
        { id: 1117, title: { en: 'Ethics and Philosophy', vi: 'Đạo đức và triết học' } },
        { id: 1118, title: { en: 'Arts and Culture', vi: 'Nghệ thuật và văn hóa' } },
        { id: 1119, title: { en: 'Sustainable Development', vi: 'Phát triển bền vững' } },
        { id: 1120, title: { en: 'Psychology and Human Behavior', vi: 'Tâm lý học và hành vi con người' } },
        { id: 1121, title: { en: 'Education and Learning Methods', vi: 'Giáo dục và phương pháp học tập' } },
        { id: 1122, title: { en: 'Health and Wellness', vi: 'Y tế và chăm sóc sức khỏe' } },
        { id: 1123, title: { en: 'Environment and Ecology', vi: 'Môi trường và sinh thái' } },
        { id: 1124, title: { en: 'The Animal World', vi: 'Thế giới động vật' } },
    ].map((unit, index) => ({
        ...unit,
        lessons: createLessonsForUnit(unit.id, unit.title, Array.from({ length: 6 }, (_, i) => ({ en: `Session ${index * 6 + i + 1}`, vi: `Buổi ${index * 6 + i + 1}` })))
    }))
};

export const theNewHigh3Data: CurriculumLevel = {
    level: 12,
    title: { en: 'The New High 3', vi: 'The New High 3' },
    subtitle: { en: 'Grade 12 - English File Advanced', vi: 'Lớp 12 - English File Advanced' },
    ebookPdfUrl: 'https://drive.google.com/file/d/1YKCWeMP4Mqdfv-piL_g6UwQLfze84Zog/view?usp=drive_link',
    units: [
        { id: 1201, title: { en: 'Books and Literature', vi: 'Sách và văn học' } },
        { id: 1202, title: { en: 'History and Events', vi: 'Lịch sử và sự kiện' } },
        { id: 1203, title: { en: 'Economy and Commerce', vi: 'Kinh tế và thương mại' } },
        { id: 1204, title: { en: 'Politics and Society', vi: 'Chính trị và xã hội' } },
        { id: 1205, title: { en: 'Technology and Digital Life', vi: 'Công nghệ và cuộc sống số' } },
        { id: 1206, title: { en: 'Environment and Climate Change', vi: 'Môi trường và biến đổi khí hậu' } },
        { id: 1207, title: { en: 'Ethics and Philosophy', vi: 'Đạo đức và triết học' } },
        { id: 1208, title: { en: 'Arts and Culture', vi: 'Nghệ thuật và văn hóa' } },
        { id: 1209, title: { en: 'Psychology and Human Behavior', vi: 'Tâm lý học và hành vi con người' } },
        { id: 1210, title: { en: 'Education and Learning Methods', vi: 'Giáo dục và phương pháp học tập' } },
        { id: 1211, title: { en: 'Health and Wellness', vi: 'Y tế và chăm sóc sức khỏe' } },
        { id: 1212, title: { en: 'Environment and Ecology', vi: 'Môi trường và sinh thái' } },
        { id: 1213, title: { en: 'The Animal World', vi: 'Thế giới động vật' } },
        { id: 1214, title: { en: 'Friendship and Love', vi: 'Tình bạn và tình yêu' } },
        { id: 1215, title: { en: 'Family and Relationships', vi: 'Gia đình và mối quan hệ' } },
        { id: 1216, title: { en: 'Living Environment', vi: 'Môi trường sống' } },
        { id: 1217, title: { en: 'City and Countryside', vi: 'Thành phố và nông thôn' } },
        { id: 1218, title: { en: 'Careers and Future', vi: 'Nghề nghiệp và tương lai' } },
        { id: 1219, title: { en: 'Social Issues', vi: 'Các vấn đề xã hội' } },
        { id: 1220, title: { en: 'Nature and Science', vi: 'Thiên nhiên và khoa học' } },
        { id: 1221, title: { en: 'World Cultures', vi: 'Văn hóa các nước' } },
        { id: 1222, title: { en: 'Travel and Exploration', vi: 'Du lịch và khám phá' } },
        { id: 1223, title: { en: 'Sports and Health', vi: 'Thể thao và sức khỏe' } },
        { id: 1224, title: { en: 'Sustainable Development', vi: 'Phát triển bền vững' } },
    ].map((unit, index) => ({
        ...unit,
        lessons: createLessonsForUnit(unit.id, unit.title, Array.from({ length: 6 }, (_, i) => ({ en: `Session ${index * 6 + i + 1}`, vi: `Buổi ${index * 6 + i + 1}` })))
    }))
};