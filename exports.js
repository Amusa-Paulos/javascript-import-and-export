// export 
// let, const, function and classes
// types of exports
// 1. named export
// 2. default export

// named exports
export let greeting = "welcome to my youtube channel";
export const secondGreeting = "Hope you are doing well";
export function calculate(num) {
    return num * 10;
}

// default export
// you can have ONE default export
export default function favouriteMedia (media) {
    return "your favourite social media is " + media;
}

// export default class fooClass {

// }

// export default favouriteMedia;
// export { greeting, secondGreeting, calculate }

