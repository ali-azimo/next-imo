import User from '../models/user.model';

import {connect} from '../mongodb/mongoose';

export const creatOrUpdateUser = async(
    id,
    first_name,
    last_name,
    image_url,
    email_addresses
) =>{
    try{
        await connect();
        const user = await User.findOneAndUpdate(
            {clerkId: id},
            {
                $set:{
                    firstNmae: first_name,
                    lastName: last_name,
                    profilePiture: image_url,
                    email: email_addresses[0].email_address,
                },
            }, {upsert: true, new:true}
        );
        return user;
    }catch(error){
        console.log("Erro: Ipossivel aactualizar e criar usuario", error);
    }
};

//APAGAR USUARIO

export const deleteUser = async (id) =>{
    try{
        await connect();
        const user = await User.findOneAndDelete( {clerkId: id});
    }catch(error){
        console.log("Erro: Ipossivel apagar usuario", error);
    }
};




