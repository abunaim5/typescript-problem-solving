## TypeScript এ keyof কীওয়ার্ডের ব্যবহার

TypeScript-এ keyof একটি অত্যন্ত দরকারি টাইপ অপারেটর। এটি কোনো অবজেক্ট টাইপের সমস্ত key কে একটি union টাইপ হিসেবে রিটার্ন করে। এর ফলে কোড আরও নিরাপদ এবং টাইপ চেক আরও শক্তিশালী হয়।

### keyof কীভাবে কাজ করে

একটি অবজেক্ট টাইপ থেকে key বের করে টাইপ হিসেবে ব্যবহার করা যায়। এতে ভুল key ব্যবহার করার সম্ভাবনা কমে যায় এবং TypeScript সাথে সাথে এরর ধরতে পারে।

### উদাহরণ
```ts
type User = {
  name: string;
  age: number;
  isActive: boolean;
};

type UserKeys = keyof User;
// Output: "name" | "age" | "isActive"

function getValue(obj: User, key: UserKeys) {
  return obj[key];
}
```
এই কোডে UserKeys টাইপ শুধুমাত্র valid key গ্রহণ করবে। ফলে কোড আরও টাইপ-সেফ হয়।

keyof ব্যবহার করলে অবজেক্টের key গুলো নিয়ে আরও নিরাপদভাবে কাজ করা যায়। TypeScript Project এ এটি একটি সাধারণ টাইপ অপারেটর কিন্তু শক্তিশালী টুল।

## Enum কী এবং কেন ব্যবহৃত হয়

TypeScript-এ enum ব্যবহার করা হয় নির্দিষ্ট কিছু মানকে একটি গ্রুপে সাজানোর জন্য। এতে কোড আরও সংগঠিত এবং পাঠযোগ্য হয়। Enum দুই ধরনের হয়: Numeric enum এবং String enum।

### Numeric Enum

Numeric enum-এ মান স্বয়ংক্রিয়ভাবে ইনক্রিমেন্ট হয়। এটি সহজ এবং দ্রুত ব্যবহারযোগ্য।
```ts
enum Status {
  Pending = 1,
  Approved,
  Rejected
}

const currentStatus: Status = Status.Approved;
```
এখানে Approved এর মান স্বয়ংক্রিয়ভাবে 2 হয়েছে।

### String Enum

String enum-এ প্রতিটি মানকে আলাদা করে স্ট্রিং হিসেবে সেট করতে হয়। এটি ডিবাগ ও পড়তে সুবিধাজনক।
```ts
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

const userRole: Role = Role.User;
```
String enum সাধারণত বেশি ব্যবহারযোগ্য যখন readable মান প্রয়োজন হয়।

Enum কোডকে পরিষ্কার, পড়তে সহজ এবং ভুল হওয়ার সম্ভাবনা কমিয়ে দেয়। Numeric এবং String enum দুটিরই আলাদা ব্যবহারক্ষেত্র আছে।