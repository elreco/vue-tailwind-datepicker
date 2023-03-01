export default locale;
declare namespace locale {
    const name: string;
    const weekdays: string[];
    const months: string[];
    const weekStart: number;
    const weekdaysShort: string[];
    const monthsShort: string[];
    const weekdaysMin: string[];
    function ordinal(n: any): any;
    namespace formats {
        const LT: string;
        const LTS: string;
        const L: string;
        const LL: string;
        const LLL: string;
        const LLLL: string;
    }
    namespace relativeTime {
        export const future: string;
        export const past: string;
        export { relativeTimeFormatter as s };
        export { relativeTimeFormatter as m };
        export { relativeTimeFormatter as mm };
        export { relativeTimeFormatter as h };
        export { relativeTimeFormatter as hh };
        export { relativeTimeFormatter as d };
        export { relativeTimeFormatter as dd };
        export { relativeTimeFormatter as M };
        export { relativeTimeFormatter as MM };
        export { relativeTimeFormatter as y };
        export { relativeTimeFormatter as yy };
    }
}
declare function relativeTimeFormatter(number: any, withoutSuffix: any, key: any, isFuture: any): any;
