<template>
  <div class="hello">
    <my-table :columns="columns" :data="list"></my-table>
  </div>
</template>

<script>
// import mytable from './table/table.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [{
        productType: '123',
        mainBody: '123',
        productName: '123'
        // productType:'123',
      }
      ],
      columns: [
        {
          title: '产品类型',
          key: 'productType'
        },
        {
          title: '所属主体',
          key: 'mainBody'
        },
        {
          title: '产品名称',
          key: 'productName'
        },
        {
          title: '操作',
          key: 'action',
          width: 100,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h(
                'a',
                {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      // this.remove(params.row)
                    }
                  }
                },
                '取消关联'
              )
            ])
          }
        }
      ]
    }
  }
  // components: {mytable}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
