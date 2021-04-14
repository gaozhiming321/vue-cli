var arrAll = [
  {
    name: "北京市",
    sub: [
      {
        name: "请选择",
        sub: []
      },
      {
        name: "北京市",
        sub: [{
          name: "请选择"
        }, {
          name: "东城区"
        }, {
          name: "西城区"
        }, {
          name: "大兴区"
        }, {
          name: "昌平区"
        }, {
          name: "顺义区"
        }, {
          name: "上城区"
        }]
      }
    ]
  },
  {
    name: "广东省",
    sub: [
      {
        name: "请选择",
        sub: []
      },
      {
        name: "广州市",
        sub: [{
          name: "请选择"
        }, {
          name: "越秀区"
        }, {
          name: "珠海区"
        }, {
          name: "荔湾区"
        }]
      },
      {
        name: "深圳市",
        sub: [{
          name: "请选择"
        }, {
          name: "福田区"
        }, {
          name: "罗湖区"
        }, {
          name: "南山区"
        }]
      },
      {
        name: "珠海市",
        sub: [{
          name: "请选择"
        }, {
          name: "香洲区"
        }, {
          name: "斗门区"
        }, {
          name: "金湾区"
        }]
      },
      {
        name: "汕头市",
        sub: [{
          name: "请选择"
        }, {
          name: "金平区"
        }, {
          name: "龙湖区"
        }, {
          name: "濠江区"
        }]
      }
    ]
  },
  {
    name: "上海市",
    sub: [{
        name: "请选择",
        sub: []
      },
      {
        name: "上海市",
        sub: [{
          name: "请选择"
        }, {
          name: "黄埔区"
        }, {
          name: "崇明区区"
        }, {
          name: "浦东新区"
        }]
      }
    ]
  },
  {
    name: "河南省",
    sub: [{
        name: "请选择",
        sub: []
      },
      {
        name: "郑州市",
        sub: [{
          name: "请选择"
        }, {
          name: "中牟区"
        }, {
          name: "郑大区"
        }]
      },
      {
        name: "周口市",
        sub: [{
          name: "请选择"
        }, {
          name: "驻马店"
        }, {
          name: "商水区"
        }, {
          name: "漯河区"
        }]
      }
    ]
  }
]

window.onload = function () {

  new Vue({
    el: "#myApp",
    data: {
      arr: arrAll,
      prov: '北京市', // 当前省的数据
      cityArr: [], // 市的数据
      city: '北京市', // 当前市的数据
      areaArr: [], //区的数据
      area: '' //当前区的数据
    },
    methods: {
      updateCity() { //市的数据更新
        this.arr.forEach((item, index) => {
          if (item.name == this.prov) {
            this.cityArr = item.sub;
          }
        })
        this.city = this.cityArr[1].name
      },
      updateArea() { //区的数据更新
        this.cityArr.forEach((item, index) => {
          if (item.name == this.city) {
            this.areaArr = item.sub;
          }
        })

        // if (this.districtArr && this.districtArr.length > 0) {
        //   this.district = this.districtArr[1].name
        // } else {
        //   this.district = ""
        // }
         this.areaArr && this.areaArr.length > 0? this.area = this.areaArr[1].name:this.area = ""

      }
    },
    mounted() {
      this.updateCity();
      this.updateArea()
    }

  })
}