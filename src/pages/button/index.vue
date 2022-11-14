<template>
  <div class="button submit"></div>
</template>

<script>
export default {
  mounted() {
    this.$http({
      url: this.$api.SmsManageApi.QueryDictrys + '?key=微商城_抵扣金交易类型',
      method: 'post',
    }).then((res) => {
      console.log(res, '水水水水')
    })
  },
}
</script>

<style lang="less" scoped>
.button {
  z-index: 1;
  position: relative;
  overflow: hidden;
}

.button::before,
.button::after {
  content: '';
  width: 0;
  height: 100%;
  position: absolute;
  filter: brightness(0.9);
  background-color: inherit;
  z-index: -1;
}
.button::before {
  left: 0;
}

.button:after {
  right: 0;
  transition: width 0.5s ease;
}

.button:hover::before {
  width: 100%;
  transition: width 0.5s ease;
}

.button:hover::after {
  width: 100%;
  background-color: transparent;
}

.submit {
  width: 150px;
  height: 40px;
  background: @bgColor;
}
</style>
