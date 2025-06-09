import mongoose from "mongoose";


let inicializar = false;

export const connect = async () =>{
    mongoose.set('strictPopulate', true);


    if(inicializar){
        console.log('MongoDb inicializado com sucesso');
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'next-imo',
            userNewUrlParser: true,
        });
        inicializar = true;
        console.log("Contaacto como MongoDB");
    }catch (error){
        console.log("Erro ao conectar com MongoDB", error)
    }
};