import { myAxios } from "./helper";

export const adminLogin = async (admin) => {
	const responce = await myAxios.post("/admin", admin);
	return responce.data;
};



// export const getAllUser=async ()=>{
//     const responce = await myAxois.get("user/");
//     return responce.data;
// } 