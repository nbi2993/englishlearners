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

export const g12Data: CurriculumLevel = {
    level: 12,
    title: { en: 'Grade 12', vi: 'Lớp 12' },
    subtitle: { en: 'Global Success', vi: 'Tiếng Anh 12 - Global Success' },
    ebookPdfUrl: 'https://drive.google.com/file/d/14ZDrFOzmaXGjgZXC-GI7ChzduQhkTdVn/view?usp=drive_link',
    units: [
        {
            id: 1201,
            title: { en: 'Life Stories We Admire', vi: 'Những câu chuyện cuộc đời đáng ngưỡng mộ' },
            lessons: createLessonsForUnit(1201,
                { en: 'Life Stories We Admire', vi: 'Những câu chuyện cuộc đời đáng ngưỡng mộ' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1202,
            title: { en: 'A Multicultural World', vi: 'Thế giới đa văn hóa' },
            lessons: createLessonsForUnit(1202,
                { en: 'A Multicultural World', vi: 'Thế giới đa văn hóa' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1203,
            title: { en: 'Green Living', vi: 'Lối sống xanh' },
            lessons: createLessonsForUnit(1203,
                { en: 'Green Living', vi: 'Lối sống xanh' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1204,
            title: { en: 'Urbanisation', vi: 'Đô thị hóa' },
            lessons: createLessonsForUnit(1204,
                { en: 'Urbanisation', vi: 'Đô thị hóa' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1205,
            title: { en: 'The World of Work', vi: 'Thế giới công việc' },
            lessons: createLessonsForUnit(1205,
                { en: 'The World of Work', vi: 'Thế giới công việc' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1206,
            title: { en: 'Artificial Intelligence', vi: 'Trí tuệ nhân tạo' },
            lessons: createLessonsForUnit(1206,
                { en: 'Artificial Intelligence', vi: 'Trí tuệ nhân tạo' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1207,
            title: { en: 'The World of Mass Media', vi: 'Thế giới truyền thông đại chúng' },
            lessons: createLessonsForUnit(1207,
                { en: 'The World of Mass Media', vi: 'Thế giới truyền thông đại chúng' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1208,
            title: { en: 'Wildlife Conservation', vi: 'Bảo tồn động vật hoang dã' },
            lessons: createLessonsForUnit(1208,
                { en: 'Wildlife Conservation', vi: 'Bảo tồn động vật hoang dã' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1209,
            title: { en: 'Career Paths', vi: 'Con đường nghề nghiệp' },
            lessons: createLessonsForUnit(1209,
                { en: 'Career Paths', vi: 'Con đường nghề nghiệp' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1210,
            title: { en: 'Lifelong Learning', vi: 'Học tập suốt đời' },
            lessons: createLessonsForUnit(1210,
                { en: 'Lifelong Learning', vi: 'Học tập suốt đời' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        }
    ]
};
