<template>
    <div>
        <nav-header></nav-header>
        <nav-bread>
            <span slot="goods">Goods</span>
        </nav-bread>
        <div class="accessory-result-page accessory-page">
            <div class="container">
                <div class="filter-nav">
                    <span class="sortby">Sort by:</span>
                    <a href="javascript:void(0)" class="default cur">Default</a>
                    <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
                    <a href="javascript:void(0)" class="filterby stopPop" @click="showFliterPop">Filter by</a>
                </div>
                <div class="accessory-result">
                    <!-- filter -->
                    <div :class="['filter','stopPop',{'filterby-show':filterBy}]" id="filter">
                        <dl class="filter-price">
                            <dt>Price:</dt>
                            <dd><a href="javascript:void(0)" :class="{'cur':priceChecked=='all'}" @click="priceChecked='all'">All</a></dd>
                            <!-- 循环fliterPrice 得到价格区间 -->
                            <dd v-for="(price,index) in priceFilter " :key="price.startPrice" :class="{'cur':priceChecked=='all'}">
                                <a href="javascript:void(0)" :class="{'cur':priceChecked==index}" @click="stePriceFilter(index)">{{price.startPrice}}- {{price.endPrice}}</a>
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
                                        <a href="#"><img v-lazy="`static/${goods.productImg}`" alt=""></a>
                                    </div>
                                    <div class="main">
                                        <div class="name">{{goods.productName}}</div>
                                        <div class="price">{{goods.productPrice}}</div>
                                        <div class="btn-area">
                                            <a href="javascript:;" class="btn btn--m">加入购物车</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
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
      priceFilter: [{ // 价格区间
        startPrice: '0.00',
        endPrice: '500.00'
      },
      {
        startPrice: '501.00',
        endPrice: '1000.00'
      },
      {
        startPrice: '1001.00',
        endPrice: '2000.00'
      }]
    }
  },
  methods: {
    // 获取商品数据列表
    getGoodsList () {
      axios.get('/goods').then((res) => {
        this.goodsList = res.data.result
      })
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
    stePriceFilter (index) {
      this.priceChecked = index
      this.filterBy = false
      this.overlay = false
    }
  },
  mounted () {
    this.getGoodsList() // 获取商品数据列表
  }
}
</script>
