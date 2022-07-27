export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';
export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
}

//Las interfaces estan pensadas para ser extendidas
//ej
/*
    interface Special DiaryEntry extends DiaryEntry{
    flight Number:number
    }        I
*/
//Si es algo que se va a quedar mas fijo es mejor usar types

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>