export default function reconsitution(route: Array<any>){
    route.forEach((r, i)=>{
        if(r.name == 'layout'){
            r.children.forEach((child: any, c: number)=>{
                child.path = `${r.path}${child.path}`
                if(child.children){
                    child.children.forEach((childjunior: any, j: number)=>{
                        childjunior.path = `${child.path}/${childjunior.path}`
                        if(childjunior.children){
                            childjunior.children.forEach((v: any, i: number)=>{
                                v.path = `${childjunior.path}/${v.path}`
                            })
                        }
                    })
                }
            })
        }
    })
	return route
}