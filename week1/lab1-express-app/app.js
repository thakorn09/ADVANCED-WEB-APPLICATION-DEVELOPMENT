//โหลดโมดูล express จากนั้นเก็บผลลัพธ์ลงในตัวแปร expressFunction
const expressFunction = require('express');
//เรียกฟังก์ชัน expressFunction() ซึ่งผลลัพธ์จะได้กลับมาเป็นออบเจ็กต์ แล้วนําไปเก็บยังตัวแปร express
const expressApp = expressFunction();
expressApp.use(function (req, res, next) {
// Website you wish to allow to connect
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
// Pass to next layer of middleware
next();
});
//เรียกใช้เมธอด get เพื่อตรวจสอบพาธที่ส่งมาพร้อมกับ HTTP Request โดยกําหนด Endpoint
expressApp.get('/api/resource', function(req, res){
const myJson = {id:'B6012755', name:'Thanakorn'};
res.send(myJson);
});
//สร้าง Event Listener รอการเชื่อมต่อผ่านจากพอร์ต 3000
expressApp.listen(3000, function(){
console.log('Listening on port 3000');
});