import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "src/Utils/AppError";
import { PLAYER_COLLECTION } from "../storageConfig";
import {PlayerStogareDTO} from './PlayerStrogareDTO'

export async function playerAddByGroup(newPlayer: PlayerStogareDTO, group: string) {
    try{
        await AsyncStorage.setItem({`${PLAYER_COLLECTION}-${group}`, '')

    } catch (error){
    throw (error);
    }
}