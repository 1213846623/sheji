<template>
	<!-- 登录  注册 页面 -->
	
	<div id="index">
		<confirm v-model="bol1" title="重要提示" content="是否存储账号" @on-confirm="setcookie" @on-cancel="noset"></confirm>
		<confirm v-model="bol2" title="警告" content="是否登录上次登录的账号" @on-confirm="href" ></confirm>
	 <toast v-model="showPositionValue" type="text" width="50%" :time="1200" is-show-mask :text="text" ></toast>
		<div class="dingbu">
			<div style="margin: 20px 0;">写BUG的我</div>
			<img src="../assets/xinxin.gif" alt="">
		</div>
		<div v-if="denglu">
		<div class="from">
			<div>
				<span class="title">账号</span>
				<div class="kuang"><input type="text" class="shuru" maxlength="12" size="40" style="width: 100%;" v-model="user"></div>
			</div>
			<div>
				<span class="title">密码</span>
				<div class="kuang"><input :type="k?'password':'text'" class="shuru" maxlength="12" size="20" v-model="pass">
				<div class="tishi"> <check-icon :value.sync="k" style="font-size: 16px;" type="plain" > </check-icon>不显示</div>
				</div>
			</div>
		</div>
		<div class="xuanze">
			<span>忘记密码?</span>
			<span @click="gengai">还没有注册</span>
		</div>
		<div class="button">
			<div @click="yanzheng">登录</div>
		</div>
		<div class="sanfang">
			<!--  -->
			<div>第三方登录</div>
			<div class="logofu">
			<img src="../assets/qq.png" alt="">
			<img src="../assets/weixin.png" alt="">
			<img src="../assets/zhifu.png" alt=""></div>
		</div>
		</div>
		<div class="zhuce" v-else>
			<div class="zshuru">
				<span>账号</span>
				<div><input  v-model="zuser" type="text"></div>
			</div>
			<div class="zshuru">
				<span>密码</span>
				<div><input v-model="zpass1" type="password"></div>
				
			</div>
			<div class="zshuru">
				<span>确认密码</span>
				<div><input v-model="zpass2" type="password"></div>
			</div>
			<div class="zhuceb" @click="zhucela">注册</div>
		</div>
	</div>
</template>

<script>

	import { CheckIcon,Loading,Toast,Confirm} from 'vux'
var vue =  {
  name: 'index',
  data:function(){
			return{
				k:true,
				user:"",
				pass:"",
				showPositionValue:false,
				bol1:false,
				denglu:true,
				zuser:"",
				zpass1:"",
				zpass2:"",
				text:"账号密码为6到12,由数字字母下划线组成",
				bol2:false
			}
		},
  components: {
    CheckIcon,
	Loading,
	Toast,
	Confirm
  },
  methods:{
	  noset(){
		  this.$router.push({ name: 'home'})
	  },
	  setcookie(){ var d = new Date();
		d.setTime(d.getTime()+(24*60*60*1000));
		var expires = "expires="+d.toGMTString();
			document.cookie = "username =" + this.user + "; " + expires;
			this.$router.push({ name: 'home'})
	  },
	  cookie(need){ 
		  var cookies = document.cookie.split("; ");
		  for(let i = 0;i < cookies.length;i++){
			  var ls = cookies[i].split("=");
			  if(ls[0] == need){
				  return ls[1]
			  }
		  }
		  return 0;
	  },
	  yanzheng(){
		 //先进行正则验证
		 var  reg = /^[0-9a-zA-Z_]{6,12}$/;
		 if(reg.test(this.user) && reg.test(this.pass)){
			 //正则验证通过
			 this.$vux.loading.show({
			 			text: '正在验证中'
			 })
			 reg.test(this.user)
			 //发起ajax请求
			 setTimeout(()=>{
			 			 this.$vux.loading.hide();
						 // 密码验证成功
						 this.bol1 = true
						 
			 },2000)
		 }else{
			 //验证没有通过  弹框告诉规格
			 this.text = "账号密码为6到12,由数字字母下划线组成";
			 this.showPositionValue = true
		 }
		 
		console.log(this.$vux)
	  },
	  zhucela(){
		   var  reg = /^[0-9a-zA-Z_]{6,12}$/;
		  if(reg.test(this.zuser) && reg.test(this.zpass1) && reg.test(this.zpass1)){
		if(this.zpass1 == this.zpass2){
			//发起ajax请求
			this.$vux.loading.show({
						text: '正在验证中'
			})
			reg.test(this.user)
			//发起ajax请求
			setTimeout(()=>{
						 this.$vux.loading.hide();
						 // 密码验证成功
						 this.denglu = true;
			},2000)
		}else{
			this.text = "密码不相符";
			this.showPositionValue = true
		}
	  }else{
		  this.text = "账号密码为6到12,由数字字母下划线组成";
		  this.showPositionValue = true
	  }},
	  gengai(){
		  this.denglu = false;
	  },
	  href(){
		  		this.$store.commit("setUser",this.cookie("username"))
		  		 this.$router.push({ name: 'home'})
		  
	  }
  },
  created(){
	if(this.cookie("username")){
		//进行跳转
		this.bol2 = true
	}
  }
}
export default vue
</script>

