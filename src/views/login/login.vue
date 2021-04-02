<template>
	<div class="login">
		<div class="loginForm">
			<h1>后台管理系统登录</h1>
			<el-form :model="formData" status-icon ref="formValidate">
				<el-form-item class="loginFormItem">
					<el-input
						type="text"
						v-model="formData.username"
						autocomplete="off"
                        :style="inputStyle"
						placeholder="账号"
						prefix-icon="el-icon-user"
					></el-input>
				</el-form-item>
				<el-form-item class="loginFormItem">
					<el-input
						type="password"
						v-model="formData.password"
						placeholder="密码"
                        :style="inputStyle"
						prefix-icon="el-icon-lock"
						autocomplete="off"
					></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="submit" @click="submit">提交</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script lang="ts">
// import { defineComponent, getCurrentInstance, inject, onMounted, ref, Ref, watch } from "vue";
import { defineComponent, onMounted, inject, getCurrentInstance, ref, reactive, toRefs } from "vue";
export default defineComponent({
	name: "Login",
	setup(props, context) {
		const App: any = inject("app");
		// 登录input框样式
        const inputStyle: object = {
            'background-color': 'rgba(0, 0, 0, 0.1)',
            'color':' #eeeeee',
            'border-color': 'rgba(255,255,255,.1)'
        }
        
        // 登录数据
        interface login{
            username?: string | number;
            password?: string | number;
		}
		// let ruleForm: login = reactive({
        //     username: '',
        //     password: ''
		// })
        const formData: login = reactive({
            username: '',
            password: ''
        })
        // const rules: any = reactive({
        //     username: [
        //         { required: true, message: '请输入活动名称', trigger: 'blur' },
        //     ],
        //     password: [
        //         { required: true, message: '请输入活动名称', trigger: 'blur' },
        //     ]
        // })
        // console.log(formData)
        // const ruleForm: login = {
        //     username: '',
        //     password: ''
		// }
        
        // const names = ref('5487')

		// function onClick() {
		// 	const App: any = inject("app");
		// 	console.log(App);
        // }
		onMounted(() => {
			// onClick();
        });
		// const formValidate: any = ref('formValidate')
        const submit = () => {
        //    console.log(formValidate.value)
        //    formValidate.value.validate((res: any)=>{
        //         console.log(res)
        //     })
            // formValidate.value.validate((res: any)=>{
            //     console.log(res)
            // })

			if (!formData.username || !formData.password) {
				App.$message.error('账号或密码不能为空')
			} else {
				App.$message.success('通过')
				App.$store.commit('setToken', '123')
				App.$router.replace('/')
			}
            // console.log(formData.username, formData.password);
        };
		return {
			inputStyle,
			// ...toRefs(formData),
			// ruleForm,
            formData,
            // rules,
            // formValidate,
			submit,
		};
	},
});
</script>

<style lang="scss" scoped>
.login {
	width: 100%;
	height: 100vh;
	background: #2d3a4b;
}
.loginForm {
	width: 520px;
	padding: 160px 35px 0;
	position: relative;
	margin: 0 auto;
	max-width: 100%;
    text-align: center;
    h1{
        color: #eeeeee;
        margin-bottom: 30px;
    }
	.submit {
		width: 100%;
	}
}

</style>
<style lang="scss">
.loginForm .el-input__inner{
    background: none;
}
</style>