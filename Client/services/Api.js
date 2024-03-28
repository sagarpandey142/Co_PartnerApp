exports.generateVerifyOTP = {
    generateOTP : "http://192.168.79.20:4000/v1/getOtp",
    verifyOTP : "http://192.168.79.20:4000/v1/verifyOtp",
    login : "http://192.168.79.20:4000/v1/login",
    DecodedApi:"http://192.168.79.20:4000/v1/DecodToken"

}

exports.SignupRoute={
    signup:"http://192.168.79.20:4000/v1/signup"
}

exports.projectsRoute={
    projectByName : "http://192.168.79.20:4000/v1/projects/findProjectByProjectName",
    createProject:"http://192.168.79.20:4000/v1/projects/addProject",
    project: "http://192.168.79.20:4000/v1/projects/findProjects",
    projectByName : "http://192.168.79.20:4000/v1/projects/findProjectByProjectName"
}

exports.jobsRoute = {
    getSavedJobs: "http://192.168.79.20:4000/v1/getSavedJobs",
    getRecentJobs: "http://10.6.135.17:4000/v1/getRecentJobs",
}