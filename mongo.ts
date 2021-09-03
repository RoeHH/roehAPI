import { MongoProject, MongoDenoExecutable, MongoDenoModule } from "https://www.roeh.ch/x/roehMongo";

export function getExecutable(){
    return MongoDenoExecutable.find();
}