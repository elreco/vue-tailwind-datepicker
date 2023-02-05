export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        const shortcuts: (BooleanConstructor | FunctionConstructor)[];
        const close: FunctionConstructor;
        const asRange: BooleanConstructor;
        const asSingle: BooleanConstructor;
        const i18n: ObjectConstructor;
    }
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        setToToday: any;
        setToYesterday: any;
        setToLastDay: any;
        setToThisMonth: any;
        setToLastMonth: any;
        setToCustomShortcut: any;
        withShortcut: () => any;
        inject: typeof inject;
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        setToToday: any;
        setToYesterday: any;
        setToLastDay: any;
        setToThisMonth: any;
        setToLastMonth: any;
        setToCustomShortcut: any;
        withShortcut: () => any;
        inject: typeof inject;
    };
}
import { inject } from "@vue/runtime-core";
