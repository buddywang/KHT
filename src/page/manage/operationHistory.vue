<template>
    <div>
        <div class="search">
            <el-form :inline="true" class="sform">
                <el-form-item label="按操作者查找:">
                    <el-input
                        placeholder="请输入操作者名字"
                        v-model="search_key">
                    </el-input>
                </el-form-item>
                <el-form-item style="margin-right:30px;">
                    <el-button icon="el-icon-search" @click="nameFilter" type="primary"></el-button>
                </el-form-item>
                <el-form-item label="按时间查找:">
                    <el-date-picker
                        v-model="time_select"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button icon="el-icon-search" @click="timeFilter" type="primary"></el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="table">
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="log_code"
                    label="操作ID">
                </el-table-column>
                <el-table-column
                    prop="log_time"
                    label="操作时间">
                </el-table-column>
                <el-table-column
                    prop="employee_code"
                    label="员工账户">
                </el-table-column>
                <el-table-column
                    prop="operation_obj"
                    label="操作对象">
                </el-table-column>
                <el-table-column
                    prop="operation"
                    label="操作">
                </el-table-column>
                <el-table-column
                    prop="description"
                    label="操作描述">
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
        return {
            totalNum: 100,
            search_key: '',
            time_select: [],
            tableData: [{
                log_code: '4555412447',
                log_time: '2016-05-02',
                employee_code: '123456789',
                operation_obj: '小王',
                operation: '新建账号',
                description: 'xxxxxxxxxxxx'
            }, {
                log_code: '4555412447',
                log_time: '2016-05-02',
                employee_code: '123456789',
                operation_obj: '小王',
                operation: '新建账号',
                description: 'xxxxxxxxxxxx'
            }, {
                log_code: '4555412447',
                log_time: '2016-05-02',
                employee_code: '123456789',
                operation_obj: '小王',
                operation: '新建账号',
                description: 'xxxxxxxxxxxx'
            }, {
                log_code: '4555412447',
                log_time: '2016-05-02',
                employee_code: '123456789',
                operation_obj: '小王',
                operation: '新建账号',
                description: 'xxxxxxxxxxxx'
            }, {
                log_code: '4555412447',
                log_time: '2016-05-02',
                employee_code: '123456789',
                operation_obj: '小王',
                operation: '新建账号',
                description: 'xxxxxxxxxxxx'
            }, {
                log_code: '4555412447',
                log_time: '2016-05-02',
                employee_code: '123456789',
                operation_obj: '小王',
                operation: '新建账号',
                description: 'xxxxxxxxxxxx'
            }, {
                log_code: '4555412447',
                log_time: '2016-05-02',
                employee_code: '123456789',
                operation_obj: '小王',
                operation: '新建账号',
                description: 'xxxxxxxxxxxx'
            }, {
                log_code: '4555412447',
                log_time: '2016-05-02',
                employee_code: '123456789',
                operation_obj: '小王',
                operation: '新建账号',
                description: 'xxxxxxxxxxxx'
            }, {
                log_code: '4555412447',
                log_time: '2016-05-02',
                employee_code: '123456789',
                operation_obj: '小王',
                operation: '新建账号',
                description: 'xxxxxxxxxxxx'
            }, {
                log_code: '4555412447',
                log_time: '2016-05-02',
                employee_code: '123456789',
                operation_obj: '小王',
                operation: '新建账号',
                description: 'xxxxxxxxxxxx'
            }, {
                log_code: '4555412447',
                log_time: '2016-05-02',
                employee_code: '123456789',
                operation_obj: '小王',
                operation: '新建账号',
                description: 'xxxxxxxxxxxx'
            }, {
                log_code: '4555412447',
                log_time: '2016-05-02',
                employee_code: '123456789',
                operation_obj: '小王',
                operation: '新建账号',
                description: 'xxxxxxxxxxxx'
            }]
        }
    },
    methods:{
        handlePageChange(e){
            console.log(e)
        },

        nameFilter(){
            console.log(this.search_key)
        },

        timeFilter(){
            console.log(this.time_select)
        }
    }
}
</script>

<style scoped>
.search{
    background-color: #EBEEF5;
    border-radius: 5px;
    padding: 5px 10px;
}
.el-form-item{
    margin: 0;
}
.pagination{
    margin-top: 20px;
    text-align: center;
}
</style>
