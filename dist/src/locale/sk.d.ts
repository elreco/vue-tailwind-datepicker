export default locale;
declare namespace locale {
    const name: string;
    const weekdays: string[];
    const weekdaysShort: string[];
    const weekdaysMin: string[];
    const months: string[];
    const monthsShort: string[];
    const weekStart: number;
    const yearStart: number;
    function ordinal(n: any): string;
    namespace formats {
        const LT: string;
        const LTS: string;
        const L: string;
        const LL: string;
        const LLL: string;
        const LLLL: string;
        const l: string;
    }
    namespace relativeTime {
        export const future: string;
        export const past: string;
        export { translate as s };
        export { translate as m };
        export { translate as mm };
        export { translate as h };
        export { translate as hh };
        export { translate as d };
        export { translate as dd };
        export { translate as M };
        export { translate as MM };
        export { translate as y };
        export { translate as yy };
    }
}
declare function translate(number: any, withoutSuffix: any, key: any, isFuture: any): string;
