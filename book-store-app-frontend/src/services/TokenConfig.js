const user = JSON.parse(localStorage.getItem('user'));
const token = user?.accessToken
export const tokenConfig = {
    headers:{
        "Authorization": token 
    }
}