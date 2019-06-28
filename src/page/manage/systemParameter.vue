<template>
    <div>
        <div class="table">
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="par_id"
                    label="参数编号">
                </el-table-column>
                <el-table-column
                    prop="par_name"
                    label="参数名">
                </el-table-column>
                <el-table-column
                    prop="par_value"
                    label="参数值">
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
                par_id: 1,
                par_name: '参数1',
                par_value: '1',
            },
            {
                par_id: 2,
                par_name: '参数2',
                par_value: '2',
            },
            {
                par_id: 3,
                par_name: '参数3',
                par_value: '3',
            },
            {
                par_id: 4,
                par_name: '参数4',
                par_value: '4',
            },
        ]}
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
