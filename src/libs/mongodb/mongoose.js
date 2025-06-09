import mongoose from "mongoose";


let inicializar = false;

export const connect = async () =>{
    mongoose.set('strictQuery', true);


    if(inicializar){
        console.log('MongoDb inicializado');
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'next-imo',
            userNewUrlParser: true,
            useUnifiedTopology: true,
        });
        inicializar = true;
        console.log("Contacto com MongoDB");
    }catch (error){
        console.log("Erro ao conectar com MongoDB", error)
    }
};