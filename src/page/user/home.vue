<template>
    <div>
        <el-container class="bigcon">
            <el-aside class="user">
                <img class="picture" src="static/avator.jpg">
                <p class="status">未审核</p>
                <p class="username">name</p>
                <hr>
                <el-row class="row">
                    <el-col class="attribute" :span="8">职业:</el-col><el-col class="value" :span="16">xxx</el-col>
                </el-row> 
                <el-row class="row">
                    <el-col class="attribute" :span="8">职业:</el-col><el-col class="value" :span="16">xxx</el-col>
                </el-row>
                <el-row class="row">
                    <el-col class="attribute" :span="8">职业:</el-col><el-col class="value" :span="16">xxx</el-col>
                </el-row>
                <el-row class="row">
                    <el-col class="attribute" :span="8">职业:</el-col><el-col class="value" :span="16">xxx</el-col>
                </el-row>
            </el-aside>
            <el-container class="smallcon">
                <el-header height="40px"><el-link @click="changePassword=true">修改密码</el-link><el-link @click="exit">退出</el-link></el-header>
                <el-main><router-view></router-view></el-main>
            </el-container>
        </el-container>
        <el-dialog style="text-align:left" title="修改密码" :visible.sync="changePassword" width="30%">   
            <el-form model="infoForm">
                <el-form-item label="姓名:" label-width="20%">
                    <el-input show-password v-model="oldPassword"></el-input>
                </el-form-item>
                <el-form-item label="新密码:" label-width="20%">
                    <el-input show-password v-model="newPassword"></el-input>
                </el-form-item>
                <el-form-item label="确认密码:" label-width="20%">
                    <el-input show-password v-model="affirmPassword"></el-input>
                </el-form-item>
                <el-button type="warning" style="margin-left:30px" @click="changePassword=false" plain>取消</el-button>
                <el-button type="success" style="margin-left:250px" @click="changePassword=false" plain>确认</el-button>
            </el-form>
        </el-dialog>
    </div>
</template>


<script>
export default {
    data(){
        return{
            changePassword:false,
            oldPassword:'',
            newPassword:'',
            affirmPassword:'',
        }
    },
    methods:{
        exit(){
            this.$router.push('/user/login')
        }
    }
}
</script>

<style scoped>
.bigcon{
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
}
.el-link{
    margin-top:10px;
    margin-right:10px;
}
.el-header{
    text-align: right;
    background-color: rgb(228, 240, 206);
}
.user{
    background-color:  rgb(210, 228, 182);
}
.status{
    text-align: left;
    margin-top:40px;
    margin-left:100px;
    font-size: 20px;
}
.username{
    text-align:left;
    margin-left:30px;
    margin-top:10px;
}
.picture{
    float:left;
    margin-left:20px;
    margin-top:20px;
    width:60px;
    height:60px;
}
.attribute{
    text-align:right;
}
.value{
    text-align: left;
}
.row{
    margin-top: 10px;
}
</style>
