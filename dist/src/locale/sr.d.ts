export default locale;
declare namespace locale {
    const name: string;
    const weekdays: string[];
    const weekdaysShort: string[];
    const weekdaysMin: string[];
    const months: string[];
    const monthsShort: string[];
    const weekStart: number;
    namespace relativeTime {
        export const future: string;
        export const past: string;
        export const s: string;
        import m = translator.relativeTimeFormatter;
        export { m };
        import mm = translator.relativeTimeFormatter;
        export { mm };
        import h = translator.relativeTimeFormatter;
        export { h };
        import hh = translator.relativeTimeFormatter;
        export { hh };
        import d = translator.relativeTimeFormatter;
        export { d };
        import dd = translator.relativeTimeFormatter;
        export { dd };
        import M = translator.relativeTimeFormatter;
        export { M };
        import MM = translator.relativeTimeFormatter;
        export { MM };
        import y = translator.relativeTimeFormatter;
        export { y };
        import yy = translator.relativeTimeFormatter;
        export { yy };
    }
    function ordinal(n: any): string;
    namespace formats {
        const LT: string;
        const LTS: string;
        const L: string;
        const LL: string;
        const LLL: string;
        const LLLL: string;
    }
}
declare namespace translator {
    namespace words {
        const m_1: string[];
        export { m_1 as m };
        const mm_1: string[];
        export { mm_1 as mm };
        const h_1: string[];
        export { h_1 as h };
        const hh_1: string[];
        export { hh_1 as hh };
        const d_1: string[];
        export { d_1 as d };
        const dd_1: string[];
        export { dd_1 as dd };
        const M_1: string[];
        export { M_1 as M };
        const MM_1: string[];
        export { MM_1 as MM };
        const y_1: string[];
        export { y_1 as y };
        const yy_1: string[];
        export { yy_1 as yy };
    }
    function correctGrammarCase(number: any, wordKey: any): any;
    function relativeTimeFormatter(number: any, withoutSuffix: any, key: any, isFuture: any): any;
}
