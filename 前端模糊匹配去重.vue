/**
 * @Descripttion: 路由404错误页面
 * @Author: yepengfei
 * @Date: 2020-11-09 16:08:38
 * @Last Modified by: yepengfei
 * @Last Modified time: 2020-12-15 17:27:37
 */
<template>
  <div class="biyi-404">
    <img src="../../assets/svg/icon-404-color.svg" alt="">
    <div class="biyi-404-content">
      <p>404</p>
      <p>抱歉，您访问的页面不存在！</p>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        // 前端模糊匹配，自动触发搜素change
        searchMemberEdit () {
        var membersArr = this.$store.state.application.memberList
        if (this.searchEdit !== '') {
            var reg = new RegExp(this.searchEdit)
            this.members = []
            membersArr.forEach(item => {
            if (reg.test(item.userRealName)) {
                this.members.push(item)
            } else if (reg.test(item.userAccount)) {
                this.members.push(item)
            }
            })
            // 去重
            this.members = this.unique(this.members)
        } else {
            this.members = this.$store.state.application.memberList
        }
        },
        // 对象数组去重
        unique (arr) {
        const res = new Map()
        return arr.filter((arr) => !res.has(arr.userId) && res.set(arr.userId, 1))
        },
    }
}
</script>
