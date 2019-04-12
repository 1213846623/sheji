<template>
  <div>
	<!-- //轮播图 -->
    <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
    <p style="margin: 0;padding: 1px;background: rgba(0,0,0,0.6);color: white;">邀请您参与:{{demo06_list[demo06_index].title}}</p>
	<!-- 课程名单 -->
	<!-- <div v-for="item in kechengList" class="ke" >
		<div style="width: 30%;">
			{{item.src}}
			<img src="../../assets/kecheng/vue.jpg" alt="">
			<img :src="item.src()" alt="item.src" style="width: 100%;">
		</div>
		<div style="width: 30%;"></div>
	</div> -->
  </div>
</template>

<script>
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'

const baseList = [{
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
  title: '精品React教程'
}, {
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
  title: '精品Vue教程'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/5.jpg', // 404
  title: '精品Angular教程',
  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
}]

const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `${item.title}`
}))

// const kechengList = [{
// 	teacher:"王无二",
// 	src:funnction(){
// 		return require("../../assets/kecheng/angular.jpg")
// 	},
// 	time:{
// 		year:2019,
// 		mounth:5,
// 		day:10,
// 		hour:20
// 	},
// 	title:"精品Angular课程",
// 	text:'5年Angular高级前端开发工程师',
// 	text0:'Angular作为3大组件化开发框架有良好的市场'
// },{
// 	teacher:"王无二",
// 	src(){
// 		return require("../../assets/kecheng/angular.jpg")
// 	},
// 	time:{
// 		year:2019,
// 		mounth:5,
// 		day:10,
// 		hour:20
// 	},
// 	title:"精品Vue课程",
// 	text:'5年Vue高级前端开发工程师',
// 	text0:'Vue作为3大组件化开发框架有良好的市场'
// },{
// 	teacher:"王无二",
// 	src(){
// 		return require("../../assets/kecheng/angular.jpg")
// 	},
// 	time:{
// 		year:2019,
// 		mounth:5,
// 		day:10,
// 		hour:20
// 	},
// 	title:"精品Angular课程",
// 	text:'5年Angular高级前端开发工程师',
// 	text0:'Angular作为3大组件化开发框架有良好的市场'
// },{
// 	teacher:"王无二",
// 	src(){
// 		return require("../../assets/kecheng/angular.jpg")
// 	},
// 	time:{
// 		year:2019,
// 		mounth:5,
// 		day:10,
// 		hour:20
// 	},
// 	title:"精品Angular课程",
// 	text:'5年Angular高级前端开发工程师',
// 	text0:'Angular作为3大组件化开发框架有良好的市场'
// },{
// 	teacher:"王无二",
// 	src(){
// 		return require("../../assets/kecheng/angular.jpg")
// 	},
// 	time:{
// 		year:2019,
// 		mounth:5,
// 		day:10,
// 		hour:20
// 	},
// 	title:"精品Angular课程",
// 	text:'5年Angular高级前端开发工程师',
// 	text0:'Angular作为3大组件化开发框架有良好的市场'
// },{
// 	teacher:"王无二",
// 	src(){
// 		return require("../../assets/kecheng/angular.jpg")
// 	},
// 	time:{
// 		year:2019,
// 		mounth:5,
// 		day:10,
// 		hour:20
// 	},
// 	title:"精品Angular课程",
// 	text:'5年Angular高级前端开发工程师',
// 	text0:'Angular作为3大组件化开发框架有良好的市场'
// }]
export default {
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider
  },
  ready () {

  },
  methods: {
    demo06_onIndexChange (index) {
      this.demo06_index = index
    }
  },
  data () {
    return {
      demo06_list: urlList,
      demo06_index: 0,
			// kechengList:kechengList
    }
  }
}
</script>

<style scoped>
.copyright {
  font-size: 12px;
  color: #ccc;
  text-align: center;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
.black {
  background-color: #000;
}
.title{
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.vux-indicator.custom-bottom {
  bottom: 30px;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}
.swiper-demo-img img {
  width: 100%;
}
.ke{
	display: flex;
	justify-content: space-between;
	padding: 0 5px;
}
</style>
