let date = new Date();

console.log(date);

date.setFullYear(date.getFullYear()+1);
date.setMonth(date.getMonth()+11);
date.setDate(date.getDate()+3);

console.log(date)

let now = new Date();
let before = new Date('january 19, 1986');

let interval = now.getTime()-before.getTime();
interval = Math.floor(interval / (1000*60*60*24));

console.log(`태어나고 ${interval}일 지났습니다.`)