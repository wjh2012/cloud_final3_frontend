<template>
  <div>
    <h1>관리자</h1>
    <table>
      <thead>
          <tr>
            <th scope="col">회원명</th>
            <th scope="col">ID</th>
            <th scope="col">성별</th>
            <th scope="col">수정</th>
            <th scope="col">탈퇴</th>
          </tr>
      </thead>

      <tbody>
          <tr v-for="item in users" :key="item.id_1">
            <th scope="row">{{item.name}}</th>
            <th scope="row">{{item.id}}</th>
            <th scope="row">{{item.gender}}</th>
            <th scope="row"><router-link :to="`/edit/${item.id_1}`">수정</router-link></th>
            <th scope="row"><router-link :to="`/delete/${item.id_1}`">탈퇴</router-link></th>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return {
        users:[]
      };
   },
  created () {            // 컴포넌트가 생성될 때 실행                    
    this.$http.get(`/api/admin/`).then((response) => {  
      this.users = response.data;                                 
    })
  },
}
</script>

<style>
td, th {
  padding: 10px;
  border: 1px solid #ccc;
}
body {
  padding: 1rem;
}
</style>
