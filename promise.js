async function pro(){
    let promise = new Promise(function(resolve,reject){
    setTimeout(()=>{resolve("Done!!");},5000);
});
promise.then(function(value){
    console.log(value);
});
}
pro();