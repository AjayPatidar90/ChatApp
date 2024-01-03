const UserModel = require("../models/userModel")
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');
var key = "ajay123"


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const addUser = async(req,res)=>{
    try{
       
          let user = new UserModel(req.body)
          let isSave = await user.save()

          if(isSave)
          {
           return res.status(200).json({
                mssg:"user add successfully",
                status:200,
                isSave
            })
          }

          else{
            return res.status(400).json({
                mssg:"something is wrong ",
                status:400,

            })
          }
        }
        
    catch(err)
    {
        console.log(err)
        return res.status(500).json({
            mssg:"server error",
            status:500,
            err:JSON.stringify(err)

        })
    }

}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getUser = async(req,res)=>{
    try{
         let users = await UserModel.find({})

         if(users.length != 0)
         {
            return res.status(200).json({
                mssg:"add Success",
                status:200,
                users
    
            })
         }

        
    }
    catch(err)
    {
        console.log(err)
        return res.status(500).json({
            mssg:"server error",
            status:500,
            err:JSON.stringify(err)

        })
    }

}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////





 const addData = async(req,res)=>{
    
    try{
        bcrypt.hash(req.body.Password, 10,async function(err, hash) {
        let detail = new UserModel({...req.body,Password:hash})
        let success = await detail.save()
        if(success){
            res.status(200).json({
                mssg:"it is added",
                status:200,
                success:success

            })
      }
      
    });
  

    }catch(err){
        console.log(err)
        res.status(500).json({
            mssg:"it is not added",
            status:500,
            err:JSON.stringify(err)

        })

    }

 }



 ////////////////////////////////////////////////////////////////////////////////////////////////////////





  let login = async(req,res)=>{
    try{
      
        let {email,Password} = req.body
        let user = await UserModel.find({email:email})
        console.log(user)

        if(user.length == 0){
            res.status(400).json({
                mssg:"user not found",
                status:400,
                user:user
            })
        }else{
            bcrypt.compare(req.body.Password,user[0].Password,function(err, result) {

                if(result == true){
                    var token = jwt.sign({data:user[0]},key);
                    res.status(200).json({
                        mssg:"login successful",
                        status:200,
                        user:user[0],
                        token:token
                    })

                }else{
                    res.status(400).json({
                        mssg:"user not found",
                        status:400,
                        
                    })

                }
                
            });
        }

    }catch(err){
        res.status(500).json({
            mssg:"something wrong in function",
            status:500,
            err:JSON.stringify(err)
        })

    }
  }



module.exports = {addUser,getUser,login,addData}