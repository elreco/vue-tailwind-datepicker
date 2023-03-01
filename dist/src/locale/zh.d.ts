export default locale;
declare namespace locale {
    const name: string;
    const weekdays: string[];
    const weekdaysShort: string[];
    const weekdaysMin: string[];
    const months: string[];
    const monthsShort: string[];
    function ordinal(number: any, period: any): string;
    const weekStart: number;
    const yearStart: number;
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
    function meridiem(hour: any, minute: any): "凌晨" | "早上" | "上午" | "中午" | "下午" | "晚上";
}
