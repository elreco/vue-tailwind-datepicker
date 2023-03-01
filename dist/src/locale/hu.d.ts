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
        const future: string;
        const past: string;
        function s(_: any, _s: any, ___: any, isFuture: any): string;
        function m(_: any, s: any, ___: any, isFuture: any): string;
        function mm(n: any, s: any, ___: any, isFuture: any): string;
        function h(_: any, s: any, ___: any, isFuture: any): string;
        function hh(n: any, s: any, ___: any, isFuture: any): string;
        function d(_: any, s: any, ___: any, isFuture: any): string;
        function dd(n: any, s: any, ___: any, isFuture: any): string;
        function M(_: any, s: any, ___: any, isFuture: any): string;
        function MM(n: any, s: any, ___: any, isFuture: any): string;
        function y(_: any, s: any, ___: any, isFuture: any): string;
        function yy(n: any, s: any, ___: any, isFuture: any): string;
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
