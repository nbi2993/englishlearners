
import { CurriculumLevel } from '../types';

const GD_BASE = 'https://storage.googleapis.com/maker-suite-project-files-prod/upload/flashcard_images/goaldigger_';
const SM_BASE = 'https://storage.googleapis.com/maker-suite-project-files-prod/upload/flashcard_images/superminds_';

export const gd2Data: CurriculumLevel = {
    level: 2,
    title: { en: 'Goaldigger 2', vi: 'Goaldigger 2' },
    subtitle: { en: 'Preschool - Ages 4', vi: 'Mầm non - 4 tuổi' },
    ebookPdfUrl: 'https://drive.google.com/file/d/1mJEanfKmMckBsJDmk-ZfbBWiYFQ7VjSv/view',
    units: [
        {
            id: 201,
            title: { en: 'Unit 1: Exploring My World', vi: 'Bài 1: Khám phá thế giới của em' },
            lessons: [
                {
                    id: 20101,
                    title: { en: 'Transportation', vi: 'Phương tiện giao thông' },
                    aims: {
                        en: ['Identify and name different vehicles.', 'Trace and color different types of transportation.'],
                        vi: ['Nhận biết và gọi tên các loại xe khác nhau.', 'Viết theo và tô màu các loại phương tiện giao thông.']
                    },
                    vocabulary: [
                        { term: 'taxi', pronunciation: '/ˈtæksi/', vietnamese: 'xe taxi', imageUrl: `${SM_BASE}taxi.png` },
                        { term: 'bus', pronunciation: '/bʌs/', vietnamese: 'xe buýt', imageUrl: `${SM_BASE}bus.png` },
                        { term: 'ambulance', pronunciation: '/ˈæmbjələns/', vietnamese: 'xe cứu thương', imageUrl: `${GD_BASE}ambulance.png` },
                        { term: 'train', pronunciation: '/treɪn/', vietnamese: 'tàu hỏa', imageUrl: `${SM_BASE}train.png` },
                        { term: 'airplane', pronunciation: '/ˈɛrˌpleɪn/', vietnamese: 'máy bay', imageUrl: `${SM_BASE}plane.png` },
                        { term: 'fire engine', pronunciation: '/ˈfaɪər ˈɛndʒən/', vietnamese: 'xe cứu hỏa', imageUrl: `${GD_BASE}fire_engine.png` },
                        { term: 'motorcycle', pronunciation: '/ˈmoʊtərˌsaɪkəl/', vietnamese: 'xe máy', imageUrl: `${GD_BASE}motorcycle.png` },
                        { term: 'bicycle', pronunciation: '/ˈbaɪsɪkəl/', vietnamese: 'xe đạp', imageUrl: `${SM_BASE}bike.png` },
                        { term: 'boat', pronunciation: '/boʊt/', vietnamese: 'thuyền' },
                        { term: 'scooter', pronunciation: '/ˈskuːtər/', vietnamese: 'xe tay ga' },
                        { term: 'truck', pronunciation: '/trʌk/', vietnamese: 'xe tải' },
                        { term: 'helicopter', pronunciation: '/ˈhɛlɪˌkɑptər/', vietnamese: 'máy bay trực thăng' },
                    ],
                    grammar: [{
                        title: { en: 'Asking "What is it?"', vi: 'Hỏi "Đây là cái gì?"' },
                        explanation: { en: ['Use "What is it?" to ask about an object.', 'Example: What is it? It is a yellow bus.'], vi: ['Sử dụng "What is it?" để hỏi về một đồ vật.', 'Ví dụ: Đây là cái gì? Đó là một chiếc xe buýt màu vàng.'] }
                    }],
                    activities: [{
                        type: 'Practice',
                        description: { en: ['Trace the line to connect the vehicles (Worksheet 1 & 2).', 'Color the vehicles (Worksheet 3).', 'Count the vehicles (Worksheet 6).'], vi: ['Nối đường để kết nối các phương tiện (Bài tập 1 & 2).', 'Tô màu các phương tiện (Bài tập 3).', 'Đếm số lượng phương tiện (Bài tập 6).'] }
                    }]
                },
                {
                    id: 20102,
                    title: { en: 'Family', vi: 'Gia đình' },
                    aims: {
                        en: ['Identify members of the family.', 'Introduce your family members.'],
                        vi: ['Nhận biết các thành viên trong gia đình.', 'Giới thiệu các thành viên trong gia đình của bạn.']
                    },
                    vocabulary: [
                        { term: 'family', pronunciation: '/ˈfæməli/', vietnamese: 'gia đình', imageUrl: `${GD_BASE}family.png` },
                        { term: 'father', pronunciation: '/ˈfɑðər/', vietnamese: 'bố', imageUrl: `${SM_BASE}dad.png` },
                        { term: 'mother', pronunciation: '/ˈmʌðər/', vietnamese: 'mẹ', imageUrl: `${SM_BASE}mum.png` },
                        { term: 'brother', pronunciation: '/ˈbrʌðər/', vietnamese: 'anh/em trai', imageUrl: `${SM_BASE}brother.png` },
                        { term: 'sister', pronunciation: '/ˈsɪstər/', vietnamese: 'chị/em gái', imageUrl: `${SM_BASE}sister.png` },
                        { term: 'grandfather', pronunciation: '/ˈɡrændˌfɑðər/', vietnamese: 'ông', imageUrl: `${SM_BASE}grandpa.png` },
                        { term: 'grandmother', pronunciation: '/ˈɡrændˌmʌðər/', vietnamese: 'bà', imageUrl: `${SM_BASE}grandma.png` },
                        { term: 'baby', pronunciation: '/ˈbeɪbi/', vietnamese: 'em bé' },
                        { term: 'aunt', pronunciation: '/ænt/', vietnamese: 'cô/dì' },
                        { term: 'uncle', pronunciation: '/ˈʌŋkəl/', vietnamese: 'chú/cậu' },
                    ],
                    grammar: [{
                        title: { en: 'Introducing family with "This is my..."', vi: 'Giới thiệu gia đình với "Đây là..."' },
                        explanation: { en: ['Use "This is my..." to introduce a family member.', 'Example: This is my mother.'], vi: ['Sử dụng "This is my..." để giới thiệu một thành viên trong gia đình.', 'Ví dụ: Đây là mẹ của tôi.'] }
                    }],
                    activities: [{
                        type: 'Practice',
                        description: { en: ['Draw a picture of your family (Worksheet 8).', 'Create a family album and make a video introducing them (Worksheet 9).'], vi: ['Vẽ một bức tranh về gia đình bạn (Bài tập 8).', 'Tạo một album gia đình và quay video giới thiệu họ (Bài tập 9).'] }
                    }]
                }
            ]
        }
    ]
};
