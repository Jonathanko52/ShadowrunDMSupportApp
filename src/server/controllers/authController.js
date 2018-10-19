const pass = "xfmH-K3m2a79Oeh21kgUixggztErS5XE";
const user = "ulurpczi";
const pg = require('pg');
const dbUrl = 'postgres://ulurpczi:xfmH-K3m2a79Oeh21kgUixggztErS5XE@nutty-custard-apple.db.elephantsql.com:5432/ulurpczi'




module.exports={

    //checks if user/password combination exists, returns the associated ID number in the req.body
    checkUser: async(req,res,next)=>{
        const data = await function promiseReturningThingy(){
            return new Promise((resolve,reject)=>{
                var client = new pg.Client(dbUrl);
                client.connect((err)=>{
                        if(err){
                            return console.error('postgres connection failed', err);
                        }
                    client.query(`SELECT ID FROM userdata WHERE username = '${req.body.user}' AND password = '${req.body.password}';`,(err,result)=>{
                        if(err){
                            return console.error('error running query', err);
                        } else {
                            if(result.rows[0] === undefined){
                                console.error("login failed");
                                //Assuming promise failure, rejects with following error message
                                reject(err);
                                next();
                            } else {
                                console.log("query success", result.rows[0].id);
                                //Assuming promise success, resolves promise as result of query, under "data" const
                                resolve(result.rows[0].id);
                            }
                        }
                    });
                })
            })//end Promise
        }()
        req.body = data;
        next();
    },

    registerUser: (req,res,next) =>{
        var client = new pg.Client(dbUrl);
                client.connect((err)=>{
                        if(err){
                            return console.error('postgres connection failed', err);
                        }
                    client.query(`INSERT INTO userdata (username, password) VALUES ('${req.body.user}', '${req.body.password}')`)
                    .then((result)=>{
                        if(err){
                            console.error('error running query', err);
                        } else {
                            console.log("register success")
                            next()
                        }
                    })
                    .catch(e=>console.log(e.stack))
                })
    },


    attachCookieOnRegister: (req,res,next) =>{
        var client = new pg.Client(dbUrl);
                client.connect((err)=>{
                        if(err){
                            return console.error('postgres connection failed', err);
                        }
                        client.query(`SELECT trackingnumber FROM userdata WHERE username='${req.body.user}'`)
                        .then(response=>{

                            res.cookie('ID', response.rows[0].trackingnumber);

                            next()
                        })
                        .catch(e=>console.log(e.stack))
                })
    },


    //attach cookie with associated id to user for this session
    attachCookie: (req,res,next) => {
        res.cookie('ID', req.body.toString());
        console.log('cookieattached');
        next();
    },
    //converts cookie into user ID for pulling associated user information from mongoose server
    checkCookie: (req,res,next) =>{
        req.body = req.cookies.ID
        next()
    },
    //converts cookie into key and recieved data into value of an object
    checkCookieAndBody: (req,res,next) =>{
        req.body = {[req.cookies.ID]:req.body}
        next()
    }
}