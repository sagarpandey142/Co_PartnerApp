import axios from 'axios';

import { projectsRoute } from '../Api'; 

exports.ProjectsHandler = async() => {
       try{
            const response = await axios.get(projectsRoute.project);
            console.log("res", response)
            if(response){
                return response;
            }
       }catch(error){
        console.log("error", error);
       }
}

exports.ProjectsByNameHandler = async(projectName) => {
    try{
         const response = await axios.post(projectsRoute.projectByName, projectName);
         console.log("res", response)
         if(response){
             return response;
         }
    }catch(error){
     console.log("error", error);
    }
}