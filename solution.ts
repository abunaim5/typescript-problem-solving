const formatValue = (value: string | number | boolean): string | number | boolean => {
    return typeof value === 'string' ? value.toUpperCase() :
        typeof value === 'number' ? value * 10 :
            typeof value === 'boolean' ? !value :
                'Unexpected value type';
};

const getLength = (value: string | any[]): number => {
    return typeof value === 'string' ? value.length :
        Array.isArray(value) ? value.length :
            0;
};