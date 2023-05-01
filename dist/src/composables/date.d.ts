export default function useDate(): {
    usePreviousDate: (date: any) => any[];
    useCurrentDate: (date: any) => any[];
    useNextDate: (date: any) => any[];
    useDisableDate: (date: any, { disableDate }: {
        disableDate: any;
    }) => any;
    useBetweenRange: (date: any, { previous, next }: {
        previous: any;
        next: any;
    }) => boolean;
    useToValueFromString: (date: any, { formatter }: {
        formatter: any;
    }) => any;
    useToValueFromArray: ({ previous, next }: {
        previous: any;
        next: any;
    }, { formatter, separator }: {
        formatter: any;
        separator: any;
    }) => string;
};
