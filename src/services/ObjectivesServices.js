import axios from 'axios';



 const GetObjectives =  ()=> {
    return axios.get("http://localhost:41863/objectives", { withCredentials: true }).then((response)=>{
        return response.data
    })
    
    
}
const UpdateObjective = (id, reqBody) => {
    return axios.put(`http://localhost:41863/objectives/${id}`,
        reqBody, { withCredentials: true }).then((response) => {
            if (response) { return true; }
            else return false;
        })
}
const GetObjectiveById = (id) => {
    return axios.get(`http://localhost:41863/objectives/${id}`, { withCredentials: true }).then((response) => {
        return response.data;
    })
}
const CreateObjective = (reqBody) => {
    return axios.post("http://localhost:41863/objectives", reqBody, { withCredentials: true }).then((response) => {
        return response.data;
    });
}
const DeleteObjective = (id) => {
    return axios.delete(`http://localhost:41863/objectives/${id}`, { withCredentials: true });
    
    
}


export { GetObjectives, GetObjectiveById, UpdateObjective, DeleteObjective, CreateObjective }