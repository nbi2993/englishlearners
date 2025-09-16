import { CurriculumLevel } from '../types';

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

export const g11Data: CurriculumLevel = {
    level: 11,
    title: { en: 'Grade 11', vi: 'Lớp 11' },
    subtitle: { en: 'Global Success', vi: 'Tiếng Anh 11 - Global Success' },
    ebookPdfUrl: 'https://drive.google.com/file/d/1-v-PIbluLEMH5hXqU_lvCd3TWSYoTGnV/view?usp=drive_link',
    units: [
        {
            id: 1101,
            title: { en: 'A Long and Healthy Life', vi: 'Cuộc sống khỏe mạnh và trường thọ' },
            lessons: createLessonsForUnit(1101,
                { en: 'A Long and Healthy Life', vi: 'Cuộc sống khỏe mạnh và trường thọ' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1102,
            title: { en: 'The Generation Gap', vi: 'Khoảng cách thế hệ' },
            lessons: createLessonsForUnit(1102,
                { en: 'The Generation Gap', vi: 'Khoảng cách thế hệ' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1103,
            title: { en: 'Cities of the Future', vi: 'Thành phố của tương lai' },
            lessons: createLessonsForUnit(1103,
                { en: 'Cities of the Future', vi: 'Thành phố của tương lai' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1104,
            title: { en: 'ASEAN and Viet Nam', vi: 'ASEAN và Việt Nam' },
            lessons: createLessonsForUnit(1104,
                { en: 'ASEAN and Viet Nam', vi: 'ASEAN và Việt Nam' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1105,
            title: { en: 'Global Warming', vi: 'Sự nóng lên toàn cầu' },
            lessons: createLessonsForUnit(1105,
                { en: 'Global Warming', vi: 'Sự nóng lên toàn cầu' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1106,
            title: { en: 'Preserving Our Heritage', vi: 'Bảo tồn di sản của chúng ta' },
            lessons: createLessonsForUnit(1106,
                { en: 'Preserving Our Heritage', vi: 'Bảo tồn di sản của chúng ta' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1107,
            title: { en: 'Education Options for School-Leavers', vi: 'Lựa chọn giáo dục cho học sinh tốt nghiệp' },
            lessons: createLessonsForUnit(1107,
                { en: 'Education Options for School-Leavers', vi: 'Lựa chọn giáo dục cho học sinh tốt nghiệp' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1108,
            title: { en: 'Becoming Independent', vi: 'Trở nên độc lập' },
            lessons: createLessonsForUnit(1108,
                { en: 'Becoming Independent', vi: 'Trở nên độc lập' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1109,
            title: { en: 'Social Issues', vi: 'Các vấn đề xã hội' },
            lessons: createLessonsForUnit(1109,
                { en: 'Social Issues', vi: 'Các vấn đề xã hội' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1110,
            title: { en: 'The Ecosystem', vi: 'Hệ sinh thái' },
            lessons: createLessonsForUnit(1110,
                { en: 'The Ecosystem', vi: 'Hệ sinh thái' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        }
    ]
};