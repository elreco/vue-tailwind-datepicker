export default locale;
declare namespace locale {
    export const name: string;
    export const weekdays: string[];
    export const weekdaysShort: string[];
    export const weekdaysMin: string[];
    export { months };
    export const monthsShort: string[];
    export const weekStart: number;
    export namespace formats {
        const LT: string;
        const LTS: string;
        const L: string;
        const LL: string;
        const LLL: string;
        const LLLL: string;
    }
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
    export function ordinal(n: any): string;
}
declare function months(dayjsInstance: any, format: any): string;
declare namespace months {
    export { monthStandalone as s };
    export { monthFormat as f };
}
declare var monthStandalone: string[];
declare var monthFormat: string[];
