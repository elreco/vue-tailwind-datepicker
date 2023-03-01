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
}
