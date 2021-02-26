var express = require('express');
var router = express.Router();
const axios = require("axios"); 
const cheerio = require("cheerio"); 

/* GET users listing. */
router.get('/index', function(req, res, next) {
  res.render('index', { layout : 'index' });
  // res.send('respond with a resource');

});

router.get('/Atmospheric', function(req, res, next) {
  

  let url = 'https://www.airkorea.or.kr/web/dustForecast?pMENU_NO=113';
  //에어코리아 사이트 크롤링 
  axios.get(url).then(html => {
    let ulList = [];
    let dateList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("a.popup-layer").children('img');
    const $dust = $("dl.forecast");

    $dust.each(function(i, elem) {
      dateList[i] = { 
        date : $(this).find('dt').text(),
        forecast : $(this).find('div.txtbox').text(),
        dust_state : $(this).find('tbody tr td').text()
        
      }; 
    });

    console.log(dateList);
    var today_dust = [];
    var today_pm10 = []; 
    var today_pm25 = [];

    var tomorrow_dust = [];
    var tomorrow_pm10 = [];
    var tomorrow_pm25 = [];


    for(var i = 0 ;i < 37; i+=2){
      today_dust.push(dateList[0].dust_state.substring(i,i+2));
    }

    for(var i = 38 ;i < 76; i+=2){
      today_pm10.push(dateList[0].dust_state.substring(i,i+2));
    }

    for(var i = 76 ;i < 114; i+=2){
      today_pm25.push(dateList[0].dust_state.substring(i,i+2));
    }

    for(var i = 0 ;i < 37; i+=2){
      tomorrow_dust.push(dateList[1].dust_state.substring(i,i+2));
    }

    for(var i = 38 ;i < 76; i+=2){
      tomorrow_pm10.push(dateList[1].dust_state.substring(i,i+2));
    }

    for(var i = 76 ;i < 114; i+=2){
      tomorrow_pm25.push(dateList[1].dust_state.substring(i,i+2));
    }
    

    // console.log(dateList[0].forecast.split('○'));
    
    //오늘 예보
    var forecast_1 = dateList[0].forecast.split('○');

    //내일 예보
    var forecast_2 = dateList[1].forecast.split('○');

    


		//each : list 마다 함수 실행, forEach와 동일
    $bodyList.each(function(i, elem) {
      ulList[i] = { 
        src: $(this).attr('src')
      }; 
    });

    var tr = "<tr><td><img src='https://www.airkorea.or.kr/"+ulList[0].src+"' width='285' height='305'></td>";
        tr += "<td><img src='https://www.airkorea.or.kr/"+ulList[1].src+"' width='285' height='305'></td></tr>";
        tr += "<tr><td><img src='https://www.airkorea.or.kr/"+ulList[2].src+"' width='285' height='305'></td>";
        tr += "<td><img src='https://www.airkorea.or.kr/"+ulList[3].src+"' width='285' height='305'></td></tr>";
    
    // console.log("ㅎㅇ"+ulList[0].src);
    const data = ulList.filter(n => n.src);

    //json으로 변환하여 app으로 전송
    res.render('Atmospheric', { 
      layout : 'Atmospheric', 
      crawler : data, 
      dustimg_airkorea : tr, 
      today : dateList[0].date,
      tomorrow : dateList[1].date,
      forecast_1 : forecast_1[1],
      forecast_2 : forecast_1[2],
      forecast_3 : forecast_2[1],
      forecast_4 : forecast_2[2],
      today_dust : today_dust,
      today_pm10 : today_pm10,
      today_pm25 : today_pm25,
      tomorrow_dust : tomorrow_dust,
      tomorrow_pm10 : tomorrow_pm10,
      tomorrow_pm25 : tomorrow_pm25
    });
    
  })

});

router.get('/pm10ForecastWeek', function(req, res, next) {
  let url = 'https://www.airkorea.or.kr/web/dustForecastWeek?pMENU_NO=193';
  //에어코리아 사이트 크롤링 
  axios.get(url).then(html => {
    var dateplus2_dust = [];
    var dateplus3_dust = [];
    var dateplus4_dust = [];
    var dateplus5_dust = [];
    
    let ulList = [];
    let dateList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("a.popup-layer").children('img');
    const $dust = $("dl.forecast");

    $dust.each(function(i, elem) {
      dateList[i] = { 
        forecast : $(this).find('div.txtbox').text(),
        date : $(this).find('tbody tr th').text(),
        state : $(this).find('tbody tr td').text()
        
      }; 
    });
    
    for(var i = 0 ;i < 39; i+=2){
      dateplus2_dust.push(dateList[1].state.substring(i,i+2));
    }
    for(var i = 40 ;i < 80; i+=2){
      dateplus3_dust.push(dateList[1].state.substring(i,i+2));
    }
    for(var i = 80 ;i < 120; i+=2){
      dateplus4_dust.push(dateList[1].state.substring(i,i+2));
    }
    for(var i = 120 ;i < 160; i+=2){
      dateplus5_dust.push(dateList[1].state.substring(i,i+2));
    }

    // for(var i = 76 ;i < 114; i+=2){
    //   today_pm25.push(dateList[0].dust_state.substring(i,i+2));
    // }
    console.log(dateplus5_dust);

    var datedust = {
      dateplus2_dust : dateplus2_dust,
      dateplus3_dust : dateplus3_dust,
      dateplus4_dust : dateplus4_dust,
      dateplus5_dust : dateplus5_dust
    }

    var date = {
      dateplus2 : dateList[1].date.substring(0,10),
      dateplus3 : dateList[1].date.substring(10,20),
      dateplus4 : dateList[1].date.substring(20,30),
      dateplus5 : dateList[1].date.substring(30,40),
    }
    
  
  res.render('pm10ForecastWeek', { 
    layout : 'pm10ForecastWeek',
    pm10forecast : dateList[0].forecast, //초미세먼지 대기예보 
    date : date, // 미래날짜
    datedust : datedust // 미래 미세먼지
  });
  // res.send('respond with a resource');

  });
})

router.get('/areaNotification', function(req, res, next) {
  res.render('areaNotification', { layout : 'areaNotification' });
  // res.send('respond with a resource');

});


router.get('/duststorm', function(req, res, next) {
  res.render('duststorm', { layout : 'duststorm' });
  // res.send('respond with a resource');

});


router.get('/locationMaterial', function(req, res, next){
  res.render('locationMaterial', {layout : 'locationMaterial'});
})


router.get('/Atmosphericanalysis', function(req, res, next){
  res.render('Atmosphericanalysis', {layout : 'Atmosphericanalysis'});
})

router.get('/Dustkinds', function(req, res, next){
  res.render('Dustkinds', {layout : 'Dustkinds'});
})










module.exports = router;
