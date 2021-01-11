const CryptoJS = require("crypto-js");
const fetch = require('node-fetch');






 
async function fetchData(){
var result=[]
for(var i=15300;i<16000;i++){

   let userid=i
    let hashkey=CryptoJS.HmacSHA1(userid.toString(),"350395").toString().toUpperCase()

    let url = `http://goldchannelmyan-001-site2.btempurl.com/api/mobileV2/activated?hashkey=${hashkey}&userid=${userid}`


    // console.log(url)
try {
    await fetch(url).then(res => res.json())
    .then(data => {
    if(data.status=='Success')
        result.push(data)
    })
} catch (error) {
    console.log(error.message)
}
   
 }
return result
}
//  setTimeout(()=>{ console.log(result)},3000) 

 



async function fetchDatalater(){
let data=await fetchData();
console.log(data)
}

fetchDatalater()
