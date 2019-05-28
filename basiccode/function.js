function print(message){
    console.log(`"${message}" (이)라고 말했습니다!`);
}

print("방가방가 햄톨이")


var inputA = "53.273";

console.log(Number(inputA))

var b =Number(inputA);

console.log(typeof(b))


let id = setInterval(function(){
    console.log('출력합니다')
},1000)

setTimeout(function(){
    clearInterval(id)
},3000)




let object = {
    name:'바나나',
    price:1300,
    print: function(){
        console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
    }
};
object.print();