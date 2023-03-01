export default locale;
declare namespace locale {
    const name: string;
    const weekdays: string[];
    const weekdaysShort: string[];
    const weekdaysMin: string[];
    const months: string[];
    const monthsShort: string[];
    function ordinal(n: any): string;
    const weekStart: number;
    namespace relativeTime {
        export const future: string;
        export const past: string;
        export { relativeTimeWithTense as s };
        export { relativeTimeWithTense as m };
        export { relativeTimeWithTense as mm };
        export { relativeTimeWithTense as h };
        export { relativeTimeWithTense as hh };
        export { relativeTimeWithTense as d };
        export const dd: string;
        export { relativeTimeWithTense as M };
        export { relativeTimeWithTense as MM };
        export { relativeTimeWithTense as y };
        export { relativeTimeWithTense as yy };
    }
    namespace formats {
        const LT: string;
        const LTS: string;
        const L: string;
        const LL: string;
        const LLL: string;
        const LLLL: string;
    }
}
declare function relativeTimeWithTense(number: any, withoutSuffix: any, key: any, isFuture: any): any;
