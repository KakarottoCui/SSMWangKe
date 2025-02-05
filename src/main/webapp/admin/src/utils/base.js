const base = {
    get() {
                return {
            url : "http://localhost:8080/ssm03ooj/",
            name: "ssm03ooj",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm03ooj/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "数据结构课程管理平台"
        } 
    }
}
export default base
