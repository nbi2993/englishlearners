
import { CurriculumLevel } from '../types';

export const gd2Data: CurriculumLevel = {
    level: 0.2, // Representing Age 4
    title: { en: 'Goaldigger 2', vi: 'Goaldigger 2' },
    subtitle: { en: 'Kindergarten - Ages 4', vi: 'Mẫu giáo - 4 tuổi' },
    ebookPdfUrl: '', // URL to be added
    units: [
        {
            id: 20,
            title: { en: 'Unit 1: Family & Friends', vi: 'Bài 1: Gia đình & Bạn bè' },
            lessons: [
                {
                    id: 2001,
                    title: { en: 'My Family', vi: 'Gia đình tôi' },
                    aims: {
                        en: ['Identify family members: mommy and daddy', 'Learn to count 1-3'],
                        vi: ['Nhận biết các thành viên trong gia đình: mẹ và bố', 'Học đếm từ 1-3']
                    },
                    vocabulary: [
                        { term: 'mommy', pronunciation: '/ˈmɒmi/', vietnamese: 'mẹ' },
                        { term: 'daddy', pronunciation: '/ˈdædi/', vietnamese: 'bố' },
                        { term: 'one', pronunciation: '/wʌn/', vietnamese: 'một' },
                        { term: 'two', pronunciation: '/tuː/', vietnamese: 'hai' },
                        { term: 'three', pronunciation: '/θriː/', vietnamese: 'ba' },
                    ],
                    grammar: [],
                    activities: [
                        { type: 'Song', description: { en: ['Sing the "Finger Family" song.'], vi: ['Hát bài "Gia đình ngón tay".'] } }
                    ]
                }
            ]
        },
        {
            id: 21,
            title: { en: 'Unit 2: My Feelings', vi: 'Bài 2: Cảm xúc của tôi' },
            lessons: [
                {
                    id: 2101,
                    title: { en: 'Happy and Sad', vi: 'Vui và Buồn' },
                    aims: {
                        en: ['Identify feelings: happy and sad', 'Express feelings'],
                        vi: ['Nhận biết cảm xúc: vui và buồn', 'Thể hiện cảm xúc']
                    },
                    vocabulary: [
                        { term: 'happy', pronunciation: '/ˈhæpi/', vietnamese: 'vui vẻ' },
                        { term: 'sad', pronunciation: '/sæd/', vietnamese: 'buồn' },
                    ],
                    grammar: [
                        { 
                            title: { en: 'Expressing Feelings', vi: 'Thể hiện cảm xúc' }, 
                            explanation: { 
                                en: ["I am happy.", "I am sad."],
                                vi: ["Tôi vui.", "Tôi buồn."]
                             } 
                        }
                    ],
                    activities: [
                        { type: 'Game', description: { en: ['Make a happy face and a sad face.'], vi: ['Làm mặt vui và mặt buồn.'] } }
                    ]
                }
            ]
        },
        {
            id: 22,
            title: { en: 'Unit 3: Yummy Food', vi: 'Bài 3: Đồ ăn ngon' },
            lessons: [
                {
                    id: 2201,
                    title: { en: 'Apple and Banana', vi: 'Táo và Chuối' },
                    aims: {
                        en: ['Learn the words for apple and banana', 'Say what you like'],
                        vi: ['Học từ "táo" và "chuối"', 'Nói những gì bạn thích']
                    },
                    vocabulary: [
                        { term: 'apple', pronunciation: '/ˈæpəl/', vietnamese: 'quả táo' },
                        { term: 'banana', pronunciation: '/bəˈnɑːnə/', vietnamese: 'quả chuối' },
                    ],
                    grammar: [
                         { 
                            title: { en: 'Expressing Likes', vi: 'Thể hiện sự yêu thích' }, 
                            explanation: { 
                                en: ["I like apples."],
                                vi: ["Tôi thích táo."]
                             } 
                        }
                    ],
                    activities: [
                        { type: 'Activity', description: { en: ['Taste an apple and a banana.'], vi: ['Nếm một quả táo và một quả chuối.'] } }
                    ]
                }
            ]
        }
    ]
};
