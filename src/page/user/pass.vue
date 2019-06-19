<template>
    <div>
        <el-row>
            <el-col :span="8">
                <el-card><p>资金账户</p><el-link style="color:orange">查看</el-link></el-card>
            </el-col>
            <el-col :span="8">
                <el-card><p>存管账户</p><el-link style="color:orange">查看</el-link></el-card>
            </el-col>
            <el-col :span="8">
                <el-card><p>证券账户</p><el-link style="color:orange">查看</el-link></el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.el-card{
    color:rgb(255, 255, 255);
    vertical-align:middle;
    display:table-cell;
    height:300px;
    width:300px;
    background-color: rgb(107, 119, 98)
}
.el-row{
    margin-top:100px;
}
</style>
