<template>
  <div class="select-demo">
    <div class="page1">
      <el-tag>page1</el-tag>
      <div class="block">
        <el-cascader
          :props="props"
          clearable
          :show-all-levels="false"
          style="width: 350px"
        ></el-cascader>
      </div>
    </div>
    <div class="page2">
      <el-tag>page2</el-tag>
      <div class="block">
        <el-cascader
          :options="options2"
          :props="props2"
          v-model="selectArr"
          clearable
          style="width: 350px"
        ></el-cascader>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const _this = this;
    return {
      props: {
        multiple: true,
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node;
          _this.$http
            .get("/posts", {
              level: level,
              node: node.value,
            })
            .then((res) => {
              console.log(res.data);
              const nodes = res.data.options;
              nodes.forEach((element) => {
                element.leaf = level >= 2;
              });
              resolve(nodes);
            });
        },
      },
      props2: {
        multiple: true,
      },
      options2: [],
      selectArr: null,
    };
  },
  watch: {
    selectArr(newValue) {
      console.log(newValue, "sss");
    },
  },
  methods: {
    // 请求下拉列表数据
    getSelectList() {
      this.$http.get("/list").then((res) => {
        this.options2 = res.data.options;
        this.getModel()
      });
    },
    // 获取mock后端回显数据接口，页面回显接口返回的选择数据，数据回显也包含三级联动效果， 且可在此基础上修改选择的数据
    getModel() {
      this.$http.get("/getModel").then((res) => {
        this.selectArr=res.data.data
      });
    },
  },
  mounted() {
    this.getSelectList();
  },
};
</script>

<style scoped>
.select-demo {
  display: flex;
  justify-content: space-around;
}

.block {
  padding-top: 20px;
}
</style>
