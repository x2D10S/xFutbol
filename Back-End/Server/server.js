const express= require('express');
const mysql=require('mysql');
var axios = require("axios").default;
var cors=require("cors");
const app=express();
const bcrypt=require('bcrypt');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const salt=3;
app.use(express.json());
app.use(cors({
origin: ['http://localhost:3000', 'http://localhost:3000/signin', 'http://localhost:3000/aboutus', 'http://localhost:3000/discover', 'http://localhost:3000/transfer', 'http://localhost:3000/transferlist', 'http://localhost:3000/createplayer', 'http://localhost:3000/deleteplayer'],
methods: ["GET", "POST"],
credentials: true
}));
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(session({
    key: "userID",
    secret: "0I26I2I",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60*60*24*31
    }
}))

const db= mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database:'fifa_database'
})
require("dotenv").config();
const PORT=process.env.PORT || '5000'

app.listen(PORT, ()=>{
    console.log('Listening...');
})


//signup page
app.post('/signup', (req, res)=>{
   bcrypt.hash(req.body.password, salt, (err, hash)=>{
    let sql=`insert into users set username='${req.body.username}', password='${hash}', fav_team=${req.body.fav_team}, is_admin=${req.body.is_admin} `;
    db.query(sql, (err, rows, fields)=>{
        if(err)
        {
            res.sendStatus(412);
        }
        else
        {
            let sql=`select standings, points from team where team_id=${req.body.fav_team}`;
            db.query(sql, (err, rows_team, fields)=>{
                if(!err){
                    let sql=`select name from playerdata where fifa_rating=(select MAX(fifa_rating) from playerdata where team_id=${req.body.fav_team}) and team_id=${req.body.fav_team}`;
                    db.query(sql, (err, rows_player, fields)=>{
                        if(!err){
                            res.cookie('name',rows_player[0].name);
                            res.cookie('standings',rows_team[0].standings);
                            res.cookie('points', rows_team[0].points)
                         res.cookie('loggedIn', 1);
            res.cookie('user', req.body.username);
            res.cookie('team', req.body.fav_team);
            if(req.body.is_admin)
            res.cookie('isAdmin', 1);
            else
            res.cookie('isAdmin', 0);
            res.sendStatus(201);
                                }
                                res.send('Error...')
                    })
                }
                res.send('Error...')
            })
        }
    })
   })
})

//signin page
app.post('/signin', (req, res)=>{
    let sql=`select * from users where username='${req.body.username}'`
    db.query(sql, (err, rows_user, fields)=>{
        if(err)
        {
            res.sendStatus(411);
        }
        else{
            if(rows_user[0]===undefined)
            {
                            
                 res.sendStatus(400)
        
            }
            else
            {
                bcrypt.compare(req.body.password, rows_user[0].password, (err, result)=>{
                    if(result)
                    {
                        let sql=`select standings, points from team where team_id=${rows_user[0].fav_team}`;
                        db.query(sql, (err, rows_team, fields)=>{
                            if(!err){
                                let sql=`select name from playerdata where fifa_rating=(select MAX(fifa_rating) from playerdata where team_id=${rows_user[0].fav_team}) and team_id=${rows_user[0].fav_team}`;
                                db.query(sql, (err, rows_player, fields)=>{
                                    if(!err){
                                        res.cookie('name', rows_player[0].name);
                                        res.cookie('standings', rows_team[0].standings);
                                        res.cookie('points', rows_team[0].points);
                                        res.cookie('team', rows_user[0].fav_team)
                                        res.cookie('loggedIn', 1);
                        res.cookie('user', req.body.username);
                        if(rows_user[0].is_admin===1)
                        res.cookie('isAdmin', 1);
                        else
                        res.cookie('isAdmin', 0);
                        res.sendStatus(202);
                                    }
                                    else 
                                    res.send('Error...')
                                })
                            }
                            else
                            res.send('Error...')
                        })
                    }
                    else
                   {
                        res.cookie('loggedIn', 0)
                        res.sendStatus(412);
                }
                })
            }
        }
    })
})

//league standings display
app.get('/league', (req, res)=>{
    let sql=`select * from team where league_id=${req.query.id} order by standings asc`
    db.query(sql, (err, rows, fields)=>{
        if(err){
            res.send('Error loading the teams...')
        }
        else{
            res.json(rows);
        }
    })
})

//team stats display
app.get('/team', (req, res)=>{
    let sql=`select * from playerdata where team_id=${req.query.id} order by fifa_rating desc`
    db.query(sql, (err, rows, fields)=>{
        if(err){
            res.send('Error loading the players...')
        }
        else{
            res.json(rows);
        }
    })
})


//Prospects page display
app.get('/prospects', (req, res)=>{
    let sql='call display_prospects()';
    db.query(sql, (err, rows)=>{
        if(err){
            res.send('Error')
        }
        else
        res.json(rows[0])
    })
})


//Player Creation
app.post('/createplayer', (req, res)=>{
    var data={
        // player_id: Number(req.body.player_id),
            team_id: Number(req.body.team_id),
            name: req.body.name, 
            age: req.body.age, 
            nationality: req.body.nationality,
            position: req.body.position,
            fifa_rating: req.body.fifa_rating,
            potential: req.body.potential,
            g_played: req.body.g_played,
            goals: req.body.goals,
            assists: req.body.assists,
            clean_sheets: req.body.clean_sheets,
            bdor_ranking: req.body.bdor_ranking
    }
    let sql='insert into playerdata set?'
    db.query(sql, data, (err, rows, fields)=>{
        if(err){
            res.send('Check input.')
        }
        else{
            res.send('Player Created.')
        }
    })
})

//player deletion
app.post('/deleteplayer', (req, res)=>{
    let sql=`delete from playerdata where player_id=${Number(req.body.player_id)}`;
    db.query(sql, (err, rows, fields)=>{
        if(err){
            res.send('Player does not exist')
        }
        else{
            res.send('Deleted');
        }
    })
})

//transfer page
app.post('/transfer', (req, res)=>{
    var sql=`insert into transfer set player_id=${Number(req.body.player_id)}, from_team=(select team_id from playerdata where player_id=${Number(req.body.player_id)}), to_team=${Number(req.body.team_id)}, fee=${Number(req.body.fee)}`;
    db.query(sql, (err, rows, fields)=>{
       if(err){
           res.send('Check Input.')
       }
   })
    sql=`update playerdata set team_id=${Number(req.body.team_id)} where player_id=${Number(req.body.player_id)}`; 
   db.query(sql, (err, rows, fields)=>{
       if(err){
         res.send('Error.')
       }
       else{
           res.send("Transfer success.")
       }
   })
})

//bdor page
app.get('/bdor', (req, res)=>{
    let sql='call display_bdor()';
    db.query(sql, (err, rows)=>{
        if(err){
            res.send('Error')
        }
        else
        res.json(rows[0])
    })
})

//transferlist
app.get('/transferlist', (req, res)=>{
    let sql=`select * from transfer`;
    db.query(sql, (err, rows, fields)=>{
        if(err){
            res.send('Error...')
        }
        else
        {  rows.forEach((obj, i)=>{
            let sql=`select name from playerdata where player_id=${obj.player_id}`;
           db.query(sql, (err, row, fields)=>{
               if(err){
                   throw err;
               }
               else{
                   obj.name=row[0].name;
                   if(rows.length-1===i){
                       res.send(rows)
                   }
               }
           }) 
        })  
        }
    })
})
