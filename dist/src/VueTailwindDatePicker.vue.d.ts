export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        const noInput: BooleanConstructor;
        const overlay: BooleanConstructor;
        const asSingle: BooleanConstructor;
        const useRange: BooleanConstructor;
        namespace placeholder {
            export const type: (BooleanConstructor | StringConstructor)[];
            const _default: boolean;
            export { _default as default };
        }
        namespace i18n {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace inputClasses {
            const type_2: StringConstructor;
            export { type_2 as type };
            const _default_2: string;
            export { _default_2 as default };
        }
        namespace disableInRange {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace disableDate {
            const type_4: (BooleanConstructor | ArrayConstructor | FunctionConstructor)[];
            export { type_4 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        namespace autoApply {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        namespace shortcuts {
            const type_6: (BooleanConstructor | FunctionConstructor)[];
            export { type_6 as type };
            const _default_6: boolean;
            export { _default_6 as default };
        }
        namespace separator {
            const type_7: StringConstructor;
            export { type_7 as type };
            const _default_7: string;
            export { _default_7 as default };
        }
        namespace formatter {
            const type_8: ObjectConstructor;
            export { type_8 as type };
            function _default_8(): {
                date: string;
                month: string;
            };
            export { _default_8 as default };
        }
        namespace modelValue {
            const type_9: (StringConstructor | ArrayConstructor | ObjectConstructor)[];
            export { type_9 as type };
            function _default_9(): any[];
            export { _default_9 as default };
        }
        namespace startFrom {
            const type_10: (StringConstructor | ObjectConstructor)[];
            export { type_10 as type };
            function _default_10(): Date;
            export { _default_10 as default };
        }
        namespace options {
            const type_11: ObjectConstructor;
            export { type_11 as type };
            function _default_11(): {
                shortcuts: {
                    today: string;
                    yesterday: string;
                    past: (period: any) => string;
                    currentMonth: string;
                    pastMonth: string;
                };
                footer: {
                    apply: string;
                    cancel: string;
                };
            };
            export { _default_11 as default };
        }
    }
    const emits: string[];
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        useCurrentDate: (date: any) => any[];
        useDisableDate: (date: any, { disableDate }: {
            disableDate: any;
        }) => any;
        useBetweenRange: (date: any, { previous, next }: {
            previous: any;
            next: any;
        }) => boolean;
        useNextDate: (date: any) => any[];
        usePreviousDate: (date: any) => any[];
        useToValueFromArray: ({ previous, next }: {
            previous: any;
            next: any;
        }, { formatter, separator }: {
            formatter: any;
            separator: any;
        }) => string;
        useToValueFromString: (date: any, { formatter }: {
            formatter: any;
        }) => any;
        useVisibleViewport: (el: any) => boolean;
        props: any;
        emit: any;
        VtdRef: any;
        VtdInputRef: any;
        placement: any;
        givenPlaceholder: import("vue").Ref<string>;
        selection: any;
        pickerValue: import("vue").Ref<string>;
        hoverValue: import("vue").Ref<any[]>;
        applyValue: import("vue").Ref<any[]>;
        previous: any;
        next: any;
        panel: {
            previous: {
                calendar: boolean;
                month: boolean;
                year: boolean;
            };
            next: {
                calendar: boolean;
                month: boolean;
                year: boolean;
            };
        };
        datepicker: import("vue").Ref<{
            previous: any;
            next: any;
            year: {
                previous: any;
                next: any;
            };
            weeks: any;
            months: any;
        }>;
        weeks: import("vue").ComputedRef<any>;
        months: import("vue").ComputedRef<any>;
        calendar: import("vue").ComputedRef<{
            previous: {
                date: () => any[];
                month: any;
                year: any;
                years: () => any[];
                onPrevious: () => void;
                onNext: () => void;
                onPreviousYear: () => void;
                onNextYear: () => void;
                openMonth: () => void;
                setMount: ($event: any) => void;
                openYear: () => void;
                setYear: ($event: any, asNext: any) => void;
            };
            next: {
                date: () => any[];
                month: any;
                year: any;
                years: () => any[];
                onPrevious: () => void;
                onNext: () => void;
                onPreviousYear: () => void;
                onNextYear: () => void;
                openMonth: () => void;
                setMount: ($event: any) => void;
                openYear: () => void;
                setYear: ($event: any, asNext: any) => void;
            };
        }>;
        displayDatepicker: import("vue").Ref<boolean>;
        isFirstMonday: () => any;
        shuffleWeekdays: (days: any) => any[];
        useArray: () => boolean;
        useObject: () => boolean;
        asRange: () => boolean;
        inRangeDate: (date: any) => any;
        force: () => void;
        clearPicker: () => void;
        keyUp: () => void;
        setDate: (date: any, asNext: any, close: any) => void;
        applyDate: (close: any) => boolean;
        atMouseOver: (date: any) => boolean;
        isBetweenRange: (date: any) => boolean;
        datepickerClasses: (date: any) => string;
        betweenRangeClasses: (date: any) => string;
        forceEmit: (s: any, e: any) => void;
        emitShortcut: (s: any, e: any) => void;
        setToToday: (close: any) => void;
        setToYesterday: (close: any) => void;
        setToLastDay: (day: any, close: any) => void;
        setToThisMonth: (close: any) => void;
        setToLastMonth: (close: any) => void;
        setToCustomShortcut: (item: any, close: any) => void;
        getAbsoluteClass: (open: any) => "place-right" | "place-left";
        getAbsoluteParentClass: (open: any) => "tw-left-auto tw-right-0" | "tw-left-0 tw-right-auto";
        VtdHeader: {
            props: {
                asPrevOrNext: BooleanConstructor;
                panel: ObjectConstructor;
                calendar: ObjectConstructor;
            };
            setup(__props: any, { expose }: {
                expose: any;
            }): {
                readonly __isScriptSetup: boolean;
            };
        };
        VtdMonth: {
            props: {
                months: ArrayConstructor;
            };
            emits: string[];
            setup(__props: any, { expose, emit }: {
                expose: any;
                emit: any;
            }): {
                emit: any;
            };
        };
        VtdWeek: {
            props: {
                weeks: ArrayConstructor;
            };
            setup(__props: any, { expose }: {
                expose: any;
            }): {
                readonly __isScriptSetup: boolean;
            };
        };
        VtdYear: {
            props: {
                asPrevOrNext: BooleanConstructor;
                years: ArrayConstructor;
            };
            emits: string[];
            setup(__props: any, { expose, emit }: {
                expose: any;
                emit: any;
            }): {
                emit: any;
            };
        };
        VtdCalendar: {
            props: {
                asPrevOrNext: BooleanConstructor;
                calendar: ObjectConstructor;
                weeks: ArrayConstructor;
                asRange: BooleanConstructor;
            };
            emits: string[];
            setup(__props: any, { expose, emit }: {
                expose: any;
                emit: any;
            }): {
                isBetweenRange: any;
                betweenRangeClasses: any;
                datepickerClasses: any;
                atMouseOver: any;
                emit: any;
                inject: typeof import("vue").inject;
            };
        };
        VtdShortcut: {
            props: {
                shortcuts: (BooleanConstructor | FunctionConstructor)[];
                close: FunctionConstructor;
                asRange: BooleanConstructor;
                asSingle: BooleanConstructor;
                i18n: ObjectConstructor;
            };
            setup(__props: any, { expose }: {
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
                inject: typeof import("vue").inject;
            };
        };
        readonly Popover: import("vue").DefineComponent<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
        }>>, {
            as: string | Record<string, any>;
        }>;
        readonly PopoverButton: import("vue").DefineComponent<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
            disabled: {
                type: BooleanConstructor[];
                default: boolean;
            };
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
            disabled: {
                type: BooleanConstructor[];
                default: boolean;
            };
        }>>, {
            as: string | Record<string, any>;
            disabled: boolean;
        }>;
        readonly PopoverPanel: import("vue").DefineComponent<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
            static: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmount: {
                type: BooleanConstructor;
                default: boolean;
            };
            focus: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
            static: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmount: {
                type: BooleanConstructor;
                default: boolean;
            };
            focus: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, {
            as: string | Record<string, any>;
            unmount: boolean;
            static: boolean;
            focus: boolean;
        }>;
        readonly PopoverOverlay: import("vue").DefineComponent<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
            static: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmount: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
            static: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmount: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, {
            as: string | Record<string, any>;
            unmount: boolean;
            static: boolean;
        }>;
        readonly dayjs: any;
        readonly localeData: any;
        readonly localizedFormat: any;
        readonly customParseFormat: any;
        readonly isToday: any;
        readonly isBetween: any;
        readonly duration: any;
        ref: typeof ref;
        reactive: typeof reactive;
        computed: typeof import("@vue/reactivity").computed;
        provide: typeof provide;
        nextTick: typeof nextTick;
        isProxy: typeof isProxy;
        watchEffect: typeof watchEffect;
        watch: typeof watch;
        unref: typeof unref;
        onBeforeMount: (hook: () => any, target?: import("vue").ComponentInternalInstance) => false | Function;
        readonly useDate: typeof useDate;
        readonly useDom: typeof useDom;
    };
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        useCurrentDate: (date: any) => any[];
        useDisableDate: (date: any, { disableDate }: {
            disableDate: any;
        }) => any;
        useBetweenRange: (date: any, { previous, next }: {
            previous: any;
            next: any;
        }) => boolean;
        useNextDate: (date: any) => any[];
        usePreviousDate: (date: any) => any[];
        useToValueFromArray: ({ previous, next }: {
            previous: any;
            next: any;
        }, { formatter, separator }: {
            formatter: any;
            separator: any;
        }) => string;
        useToValueFromString: (date: any, { formatter }: {
            formatter: any;
        }) => any;
        useVisibleViewport: (el: any) => boolean;
        props: any;
        emit: any;
        VtdRef: any;
        VtdInputRef: any;
        placement: any;
        givenPlaceholder: import("vue").Ref<string>;
        selection: any;
        pickerValue: import("vue").Ref<string>;
        hoverValue: import("vue").Ref<any[]>;
        applyValue: import("vue").Ref<any[]>;
        previous: any;
        next: any;
        panel: {
            previous: {
                calendar: boolean;
                month: boolean;
                year: boolean;
            };
            next: {
                calendar: boolean;
                month: boolean;
                year: boolean;
            };
        };
        datepicker: import("vue").Ref<{
            previous: any;
            next: any;
            year: {
                previous: any;
                next: any;
            };
            weeks: any;
            months: any;
        }>;
        weeks: import("vue").ComputedRef<any>;
        months: import("vue").ComputedRef<any>;
        calendar: import("vue").ComputedRef<{
            previous: {
                date: () => any[];
                month: any;
                year: any;
                years: () => any[];
                onPrevious: () => void;
                onNext: () => void;
                onPreviousYear: () => void;
                onNextYear: () => void;
                openMonth: () => void;
                setMount: ($event: any) => void;
                openYear: () => void;
                setYear: ($event: any, asNext: any) => void;
            };
            next: {
                date: () => any[];
                month: any;
                year: any;
                years: () => any[];
                onPrevious: () => void;
                onNext: () => void;
                onPreviousYear: () => void;
                onNextYear: () => void;
                openMonth: () => void;
                setMount: ($event: any) => void;
                openYear: () => void;
                setYear: ($event: any, asNext: any) => void;
            };
        }>;
        displayDatepicker: import("vue").Ref<boolean>;
        isFirstMonday: () => any;
        shuffleWeekdays: (days: any) => any[];
        useArray: () => boolean;
        useObject: () => boolean;
        asRange: () => boolean;
        inRangeDate: (date: any) => any;
        force: () => void;
        clearPicker: () => void;
        keyUp: () => void;
        setDate: (date: any, asNext: any, close: any) => void;
        applyDate: (close: any) => boolean;
        atMouseOver: (date: any) => boolean;
        isBetweenRange: (date: any) => boolean;
        datepickerClasses: (date: any) => string;
        betweenRangeClasses: (date: any) => string;
        forceEmit: (s: any, e: any) => void;
        emitShortcut: (s: any, e: any) => void;
        setToToday: (close: any) => void;
        setToYesterday: (close: any) => void;
        setToLastDay: (day: any, close: any) => void;
        setToThisMonth: (close: any) => void;
        setToLastMonth: (close: any) => void;
        setToCustomShortcut: (item: any, close: any) => void;
        getAbsoluteClass: (open: any) => "place-right" | "place-left";
        getAbsoluteParentClass: (open: any) => "tw-left-auto tw-right-0" | "tw-left-0 tw-right-auto";
        VtdHeader: {
            props: {
                asPrevOrNext: BooleanConstructor;
                panel: ObjectConstructor;
                calendar: ObjectConstructor;
            };
            setup(__props: any, { expose }: {
                expose: any;
            }): {
                readonly __isScriptSetup: boolean;
            };
        };
        VtdMonth: {
            props: {
                months: ArrayConstructor;
            };
            emits: string[];
            setup(__props: any, { expose, emit }: {
                expose: any;
                emit: any;
            }): {
                emit: any;
            };
        };
        VtdWeek: {
            props: {
                weeks: ArrayConstructor;
            };
            setup(__props: any, { expose }: {
                expose: any;
            }): {
                readonly __isScriptSetup: boolean;
            };
        };
        VtdYear: {
            props: {
                asPrevOrNext: BooleanConstructor;
                years: ArrayConstructor;
            };
            emits: string[];
            setup(__props: any, { expose, emit }: {
                expose: any;
                emit: any;
            }): {
                emit: any;
            };
        };
        VtdCalendar: {
            props: {
                asPrevOrNext: BooleanConstructor;
                calendar: ObjectConstructor;
                weeks: ArrayConstructor;
                asRange: BooleanConstructor;
            };
            emits: string[];
            setup(__props: any, { expose, emit }: {
                expose: any;
                emit: any;
            }): {
                isBetweenRange: any;
                betweenRangeClasses: any;
                datepickerClasses: any;
                atMouseOver: any;
                emit: any;
                inject: typeof import("vue").inject;
            };
        };
        VtdShortcut: {
            props: {
                shortcuts: (BooleanConstructor | FunctionConstructor)[];
                close: FunctionConstructor;
                asRange: BooleanConstructor;
                asSingle: BooleanConstructor;
                i18n: ObjectConstructor;
            };
            setup(__props: any, { expose }: {
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
                inject: typeof import("vue").inject;
            };
        };
        readonly Popover: import("vue").DefineComponent<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
        }>>, {
            as: string | Record<string, any>;
        }>;
        readonly PopoverButton: import("vue").DefineComponent<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
            disabled: {
                type: BooleanConstructor[];
                default: boolean;
            };
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
            disabled: {
                type: BooleanConstructor[];
                default: boolean;
            };
        }>>, {
            as: string | Record<string, any>;
            disabled: boolean;
        }>;
        readonly PopoverPanel: import("vue").DefineComponent<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
            static: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmount: {
                type: BooleanConstructor;
                default: boolean;
            };
            focus: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
            static: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmount: {
                type: BooleanConstructor;
                default: boolean;
            };
            focus: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, {
            as: string | Record<string, any>;
            unmount: boolean;
            static: boolean;
            focus: boolean;
        }>;
        readonly PopoverOverlay: import("vue").DefineComponent<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
            static: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmount: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
            static: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmount: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, {
            as: string | Record<string, any>;
            unmount: boolean;
            static: boolean;
        }>;
        readonly dayjs: any;
        readonly localeData: any;
        readonly localizedFormat: any;
        readonly customParseFormat: any;
        readonly isToday: any;
        readonly isBetween: any;
        readonly duration: any;
        ref: typeof ref;
        reactive: typeof reactive;
        computed: typeof import("@vue/reactivity").computed;
        provide: typeof provide;
        nextTick: typeof nextTick;
        isProxy: typeof isProxy;
        watchEffect: typeof watchEffect;
        watch: typeof watch;
        unref: typeof unref;
        onBeforeMount: (hook: () => any, target?: import("vue").ComponentInternalInstance) => false | Function;
        readonly useDate: typeof useDate;
        readonly useDom: typeof useDom;
    };
}
import { ref } from "@vue/runtime-core";
import { reactive } from "@vue/runtime-core";
import { provide } from "@vue/runtime-core";
import { nextTick } from "@vue/runtime-core";
import { isProxy } from "@vue/runtime-core";
import { watchEffect } from "@vue/runtime-core";
import { watch } from "@vue/runtime-core";
import { unref } from "@vue/runtime-core";
import useDate from "./composables/date";
import useDom from "./composables/dom";
