export const getUserInfo = (name) => {

    console.log("getUserInfo",name);
    let username = name.toLowerCase().trim();
    const URL = `https://api.github.com/users/${username}`;
    return fetch(URL)
            .then((res) => {
                
                console.log(res);
                return res.json()}
            
            )
            .catch(error => {
                console.log("error",error);
            });
}
