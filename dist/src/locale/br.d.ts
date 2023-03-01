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
        export const s: string;
        export const m: string;
        export { relativeTimeWithMutation as mm };
        export const h: string;
        export const hh: string;
        export const d: string;
        export { relativeTimeWithMutation as dd };
        export const M: string;
        export { relativeTimeWithMutation as MM };
        export const y: string;
        export { specialMutationForYears as yy };
    }
    function meridiem(hour: any): "a.m." | "g.m.";
}
declare function relativeTimeWithMutation(number: any, withoutSuffix: any, key: any): string;
declare function specialMutationForYears(number: any): string;
