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
        const l: string;
        const ll: string;
        const lll: string;
        const llll: string;
    }
    namespace relativeTime {
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
