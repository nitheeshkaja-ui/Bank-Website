function login(){
let accno=["acc123","acc456","acc789"]
let password=["pass123","pass456","pass789"]
let realaccno=document.getElementsByClassName("accno")[0].value
let realpassword=document.getElementsByClassName("password")[0].value
            if(realaccno=="" || realpassword==""){
                    alert("Please enter your account number and password")
                    return
                }
                let found=false
            for(let i=0;i<accno.length;i++){
                if(realaccno==accno[i] && realpassword==password[i]){
                    found=true
                    break
                }
            }
                if(found){
                    alert("Login Successful")
                    window.location.href="home.html"
                }
                else{
                    alert("Invalid account number or password")
                }  
        }