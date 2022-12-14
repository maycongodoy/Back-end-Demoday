const User = require ('../../models/user')

module.exports = {
    
    async find (){
        const users = await User.find({}); 
        console.log(users);
        return users
    },
    
    async save (data){
        const saved = await new User(data).save();
        return saved
    },

    async update (id, data){
        console.log(data, id);
        await User.updateOne({_id: id}, data ); 
        const userUpdated = await User.findById(id);
        return userUpdated
    },

    async findById (id){
        const user = await User.findById(id);
        return user
    },

    async delete (id){
        const userdeleted = await User.deleteOne({_id: id}); 
        return userdeleted
        
    },

    async findOne (object, fullFilds = false){
       
        if (fullFilds){
            const user = await User.findOne(object).select("nome sobrenome email password cep cidade estado UF ");
            return user
        }else{
            const user = await User.findOne(object);
            return user
        }
    },

}