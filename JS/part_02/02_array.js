const marvel=["ironname","thor","spiderman","Hulk"];
const dc=["superman","flash","batman"];

// marvel.push(dc);
// console.log(marvel);

const allheros=marvel.concat(dc);//merging two array
// console.log(allheros);

//but we are using not concat method and we use spread operator

const allnewheros=[...marvel,...dc];
// console.log(allnewheros);




