<template>
	<div class="headers">
        <div class="headersBox">
            <div>
                <el-breadcrumb   el-breadcrumb separator="/" class="breadcrumb">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            
            <div>
                <span class="msgLink">欢迎：<span>admin</span></span>
                <span class="msgLink">上次登陆时间：2021-1-14 16:03:21</span>
                <el-button type="text">退出登录</el-button>
            </div>
        </div>
    </div>
    
</template>

<script lang="ts">
    import { defineComponent } from "vue"
    export default defineComponent({
        name: 'headers',
        setup(props, context){
            
        }
    })
</script>


<style lang="scss" scoped>
@media screen and (max-width:960px){
    .breadcrumb{
        display: none;
    }
}
.headers{
    // box-shadow: 0 1px 4px rgba(0,21,41,.08);
    padding: 0 20px;
    background: #FFFFFF;
    border-bottom: 1px solid #EBEEF5;
        height: 50px;

    .headersBox{
        width: 100%;
        height: 50px;
        line-height: 50px;
        color: #FFFFFF;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        
        .msgLink{
            margin-right: 20px;
            span{
                font-weight: 600;
            }
        }
    }
}

</style>
