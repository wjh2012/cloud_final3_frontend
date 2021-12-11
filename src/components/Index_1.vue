<template>
  <div>
    {{name}}회원님 안녕하세요<br>
    아이디 : {{id}}
    <ul>
      <router-link :to="`/edit/${id_1}`">회원수정</router-link><br>
      <router-link :to="`/delete/${id_1}`"> 회원탈퇴</router-link>  
    </ul>    

  </div>
</template> 

<script> 
  export default { 
    data(){ 
      return { 
        id_1: '' ,
        id:'',
        name:'',
       } 
    }, 
    
    created(){   // 콤포넌트 생성하면서 제일 먼저 실행
      // 파라미터(primary key) 전송 받음
      this.id_1  = this.$route.params.id_1
      this.id = this.$route.params.id
      this.name = this.$route.params.name
    } 
  } 
</script>
