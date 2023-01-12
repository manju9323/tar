import React, { useState } from 'react'
import "./Book.css"
//import { Mailer } from 'nodemailer-react'
const Book = () => {

 
    const [from,setName]=useState("")
    const [destination,setdes]=useState("")
    const [email,setEmail]=useState("")
    const [Total,setTotal]=useState("")
    
    const [con,setConfirm]=useState("")
    const [con2,setConfirm2]=useState("")
    const [confirm,setover]=useState(false)
  //  const [password,setPassword]=useState("")

   /*  
  var compose=()=>{
    const mail=email
    var c=con
    var d=con2
    var t=Total;
     
     // const newcompose={
      //    email:mail,
     //     subject: `toptal amount of${c}to ${d} ${t}`,
      //    html:`toptal amount of${c}to ${d} ${t}`,
      //}

      const transport = {
        host: 'smtp.example.com',
        secure:  false,
        auth: { user: 'manjugopi610@gmail.com', pass:'gasclvpnsuhezlzx' },
      }

      const defaults = {
        from: "manjugopi610@gmail.com",
      }

    const WelcomeEmail = ({ firstName }) => ({
        subject: `${email} booking confirmataion`,
        body: (
          <div>
            <p>Hello </p>
            <p>Hope you'll enjoy</p>
          </div>
        )
      })

  const mailer = Mailer(
  { transport, defaults },
  { WelcomeEmail})

  mailer.send('WelcomeEmail', { firstName: 'booking airport' }, {
    to: email
  })
  
     
      }

*/



  //--------------------------------------------------
   const submit=async(e)=>{

    var a=[{"name":"banglore","rs":100},{"name":"chennai","rs":500},{"name":"kashmir","rs":600},{"name":"kerala","rs":1000}]

    var finds=a.findIndex((a)=>{
     return a.name===from})
     
    var destiny = a.findIndex((a)=>{
         return a.name===destination
     }
     )
     console.log(finds,destiny)
     
     
     if(finds === destiny)
     {
         return "please select correct location"
     }
     
     else{
        var star=a[finds].rs
        var dest=a[destiny].rs
        //compose()
        setConfirm(from)
        setConfirm2(destination)
        setTotal(star+dest)
        setover(true)
        
     }
     console.log({from,destination,email})





    }

  
    

  return (
<div className='book'>
    <div className='left'>
      <div className='loginform'>
    <div className='label'><label>From</label><input type="text"  value={from}  onChange={(e)=>{setName(e.target.value)}} /></div>
    <div className='label'> <label>to</label><input type="text"  value={destination}  onChange={(e)=>{setdes(e.target.value)}} /></div>
    <div className='label'> <label>Email</label><input type="email"  value={email}  onChange={(e)=>{setEmail(e.target.value)}} /></div>
    <button className='sub' onClick={submit}>Submit</button>
    </div>
    </div>
    <div className='right'>
      <div className='tops'>
          <div className='in'>{con}</div>
           <div className='in'>{con2}</div>
      </div>
     {confirm &&
     <div className='inn'>
     <div className='innt' >{Total}</div>
     <div className='inn'>
   offer
   {1000-Total}
 </div>
 </div>
     } 
      
      
    </div>
    </div>
  )
}

export default Book