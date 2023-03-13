import { myAxios } from "./helper";

export const userLogin = async (user) => {
	const responce = await myAxios.post("/user", user);
	return responce.data;
};

export const getAllUser=async ()=>{
    const responce = await myAxios.get("/user");
    return responce.data;
}

// import { myAxois } from "./Helper";

// export const signUp=async (user)=>{
//     const responce = await myAxois.post("/user/", user);
//     return responce.data;
// };