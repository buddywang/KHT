<template>
    <div class="login_page  fillcontain">
        <div class="head">
            <img src="static/logo.png" width="60px" height="60px">
            <p>KHT开户系统</p>
        </div>
        <el-card class="login_card" shadow="always">
            <el-input placeholder="手机号码" class="input-with-select">
                <el-select class="select" v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="中国+86" value="中国+86"></el-option>
                </el-select>
            </el-input>      
            <el-input class="password" placeholder="密码" show-password v-model="password"></el-input>
            <el-input class="checkPassword" placeholder="确认密码"  show-password v-model="affirmPassword"></el-input>
            <el-row class="check"> 
                <el-col :span="17"><el-input class="checkCode" placeholder="请输入验证码"></el-input></el-col>
                <el-col :span="3" :offset="1"><el-button type="primary">获取验证码</el-button></el-col>
            </el-row>
            <el-button type="primary" class="register" style="font-size:15px">注册</el-button>
            <div class="tip">
                <hr>
                    <el-col :span="5" :offset="8">已有账号？</el-col>
                    <el-col :span="3"><el-link @click="login">登陆</el-link></el-col>
            </div>
        </el-card>
        <img class="picture" src="static/2.jpg">
    </div>
</template>

<script>
export default {
    data(){
        return{
            select:'',
            password:'',
            affirmPassword:'',
        }
    },
    methods:{
        login(){
            this.$router.push('/user/login')
        }
    }
}
</script>

<style scoped>
    .login_page{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #a5bbe6;
    }
    .head{
            position: absolute;
            width: 100%;
            top:80px;	
            text-align: center;	
            font-size: 20px;
            color:black;		
    }
    .login_card{
        position: absolute;
        width:30%;
        top:200px;
        left:35%;
    }
    .select{
        width:110px;
    }
    .password{
        margin-top:20px;
    }
    .checkPassword{
        margin-top:20px;
    }
    .check{
        margin-top:20px;
    }
    .register{
        width:100%;
        margin-top:20px;
    }
    .tip{
        margin-top:20px;
        margin-bottom:30px;
    }
    .picture{
        top:0;
        bottom: 0;
        width:100%;
        height:100%;
        z-index: -1;
    }
</style>
