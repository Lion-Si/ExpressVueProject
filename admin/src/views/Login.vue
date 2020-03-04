<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
        
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data(){
    return {
      model: {
        user:{}
      }
    }
  },
  methods: {
    async login(){
      const res = await this.$http.post('login', this.model)
      // sessionStorage.token = res.data.token
      
      this.$set(localStorage,'token',res.data.token) 
      this.$set(localStorage,'name',res.data.name) 
      
    
      this.$router.push({
        path:'/',
      })
      this.$message({
        type: 'success',
        message: '登录成功'
      })

    },
    async clear(newVal, oldVal) {
      if (newVal === "login") {
        localStorage.clear()
        Object.assign(this.$data, this.$options.data());
        
      }
    }
    
  },
  watch: {
    "$route.path": "clear"
  }
}
</script>

<style>
.login-card{
  width: 25rem;
  margin: 5rem auto;
}
</style>