export default locale;
declare namespace locale {
    const name: string;
    const weekdays: string[];
    const months: string[];
    const weekdaysShort: string[];
    const monthsShort: string[];
    const weekdaysMin: string[];
    const weekStart: number;
    function preparse(string: any): any;
    function postformat(string: any): any;
    function ordinal(n: any): string;
    namespace formats {
        const LT: string;
        const LTS: string;
        const L: string;
        const LL: string;
        const LLL: string;
        const LLLL: string;
    }
    function meridiem(hour: any): "রাত" | "ভোর" | "সকাল" | "দুপুর" | "বিকাল" | "সন্ধ্যা";
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
