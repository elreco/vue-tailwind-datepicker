export default locale;
declare namespace locale {
    export const name: string;
    export const weekdays: string[];
    export const weekdaysShort: string[];
    export const weekdaysMin: string[];
    export { months };
    export const monthsShort: string[];
    export function ordinal(n: any): string;
    export const weekStart: number;
    export const yearStart: number;
    export namespace relativeTime {
        export const future: string;
        export const past: string;
        export const s: string;
        export { translate as m };
        export { translate as mm };
        export { translate as h };
        export { translate as hh };
        export const d: string;
        export const dd: string;
        export const M: string;
        export { translate as MM };
        export const y: string;
        export { translate as yy };
    }
    export namespace formats {
        const LT: string;
        const LTS: string;
        const L: string;
        const LL: string;
        const LLL: string;
        const LLLL: string;
    }
}
declare function months(dayjsInstance: any, format: any): string;
declare namespace months {
    export { monthStandalone as s };
    export { monthFormat as f };
}
declare function translate(number: any, withoutSuffix: any, key: any): string;
declare var monthStandalone: string[];
declare var monthFormat: string[];
