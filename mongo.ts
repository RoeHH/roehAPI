
export async function getExecutable(){
    return await MongoDenoExecutable.find();
}