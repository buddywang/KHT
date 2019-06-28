<template>
    <div>
        <el-row>
            <el-col :span="8">
                <el-card><p>资金账户</p><el-link style="color:orange" @click="capitalForm=true">查看</el-link></el-card>
            </el-col>
            <el-col :span="8">
                <el-card><p>存管账户</p><el-link style="color:orange" @click="depositForm=true">查看</el-link></el-card>
            </el-col>
            <el-col :span="8">
                <el-card><p>证券账户</p><el-link style="color:orange" @click="securityForm=true">查看</el-link></el-card>
            </el-col>
        </el-row>
        <el-dialog style="text-align:left" title="资金账号信息" :visible.sync="capitalForm" width="50%" :modal-append-to-body='false'>
            <el-table :data="capitals" style="width:100%">
                <el-table-column prop="code" label="资金账号"></el-table-column>
                <el-table-column prop="code" label="资金账号"></el-table-column>
            </el-table>
        </el-dialog>
        <el-dialog style="text-align:left" title="存管账号信息" :visible.sync="depositForm" width="50%" :modal-append-to-body='false'>
            <el-table>
            </el-table>
        </el-dialog>
        <el-dialog style="text-align:left" title="证券账号信息" :visible.sync="securityForm" width="50%" :modal-append-to-body='false'>
            <el-table>
            </el-table>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return{
            capitalForm:false,
            depositForm:false,
            securityForm:false,
            capitals:[{
                code:'',
                currency:'',
                mainFlag:'',
                attr:'',
                organization:'',
                openTime:'',
                closeTime:'',
                status:'',
            }],
            depositss:[{

            }],
            securities:[{

            }],
        }
    }

}
</script>

<style scoped>
.el-card{
    text-align: center;
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
