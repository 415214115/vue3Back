<template>
	<el-pagination
		:hide-on-single-page="true"
		@current-change="pageNumChange"
		:current-page="current"
		:page-size="globalData.pagination.pageSize"
		layout="total, prev, pager, next, jumper"
		:total="totalNum"
        class="globalPagination"
        prev-text="上一页"
        next-text="下一页"
	>
	</el-pagination>
    <!-- 111 -->
</template>
<script>
import globalData from "@/utils/globalData";
import { defineComponent, onMounted, inject, watchEffect } from "vue";

export default defineComponent({
    props:{
        totalNum:{
            type:Number,
            default: 100
        },
        current:{
            type:Number,
            default: 1
        }
    },
	setup(porps, cxt) {
        const app = inject('app')
        const emit = cxt.emit
        // watchEffect(() => {
        //     console.log(`totalNum is: ` + porps.totalNum)
        // })
        
        onMounted(()=>{
            // console.log(emit)
            
            console.log(globalData)
            // console.log(porps, 'globalPagination', totalNum)
        })
       

        const pageNumChange = (val) => {
            // 改变页码时
            emit('handleSizeChange', val)

        }
        return {
            pageNumChange,
            globalData
        }
    },
});
</script>
<style lang="scss" scoped>
.globalPagination{
    text-align: right;
    margin-top: 20px;
}
</style>
