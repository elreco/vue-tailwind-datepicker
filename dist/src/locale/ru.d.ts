export default locale;
declare namespace locale {
    export const name: string;
    export const weekdays: string[];
    export const weekdaysShort: string[];
    export const weekdaysMin: string[];
    export { months };
    export { monthsShort };
    export const weekStart: number;
    export const yearStart: number;
    export namespace formats {
        const LT: string;
        const LTS: string;
        const L: string;
        const LL: string;
        const LLL: string;
        const LLLL: string;
    }
    export namespace relativeTime {
        export const future: string;
        export const past: string;
        export const s: string;
        export { relativeTimeWithPlural as m };
        export { relativeTimeWithPlural as mm };
        export const h: string;
        export { relativeTimeWithPlural as hh };
        export const d: string;
        export { relativeTimeWithPlural as dd };
        export const M: string;
        export { relativeTimeWithPlural as MM };
        export const y: string;
        export { relativeTimeWithPlural as yy };
    }
    export function ordinal(n: any): any;
    export function meridiem(hour: any): "ночи" | "утра" | "дня" | "вечера";
}
declare function months(dayjsInstance: any, format: any): string;
declare namespace months {
    export { monthStandalone as s };
    export { monthFormat as f };
}
declare function monthsShort(dayjsInstance: any, format: any): string;
declare namespace monthsShort {
    export { monthShortStandalone as s };
    export { monthShortFormat as f };
}
declare function relativeTimeWithPlural(number: any, withoutSuffix: any, key: any): string;
declare var monthStandalone: string[];
declare var monthFormat: string[];
declare var monthShortStandalone: string[];
declare var monthShortFormat: string[];