<style scoped>
	#index{
		width: 100%;
		height: 100%;
		background: url(../assets/bg.jpg) no-repeat;
		background-size:100% 100%;
		color: #fff;
	}
	.kuang{
		border: 1px solid white;
		border-radius: 15px;
		display: inline-block;
		padding:0 15px;
		font-size: 0;
		width: 70%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.shuru{
		background: rgba(0,0,0,0);
		border: 0;
		outline: none;
		width: 60%;
		color: white;
		font-size: 16px;
		height: 30px;
		float: left;
	}
	.from>div{
		display: flex;
		justify-content: center;
		align-items:center
	}
	.from>div span,input{
		vertical-align: middle;
	}
	.title{
		margin: 20px 0;
		padding-right: 10px;
		color: white;
	}
	.tishi{
		float: right;
		font-size: 10px;
		vertical-align: middle;
	}
	.xuanze{
		padding: 0 30px;
		color: #fff;
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		margin: 10px 0;
	}
	.sanfang{
		position: fixed;
		bottom: 5vh;
		width: 100%;
		layout-flow: 0;
		text-align: center;
		font-size: 14px;
	}
	.logofu{
		display: flex;
		justify-content: space-around;
		margin-top: 10px;
	}
	.logofu>img{
		width: 30px;
		height: 30px;
		object-fit: cover;
	}
	.button{
		display: flex;
		justify-content: center;
		margin-top: 40px;
	}
	.button>div{
		width: 60%;
		line-height: 40px;
		text-align: center;
		background: rgba(0,0,0,0.6);
		border-radius: 20px;
		border: 1px solid rgb(255,255,255,0.3);
		box-shadow: 0 0 5px white;
	}
	.dingbu{
		padding: 30px 0;
		text-align: center;
	}
	.dingbu>img{
		width: 60%;
	}
	.zhuce{
		padding: 0 20px;
	}
	.zshuru{
		margin: 10px 0;
	}
	.zshuru>span{
		display: inline-block;
		width: 30%;
	}
	.zshuru>div>input{
		background: rgba(0,0,0,0);
		outline: none;
		border: none;
		color: #fff;
	}
	.zshuru>div{
		display: inline-block;
		width: 60%;
		padding:0 5px;
		border: 1px solid #fff;
		border-radius: 10px;
	}
	.zhuceb{
		font-size: 20px;
		margin: 0 auto;
		width: 40%;
		line-height: 30px;
		background: rgba(0,0,0,0.3);
		text-align: center;
		border-radius: 15px;
		box-shadow: 0 0 5px rgba(255,255,255,0.5);
		margin-top: 50px;
	}
</style>
