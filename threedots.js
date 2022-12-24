const sclFriendAges = [20, 21, 22, 22, 20, 21];
const HomeAriaFriendsAges = [24, 23, 22, 21];
const cousinAges = [25, 24, 23, 20];
const allAges = sclFriendAges.concat(HomeAriaFriendsAges).concat([100]).concat(cousinAges);

const allAgesTwo = [...sclFriendAges, ...HomeAriaFriendsAges, 100, ...cousinAges]
console.log(allAgesTwo);
// //////////
const business = 650;
const minister = 350;
const schoib = 460;
const maximun = Math.max(business, minister, schoib);
console.log(maximun);
// 
const takaPoisa = [744, 347, 397, 907, 238];
const maximunOne = Math.max(...takaPoisa);
console.log(maximunOne);