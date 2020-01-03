const bcrypt = require('bcrypt-node');

bcrypt.genSalt(10, (err,salt)=>{
    if(err){
        console.log('bcrypt.getSalt() error : ', err.message);
    }else{
        bcrypt.hash("1234",salt,null,(err,hash)=>{
            if(err) { console.log('bcrypt.getSalt() error : ', err.message);}
            else{ console.log(hash)}
        })
    }

})
const dbpassword = "{bcrypt}$2a$10$ZlXvGH57K/lWQLO9dCo5l.N8YH7BKqt3Zu/PVU3Z4EJO1k3blskJa";
const hashpassword=dbpassword.split('}');
console.log(hashpassword[0],' // ', hashpassword[1])
bcrypt.compare("123779",hashpassword[1],(err,res)=>{
    if(err){
        console.log('bcrypt.compare() Error : ', err.message);
    }else{
        if(res){
            console.log("일치");
        }else{
            console.log("불일치");
        }
    }
})