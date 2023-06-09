import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class app {
    public express: express.Application;
    public constructor(){
        this.express = express();
        this.middleware();
        this.database();
        this.routes();
    }

    private middleware() {
        this.express.use(express.json())
    }

    private async database() {
        try{
            mongoose.set('strictQuery', true);
            await mongoose.connect('mongodb://0.0.0.0:27017/PokeProva')
            console.log('Connected to MongoDB');
            
        }catch(err){
            console.log("Connection database error", err);
        }
    }

    private routes(): void {
        this.express.use(routes)
    }
}

export default new app().express