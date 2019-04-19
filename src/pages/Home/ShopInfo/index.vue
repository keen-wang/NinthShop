<template lang='pug'>
.goodslist-wrap
  cube-scroll-nav.scroll-nav(
    :side='true'
    :data='goodsOfCategory'
    :current='current'
    @change='changeHandler'
    @sticky-change='stickyChangeHandler')
    ShopHeader.prepend-header(
      slot='prepend'
      :shopId="1")
    cube-scroll-nav-panel.scroll-nav-panel(
      v-if="goodsOfCategory.length"
      v-for='item in goodsOfCategory'
      :key='item.name'
      :label='item.name'
      :title='item.name')
      ul.goods-list
        li.goods-item(
          v-for='good  in item.goods')
          img.goods-img(:src="good.imgsrc")
          .goods-info
            .goods-name {{good.name}}
            .goods-desc {{good.summary}}
            .goods-sales {{`月售${good.sales}份 好评率${good.praiserate}% `}}
            .goods-price ￥{{good.price.toFixed(2)}}
</template>

<script>
/**
 * @name GoodsList
 */
import ShopHeader from './ShopHeader'
export default {
  name: 'GoodsList',
  components: {
    ShopHeader
  },
  data () {
    return {
      current: goods[0].name,
      goodsList: [],
      categoryList: [],
      goods: goods
    }
  },
  computed: {
    goodsOfCategory () {
      return this.categoryList.map(category => {
        return {
          ...category,
          goods: this.goodsList.filter(item => item.cateid === category.id)
        }
      })
    }
  },
  methods: {
    changeHandler (label) {
      console.log('changed to:', label)
    },
    stickyChangeHandler (current) {
      console.log('sticky-change', current)
    },
    getGoodsList () {
      this.$get({
        url: `/goods/list`,
        params: {
          shopid: 1
        }
      }).then(res => {
        if (!res) return
        this.goodsList = res
      })
    },
    getCategoryList () {
      this.$get({
        url: `/category`,
        params: {
          shopid: 1
        }
      }).then(res => {
        if (!res) return
        this.categoryList = res
      })
    }
  },
  mounted () {
    this.getGoodsList()
    this.getCategoryList()
  }
}
const goods = [
  {'id': 1, 'shopid': 1, 'name': '新品上市', 'goods': [{'id': 0, 'shopid': 1, 'cateid': 1, 'sales': 4, 'praiserate': 60, 'name': '初夏乐套餐', 'price': 59, 'summary': '大鸡块1份+麦辣鸡翅2对+大可乐', 'imgsrc': null}, {'id': 1, 'shopid': 1, 'cateid': 1, 'sales': 3, 'praiserate': 60, 'name': '法式针虾厚牛堡', 'price': 34, 'summary': '法式珍虾牛堡一个', 'imgsrc': null}, {'id': 2, 'shopid': 1, 'cateid': 1, 'sales': 1, 'praiserate': 100, 'name': '法式苹果味奶茶', 'price': 15, 'summary': '法式苹果味奶茶', 'imgsrc': null}, {'id': 3, 'shopid': 1, 'cateid': 1, 'sales': 4, 'praiserate': 100, 'name': '法式柠香鸡腿堡', 'price': 28, 'summary': '法式柠香鸡腿堡1个', 'imgsrc': null}]}, {'id': 2, 'shopid': 1, 'name': '优惠套餐', 'goods': [{'id': 4, 'shopid': 1, 'cateid': 2, 'sales': 14, 'praiserate': 100, 'name': '薯条', 'price': 5, 'summary': '一份薯条 原理土豆。', 'imgsrc': null}, {'id': 5, 'shopid': 1, 'cateid': 2, 'sales': 5, 'praiserate': 100, 'name': '麦辣鸡翅2块', 'price': 5, 'summary': '麦辣鸡翅2块', 'imgsrc': null}]}, {'id': 4, 'shopid': 1, 'name': '经典主食', 'goods': [{'id': 6, 'shopid': 1, 'cateid': 4, 'sales': 1, 'praiserate': 100, 'name': '麦香鱼汉堡', 'price': 19, 'summary': '原理：面板、鱼、芝士', 'imgsrc': null}, {'id': 7, 'shopid': 1, 'cateid': 4, 'sales': 6, 'praiserate': 70, 'name': '巨无霸汉堡', 'price': 23, 'summary': '原料：面包、牛肉', 'imgsrc': null}, {'id': 8, 'shopid': 1, 'cateid': 4, 'sales': 12, 'praiserate': 100, 'name': '经典麦辣鸡腿汉堡', 'price': 20, 'summary': '1个经典麦辣鸡腿汉堡 主要原料：面包、鸡肉、生菜、', 'imgsrc': null}]}, {'id': 5, 'shopid': 1, 'name': '精选小吃', 'goods': [{'id': 9, 'shopid': 1, 'cateid': 5, 'sales': 80, 'praiserate': 90, 'name': '麦辣鸡翅2块（炸鸡翅）', 'price': 11.5, 'summary': '2块麦辣鸡翅 主要原料：鸡肉，腌料，裹粉，油', 'imgsrc': null}, {'id': 10, 'shopid': 1, 'cateid': 5, 'sales': 34, 'praiserate': 80, 'name': '麦乐鸡5块（炸鸡块）\r\n', 'price': 11.5, 'summary': '5块麦乐鸡主要原料：鸡肉，油', 'imgsrc': null}]}, {'id': 6, 'shopid': 1, 'name': '鸡翅套餐', 'goods': [{'id': 11, 'shopid': 1, 'cateid': 6, 'sales': 29, 'praiserate': 100, 'name': '麦辣鸡腿汉堡配麦辣鸡翅套餐', 'price': 33, 'summary': ' ', 'imgsrc': null}, {'id': 12, 'shopid': 1, 'cateid': 6, 'sales': 13, 'praiserate': 70, 'name': '巨无霸汉堡配麦辣鸡翅套餐', 'price': 34, 'summary': ' ', 'imgsrc': null}]}, {'id': 7, 'shopid': 1, 'name': '缤纷饮品', 'goods': [{'id': 13, 'shopid': 1, 'cateid': 7, 'sales': 12, 'praiserate': 100, 'name': '大可乐', 'price': 11.5, 'summary': ' ', 'imgsrc': null}, {'id': 14, 'shopid': 1, 'cateid': 7, 'sales': 1, 'praiserate': 100, 'name': '鲜煮咖啡（大）', 'price': 15, 'summary': '鲜煮咖啡（大）', 'imgsrc': null}, {'id': 15, 'shopid': 1, 'cateid': 7, 'sales': 5, 'praiserate': 100, 'name': '大雪碧', 'price': 11.5, 'summary': ' ', 'imgsrc': null}]}, {'id': 8, 'shopid': 1, 'name': '美味甜食', 'goods': [{'id': 16, 'shopid': 1, 'cateid': 8, 'sales': 10, 'praiserate': 70, 'name': '派（香芋）', 'price': 7.5, 'summary': '香芋派 主要原料：香芋派', 'imgsrc': null}, {'id': 17, 'shopid': 1, 'cateid': 8, 'sales': 13, 'praiserate': 100, 'name': '派（菠萝）', 'price': 7.5, 'summary': '菠萝派 主要原料：菠萝派', 'imgsrc': null}]}, {'id': 9, 'shopid': 1, 'name': '麦趣鸡盒', 'goods': [{'id': 18, 'shopid': 1, 'cateid': 9, 'sales': 1, 'praiserate': 100, 'name': '麦趣鸡盒(那么大鸡排+麦辣鸡翅)', 'price': 92, 'summary': '麦趣鸡盒(那么大鸡排+麦辣鸡翅)', 'imgsrc': null}]}, {'id': 11, 'shopid': 1, 'name': '开心乐园套餐', 'goods': [{'id': 19, 'shopid': 1, 'cateid': 11, 'sales': 5, 'praiserate': 80, 'name': '汉堡开心乐园餐（小薯条）', 'price': 50, 'summary': '汉堡开心乐园餐（小薯条）', 'imgsrc': null}]}
]
</script>

