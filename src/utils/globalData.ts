interface Global {
    deafultImage?: string;
    pagination?: any;
}

const globalData: Global = {
    deafultImage: '',
    // 分页组件每页请求数据量
    pagination:{
        pageSize: 20
    }
}
// window.$globalData  = globalData
// console.log(window)
export default globalData