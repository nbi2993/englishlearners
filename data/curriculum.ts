
import { Curriculum } from '../types';
import { sw6Data } from './sw6';
import { sw7Data } from './sw7';
import { sw8Data } from './sw8';
import { sw9Data } from './sw9';
import { sm1Data } from './sm1';
import { sm2Data } from './sm2';
import { sm3Data } from './sm3';
import { sm4Data } from './sm4';
import { g10Data } from './g10';
import { g11Data } from './g11';
import { g12Data } from './g12';

export const curriculumData: Curriculum = [
    {
        category: { en: 'Kindergarten IVS-Mastery', vi: 'Mầm non IVS-Mastery' },
        levels: [
        ]
    },
    {
        category: { en: 'Primary IVS-Mastery', vi: 'Tiểu học IVS-Mastery' },
        levels: [
            sm1Data,
            sm2Data,
            sm3Data,
            sm4Data,
        ]
    },
    {
        category: { en: 'Secondary IVS-Mastery', vi: 'Trung học IVS-Mastery' },
        levels: [
            sw6Data,
            sw7Data,
            sw8Data,
            sw9Data,
        ]
    },
    {
        category: { en: 'Highschool IVS-Mastery', vi: 'Trung học phổ thông IVS-Mastery' },
        levels: [
            g10Data,
            g11Data,
            g12Data,
        ]
    }
];
