import { DiaryEntry } from '../types';
import diaryData from './diaries.json';

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry> //asercion de tipos, solo usar cuando es necesario
export const getEntries = () => diaries

export const addEntry = () => null