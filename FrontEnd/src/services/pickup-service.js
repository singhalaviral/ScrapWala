import { myAxios } from "./helper";

export const addPickup= (newPickup)=>{
    console.log(newPickup);
    const response = myAxios.post("/pickup",newPickup);
    return response.data;
}