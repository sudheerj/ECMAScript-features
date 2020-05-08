export default function() {
   return "Hello, default export";
};
export function sayGoodBye() {
   return "Bye, named export"
}
export { sayBye as sayGoodBye };