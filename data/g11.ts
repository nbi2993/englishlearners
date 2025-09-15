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
    ebookPdfUrl: 'https://drive.google.com/file/d/1T-FfoJUUbuyDDunohmy-Q-meHntx5zqD/view?usp=drive_link',
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
            title: { en: 'The World of Work', vi: 'Thế giới công việc' },
            lessons: createLessonsForUnit(1103,
                { en: 'The World of Work', vi: 'Thế giới công việc' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1104,
            title: { en: 'Sustainable Development', vi: 'Phát triển bền vững' },
            lessons: createLessonsForUnit(1104,
                { en: 'Sustainable Development', vi: 'Phát triển bền vững' },
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
            title: { en: 'Our Heritage', vi: 'Di sản của chúng ta' },
            lessons: createLessonsForUnit(1106,
                { en: 'Our Heritage', vi: 'Di sản của chúng ta' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1107,
            title: { en: 'The Asian Games', vi: 'Đại hội thể thao châu Á' },
            lessons: createLessonsForUnit(1107,
                { en: 'The Asian Games', vi: 'Đại hội thể thao châu Á' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1108,
            title: { en: 'Ecotourism', vi: 'Du lịch sinh thái' },
            lessons: createLessonsForUnit(1108,
                { en: 'Ecotourism', vi: 'Du lịch sinh thái' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        }
    ]
};