let scores = [10,15,20,25];
console.log(scores);
for (let i = 0; i < 4; i++){
    if(i % 2 === 0){
        console.log(scores[i] + "は偶数です");
    }
}
let car ={
    gass: 20.5,
    num: 1234,
}

console.log(car);
console.log("ガソリンは" + car.gass + "です");
console.log("ナンバーは" + car.num + "です");