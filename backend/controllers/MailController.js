const nm = require("nodemailer");

const db=require("../db")

const mailController=async(req,res)=>{
try
    {
        console.log(req.body);
        
    const {mailBody,subject}=req.body
    console.log("mail body",mailBody);
    console.log("subject",subject);
    
    const trans= nm.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, 
        auth: {
            user: 'bhattriya670@gmail.com',
            pass: 'lvco apwv nsoa dcso'
        }
    });
    console.log("hi i am above query");
    
  const [rows]=await db.promise().query("select email from users")
   const mailId=[]
rows.map((val)=>mailId.push(val.email))
    res.status(200).send(mailId)
    for (const recipient of mailId) {
        const mailOptions = {
            from: "bhattriya670@gmail.com",
            to: recipient,
            subject: subject,
            text: mailBody,
            html: "<h1>this is inside html using nodemailer</h1>"
        };
    
        trans.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(`Error sending email to ${recipient}: `, err);
            } else {
                console.log(`Email sent to ${recipient}: ` + info.response);
            }
        });
    }}

    catch(err)
    {
        console.log(err);
        
        res.status(500).send(err)
    }
}
module.exports={mailController}