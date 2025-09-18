
import { CurriculumLevel } from '../types';

export const smStarterData: CurriculumLevel = {
    level: 1,
    title: { en: 'Super Minds Starter', vi: 'Super Minds Starter' },
    subtitle: { en: 'Primary School - Grade 1', vi: 'Tiểu học - Lớp 1' },
    ebookPdfUrl: '', // URL to be added
    units: [
        {
            id: 100,
            title: { en: 'Hello!', vi: 'Xin chào!' },
            lessons: [
                {
                    id: 10001,
                    title: { en: 'Greetings', vi: 'Chào hỏi' },
                    aims: {
                        en: ['Say hello and goodbye', 'Ask and answer names'],
                        vi: ['Nói lời chào và tạm biệt', 'Hỏi và trả lời tên']
                    },
                    vocabulary: [
                        { term: 'hello', pronunciation: '/həˈləʊ/', vietnamese: 'xin chào' },
                        { term: 'goodbye', pronunciation: '/ˌɡʊdˈbaɪ/', vietnamese: 'tạm biệt' },
                        { term: 'name', pronunciation: '/neɪm/', vietnamese: 'tên' },
                    ],
                    grammar: [
                        {
                            title: { en: 'Greetings', vi: 'Chào hỏi' },
                            explanation: {
                                en: ["What's your name?", "I'm [name]."],
                                vi: ["Tên của bạn là gì?", "Tôi là [tên]."]
                            }
                        }
                    ],
                    activities: []
                }
            ]
        },
        {
            id: 101,
            title: { en: 'My Classroom', vi: 'Lớp học của tôi' },
            lessons: [
                {
                    id: 10101,
                    title: { en: 'Classroom Objects', vi: 'Đồ dùng trong lớp' },
                    aims: {
                        en: ['Identify basic classroom objects'],
                        vi: ['Nhận biết các đồ dùng học tập cơ bản']
                    },
                    vocabulary: [
                        { term: 'pencil', pronunciation: '/ˈpɛnsəl/', vietnamese: 'bút chì' },
                        { term: 'book', pronunciation: '/bʊk/', vietnamese: 'quyển sách' },
                        { term: 'chair', pronunciation: '/tʃɛər/', vietnamese: 'cái ghế' },
                        { term: 'table', pronunciation: '/ˈteɪbəl/', vietnamese: 'cái bàn' },
                        { term: 'bag', pronunciation: '/bæɡ/', vietnamese: 'cái cặp' }
                    ],
                    grammar: [
                         {
                            title: { en: 'Identifying objects', vi: 'Nhận dạng đồ vật' },
                            explanation: {
                                en: ["What's this?", "It's a pencil."],
                                vi: ["Đây là cái gì?", "Đó là một cây bút chì."]
                            }
                        }
                    ],
                    activities: []
                }
            ]
        },
         {
            id: 102,
            title: { en: 'My Colors', vi: 'Màu sắc của tôi' },
            lessons: [
                {
                    id: 10201,
                    title: { en: 'Basic Colors', vi: 'Các màu sắc cơ bản' },
                    aims: {
                        en: ['Identify and name basic colors'],
                        vi: ['Nhận biết và gọi tên các màu sắc cơ bản']
                    },
                    vocabulary: [
                        { term: 'red', pronunciation: '/rɛd/', vietnamese: 'màu đỏ' },
                        { term: 'blue', pronunciation: '/bluː/', vietnamese: 'màu xanh dương' },
                        { term: 'yellow', pronunciation: '/ˈjɛləʊ/', vietnamese: 'màu vàng' },
                        { term: 'green', pronunciation: '/ɡriːn/', vietnamese: 'màu xanh lá' },
                    ],
                    grammar: [],
                    activities: []
                }
            ]
        },
        {
            id: 103,
            title: { en: 'My Toys', vi: 'Đồ chơi của tôi' },
            lessons: [
                {
                    id: 10301,
                    title: { en: 'Common Toys', vi: 'Các loại đồ chơi phổ biến' },
                    aims: {
                        en: ['Identify and name common toys'],
                        vi: ['Nhận biết và gọi tên các loại đồ chơi phổ biến']
                    },
                    vocabulary: [
                        { term: 'ball', pronunciation: '/bɔːl/', vietnamese: 'quả bóng' },
                        { term: 'doll', pronunciation: '/dɒl/', vietnamese: 'búp bê' },
                        { term: 'car', pronunciation: '/kɑːr/', vietnamese: 'ô tô đồ chơi' },
                        { term: 'teddy bear', pronunciation: '/ˈtɛdi bɛər/', vietnamese: 'gấu bông' },
                    ],
                    grammar: [],
                    activities: []
                }
            ]
        }
    ]
};
