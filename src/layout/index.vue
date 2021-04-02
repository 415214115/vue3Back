<template>
	<!-- <el-container class="pageContainer">
		<el-aside class="pageAside">
			<leftMenu />
		</el-aside>
		<el-container>
			<el-header class="pageHeader">
				<headers />
			</el-header>
			<el-main class="pageMain">
				<el-card class="box-card">
				<transition name="fade" mode="out-in">
					<mainPage />
				</transition>
				</el-card>
			</el-main>
		</el-container>
	</el-container> -->

	<div class="pageBox">
		<div class="leftMenuBox"><leftMenu /></div>
		<div class="rightContent">
			<div><headers /></div>
			<el-scrollbar wrap-class="scrollbar-wrapper" class="contentScrollbar">
				<div class="contentBox">
						<el-card class="box-card">
							<mainPage />
						</el-card>
				</div>
			</el-scrollbar>
		</div>
	</div>
    <!-- 1111 -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import leftMenu from "./components/leftMenu.vue";
import mainPage from "../views/layout.vue";

import headers from "./components/header.vue";

export default defineComponent({
	name: "layout",
	components: {
		leftMenu,
		headers,
		mainPage,
	},
	setup(props, context) {},
});
</script>

<style lang="scss" scoped>
.pageBox {
	display: flex;
	justify-content: space-between;
	width: 100vw;
	height: 100vh;
	background: #f8f8f8;
	.leftMenuBox {
		width: 200px;
		background: #304156;
		overflow: hidden;
	}
	.rightContent {
		width: calc(100vw - 200px);
		.contentScrollbar{
			height: calc(100vh - 50px);
		}
		.contentBox {
			width: 100%;
			padding: 20px;
		}
	}
}

// .pageContainer {
// 	height: 100vh;
// 	overflow: hidden;
// 	.pageAside {
// 		width: 210px;
// 		max-width: 210px;
// 		height: 100%;
// 		background: #304156;
// 	}
// 	.pageHeader {
// 		width: 100%;
// 		height: 50px;
// 		max-height: 50px;
// 		box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
// 	}
// 	.pageMain {
// 		background: #f0f2f5;
// 	}
// }
// .fade-enter-active,
// .fade-leave-active {
// 	// transition: all 8s cubic-bezier(0.075, 0.82, 0.165, 1);
// 	transition: all 8s;
// }

// .fade-enter,
// .fade-leave-to {
// 	/* margin-right: 100vw; */
// 	transform: translateX(-100px);
// 	opacity: 0;
// }
</style>
