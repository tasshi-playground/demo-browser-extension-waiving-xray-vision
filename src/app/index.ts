import "../manifest.json";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
console.log("from content script 'foo': ", window.foo as string);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
console.log("from content script 'foo': ", window.wrappedJSObject.foo);
