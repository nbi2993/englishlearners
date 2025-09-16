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

export const g10Data: CurriculumLevel = {
    level: 10,
    title: { en: 'Grade 10', vi: 'Lớp 10' },
    subtitle: { en: 'Global Success', vi: 'Tiếng Anh 10 - Global Success' },
    ebookPdfUrl: 'https://drive.google.com/file/d/1uEKt91RasMcOCybqfc6KpoDKve9X8cV2/view?usp=sharing',
    units: [
        {
            id: 1001,
            title: { en: 'Family Life', vi: 'Cuộc sống gia đình' },
            lessons: createLessonsForUnit(1001, 
                { en: 'Family Life', vi: 'Cuộc sống gia đình' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1002,
            title: { en: 'Humans and the Environment', vi: 'Con người và Môi trường' },
            lessons: createLessonsForUnit(1002,
                { en: 'Humans and the Environment', vi: 'Con người và Môi trường' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1003,
            title: { en: 'Music', vi: 'Âm nhạc' },
            lessons: createLessonsForUnit(1003,
                { en: 'Music', vi: 'Âm nhạc' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1004,
            title: { en: 'For a Better Community', vi: 'Vì một cộng đồng tốt đẹp hơn' },
            lessons: createLessonsForUnit(1004,
                { en: 'For a Better Community', vi: 'Vì một cộng đồng tốt đẹp hơn' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1005,
            title: { en: 'Inventions', vi: 'Phát minh' },
            lessons: createLessonsForUnit(1005,
                { en: 'Inventions', vi: 'Phát minh' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1006,
            title: { en: 'Gender Equality', vi: 'Bình đẳng giới' },
            lessons: createLessonsForUnit(1006,
                { en: 'Gender Equality', vi: 'Bình đẳng giới' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1007,
            title: { en: 'Viet Nam and International Organisations', vi: 'Việt Nam và các tổ chức quốc tế' },
            lessons: createLessonsForUnit(1007,
                { en: 'Viet Nam and International Organisations', vi: 'Việt Nam và các tổ chức quốc tế' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1008,
            title: { en: 'New Ways to Learn', vi: 'Phương pháp học tập mới' },
            lessons: createLessonsForUnit(1008,
                { en: 'New Ways to Learn', vi: 'Phương pháp học tập mới' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1009,
            title: { en: 'Protecting the Environment', vi: 'Bảo vệ môi trường' },
            lessons: createLessonsForUnit(1009,
                { en: 'Protecting the Environment', vi: 'Bảo vệ môi trường' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        },
        {
            id: 1010,
            title: { en: 'Ecotourism', vi: 'Du lịch sinh thái' },
            lessons: createLessonsForUnit(1010,
                { en: 'Ecotourism', vi: 'Du lịch sinh thái' },
                Array.from({ length: 6 }, (_, i) => ({ en: `Session ${i + 1}`, vi: `Buổi ${i + 1}` }))
            )
        }
    ]
};