import axios from 'axios'

export class AuthService{
    
    static authenticate = async (userName, password) => {
        // return await axios.post("/api/authenticate", { data: userName, password});
        return await Promise.resolve({data : { isAuthenticated: true, token : "sjflksjdfklsj32423" }});
    }
}




