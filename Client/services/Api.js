exports.generateVerifyOTP = {
    generateOTP : "http://10.6.135.17:4000/v1/getOtp",
    verifyOTP : "http://10.6.135.17:4000/v1/verifyOtp",
    login : "http://10.6.135.17:4000/v1/login",
    DecodedApi:"http://10.6.135.17:4000/v1/DecodToken"

}

exports.SignupRoute={
    signup:"http://10.6.135.17:4000/v1/signup"
}

exports.projectsRoute={
    projectByName : "http://10.6.135.17:4000/v1/projects/findProjectByProjectName",
    createProject:"http://10.6.135.17:4000/v1/projects/addProject",
    project: "http://10.6.135.17:4000/v1/projects/findProjects",
    projectByName : "http://10.6.135.17:4000/v1/projects/findProjectByProjectName"
}

exports.savedProjectRoute = {
    getSavedProject: "http://10.6.135.17:4000/v1/getSavedProject",
    getRecentProject: "http://10.6.135.17:4000/v1/getRecentProject",
    addSavedProject: "http://10.6.135.17:4000/v1/addSavedProject",
}