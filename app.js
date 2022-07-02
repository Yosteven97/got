import got from 'got';

// // method 1
(async () => {
    try{
        const res = await got('http://worldtimeapi.org/api/timezone/Asia/Jakarta',{
            timeout: {
                request: 3000 //set timeout 3000ms 
            }
        })
        console.log(res.body);
    } catch (err) {
        console.log(err);
    }
})();

// // method 2
// got.get('http://worldtimeapi.org/api/timezone/Asia/Jakarta', {
//     timeout: {
//         request: 3000
//     } //set timeout 3000ms 
// }).then(async res => {
//     const data = res.body
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })
