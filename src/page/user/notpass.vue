<template>
    <div>
        <el-row class="row">
                <el-card><p>您的资料尚未审核通过</p><el-link style="color:orange" @click="info=true">提交资料审核</el-link></el-card>
        </el-row>
        <el-dialog style="text-align:left" title="审核资料填写" :visible.sync="info" width="50%" :modal-append-to-body='false'>
            <el-form> 
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="姓名:" label-width="20%">
                            <el-input v-model="infoForm.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6" :offset="1">
                        <el-form-item label="性别:" label-width="30%">
                            <el-select v-model="infoForm.gender">
                                <el-option label="男" value="男"></el-option>
                                <el-option label="女" value="女"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :offset="1">
                        <el-form-item label="联系电话:" label-width="30%">
                            <el-input v-model="infoForm.telephone"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="证件类型:" label-width="30%">
                            <el-select v-model="infoForm.gender">
                                <el-option label="居民身份证" value="居民身份证"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16">
                        <el-form-item label="证件号码:" label-width="30%">
                            <el-input v-model="infoForm.id"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="11">
                        <el-form-item label="证件生效日期:" label-width="30%">
                            <el-date-picker v-model="infoForm.validDate" type="date" placeholder="选择日期"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="11" :offset="2">
                        <el-form-item label="证件失效日期:" label-width="30%">
                            <el-date-picker v-model="infoForm.invalidDate" type="date" placeholder="选择日期"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :offset="0">
                        <el-form-item label="联系邮箱:" label-width="30%">
                            <el-input v-model="infoForm.email"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16" :offset="0">
                        <el-form-item label="联系地址:" label-width="30%">
                            <el-input v-model="infoForm.address"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="职业:" label-width="30%">
                            <el-input v-model="infoForm.profession"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16">
                        <el-form-item label="工作单位:" label-width="30%">
                            <el-input v-model="infoForm.company"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="学历:" label-width="30%">
                            <el-select v-model="infoForm.education">
                                <el-option v-for="item in education" :key="item.code" :label="item.name" :value="item.code"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16">
                        <el-form-item label="营业网点:" label-width="30%">
                            <el-select v-model="infoForm.organization">
                                <el-option v-for="item in organization" :key="item.code" :label="item.name" :value="item.code"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="银行类型:" label-width="30%">
                            <el-select v-model="infoForm.bankType">
                                <el-option v-for="item in bankType" :key="item.code" :label="item.name" :value="item.code"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16">
                        <el-form-item label="银行号码:" label-width="30%">
                            <el-input v-model="infoForm.bankCode"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
                <el-button type="warning" style="margin-left:30px" @click="info=false" plain>取消</el-button>
                <el-button type="success" style="margin-left:550px" @click="info=false,picVid=true" plain>下一步</el-button>
        </el-dialog>
        <el-dialog style="text-align:left" title="影像资料上传" :visible.sync="picVid" width="50%" :modal-append-to-body='false'>
            <el-button type="warning" style="margin-left:30px" @click="picVid=false" plain>取消</el-button>
            <el-button type="success" style="margin-left:550px" @click="picVid=false" plain>提交</el-button>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return{
            picVid:false,
            info:false,
            infoForm:{
                name:'',
                gender:'',
                idType:'',
                id:'',
                validDate:'',
                invalidDate:'',
                telephone:'',
                email:'',
                address:'',
                profession:'',
                company:'',
                education:'',
                roganization:'',
                bankType:'',
                bankCard:'',
            },
            organization:[{
                name:'名字',
                code:'1',
            }],
            education:[{
                name:'名字',
                code:'1',
            }],
            bankType:[{
                name:'名字',
                code:'1',
            }],
        }
    }
}
</script>

<style scoped>
.row{
    margin-top:100px;
}
.el-card{
    text-align: center;
    display:table-cell;
    color:rgb(255, 255, 255);
    vertical-align:middle; 
    height:300px;
    width:300px;
    background-color: rgb(107, 119, 98)
}
</style>
