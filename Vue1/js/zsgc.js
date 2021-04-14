/*
 * @Author: gaozhiming 
 * @Date: 2021-04-05 13:48:52 
 * @Last Modified by: gaozhiming
 * @Last Modified time: 2021-04-05 13:49:20
 */

window.onload = function () {
  new Vue({
    el: "#table",
    data: {
      flag: false, //弹层的显示与隐藏
      obj: {title: "",user: "",dates: ""},
      items: [{title: "志明",user: "vue",dates: "2021-03-09",id:1}],
      editItems: []
    },
    methods: {
      add() {
        //必填的判断条件
        if (!this.obj.title || !this.obj.user || !this.obj.dates) return;
        var _id = Math.max(...this.items.map(v=>v.id))+1;//id的最大值+1
        // this.items.map(v=>v.id)  返回值市一个数组,要用...进行序列化
        this.items.push({
          title: this.obj.title,
          user: this.obj.user,
          dates: this.obj.dates,
          id:_id
        })
        this.obj = {}
      },
      del(i) {
        this.items.splice(i, 1)
      },
      edit(item) {
        this.flag = true; //弹层显示
        this.editItems = {
          title: item.title,
          user: item.user,
          dates: item.dates,
          id:item.id
        }
      },
      update() {
        for (var i = 0; i < this.items.length; i++) {
          if(this.items[i].id == this.editItems.id){
            this.items[i] = this.editItems;
            this.flag = false; //弹层隐藏
          }
        }
      }
    }
  })

}