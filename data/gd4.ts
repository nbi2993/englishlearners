
import { CurriculumLevel } from '../types';

export const gd4Data: CurriculumLevel = {
    level: 4,
    title: { en: 'Goaldigger 4', vi: 'Goaldigger 4' },
    subtitle: { en: 'Preschool - Ages 5 (Advanced)', vi: 'Mầm non - 5 tuổi (Nâng cao)' },
    ebookPdfUrl: 'https://drive.google.com/file/d/1OW1fdwKShAfVQI4ckhhBmaghjTCSI4kx/view',
    units: [
        {
            id: 401,
            title: { en: 'Unit 1: Numbers & Letters', vi: 'Bài 1: Số đếm & Chữ cái' },
            lessons: [
                {
                    id: 40101,
                    title: { en: 'Numbers 1-25', vi: 'Số đếm 1-25' },
                    aims: {
                        en: ['Count, trace, and write numbers 1-25.', 'Compare numbers using <, >, =.'],
                        vi: ['Đếm, viết theo và viết các số từ 1-25.', 'So sánh các số bằng <, >, =.']
                    },
                    vocabulary: [
                        { term: 'six', pronunciation: '/sɪks/', vietnamese: 'sáu' },
                        { term: 'seven', pronunciation: '/ˈsɛvən/', vietnamese: 'bảy' },
                        { term: 'eight', pronunciation: '/eɪt/', vietnamese: 'tám' },
                        { term: 'nine', pronunciation: '/naɪn/', vietnamese: 'chín' },
                        { term: 'ten', pronunciation: '/tɛn/', vietnamese: 'mười' },
                        { term: 'eleven', pronunciation: '/ɪˈlɛvən/', vietnamese: 'mười một' },
                        { term: 'twelve', pronunciation: '/twɛlv/', vietnamese: 'mười hai' },
                    ],
                    grammar: [{
                        title: { en: 'Comparing Numbers', vi: 'So sánh số' },
                        explanation: { en: ['Use > (is greater than), < (is less than), and = (is equal to) to compare numbers.', 'Example: 17 > 11, 14 < 23, 12 = 12.'], vi: ['Sử dụng > (lớn hơn), < (nhỏ hơn), và = (bằng) để so sánh các số.', 'Ví dụ: 17 > 11, 14 < 23, 12 = 12.'] }
                    }],
                    activities: [{
                        type: 'Practice',
                        description: { en: ["Look, count and trace numbers (Worksheet 'NUMBERS').", "Count shapes and write the number (Worksheet 'LET'S COUNT SHAPES!').", "Compare numbers (Worksheet 'Comparing Number').", "Fill in the missing numbers 1-25 (Worksheet 'Numbers 1 - 25')."], vi: ["Nhìn, đếm và viết theo số (Bài tập 'NUMBERS').", "Đếm hình và viết số (Bài tập 'LET'S COUNT SHAPES!').", "So sánh các số (Bài tập 'Comparing Number').", "Điền vào các số còn thiếu 1-25 (Bài tập 'Numbers 1 - 25')."] }
                    }]
                },
                {
                    id: 40102,
                    title: { en: 'Alphabet A-M', vi: 'Bảng chữ cái A-M' },
                    aims: {
                        en: ['Learn letters A to M.', 'Trace and write uppercase and lowercase letters.', 'Learn words starting with these letters.'],
                        vi: ['Học các chữ cái từ A đến M.', 'Viết theo và viết chữ hoa và chữ thường.', 'Học các từ bắt đầu bằng các chữ cái này.']
                    },
                    vocabulary: [
                        { term: 'Apple', pronunciation: '/ˈæpəl/', vietnamese: 'Quả táo' },
                        { term: 'Banana', pronunciation: '/bəˈnænə/', vietnamese: 'Quả chuối' },
                        { term: 'Carrot', pronunciation: '/ˈkærət/', vietnamese: 'Củ cà rốt' },
                        { term: 'Duck', pronunciation: '/dʌk/', vietnamese: 'Con vịt' },
                        { term: 'Eggplant', pronunciation: '/ˈɛɡˌplænt/', vietnamese: 'Cà tím' },
                        { term: 'Flower', pronunciation: '/ˈflaʊər/', vietnamese: 'Bông hoa' },
                        { term: 'Gift', pronunciation: '/ɡɪft/', vietnamese: 'Món quà' },
                        { term: 'House', pronunciation: '/haʊs/', vietnamese: 'Ngôi nhà' },
                        { term: 'Ice Cream', pronunciation: '/aɪs krim/', vietnamese: 'Kem' },
                        { term: 'Jelly', pronunciation: '/ˈdʒɛli/', vietnamese: 'Thạch' },
                        { term: 'Key', pronunciation: '/ki/', vietnamese: 'Chìa khóa' },
                        { term: 'Lion', pronunciation: '/ˈlaɪən/', vietnamese: 'Sư tử' },
                        { term: 'Mango', pronunciation: '/ˈmæŋɡoʊ/', vietnamese: 'Quả xoài' },
                    ],
                    grammar: [],
                    activities: [{
                        type: 'Practice',
                        description: { en: ['Color the drawing and trace the word.', 'Trace the uppercase and lowercase letters for each letter from A to M.'], vi: ['Tô màu bức vẽ và viết theo từ.', 'Viết theo chữ hoa và chữ thường cho mỗi chữ cái từ A đến M.'] }
                    }]
                },
                {
                    id: 40103,
                    title: { en: 'Alphabet N-Z', vi: 'Bảng chữ cái N-Z' },
                    aims: {
                        en: ['Learn letters N to Z.', 'Trace and write uppercase and lowercase letters.', 'Learn words starting with these letters.'],
                        vi: ['Học các chữ cái từ N đến Z.', 'Viết theo và viết chữ hoa và chữ thường.', 'Học các từ bắt đầu bằng các chữ cái này.']
                    },
                    vocabulary: [
                        { term: 'Nut', pronunciation: '/nʌt/', vietnamese: 'Hạt' },
                        { term: 'Orange', pronunciation: '/ˈɔrɪndʒ/', vietnamese: 'Quả cam' },
                        { term: 'Pen', pronunciation: '/pɛn/', vietnamese: 'Cái bút' },
                        { term: 'Queen', pronunciation: '/kwin/', vietnamese: 'Nữ hoàng' },
                        { term: 'Rose', pronunciation: '/roʊz/', vietnamese: 'Hoa hồng' },
                        { term: 'Strawberry', pronunciation: '/ˈstrɔˌbɛri/', vietnamese: 'Quả dâu' },
                        { term: 'Tiger', pronunciation: '/ˈtaɪɡər/', vietnamese: 'Con hổ' },
                        { term: 'Umbrella', pronunciation: '/ʌmˈbrɛlə/', vietnamese: 'Cái ô' },
                        { term: 'Vase', pronunciation: '/veɪs/', vietnamese: 'Lọ hoa' },
                        { term: 'Watermelon', pronunciation: '/ˈwɔtərˌmɛlən/', vietnamese: 'Dưa hấu' },
                        { term: 'Xylophone', pronunciation: '/ˈzaɪləˌfoʊn/', vietnamese: 'Đàn mộc cầm' },
                        { term: 'Yoyo', pronunciation: '/ˈjoʊˌjoʊ/', vietnamese: 'Cái yoyo' },
                        { term: 'Zebra', pronunciation: '/ˈzibrə/', vietnamese: 'Ngựa vằn' },
                    ],
                    grammar: [],
                    activities: [{
                        type: 'Practice',
                        description: { en: ['Color the drawing and trace the word.', 'Trace the uppercase and lowercase letters for each letter from N to Z.'], vi: ['Tô màu bức vẽ và viết theo từ.', 'Viết theo chữ hoa và chữ thường cho mỗi chữ cái từ N đến Z.'] }
                    }]
                }
            ]
        }
    ]
};
