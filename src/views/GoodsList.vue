<template>
    <div>
        <nav-header></nav-header>
        <nav-bread>
            <span slot="goods">Goods</span>
        </nav-bread>
        <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <symbol id="icon-arrow-short" viewBox="0 0 25 32">
                    <title>arrow-short</title>
                    <path class="path1" d="M24.487 18.922l-1.948-1.948-8.904 8.904v-25.878h-2.783v25.878l-8.904-8.904-1.948 1.948 12.243 12.243z"></path>
                </symbol>
                <symbol id="icon-status-ok" viewBox="0 0 32 32">
                    <title>status-ok</title>
                    <path class="path1" d="M22.361 10.903l-9.71 9.063-2.998-2.998c-0.208-0.209-0.546-0.209-0.754 0s-0.208 0.546 0 0.754l3.363 3.363c0.104 0.104 0.241 0.156 0.377 0.156 0.131 0 0.261-0.048 0.364-0.143l10.087-9.414c0.215-0.201 0.227-0.539 0.026-0.754s-0.539-0.226-0.754-0.026z"></path>
                    <path class="path2" d="M16 30.933c-8.234 0-14.933-6.699-14.933-14.933s6.699-14.933 14.933-14.933c8.234 0 14.933 6.699 14.933 14.933s-6.699 14.933-14.933 14.933zM16 0c-8.822 0-16 7.178-16 16 0 8.823 7.178 16 16 16s16-7.177 16-16c0-8.822-7.178-16-16-16z"></path>
                </symbol>
                <symbol id="icon-cart" viewBox="0 0 38 32">
                    <title>cart</title>
                    <path class="path1" d="M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z"></path>
                    <path class="path2" d="M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z"></path>
                    <path class="path3" d="M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
                    <path class="path4" d="M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
                </symbol>
            </defs>
        </svg>
        <div class="accessory-result-page accessory-page">
            <div class="container">
                <div class="filter-nav">
                    <span class="sortby">Sort by:</span>
                    <a href="javascript:void(0)" class="default cur">Default</a>
                    <a href="javascript:void(0)" class="price" @click="sortGoods">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
                    <a href="javascript:void(0)" class="filterby stopPop" @click="showFliterPop">Filter by</a>
                </div>
                <div class="accessory-result">
                    <!-- filter -->
                    <div :class="['filter','stopPop',{'filterby-show':filterBy}]" id="filter">
                        <dl class="filter-price">
                            <dt>Price:</dt>
                            <dd><a href="javascript:void(0)" :class="{'cur':priceChecked=='all'}" @click="checkAllPrice">All</a></dd>
                            <!-- 循环fliterPrice 得到价格区间 -->
                            <dd v-for="(price,index) in priceFilter " :key="price.startPrice" :class="{'cur':priceChecked=='all'}">
                                <a href="javascript:void(0)" :class="{'cur':priceChecked==index}" @click="setPriceFilter(index)">{{price.startPrice}}- {{price.endPrice}}</a>
                            </dd>
                        </dl>
                    </div>

                    <!-- search result accessories list -->
                    <div class="accessory-list-wrap">
                        <div class="accessory-list col-4">
                            <ul>
                                <!-- 循环goodsList -->
                                <li v-for="goods in goodsList" :key="goods.productId">
                                    <div class="pic">
                                        <a href="#"><img v-lazy="`static/${goods.productImage}`" alt=""></a>
                                    </div>
                                    <div class="main">
                                        <div class="name">{{goods.productName}}</div>
                                        <div class="price">{{goods.salePrice}}</div>
                                        <div class="btn-area">
                                            <a href="javascript:;" class="btn btn--m" @click="addCart(goods.productId)">加入购物车</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <!-- vue infinite scroll 插件 -->
                            <div class="load-more" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30" v-show="loading">
                                <img src="./../../static/loading-svg/loading-bars.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="md-overlay" v-show="overlay" @click="closePop"></div>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import NavHeader from './../components/NavHeader.vue'
import NavFooter from './../components/NavFooter.vue'
import NavBread from './../components/NavBread.vue'
import axios from 'axios'
export default{
  components: {
    NavHeader,
    NavFooter,
    NavBread
  },
  data () {
    return {
      priceChecked: 'all', // 用于判断价格区间是否被选中
      filterBy: false, // 用于判断filterBy 的class是否显示
      overlay: false, // 用于判断遮罩层是否显示
      goodsList: [], // 商品数据列表
      priceFlag: true, // true 升序排列 false 降序排列
      page: 1, // 分页页码
      pageSize: 8, // 每页多少商品
      busy: false, // vue infinite scroll 插件
      loading: false, // 判断loading div是否显示
      priceFilter: [{ // 价格区间
        startPrice: '0.00',
        endPrice: '500.00'
      },
      {
        startPrice: '500.00',
        endPrice: '1000.00'
      },
      {
        startPrice: '1000.00',
        endPrice: '2000.00'
      }]
    }
  },
  methods: {
    // 获取商品数据列表
    getGoodsList (flag) {
      let params = {
        pageSize: this.pageSize,
        page: this.page,
        sort: this.sortFlag ? -1 : 1,
        priceLevel: this.priceChecked
      }
      this.loading = true
      axios.get('/goods', {params}).then((res) => {
        if (flag) { // 判断是否需要进行分页累加 flag为true则累加
          this.goodsList = this.goodsList.concat(res.data.result.list)
          if (res.data.result.count === 0) { // 为0条的时候数据的时候，加载完毕，关闭滚动加载 否则开启加载
            this.busy = true
          } else {
            this.false = false
          }
        } else {
          this.goodsList = res.data.result.list
        }
        this.loading = false
      }
      )
    },

    // 商品排序
    sortGoods () {
      this.sortFlag = !this.sortFlag
      this.page = 1
      this.busy = false
      this.getGoodsList()
    },
    // 显示fiterBy和遮罩层
    showFliterPop () {
      this.filterBy = true
      this.overlay = true
    },
    // 关闭fiterBy和遮罩层
    closePop () {
      this.filterBy = false
      this.overlay = false
    },
    // 用于判断价格区间是否被选中，以及关闭priceFilter
    setPriceFilter (index) {
      this.priceChecked = index
      this.filterBy = false
      this.overlay = false
      this.page = 1
      this.getGoodsList()
    },
    loadMore () { // vue infinite scroll 插件加载函数
      this.busy = true
      setTimeout(() => {
        this.page++
        this.getGoodsList(true)
      }, 500)
      this.busy = false
    },
    checkAllPrice () { // 价格过滤选中all
      this.priceChecked = 'all'
      this.busy = false
      this.getGoodsList()
    },
    addCart (productId) { // 加入购物车
      axios.post('/goods/addCart', {productId: productId}).then((res) => {
        if (res.data.status === '0') {
          alert('加入购物车成功！')
        } else if (res.data.status === '1') {
          alert('加入购物车失败' + res.msg)
        }
      })
    }
  },
  mounted () {
    this.getGoodsList() // 获取商品数据列表
  }
}
</script>

<style>
.load-more {
  height: 80px;
  line-height: 80px;
}

.load-more>img {
  height: 50px;
  line-height: 50px
}
</style>
