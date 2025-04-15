function fetchData(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            let sucess=true;
            if(sucess){
                resolve("Data fectched successfully")
            }
            else{
                reject("Error fetching data");
            }
        },3000)
    })
}
let response=fetchData()
console.log(response);
