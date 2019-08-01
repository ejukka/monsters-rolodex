const promise = new Promise((resolve, reject) => {

    if(false){
        setTimeout(()=>{
            resolve('I have succeeded')
        },1000)

    }else {
        reject('I have failed')
    }
})

promise
    .then(value => value + '!!!')
    .then(newValue => console.log(newValue))
    .catch(rejectValue => console.log(rejectValue));

