<template>
    <div>
        <div class="table">
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="org_code"
                    label="机构编号">
                </el-table-column>
                <el-table-column
                    prop="org_name"
                    label="机构名称">
                </el-table-column>
                <el-table-column
                    prop="org_addr"
                    label="机构地址">
                </el-table-column>
                <el-table-column
                    prop="org_tel"
                    label="电话号码">
                </el-table-column>
                <el-table-column
                    prop="user_num"
                    label="总注册用户数">
                </el-table-column>
            </el-table>
        </div>
        <div class="pagination">
            <el-pagination
                background
                layout="prev, pager, next"
                hide-on-single-page
                :page-size="12"
                @current-change="handlePageChange"
                :total="totalNum">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            totalNum: 100,
            tableData: [{
                org_code: '4555412447',
                org_name: '深交所',
                org_addr: '深圳市xxxx',
                org_tel: '111233456',
                user_num: '500',
            }, {
                org_code: '4555412447',
                org_name: '深交所',
                org_addr: '深圳市xxxx',
                org_tel: '111233456',
                user_num: '500',
            }, {
                org_code: '4555412447',
                org_name: '深交所',
                org_addr: '深圳市xxxx',
                org_tel: '111233456',
                user_num: '500',
            }, {
                org_code: '4555412447',
                org_name: '深交所',
                org_addr: '深圳市xxxx',
                org_tel: '111233456',
                user_num: '500',
            }, {
                org_code: '4555412447',
                org_name: '深交所',
                org_addr: '深圳市xxxx',
                org_tel: '111233456',
                user_num: '500',
            }, {
                org_code: '4555412447',
                org_name: '深交所',
                org_addr: '深圳市xxxx',
                org_tel: '111233456',
                user_num: '500',
            }, {
                org_code: '4555412447',
                org_name: '深交所',
                org_addr: '深圳市xxxx',
                org_tel: '111233456',
                user_num: '500',
            }, {
                org_code: '4555412447',
                org_name: '深交所',
                org_addr: '深圳市xxxx',
                org_tel: '111233456',
                user_num: '500',
            }, {
                org_code: '4555412447',
                org_name: '深交所',
                org_addr: '深圳市xxxx',
                org_tel: '111233456',
                user_num: '500',
            }, {
                org_code: '4555412447',
                org_name: '深交所',
                org_addr: '深圳市xxxx',
                org_tel: '111233456',
                user_num: '500',
            }, {
                org_code: '4555412447',
                org_name: '深交所',
                org_addr: '深圳市xxxx',
                org_tel: '111233456',
                user_num: '500',
            }, {
                org_code: '4555412447',
                org_name: '深交所',
                org_addr: '深圳市xxxx',
                org_tel: '111233456',
                user_num: '500',
            }]            
        }
    },
    methods:{
        handlePageChange(e){
            console.log(e)
        },
    }
}
</script>

<style scoped>
.pagination{
    margin-top: 20px;
    text-align: center;
}
</style>
