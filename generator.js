function * money(){
    let balance = 0;
    while(true){
        let deposit = yield balance;
        if(deposit != null){
            balance += deposit;
        }
    }
    return balance;
}

const myMoney = money();
console.log(myMoney.next().value);