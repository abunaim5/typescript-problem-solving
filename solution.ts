type FormatValue = string | number | boolean;

const formatValue = (value: FormatValue): FormatValue => {
    return typeof value === 'string' ? value.toUpperCase() :
        typeof value === 'number' ? value * 10 :
            typeof value === 'boolean' ? !value :
                '';
};