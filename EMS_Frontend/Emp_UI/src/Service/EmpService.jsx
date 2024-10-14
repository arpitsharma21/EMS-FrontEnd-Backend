import axios from "axios";

const BASE_URL = "http://localhost:8080"
class EmpService{

    saveEmp(emp){
        return axios.post(BASE_URL+"/save",emp);
    }

    getAllEmp(){
        return axios.get(BASE_URL + "/");
    }

    getEmpById(id){
        return axios.get(BASE_URL+"/"+id);
    }

    deleteEmp(id){
        return axios.get(BASE_URL+"/delete/"+id);
    }

    updateEmp(id,emp){
        return axios.post(BASE_URL+"/update/"+id,emp);
    }
}

export default new EmpService();