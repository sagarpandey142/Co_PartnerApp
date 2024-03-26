exports.generateVerifyOTP = {
    generateOTP : "http://192.168.79.20:4000/v1/getOtp",
    verifyOTP : "http://192.168.79.20:4000/v1/verifyOtp",
    login : "http://192.168.79.20:4000/v1/login"

}

exports.SignupRoute={
    signup:"http://192.168.79.20:4000/v1/signup"
}

exports.projectsRoute={
    project: "http://192.168.79.20:4000/v1/projects/findProjects",
    projectByName : "http://192.168.79.20:4000/v1/projects/findProjectByProjectName",
    createProject:"http://192.168.79.20:4000/v1/projects/addProject",
}