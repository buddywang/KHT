<template>
  <el-row>
    <el-button-group>
      <el-button @click.native.prevent="dialogFormVisible = true" >添加机构</el-button>
    </el-button-group>
    <el-button-group>
      <el-button @click.native.prevent="delAll(tableData)" >批量删除</el-button>
    </el-button-group>
    <el-button-group>
      <el-button @click.native.prevent="cancelSelect()" >取消勾选</el-button>
    </el-button-group>
    <el-table
      ref="multipleTable"
      :data="tableData.filter(data => !search || data.ORG_code.toLowerCase().includes(search.toLowerCase()) || 
                                                 data.ORG_name.toLowerCase().includes(search.toLowerCase()) || 
                                                 data.ORG_addr.toLowerCase().includes(search.toLowerCase()) ||  
                                                 data.ORG_tel.toLowerCase().includes(search.toLowerCase()) )"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column prop="ORG_code" label="机构编号"></el-table-column>
      <el-table-column prop="ORG_name" label="机构名称"></el-table-column>
      <el-table-column prop="ORG_addr" label="机构地址"></el-table-column>
      <el-table-column prop="ORG_tel" label="联系电话"></el-table-column>
      <el-table-column align="right">
        <template slot="header">
          <el-input v-model="search" placeholder="按照机构信息搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button @click.native.prevent="dialogFormVisible = true" type="text" size="small">修改</el-button>
          <el-dialog title="请修改" :visible.sync="dialogFormVisible" append-to-body>
            <el-form :model="ORG" :rules="rulesList">
              <el-form-item prop="code" label="机构编号" :label-width="formLabelWidth">
                <el-input v-model="ORG.code" placeholder="请输入内容" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item prop="name" label="机构名称" :label-width="formLabelWidth">
                <el-input v-model="ORG.name" placeholder="请输入内容" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item prop="addr" label="机构地址" :label-width="formLabelWidth">
                <el-input v-model="ORG.addr" placeholder="请输入内容" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item prop="tel" label="联系电话" :label-width="formLabelWidth">
                <el-input v-model="ORG.tel" placeholder="请输入内容" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button :plain="true" @click.native.prevent="dialogFormVisible = false">取 消</el-button>
              <el-button :plain="true" @click="validate(scope.row)">确 定</el-button>
            </div>
          </el-dialog>

          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          ORG_code: "A001",
          ORG_name: "金证",
          ORG_addr: "广东广州",
          ORG_tel: "15975569874"
        },
        {
          ORG_code: "A002",
          ORG_name: "金证",
          ORG_addr: "广东广州",
          ORG_tel: "1597874"
        },
        {
          ORG_code: "B001",
          ORG_name: "刘旭",
          ORG_addr: "广东佛山",
          ORG_tel: "157894966"
        },
        {
          ORG_code: "C002",
          ORG_name: "清华",
          ORG_addr: "北京",
          ORG_tel: "145678324"
        }
      ],
      search: "",
      multipleSelection: [],

      dialogFormVisible: false,

      ORG: {
        code: "",
        name: "",
        addr: "",
        tel: ""
      },
      formLabelWidth: "120px"
    };
  },
  rules() {
    return {
      rulesList: {
        code: [{ required: true, message: "不能为空", trigger: "change" }],
        name: [{ required: true, message: "不能为空", trigger: "change" }],
        addr: [{ required: true, message: "不能为空", trigger: "change" }],
        tel: [{ required: true, message: "不能为空", trigger: "change" }]
      }
    };
  },
  computed: {
    tables: function() {
      var search = this.search;
      if (search) {
        return this.tableData.filter(function(dataNews) {
          return Object.keys(dataNews).some(function(key) {
            return (
              String(dataNews[key])
                .toLowerCase()
                .indexOf(search) > -1
            );
          });
        });
      }
      return this.tableData;
    }
  },
  methods: {
    deleteRow(index, rows) {
      this.$confirm("此操作将永久删除该机构, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          rows.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除。"
          });
        });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    delAll(rows) {
      const length = this.multipleSelection.length;
      if (length > 0) {
        this.$confirm("此操作将永久删除这些机构, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true
        })
          .then(() => {
            for (let i = 0; i < length; i++) {
              rows.splice(i, 1);
            }
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除。"
            });
          });
      } else {
        this.$notify({
          title: "提示",
          message: "请先勾选要删除的项!",
          type: "info",
          duration: 2000
        });
      }
    },
    cancelSelect(rows){
      if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
    },
    validate(row) {
      var item = this.tableData[this.id - 1];
      this.$message({
        message: "信息修改成功",
        type: "success"
      });
      this.dialogFormVisible = false;
      this.id = row.id;

      this.code = this.ORG.code;
      item.ORG_name = this.ORG.name;
      item.ORG_addr = this.ORG.addr;
      item.ORG_tel = this.ORG.tel;
      changeRow();
    },
    changeRow() {
      this.$prompt("请修改信息", "可以改了", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
        inputErrorMessage: "手机号格式不太对吧"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "修改成功: " + value
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  }
};
</script>

<style>
</style>