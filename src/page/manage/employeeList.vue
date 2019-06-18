<template>
<div>
  <el-row >
  <el-col :span="5" :offset="16">
    <el-input placeholder="请输入员工姓名">
    <el-button icon="el-icon-search"></el-button>
    </el-input>
  </el-col>
  <el-col :span="3">
    <el-button
      size="mini"
      type="primary"
      round
      @click="dialogFormVisible = true">新增员工</el-button>
  </el-col>
  </el-row>
    <br></br>

  <el-table
    :data="tableData"
    stripe
    max-height="770"
    style="width: 100%">
    <el-table-column
      label="姓名"
      prop="name">
    </el-table-column>
    <el-table-column
      label="员工ID"
      prop="employeeID">
    </el-table-column>
    <el-table-column
      label="岗位"
      prop="station">
    </el-table-column>
    <el-table-column
      label="证件号码"
      prop="passportID">
    </el-table-column>
    <el-table-column
      label="电话号码"
      prop="phonenumber">
    </el-table-column>
    <el-table-column
      label="地址"
      prop="address">
    </el-table-column>
    <el-table-column
      label="邮箱"
      prop="e_mail">
    </el-table-column>
    <el-table-column
      label="工作状态"
      prop="work_status">
    </el-table-column>
    <el-table-column
      label="操作"
      align="right">
      <template slot-scope="scope">
        <el-button
          size="mini"
          icon="el-icon-edit"
          @click="">修改</el-button>
        <el-button
          size="mini"
          type="danger"
          icon="el-icon-delete"
          @click="">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog title="新增员工" :visible.sync="dialogFormVisible">

    <el-form ref="form" :model="form" label-width="80px">
      <el-col span="12" :offset="6">
      <el-form-item label="姓名">
      <el-input v-model="form.name"></el-input>
      </el-form-item>
      </el-col>
      <el-col span="12" :offset="6">
      <el-form-item label="员工密码">
      <el-input v-model="form.name"></el-input>
      </el-form-item>
      </el-col>
      <el-col span="12" :offset="6">
      <el-form-item label="身份证号码">
      <el-input v-model="form.name"></el-input>
      </el-form-item>
      </el-col>
      <el-col span="12" :offset="6">
      <el-form-item label="联系电话">
      <el-input v-model="form.name"></el-input>
      </el-form-item>
      </el-col>
      <el-col span="12" :offset="6">
      <el-form-item label="联系邮箱">
      <el-input v-model="form.name"></el-input>
      </el-form-item>
      </el-col>
      <el-col span="12" :offset="6">
      <el-form-item label="联系地址">
      <el-input v-model="form.name"></el-input>
      </el-form-item>
      </el-col>
      <el-col span="12" :offset="6">
      <el-form-item label="岗位">
      <el-input v-model="form.name"></el-input>
      </el-form-item>
      </el-col>
      <el-col span="12" :offset="6">
      <el-form-item label="员工状态">
      <el-input v-model="form.name"></el-input>
      </el-form-item>
      </el-col>
      <el-col span="12" :offset="6">
      <el-form-item label="机构编号">
      <el-input v-model="form.name"></el-input>
      </el-form-item>
      </el-col>
      <el-form-item label="">
      </el-form-item>
    </el-form>


    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible:false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData: [{
          name: '王小虎',
          employeeID: 10086,
          station: '你爹',
          passportID: 110,
          phonenumber: 13016533423,
          address: '上海市普陀区金沙江路 1518 弄',
          e_mail: '10566950087@qq.com',
          work_status: '工作中'
        }, {
          date: '2016-05-04',
          name: '好小虎',
          address: '普宁市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '小虎',
          address: '汕头市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '死小虎',
          address: '广州市普陀区金沙江路 1516 弄'
        }],
        search: ''
      }
    },
  }
</script>

<style scoped>

</style>
