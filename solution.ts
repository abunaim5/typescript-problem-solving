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

class Person {
    name: string;
    age: string | number;

    constructor(name: string, age: string | number) {
        this.name = name;
        this.age = age;
    };

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    };
};

const filterByRating = (items: Array<{ title: string; rating: number }>): Array<{ title: string; rating: number }> => {
    const newArr: Array<{ title: string; rating: number }> = items.filter(item => item.rating >= 4);

    return newArr;
};

const filterActiveUsers = (users: Array<{ id: number; name: string; email: string; isActive: boolean }>): Array<{ id: number; name: string; email: string; isActive: boolean }> => {
    const activeUsers = users.filter(user => user.isActive);

    return activeUsers;
};

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
};

const printBookDetails = (book: Book) => {
    const { title, author, publishedYear, isAvailable } = book;

    console.log(`Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable ? 'Yes' : 'No'}`);
};

const getUniqueValues = (arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] => {
    const uniqueArr: (string | number)[] = [];

    for (let i = 0; i < arr1.length; i++) {
        const currentValue = arr1[i];
        let isExist = false;

        for (let j = 0; j < uniqueArr.length; j++) {
            if (uniqueArr[j] === currentValue) {
                isExist = true;
                break;
            };
        };

        if (!isExist) uniqueArr[uniqueArr.length] = currentValue;
    };

    for (let x = 0; x < arr2.length; x++) {
        const currentValue = arr2[x];
        let isExist = false;

        for (let y = 0; y < uniqueArr.length; y++) {
            if (uniqueArr[y] === currentValue) {
                isExist = true;
            };
        };

        if (!isExist) uniqueArr[uniqueArr.length] = currentValue;
    }

    return uniqueArr;
};

const calculateTotalPrice = (products: Array<{ name: string; price: number; quantity: number; discount?: number }>): number => {
    if (!products.length) return 0;

    const totalPrice = products.reduce((total, product) => {
        const { price, quantity, discount } = product;
        const basePrice = price * quantity;

        if (discount && discount > 0) {
            const discountedPrice = basePrice - (basePrice * discount) / 100;
            total += discountedPrice;
        } else {
            total += basePrice;
        }

        return total;
    }, 0);

    return totalPrice;
};