
import { CurriculumLevel } from '../types';

export const gd1Data: CurriculumLevel = {
    level: 0.1, // Representing Age 3
    title: { en: 'Goaldigger 1', vi: 'Goaldigger 1' },
    subtitle: { en: 'Kindergarten - Ages 3', vi: 'Mẫu giáo - 3 tuổi' },
    ebookPdfUrl: '', // URL to be added
    units: [
        {
            id: 10,
            title: { en: 'Unit 1: Hello World!', vi: 'Bài 1: Chào thế giới!' },
            lessons: [
                {
                    id: 1001,
                    title: { en: 'Greetings & Colors', vi: 'Chào hỏi & Màu sắc' },
                    aims: {
                        en: ['Learn to say hello', 'Identify colors: red and blue'],
                        vi: ['Học cách nói xin chào', 'Nhận biết màu sắc: đỏ và xanh dương']
                    },
                    vocabulary: [
                        { term: 'hello', pronunciation: '/həˈləʊ/', vietnamese: 'xin chào' },
                        { term: 'red', pronunciation: '/rɛd/', vietnamese: 'màu đỏ' },
                        { term: 'blue', pronunciation: '/bluː/', vietnamese: 'màu xanh dương' },
                    ],
                    grammar: [],
                    activities: [
                        { type: 'Song', description: { en: ['Sing the "Hello, Red, Blue" song.'], vi: ['Hát bài "Xin chào, Đỏ, Xanh".'] } }
                    ]
                }
            ]
        },
        {
            id: 11,
            title: { en: 'Unit 2: My Body', vi: 'Bài 2: Cơ thể của tôi' },
            lessons: [
                {
                    id: 1101,
                    title: { en: 'Head and Hands', vi: 'Đầu và Tay' },
                    aims: {
                        en: ['Point to your head and hands'],
                        vi: ['Chỉ vào đầu và tay của bạn']
                    },
                    vocabulary: [
                        { term: 'head', pronunciation: '/hɛd/', vietnamese: 'cái đầu' },
                        { term: 'hands', pronunciation: '/hændz/', vietnamese: 'đôi tay' },
                    ],
                    grammar: [],
                    activities: [
                        { type: 'Game', description: { en: ['Play "Simon says: touch your head".'], vi: ['Chơi trò "Simon nói: chạm vào đầu bạn".'] } }
                    ]
                }
            ]
        },
        {
            id: 12,
            title: { en: 'Unit 3: Fun Animals', vi: 'Bài 3: Các con vật vui nhộn' },
            lessons: [
                {
                    id: 1201,
                    title: { en: 'Cat and Dog', vi: 'Mèo và Chó' },
                    aims: {
                        en: ['Learn the words for cat and dog', 'Make animal sounds'],
                        vi: ['Học từ "mèo" và "chó"', 'Tạo ra âm thanh của động vật']
                    },
                    vocabulary: [
                        { term: 'cat', pronunciation: '/kæt/', vietnamese: 'con mèo' },
                        { term: 'dog', pronunciation: '/dɒɡ/', vietnamese: 'con chó' },
                    ],
                    grammar: [],
                    activities: [
                        { type: 'Chant', description: { en: ['Chant "A cat says meow, a dog says woof".'], vi: ['Đọc theo vần "Mèo kêu meo meo, chó sủa gâu gâu".'] } }
                    ]
                }
            ]
        }
    ]
};
