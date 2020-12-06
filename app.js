const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('request')
const geoCode = require('./utils/request')
const chalk = require('chalk');
const Handlebars= require('handlebars');

const app = express()
const port = process.env.PORT || 3000

//Define path for express config
const publicDirectoryPath = path.join(__dirname, '/public')
const viewsPath = path.join(__dirname, '/templates/views')
const partialPath = path.join(__dirname, '/templates/partials')
console.log(publicDirectoryPath)

//setup handler engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))
hbs.registerPartials(partialPath)

Handlebars.registerHelper('ifCond', function(v1, v2, options) {
    if(v1 === v2) {
      return options.fn(this);
    }
  });

var options =
{
    method: 'POST',
    body: {
        "email": "mayankmittal@intugine.com"
    },
    json: true,
    url: 'https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch',
    headers: {
        'Authorization': 'Bearer tTU3gFVUdP'
    }
};


app.get('', (req, res) => {
    request(options, (error, data) => {
        if (!error) {
            var delivered = 0;
            var text = ''
            var awnno = ''
            var result =[];
            var j=0;
            const len = Object.keys(data).length
            for (var i = 0; i < len; i++) {
                if (data.body[i].current_status_code == 'DEL') {
                    delivered++; 
                    text +=data.body[i].awbno+" \xa0\xa0\xa0\xa0\xa0 "+data.body[i].carrier+"  \xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+data.body[i].from + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0  "+ data.body[i].to+ " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  "+ data.body[i].createdAt +"  \xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+data.body[i].time+ "\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+ data.body[i].current_status
                    result[j]=text; 
                    j++
                    text=""                   
                }
               

            }
        }
        res.render('del',{
            delivered: delivered,
            result})
                        
        
    })


})
app.get('/dex', (req, res) => {
    request(options, (error, data) => {
        if (!error) {
            var delivered = 0;
            var text = ''
            var awnno = ''
            var result =[];
            var j=0;
            const len = Object.keys(data).length
            for (var i = 0; i < len; i++) {
                if (data.body[i].current_status_code == 'DEX') {
                    delivered++; 
                    text +=data.body[i].awbno+"  \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+data.body[i].carrier+"  \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+data.body[i].from + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0  "+ data.body[i].to+ " \xa0\xa0\xa0\xa0\xa0\xa0\xa0  "+ data.body[i].createdAt +"  \xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+data.body[i].time+ "\xa0\xa0\xa0\xa0\xa0\xa0\xa0  "+ data.body[i].current_status
                    result[j]=text; 
                    j++
                    text=""                   
                }
               

            }
        }
        res.render('dex',{
            delivered: delivered,
            result})
                        
        
    })
    
})

app.get('/int', (req, res) => {
    request(options, (error, data) => {
        if (!error) {
            var delivered = 0;
            var text = ''
            var awnno = ''
            var result =[];
            var j=0;
            const len = Object.keys(data).length
            for (var i = 0; i < len; i++) {
                if (data.body[i].current_status_code == 'INT') {
                    delivered++; 
                    text +=data.body[i].awbno+"  \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+data.body[i].carrier+"  \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+data.body[i].from + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0  "+ data.body[i].to+ " \xa0\xa0\xa0\xa0\xa0\xa0\xa0  "+ data.body[i].createdAt +"  \xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+data.body[i].time+ "\xa0\xa0\xa0\xa0\xa0\xa0\xa0  "+ data.body[i].current_status
                    result[j]=text; 
                    j++
                    text=""                   
                }
               

            }
        }
        res.render('int',{
            delivered: delivered,
            result})
                        
        
    })

})

app.get('/nfi', (req, res) => {
    request(options, (error, data) => {
        if (!error) {
            var delivered = 0;
            var text = ''
            var awnno = ''
            var result =[];
            var j=0;
            const len = Object.keys(data).length
            for (var i = 0; i < len; i++) {
                if (data.body[i].current_status_code == 'NFI') {
                    delivered++; 
                    text +=data.body[i].awbno+"  \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+data.body[i].carrier+"  \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+data.body[i].from + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0  "+ data.body[i].to+ " \xa0\xa0\xa0\xa0\xa0\xa0\xa0  "+ data.body[i].createdAt +"  \xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+data.body[i].time+ "\xa0\xa0\xa0\xa0\xa0\xa0\xa0  "+ data.body[i].current_status
                    result[j]=text; 
                    j++
                    text=""                   
                }
               

            }
        }
        res.render('nfi',{
            delivered: delivered,
            result})
                        
        
    })

})
app.get('/ood', (req, res) => {
    request(options, (error, data) => {
        if (!error) {
            var delivered = 0;
            var text = ''
            var awnno = ''
            var result =[];
            var j=0;
            const len = Object.keys(data).length
            for (var i = 0; i < len; i++) {
                if (data.body[i].current_status_code == 'OOD') {
                    delivered++; 
                    text +=data.body[i].awbno+"  xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+data.body[i].carrier+"  \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+data.body[i].from + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0  "+ data.body[i].to+ " xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  "+ data.body[i].createdAt +"  \xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+data.body[i].time+ "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  "+ data.body[i].current_status
                    result[j]=text; 
                    j++
                    text=""                   
                }
               

            }
        }
        res.render('ood',{
            delivered: delivered,
            result})
                        
        
    })

})

app.listen(port, () => {

    console.log("Listining on port " + port);

})