export const englishToArabicNumbersMap: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    0: string;
};
export default locale;
declare namespace locale {
    export const name: string;
    export { months };
    export { months as monthsShort };
    export const weekdays: string[];
    export const weekdaysShort: string[];
    export const weekStart: number;
    export const weekdaysMin: string[];
    export function preparse(string: any): any;
    export function postformat(string: any): any;
    export function ordinal(n: any): any;
    export namespace formats {
        const LT: string;
        const LTS: string;
        const L: string;
        const LL: string;
        const LLL: string;
        const LLLL: string;
    }
    export function meridiem(hour: any): "پ.ن" | "د.ن";
    export namespace relativeTime {
        const future: string;
        const past: string;
        const s: string;
        const m: string;
        const mm: string;
        const h: string;
        const hh: string;
        const d: string;
        const dd: string;
        const M: string;
        const MM: string;
        const y: string;
        const yy: string;
    }
}
declare var months: string[];
