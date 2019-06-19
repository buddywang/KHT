<template>
    <div class="content">
        <el-row>
            <el-col :span="4">
                <el-menu
                    default-active="1"
                    class="menu"
                    router
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-menu-item index="/manage/home">
                        <i class="el-icon-menu"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item index="/manage/userlist">
                        <i class="el-icon-tickets"></i>
                        <span>用户列表</span>
                    </el-menu-item>
                    <el-menu-item index="/manage/employeelist">
                        <i class="el-icon-tickets"></i>
                        <span slot="title">员工列表</span>
                    </el-menu-item>
                    <el-submenu index="4">
                        <template slot="title">
                        <i class="el-icon-search"></i>
                        <span>统计查询</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/manage/organizationlist">机构列表</el-menu-item>
                            <el-menu-item index="/manage/operationhistory">操作记录</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span>系统设置</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/manage/systemparameter">系统参数</el-menu-item>
                            <el-menu-item index="/manage/organizationmanage">机构管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20">
                <el-container>
                    <el-header>
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
                        </el-breadcrumb>
                        <span style="position:absolute; right:100px;top:18px;">你好，xxx</span>
                        <i class="el-icon-s-custom img"></i>
                    </el-header>
                    <el-main>
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </el-main>
                </el-container>
            </el-col>
        </el-row>
        <div class="menu-backg"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content{
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
}
.menu{
    text-align: start;
    z-index: 1;
}
.menu-backg{
    z-index: 0;
    background-color: #545c64;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 16.6%;
}
.el-header{
    height: 100px;
    background-color: #DCDFE6;
    display: flex;
    align-items: center;
}
.img{
    font-size: 35px;
    position: absolute;
    right: 50px;
    top:13px;
}
</style>
