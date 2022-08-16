const user = JSON.parse(localStorage.getItem('user'));
const token = user?.accessToken
console.log(token);
export const tokenConfig = {
    headers:{
        "Authorization": token 
    }
}