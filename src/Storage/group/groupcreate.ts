import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";
import { groupsGetAll } from "./groupsGetAll";
import { AppError } from "src/Utils/AppError";

export async function groupCreate(newGroupName: string){
    try{
        const storedGroup = await groupsGetAll();

        const groupAlreadyExists = storedGroup.includes(newGroupName);

        if(groupAlreadyExists){
            throw new AppError('Já existe um grupo cadastrado com esse nome');
                }

        const storage = JSON.stringify([...storedGroup, newGroupName])

        await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    }catch(error){
        throw error;
    }
}