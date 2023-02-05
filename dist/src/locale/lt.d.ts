export default locale;
declare namespace locale {
    export const name: string;
    export const weekdays: string[];
    export const weekdaysShort: string[];
    export const weekdaysMin: string[];
    export { months };
    export const monthsShort: string[];
    export function ordinal(n: any): string;
    export const weekStart: number;
    export namespace relativeTime {
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
    export namespace format {
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
    export namespace formats {
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
declare function months(dayjsInstance: any, format: any): string;
declare namespace months {
    export { monthStandalone as s };
    export { monthFormat as f };
}
declare var monthStandalone: string[];
declare var monthFormat: string[];
