import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types';
import diaryData from './diaries.json';

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry> //asercion de tipos, solo usar cuando es necesario

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id:number): DiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id)
    return entry
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({id, date, weather, visibility}) => {
        return{
            id, date, weather, visibility
        }
    })
}

export const addEntry = () => null