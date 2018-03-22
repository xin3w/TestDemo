<template>
    <div class="full-height">
        <el-container class="full-height">
            <el-aside class="side">
                <ul>
                    <router-link to='/' tag="li"><i class="glyphicon glyphicon-tasks"></i> 依赖后实例下的属性和方法</router-link>
                    <router-link to='/1' tag="li">自定义表单验证</router-link>
                    <router-link to='/2' tag="li">国际化</router-link>
                    <router-link to='/3' tag="li">切换自动获取焦点</router-link>
                    <router-link to='/4' tag="li">相关收藏</router-link>
                </ul>
            </el-aside>
            <el-main>
                <transition name="el-fade-in-linear" mode="out-in">
                    <router-view></router-view>
                </transition>
            </el-main>
        </el-container>
    </div>
</template>
<style>

</style>
