import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";
import { NewGroup } from "@screens/NewGroup";
import { groupsGetAll } from "./groupsGetAll";

export async function groupCreate(newGroupName: string){
    try{
        const storedGroup = await groupsGetAll();

        const storage = JSON.stringify([...storedGroup, newGroupName])

        await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    }catch(error){
        throw error;
    }
}