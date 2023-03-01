declare const _default: {
    props: {
        noInput: BooleanConstructor;
        overlay: BooleanConstructor;
        asSingle: BooleanConstructor;
        useRange: BooleanConstructor;
        placeholder: {
            type: (BooleanConstructor | StringConstructor)[];
            default: boolean;
        };
        i18n: {
            type: StringConstructor;
            default: string;
        };
        inputClasses: {
            type: StringConstructor;
            default: string;
        };
        disableInRange: {
            type: BooleanConstructor;
            default: boolean;
        };
        disableDate: {
            type: (BooleanConstructor | ArrayConstructor | FunctionConstructor)[];
            default: boolean;
        };
        autoApply: {
            type: BooleanConstructor;
            default: boolean;
        };
        shortcuts: {
            type: (BooleanConstructor | FunctionConstructor)[];
            default: boolean;
        };
        separator: {
            type: StringConstructor;
            default: string;
        };
        formatter: {
            type: ObjectConstructor;
            default: () => {
                date: string;
                month: string;
            };
        };
        modelValue: {
            type: (StringConstructor | ArrayConstructor | ObjectConstructor)[];
            default: () => any[];
        };
        startFrom: {
            type: (StringConstructor | ObjectConstructor)[];
            default: () => Date;
        };
        options: {
            type: ObjectConstructor;
            default: () => {
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
        };
    };
    emits: string[];
    setup(__props: any, { expose, emit }: {
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
        ref: typeof import("vue").ref;
        reactive: typeof import("vue").reactive;
        computed: typeof import("@vue/reactivity").computed;
        provide: typeof import("vue").provide;
        nextTick: typeof import("vue").nextTick;
        isProxy: typeof import("vue").isProxy;
        watchEffect: typeof import("vue").watchEffect;
        watch: typeof import("vue").watch;
        unref: typeof import("vue").unref;
        onBeforeMount: (hook: () => any, target?: import("vue").ComponentInternalInstance) => false | Function;
        readonly useDate: typeof import("./composables/date").default;
        readonly useDom: typeof import("./composables/dom").default;
    };
};
export default _default;
