console.log("hii")

const request= require('request')
var out_of_delivery=0;
    var delivered=0;
    var in_transit=0;
    var dex=0;
    var nfi=0;
data = 
{
    "email": "mayankmittal@intugine.com"
}
var options = 
{
  method: 'POST',
  body: data,
  json: true,
  url: 'https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch',
  headers: {
    'Authorization':'Bearer tTU3gFVUdP'
  }
};

request(options, callback);

function callback(error, response, body)
 {
  if (!error && response.statusCode == 200) 
  {
    const len = Object.keys(response).length
    for(var i=0;i<len;i++)
    { 
      if(response.body[i].current_status_code=='DEL')
      delivered++;
      if(response.body[i].current_status_code=='INT')
      in_transit++;
      if(response.body[i].current_status_code=='OOD')
      out_of_delivery++;
      if(response.body[i].current_status_code=='DEX')
      dex++;
      if(response.body[i].current_status_code=='OOD')
      nfi++;
    // console.log("item number is",i)
    // console.log(response.body[i].current_status)
    // console.log(response.body[i].current_status_code)
    }
    // console.log("Delivered ", delivered);
    // console.log("In transit", in_transit);
    // console.log("Out of delivery", out_of_delivery);
    // console.log("dex",dex);
    // console.log("nfi",nfi);
    // var temp=document.getElementById("del")
    // temp.innerHTML=delivered;
    callback(delivered);
    }
}

module.exports= request