<style lang='sass' scoped>
.goodslist-wrap
  height: 100%
  background-color: #fff
  .goods-item
    overflow: hidden
    vertical-align: middle
    padding: 10px
    border-bottom: 1px solid #ddd
    display: flex
    .goods-img
      width: 20vw
      height: 20vw
      display: inline-block
      box-sizing: border-box
    .goods-info
      flex: 1
      // height: 22vw
      display: inline-block
      box-sizing: border-box
      padding-left: 6px
      font-size: 3vw
      .goods-name
        padding: 4px
        font-size: 4vw
        font-weight: bold
      .goods-desc,.goods-sales,.goods-price
        font-size: 3vw
        padding: 4px
        color: #787878
      .goods-price
        font-size: 4vw
        color: #ff5339
/deep/.scroll-nav
  .cube-scroll-nav-bar-item_active
    background-color: #fff
    border-bottom: 1px solid #02a774
    box-sizing: border-box
    font-size: 4vw
  .cube-scroll-nav-bar-item
    padding: 3vw
    font-size: 4vw
  .cube-scroll-nav-panel-title
    background-color: #fff
    box-shadow: 0px 0px 10px #dfdfdf
    border-bottom: 1px solid #ddd
    padding: 5px
    border-left: 3px solid #02a774
    font-size: 4vw
  .cube-scroll-nav-panels
    border-left: 1px solid #ddd
</style>
