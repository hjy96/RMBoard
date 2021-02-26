const express = require('express');

// dfs_xy_conv

// var session = require('express-session');
// var bodyParser = require('body-parser');
const router = express.Router();

var debug = require('debug')('myApp:test');

const request = require('request');
const cheerio = require('cheerio');
const { json } = require('express');
// const moment = require('moment');
// require('moment-timezone');



// router.get('/', function(req, res, next) {
//   const url1 = 'http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst';

//   const key = "YolRlNz%2F3YtnWBOWQZwKIlXQwbxncJEXT43EbxJh1Qpzc5kGl9S8Iu2uT5Q8ODrAK52CFbZNIaxZAEBGccu0iA%3D%3D";

// //moment.tz.setDefault("Asia/Seoul");
// //const date = moment().format('YYYYMMDD');
//   const base_time = '0500';
//   const nx = '60';
//   const ny = '127';
//   const dataType = 'json';

//   // url
//   const all_url = url1 + '?serviceKey=' + key +  '&dataType=' + dataType + '&base_date=20210114' + '&base_time=0500' + '&nx='
//       + nx + '&ny=' + ny;
//   console.log(all_url);
 
//   request(all_url, function (err, res, body) {
//      $ = cheerio.load(body);
//     console.log("성북구 날씨 예보");
//     $('item').each(function (idx) {
//       const time = $(this).find('fcstTime').text();
      
//       const weather = $(this).find('category').text();
//       const wea_val = $(this).find('fcstValue').text();
      
//       // 출력
//       console.log(`시간 : ${time} 날씨 정보 : ${weather} 값 : ${wea_val}`);
//      });
//   });
// });


router.get('/', function(req, res, next) {
    res.render('login', { layout : 'login' });
    // const url1 = 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty';
  
    // var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'YolRlNz%2F3YtnWBOWQZwKIlXQwbxncJEXT43EbxJh1Qpzc5kGl9S8Iu2uT5Q8ODrAK52CFbZNIaxZAEBGccu0iA%3D%3D'; /*Service Key*/
    // queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); /**/
    // queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /**/
    // queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
    // queryParams += '&' + encodeURIComponent('sidoName') + '=' + encodeURIComponent('서울'); /**/
    // queryParams += '&' + encodeURIComponent('ver') + '=' + encodeURIComponent('1.0'); /**/
    // url1 += queryParams;

    // console.log(url1);


    
    // request(url1, function (err, respnnse, body) {
    //     if(error){
    //         console.log(error);
    //     }
    //     var obj = JSON.parse(body);
    //     console.log(obj);
    //     console.log(body);
    //     // var strContents = new Buffer(body, 'binary')
    //     // iconv = new Iconv1('euc-kr', 'UTF8')
    //     // strContents = iconv.convert(strContents).toString()
    //     // console.log(strContents);
    // });
    
    
  });












router.post('/login_process', (res,req) =>{
    alert(res, req);
})

module.exports = router;
