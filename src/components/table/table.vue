<template>
    <div class="common-table my-table-main" ref="J_common_table">
        <Table
            class="table"
            stripe
            :columns="columns"
            :data="data"
            :loading="loading"
           @on-selection-change="selectionChange"
        ></Table>
        <Page class="page"
            :total="page.total"
            :page-size="page.pageSize"
            show-total
            show-sizer
            :current.sync="page.current"
            @on-change="changePage"
            @on-page-size-change="changePageSize"
        ></Page>
    </div>
</template>

<script>
// import iview
export default{
  name: 'tableList',
  props: {
    columns: {
      type: Array,
      default () {
        return []
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    queryData: {
      type: Function,
      default () {}
    },
    selectionChange: {
      type: Function,
      default () {}
    },
    data: {
      type: Array,
      default () {
        return []
      }
    },
    page: {
      type: Object,
      default () {
        return {
          pageSize: 10,
          total: 0,
          current: 1
        }
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    changePage (num) {
      this.queryData(num)
    },
    changePageSize (size) {
      this.page.pageSize = size
      this.page.current = 1
      this.queryData()
    },
    refresh () {
      this.$emit('refresh')
    }
  }
}
</script>

<style lang="less" scoped>
.common-table{
    position: relative;
    height: 100%;
    .table{
      height: 100%;
    }
    .page{
        position: absolute;
        bottom: -80px;
        left: 0;
        right: 0;
        text-align: center;
    }
}
</style>
