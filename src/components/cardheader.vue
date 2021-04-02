<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>卡片名称</span>
                <el-button class="button" type="text">操作按钮</el-button>
            </div>
        </template>
    </el-card>
</template>
<script>
import globalData from '@/utils/globalData'
import { defineComponent, onMounted, inject, watchEffect } from 'vue'

export default defineComponent({
    props: {
        totalNum: {
            type: Number,
            default: 100,
        },
        current: {
            type: Number,
            default: 1,
        },
    },
    setup(porps, cxt) {
        const app = inject('app')
        const emit = cxt.emit
        // watchEffect(() => {
        //     console.log(`totalNum is: ` + porps.totalNum)
        // })

        onMounted(() => {
            // console.log(emit)

            console.log(globalData)
            // console.log(porps, 'globalPagination', totalNum)
        })

        const pageNumChange = val => {
            // 改变页码时
            emit('handleSizeChange', val)
        }
        return {
            pageNumChange,
            globalData,
        }
    },
})
</script>
<style lang="scss" scoped></style>
