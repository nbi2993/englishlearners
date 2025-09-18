
import { CurriculumLevel } from '../types';

const GD_BASE = 'https://storage.googleapis.com/maker-suite-project-files-prod/upload/flashcard_images/goaldigger_';
const SM_BASE = 'https://storage.googleapis.com/maker-suite-project-files-prod/upload/flashcard_images/superminds_';

export const gd3Data: CurriculumLevel = {
    level: 3,
    title: { en: 'Goaldigger 3', vi: 'Goaldigger 3' },
    subtitle: { en: 'Preschool - Ages 5', vi: 'Mầm non - 5 tuổi' },
    ebookPdfUrl: 'https://drive.google.com/file/d/1kiQOoeC69I3ZMUZHiUNkA1mfQkdVhMz6/view',
    units: [
        {
            id: 301,
            title: { en: 'Unit 1: The World Around Me', vi: 'Bài 1: Thế giới quanh em' },
            lessons: [
                {
                    id: 30101,
                    title: { en: 'Daily & Home Activities', vi: 'Hoạt động hàng ngày & ở nhà' },
                    aims: {
                        en: ['Talk about daily routines.', 'Talk about chores at home.'],
                        vi: ['Nói về các thói quen hàng ngày.', 'Nói về các công việc nhà.']
                    },
                    vocabulary: [
                        { term: 'take a bath', pronunciation: '/teɪk ə bæθ/', vietnamese: 'tắm', imageUrl: `${SM_BASE}bath.png` },
                        { term: 'eat breakfast', pronunciation: '/iːt ˈbrɛkfəst/', vietnamese: 'ăn sáng', imageUrl: `${SM_BASE}eat_breakfast.png` },
                        { term: 'walk the dog', pronunciation: '/wɔk ðə dɔɡ/', vietnamese: 'dắt chó đi dạo', imageUrl: `${GD_BASE}walk_dog.png` },
                        { term: 'do homework', pronunciation: '/du ˈhoʊmˌwɜrk/', vietnamese: 'làm bài tập về nhà', imageUrl: `${GD_BASE}homework.png` },
                        { term: 'watch TV', pronunciation: '/wɑtʃ ˌtiˈvi/', vietnamese: 'xem TV', imageUrl: `${GD_BASE}watch_tv.png` },
                        { term: 'sleep', pronunciation: '/slip/', vietnamese: 'ngủ', imageUrl: `${GD_BASE}sleep.png` },
                        { term: 'clean', pronunciation: '/klin/', vietnamese: 'dọn dẹp', imageUrl: `${GD_BASE}clean.png` },
                        { term: 'water flowers', pronunciation: '/ˈwɔtər ˈflaʊərz/', vietnamese: 'tưới hoa', imageUrl: `${GD_BASE}water_flowers.png` },
                        { term: 'get dressed', pronunciation: '/ɡɛt drɛst/', vietnamese: 'mặc quần áo' },
                        { term: 'brush teeth', pronunciation: '/brʌʃ tiːθ/', vietnamese: 'đánh răng' },
                        { term: 'read a book', pronunciation: '/riːd ə bʊk/', vietnamese: 'đọc sách' },
                        { term: 'go to school', pronunciation: '/ɡoʊ tuː skuːl/', vietnamese: 'đi học' },
                    ],
                    grammar: [{
                        title: { en: 'Talking about routines', vi: 'Nói về thói quen' },
                        explanation: { en: ["Use Present Simple to talk about what you do.", "Example: I eat breakfast in the morning."], vi: ["Sử dụng thì Hiện tại đơn để nói về những gì bạn làm.", "Ví dụ: Tôi ăn sáng vào buổi sáng."] }
                    }],
                    activities: [{
                        type: 'Practice',
                        description: { en: ['Connect and color pictures of activities (Worksheet 1, 3, 5, 7).', 'Tick the activities you do in the evening or at home (Worksheet 4, 8).'], vi: ['Nối và tô màu tranh các hoạt động (Bài tập 1, 3, 5, 7).', 'Đánh dấu các hoạt động bạn làm vào buổi tối hoặc ở nhà (Bài tập 4, 8).'] }
                    }]
                },
                {
                    id: 30102,
                    title: { en: 'Weather & Seasons', vi: 'Thời tiết & Các mùa' },
                    aims: {
                        en: ['Describe the weather.', 'Talk about activities for different seasons.'],
                        vi: ['Mô tả thời tiết.', 'Nói về các hoạt động cho các mùa khác nhau.']
                    },
                    vocabulary: [
                        { term: 'sunny', pronunciation: '/ˈsʌni/', vietnamese: 'nắng', imageUrl: `${GD_BASE}sunny.png` },
                        { term: 'cloudy', pronunciation: '/ˈklaʊdi/', vietnamese: 'nhiều mây', imageUrl: `${GD_BASE}cloudy.png` },
                        { term: 'rainy', pronunciation: '/ˈreɪni/', vietnamese: 'mưa', imageUrl: `${GD_BASE}rainy.png` },
                        { term: 'windy', pronunciation: '/ˈwɪndi/', vietnamese: 'gió', imageUrl: `${GD_BASE}windy.png` },
                        { term: 'hot', pronunciation: '/hɑt/', vietnamese: 'nóng', imageUrl: `${GD_BASE}hot.png` },
                        { term: 'cold', pronunciation: '/koʊld/', vietnamese: 'lạnh', imageUrl: `${GD_BASE}cold.png` },
                        { term: 'summer', pronunciation: '/ˈsʌmər/', vietnamese: 'mùa hè', imageUrl: `${GD_BASE}summer.png` },
                        { term: 'autumn', pronunciation: '/ˈɔtəm/', vietnamese: 'mùa thu', imageUrl: `${GD_BASE}autumn.png` },
                        { term: 'winter', pronunciation: '/ˈwɪntər/', vietnamese: 'mùa đông', imageUrl: `${GD_BASE}winter.png` },
                        { term: 'snowy', pronunciation: '/ˈsnoʊi/', vietnamese: 'có tuyết' },
                        { term: 'stormy', pronunciation: '/ˈstɔːrmi/', vietnamese: 'bão' },
                        { term: 'spring', pronunciation: '/sprɪŋ/', vietnamese: 'mùa xuân' },
                        { term: 'foggy', pronunciation: '/ˈfɔːɡi/', vietnamese: 'có sương mù' },
                    ],
                    grammar: [{
                        title: { en: "What's the weather like?", vi: "Thời tiết thế nào?" },
                        explanation: { en: ["Ask about the weather using 'What's the weather like?'", "Answer with 'It's sunny.'"], vi: ["Hỏi về thời tiết bằng 'What's the weather like?'", "Trả lời bằng 'Trời nắng.'"] }
                    }],
                    activities: [{
                        type: 'Practice',
                        description: { en: ['Connect pictures related to seasons (Worksheet 13).', 'Connect weather to feelings and activities (Worksheet 14).', 'Color weather phenomena (Worksheet 15).'], vi: ['Nối các hình ảnh liên quan đến các mùa (Bài tập 13).', 'Nối thời tiết với cảm xúc và hoạt động (Bài tập 14).', 'Tô màu các hiện tượng thời tiết (Bài tập 15).'] }
                    }]
                }
            ]
        }
    ]
};
