<template>
	<div class="menuLogo">
		<img src="" alt="">
		logo
	</div>
	<el-scrollbar
		wrap-class="scrollbar-wrapper navMenuScrollbar"
		style="height: 100%"
	>
	<!-- background-color="#304156" -->
		<el-menu
			:uniqueOpened="true"
			:default-active="$route.path"
			class="el-menu-vertical-demo"
			@open="handleOpen"
			@close="handleClose"
			:router="true"
			text-color="#BFCBD9"
			active-text-color="#1890ff"
		>
			<div v-for="item in navMenu" :key="item.name" class="elMenu">
				<el-submenu :index="item.path" v-if="item.children">
					<template #title>
						<i :class="item.meta.icon" class="titleIcon"></i>
						<span>{{ item.meta.title }}</span>
					</template>
					<div v-for="list in item.children" :key="list.name">
						<div v-if="list.children">
							<el-submenu :index="list.path">
								<template #title>
										<i
										:class="list.meta.icon"
										class="titleIcon"
									></i>
									<span>{{ list.meta.title }}</span>
								</template>
								<el-menu-item
									v-for="listItem in list.children"
									:key="listItem.name"
									v-show="!listItem.hidden"
									:index="`${listItem.path}`"
								>
									<i
										:class="listItem.meta.icon"
										class="titleIcon"
									></i
									>{{ listItem.meta.title }}
								</el-menu-item>
							</el-submenu>
						</div>
						<div v-else>
							<el-menu-item
								:index="`${list.path}`"
								v-show="!list.hidden"
							>
								<i :class="list.meta.icon" class="titleIcon"></i
								>{{ list.meta.title }}
							</el-menu-item>
						</div>
					</div>
				</el-submenu>
				<el-menu-item :index="item.path" v-else v-show="!item.hidden">
					<i :class="item.meta.icon" class="titleIcon"></i>
					<span>{{ item.meta.title }}</span>
				</el-menu-item>
			</div>
		</el-menu>
	</el-scrollbar>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
	name: "leftMenu",
	setup(props, context) {
		const App: any = inject("app");
		// console.log(App.$store.state.nav.routers, 'nav')
		// console.log(useStore().state.nav.routers, "nav");
		const navMenu: Array<any> = App.$store.state.nav.routers;

		function handleOpen(e: any) {
			console.log("handleOpen:" + e);
		}
		function handleClose(e: any) {
			console.log("handleClose:" + e);
		}
		return {
			handleOpen,
			handleClose,
			navMenu,
		};
	},
});
</script>


<style lang="scss" scoped>
.menuLogo {
	width: 100%;
	height: 50px;
	line-height: 50px;
	background: #2b2f3a;
	color: #ffffff;
	text-align: center;
}
.el-menu-vertical-demo {
	border-right: none;
}
.el-menu .titleIcon {
	color: #ffffff;
	margin-right: 5px;
}


</style>
