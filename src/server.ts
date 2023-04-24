import app from './app';

function main() {
    let port = 3000;
    try{
        app.listen(port, 'localhost', async()=> {
            console.log(`listening on port ${port}`);  
        });
    }catch(err){

    }
}

main()