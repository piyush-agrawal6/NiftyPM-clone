

document.querySelector(".switch").addEventListener("change",akashmoreFun);

function akashmoreFun(){
    document.querySelector("#stater_amount").innerHTML=null;
    document.querySelector("#pro_amount").innerHTML=null;
    document.querySelector("#business_amount").innerHTML=null;

    let name = document.createElement("h4");
        name.innerHTML=`$39`

        let pro = document.createElement("h4");
        pro.innerHTML=`$79`  

        let business = document.createElement("h4");
        business.innerHTML=`$124`  


       
        document.querySelector("#stater_amount").append(name);
        document.querySelector("#pro_amount").append(pro);
        document.querySelector("#business_amount").append(business);
      
       

}

// let free_plan = ()=>{
//     window.location.href ="/punchy-flowers-9069/signUp/signUp.html"

   
// }