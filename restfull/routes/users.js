module.exports = function(app){
    app.get('/users', (req, res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users:[{
                name:'HCode',
                email:'hcode@gmail.com',
                id:1
            }]
        });
    });
};