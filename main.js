let person = prompt("So'z yoki Ism kiriting");
let person2 = " ";

for (let i = person.length - 1; i >= 0; i--) {
  person2 = person2 + person[i];
}
console.log(person2);
