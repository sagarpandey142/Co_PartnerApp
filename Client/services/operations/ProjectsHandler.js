import axios from 'axios';

import { projectsRoute } from '../Api'; 

exports.ProjectsHandler = async(data) => {
    console.log("yes")
       try{
            const response = await axios.post(projectsRoute.project, data);
            console.log("res", response)
            if(response){
                return response;
            }
       }catch(error){
        console.log("error", error);
       }
}