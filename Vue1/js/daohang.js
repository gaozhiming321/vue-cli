 let list = [
        {
          name:"男装",
          // flag:true,
          subItem:[
            {name:"男装1",id:1},
            {name:"男装2",id:2},
            {name:"男装3",id:3},
            {name:"男装4",id:4},
          ]
        },
        {
          name:"女装",
          // flag:false,
          subItem:[
            {name:"女装1",id:1},
            {name:"女装2",id:2},
            {name:"女装3",id:3},
            {name:"女装4",id:4},
          ]
        },
        {
          name:"童装",
          // flag:false,
          subItem:[
            {name:"童装1",id:1},
            {name:"童装2",id:2},
            {name:"童装3",id:3},
            {name:"童装4",id:4},
          ]
        }
      ]

window.onload = function () {
  new Vue({
    el:"#app",
    data:{
      n:0,//利用下标判断,设置一个标记位
      items:list
    },
    methods:{
      curShow:function(item){
        //1,条件判断
        // if(item.flag==true){
        //   item.flag = false
        // }else{
        //   item.flag = true
        // }

        //2,三目运算
        // item.flag==true?item.flag = false: item.flag = true
        //3,优化的写法
        // item.flag = !item.flag

        //4,用户体验最优写法
        // this.items.forEach((v,i)=>{
        //   v.flag = false;
        // })
        // item.flag = true;


      }
    }
  })
}