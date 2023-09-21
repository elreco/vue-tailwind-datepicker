import { AllowedComponentProps } from 'vue';
import { ComponentCustomProperties } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentInternalInstance } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentPublicInstance } from 'vue';
import { DebuggerEvent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { nextTick } from 'vue';
import { PropType } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import { ShallowUnwrapRef } from 'vue';
import { Slot } from 'vue';
import { VNode } from 'vue';
import { VNodeProps } from 'vue';
import { VNodeRef } from 'vue';
import { WatchOptions } from 'vue';
import { WatchStopHandle } from 'vue';

declare const _default: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: {
            shortcuts?: boolean | (() => {
                label: string;
                atClick: () => Date[];
            }[]) | undefined;
            i18n?: string | undefined;
            disabled?: boolean | undefined;
            disableDate?: boolean | ((date: Date) => boolean) | undefined;
            formatter?: {
                date: string;
                month: string;
            } | undefined;
            separator?: string | undefined;
            placeholder?: string | undefined;
            inputClasses?: string | undefined;
            disableInRange?: boolean | undefined;
            autoApply?: boolean | undefined;
            startFrom?: Date | undefined;
            weekdaysSize?: string | undefined;
            options?: {
                shortcuts: {
                    today: string;
                    yesterday: string;
                    past: (period: number) => string;
                    currentMonth: string;
                    pastMonth: string;
                };
                footer: {
                    apply: string;
                    cancel: string;
                };
            } | undefined;
            modelValue?: string | [Date, Date] | {
                start: string | Date;
                end: string | Date;
            } | {
                startDate: string | Date;
                endDate: string | Date;
            } | undefined;
            style?: unknown;
            class?: unknown;
            key?: string | number | symbol | undefined;
            ref?: VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            readonly asSingle?: boolean | undefined;
            readonly noInput?: boolean | undefined;
            readonly overlay?: boolean | undefined;
            readonly useRange?: boolean | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onSelectMonth?: ((...args: any[]) => any) | undefined;
            onSelectYear?: ((...args: any[]) => any) | undefined;
            onSelectRightMonth?: ((...args: any[]) => any) | undefined;
            onSelectRightYear?: ((...args: any[]) => any) | undefined;
            onClickPrev?: ((...args: any[]) => any) | undefined;
            onClickNext?: ((...args: any[]) => any) | undefined;
            onClickRightPrev?: ((...args: any[]) => any) | undefined;
            onClickRightNext?: ((...args: any[]) => any) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot<any> | undefined;
        }>;
        $root: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "update:modelValue" | "selectMonth" | "selectYear" | "selectRightMonth" | "selectRightYear" | "clickPrev" | "clickNext" | "clickRightPrev" | "clickRightNext", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<{
            shortcuts: {
                type: PropType<boolean | (() => {
                    label: string;
                    atClick: () => Date[];
                }[])>;
                default: boolean;
            };
            asSingle: {
                type: PropType<boolean>;
            };
            i18n: {
                type: PropType<string>;
                default: string;
            };
            disabled: {
                type: PropType<boolean>;
                default: boolean;
            };
            disableDate: {
                type: PropType<boolean | ((date: Date) => boolean)>;
                default: boolean;
            };
            formatter: {
                type: PropType<{
                    date: string;
                    month: string;
                }>;
                default: () => {
                    date: string;
                    month: string;
                };
            };
            separator: {
                type: PropType<string>;
                default: string;
            };
            noInput: {
                type: PropType<boolean>;
            };
            overlay: {
                type: PropType<boolean>;
            };
            useRange: {
                type: PropType<boolean>;
            };
            placeholder: {
                type: PropType<string>;
                default: string;
            };
            inputClasses: {
                type: PropType<string>;
                default: string;
            };
            disableInRange: {
                type: PropType<boolean>;
                default: boolean;
            };
            autoApply: {
                type: PropType<boolean>;
                default: boolean;
            };
            startFrom: {
                type: PropType<Date>;
                default: () => Date;
            };
            weekdaysSize: {
                type: PropType<string>;
                default: string;
            };
            options: {
                type: PropType<{
                    shortcuts: {
                        today: string;
                        yesterday: string;
                        past: (period: number) => string;
                        currentMonth: string;
                        pastMonth: string;
                    };
                    footer: {
                        apply: string;
                        cancel: string;
                    };
                }>;
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
            modelValue: {
                type: PropType<string | [Date, Date] | {
                    start: string | Date;
                    end: string | Date;
                } | {
                    startDate: string | Date;
                    endDate: string | Date;
                }>;
                required: true;
                default: () => Date[];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onSelectMonth?: ((...args: any[]) => any) | undefined;
            onSelectYear?: ((...args: any[]) => any) | undefined;
            onSelectRightMonth?: ((...args: any[]) => any) | undefined;
            onSelectRightYear?: ((...args: any[]) => any) | undefined;
            onClickPrev?: ((...args: any[]) => any) | undefined;
            onClickNext?: ((...args: any[]) => any) | undefined;
            onClickRightPrev?: ((...args: any[]) => any) | undefined;
            onClickRightNext?: ((...args: any[]) => any) | undefined;
        }, {
            clearPicker: () => void;
        }, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("update:modelValue" | "selectMonth" | "selectYear" | "selectRightMonth" | "selectRightYear" | "clickPrev" | "clickNext" | "clickRightPrev" | "clickRightNext")[], string, {
            shortcuts: boolean | (() => {
                label: string;
                atClick: () => Date[];
            }[]);
            i18n: string;
            disabled: boolean;
            disableDate: boolean | ((date: Date) => boolean);
            formatter: {
                date: string;
                month: string;
            };
            separator: string;
            placeholder: string;
            inputClasses: string;
            disableInRange: boolean;
            autoApply: boolean;
            startFrom: Date;
            weekdaysSize: string;
            options: {
                shortcuts: {
                    today: string;
                    yesterday: string;
                    past: (period: number) => string;
                    currentMonth: string;
                    pastMonth: string;
                };
                footer: {
                    apply: string;
                    cancel: string;
                };
            };
            modelValue: string | [Date, Date] | {
                start: string | Date;
                end: string | Date;
            } | {
                startDate: string | Date;
                endDate: string | Date;
            };
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<{
        shortcuts: {
            type: PropType<boolean | (() => {
                label: string;
                atClick: () => Date[];
            }[])>;
            default: boolean;
        };
        asSingle: {
            type: PropType<boolean>;
        };
        i18n: {
            type: PropType<string>;
            default: string;
        };
        disabled: {
            type: PropType<boolean>;
            default: boolean;
        };
        disableDate: {
            type: PropType<boolean | ((date: Date) => boolean)>;
            default: boolean;
        };
        formatter: {
            type: PropType<{
                date: string;
                month: string;
            }>;
            default: () => {
                date: string;
                month: string;
            };
        };
        separator: {
            type: PropType<string>;
            default: string;
        };
        noInput: {
            type: PropType<boolean>;
        };
        overlay: {
            type: PropType<boolean>;
        };
        useRange: {
            type: PropType<boolean>;
        };
        placeholder: {
            type: PropType<string>;
            default: string;
        };
        inputClasses: {
            type: PropType<string>;
            default: string;
        };
        disableInRange: {
            type: PropType<boolean>;
            default: boolean;
        };
        autoApply: {
            type: PropType<boolean>;
            default: boolean;
        };
        startFrom: {
            type: PropType<Date>;
            default: () => Date;
        };
        weekdaysSize: {
            type: PropType<string>;
            default: string;
        };
        options: {
            type: PropType<{
                shortcuts: {
                    today: string;
                    yesterday: string;
                    past: (period: number) => string;
                    currentMonth: string;
                    pastMonth: string;
                };
                footer: {
                    apply: string;
                    cancel: string;
                };
            }>;
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
        modelValue: {
            type: PropType<string | [Date, Date] | {
                start: string | Date;
                end: string | Date;
            } | {
                startDate: string | Date;
                endDate: string | Date;
            }>;
            required: true;
            default: () => Date[];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onSelectMonth?: ((...args: any[]) => any) | undefined;
        onSelectYear?: ((...args: any[]) => any) | undefined;
        onSelectRightMonth?: ((...args: any[]) => any) | undefined;
        onSelectRightYear?: ((...args: any[]) => any) | undefined;
        onClickPrev?: ((...args: any[]) => any) | undefined;
        onClickNext?: ((...args: any[]) => any) | undefined;
        onClickRightPrev?: ((...args: any[]) => any) | undefined;
        onClickRightNext?: ((...args: any[]) => any) | undefined;
    } & ShallowUnwrapRef<{
        clearPicker: () => void;
    }> & {} & ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<{
    shortcuts: {
        type: PropType<boolean | (() => {
            label: string;
            atClick: () => Date[];
        }[])>;
        default: boolean;
    };
    asSingle: {
        type: PropType<boolean>;
    };
    i18n: {
        type: PropType<string>;
        default: string;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    disableDate: {
        type: PropType<boolean | ((date: Date) => boolean)>;
        default: boolean;
    };
    formatter: {
        type: PropType<{
            date: string;
            month: string;
        }>;
        default: () => {
            date: string;
            month: string;
        };
    };
    separator: {
        type: PropType<string>;
        default: string;
    };
    noInput: {
        type: PropType<boolean>;
    };
    overlay: {
        type: PropType<boolean>;
    };
    useRange: {
        type: PropType<boolean>;
    };
    placeholder: {
        type: PropType<string>;
        default: string;
    };
    inputClasses: {
        type: PropType<string>;
        default: string;
    };
    disableInRange: {
        type: PropType<boolean>;
        default: boolean;
    };
    autoApply: {
        type: PropType<boolean>;
        default: boolean;
    };
    startFrom: {
        type: PropType<Date>;
        default: () => Date;
    };
    weekdaysSize: {
        type: PropType<string>;
        default: string;
    };
    options: {
        type: PropType<{
            shortcuts: {
                today: string;
                yesterday: string;
                past: (period: number) => string;
                currentMonth: string;
                pastMonth: string;
            };
            footer: {
                apply: string;
                cancel: string;
            };
        }>;
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
    modelValue: {
        type: PropType<string | [Date, Date] | {
            start: string | Date;
            end: string | Date;
        } | {
            startDate: string | Date;
            endDate: string | Date;
        }>;
        required: true;
        default: () => Date[];
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSelectMonth?: ((...args: any[]) => any) | undefined;
    onSelectYear?: ((...args: any[]) => any) | undefined;
    onSelectRightMonth?: ((...args: any[]) => any) | undefined;
    onSelectRightYear?: ((...args: any[]) => any) | undefined;
    onClickPrev?: ((...args: any[]) => any) | undefined;
    onClickNext?: ((...args: any[]) => any) | undefined;
    onClickRightPrev?: ((...args: any[]) => any) | undefined;
    onClickRightNext?: ((...args: any[]) => any) | undefined;
}, {
    clearPicker: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("update:modelValue" | "selectMonth" | "selectYear" | "selectRightMonth" | "selectRightYear" | "clickPrev" | "clickNext" | "clickRightPrev" | "clickRightNext")[], "update:modelValue" | "selectMonth" | "selectYear" | "selectRightMonth" | "selectRightYear" | "clickPrev" | "clickNext" | "clickRightPrev" | "clickRightNext", {
    shortcuts: boolean | (() => {
        label: string;
        atClick: () => Date[];
    }[]);
    i18n: string;
    disabled: boolean;
    disableDate: boolean | ((date: Date) => boolean);
    formatter: {
        date: string;
        month: string;
    };
    separator: string;
    placeholder: string;
    inputClasses: string;
    disableInRange: boolean;
    autoApply: boolean;
    startFrom: Date;
    weekdaysSize: string;
    options: {
        shortcuts: {
            today: string;
            yesterday: string;
            past: (period: number) => string;
            currentMonth: string;
            pastMonth: string;
        };
        footer: {
            apply: string;
            cancel: string;
        };
    };
    modelValue: string | [Date, Date] | {
        start: string | Date;
        end: string | Date;
    } | {
        startDate: string | Date;
        endDate: string | Date;
    };
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {
            value: string;
            placeholder: string;
            clear: () => void;
        }): any;
    };
});
export default _default;

export { }
