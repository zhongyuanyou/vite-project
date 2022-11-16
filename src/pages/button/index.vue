<template>
  <div style="padding: 0">
    <div style="width: 300px; font-size: 16px; font-weight: 800">录入信息</div>
    <el-form :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model.number="form.age"></el-input>
      </el-form-item>
      <el-form-item label="ID">
        <el-input v-model.number="form.id"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio :label="0">男</el-radio>
          <el-radio :label="1">女</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div class="button submit" @click="changeName">保存</div>
    <div class="list-box">
      <el-table :data="$store.state.userList" style="width: 310px" border>
        <el-table-column prop="name" align="center" label="姓名" width="80">
        </el-table-column>
        <el-table-column prop="age" align="center" label="年龄" width="60">
        </el-table-column>
        <el-table-column prop="sex" align="center" label="性别" width="60">
        </el-table-column>
        <el-table-column label="操作" align="center" width="100">
          <template v-slot="scope">
            <div class="btn">
              <span @click="delUser(scope.$index)">删除</span
              ><span @click="modifyUser(scope.$index)">修改</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        age: '',
        id: '',
        sex: 0,
      },
      isModify: false,
      currentIdx: 0,
    }
  },
  mounted() {
    this.$http({
      url: this.$api.SmsManageApi.QueryDictrys + '?key=微商城_抵扣金交易类型',
      method: 'post',
    }).then((res) => {
      console.log(res, '水水水水')
    })
  },
  methods: {
    changeName() {
      this.$store.commit('setName', {
        user: this.form,
        index: this.currentIdx,
        isModify: this.isModify,
      })
      if (this.isModify) {
        this.isModify = false
      }
      this.form = {
        name: '',
        age: '',
        id: '',
        sex: 0,
      }
    },
    delUser(idx) {
      this.$store.commit('delUser', idx)
    },
    modifyUser(idx) {
      this.form = JSON.parse(JSON.stringify(this.$store.state.userList[idx]))
      this.isModify = true
      this.currentIdx = idx
    },
  },
}
</script>

<style lang="less" scoped>
:deep(.el-form) {
  width: 300px;
  margin-top: 20px;
}
.list-box {
  width: 300px;
}
.btn {
  font-size: 14px;
  > span {
    cursor: pointer;
  }
  > span:first-child {
    color: @red;
  }
  > span:last-child {
    margin-left: 10px;
    color: blue;
  }
}
.button {
  z-index: 1;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
}

.button::before,
.button::after {
  content: '';
  width: 0;
  height: 100%;
  position: absolute;
  filter: brightness(0.9);
  background-color: inherit;
  z-index: -1;
}
.button::before {
  left: 0;
}

.button:after {
  right: 0;
  transition: width 0.5s ease;
}

.button:hover::before {
  width: 100%;
  transition: width 0.5s ease;
}

.button:hover::after {
  width: 100%;
  background-color: transparent;
}

.submit {
  width: 300px;
  height: 40px;
  background: @bgColor;
  color: aliceblue;
  line-height: 40px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
}
</style>
