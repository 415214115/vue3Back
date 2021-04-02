// import { routes} from '../router/index.js'
import { editRouter } from '../router/index'

let routerList: Array<any> = []
console.log(editRouter, '0000000000')
// function getRouter(){
	editRouter.forEach((v, i) => {
		if(v.name == 'layout'){
			routerList = routerList.concat(v.children)
		}
	})
// }
// getRouter()
export default routerList