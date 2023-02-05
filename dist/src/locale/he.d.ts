export default locale;
declare namespace locale {
    const name: string;
    const weekdays: string[];
    const weekdaysShort: string[];
    const weekdaysMin: string[];
    const months: string[];
    const monthsShort: string[];
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
    function ordinal(n: any): any;
    namespace format {
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
    namespace formats {
        const LT_1: string;
        export { LT_1 as LT };
        const LTS_1: string;
        export { LTS_1 as LTS };
        const L_1: string;
        export { L_1 as L };
        const LL_1: string;
        export { LL_1 as LL };
        const LLL_1: string;
        export { LLL_1 as LLL };
        const LLLL_1: string;
        export { LLLL_1 as LLLL };
        const l_1: string;
        export { l_1 as l };
        const ll_1: string;
        export { ll_1 as ll };
        const lll_1: string;
        export { lll_1 as lll };
        const llll_1: string;
        export { llll_1 as llll };
    }
}
declare function relativeTimeFormatter(number: any, withoutSuffix: any, key: any): any;
