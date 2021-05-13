<template>
    <div class='list biyi-table' ref="biyi-table">
      <div class="biyi-table-body">
        <Table @on-row-click='rowCLick' stripe :columns="table.title" :data="table.data"></Table>
        <div class="page biyi-table-footer" ref="biyi-table-footer">
          <div style="text-align:center;margin-top:10px;">
              <Page @on-change='changePage' :current='form.page+1' :total="table.total" :page-size="pageSize" show-elevator show-total/>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import Usual from '../usual/usual.js'
export default {
  data () {
    return {
        pageTotal: 0,
        pageSize: 8,
        current: 1
    }
  },
   computed: {
    pageHided () {
      return this.pageTotal <= this.pageSize
    }
  },
  methods: {
    /**
     * @description: 动态计算pageSize, 保证一个页面能刚好满屏显示table页
     */
    computePageSize () {
      const tableWrapper = this.$refs['biyi-table']
      const tableWrapperFooter = this.$refs['biyi-table-footer']
      const tableHeader = document.querySelector('.biyi-table .biyi-table-body .ivu-table-header')
      const tableBodyTr = document.querySelector('.biyi-table .biyi-table-body table tbody tr')
      const tableBodyHeight = window.innerHeight - tableWrapper.offsetTop - tableWrapperFooter.offsetHeight - tableHeader.offsetHeight
      const pageSize = parseInt(tableBodyHeight / tableBodyTr.offsetHeight)
      this.pageSize = pageSize
      this.form.size = pageSize
      this.tableHeight = tableBodyTr.offsetHeight * pageSize + tableHeader.offsetHeight
      // 存储10条数据的高
      const detailHeight = tableBodyTr.offsetHeight * 10 + tableHeader.offsetHeight
      this.$store.commit('getHeight', detailHeight)
      console.log(pageSize)
      // 获取列表数据
      this.getData()
    },
    getData () {
        console.log('请求数据')
    }
  },
  mounted () {
    this.computePageSize()
  }
}
</script>