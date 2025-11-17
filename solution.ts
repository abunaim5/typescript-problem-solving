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