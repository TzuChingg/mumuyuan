import MenuPage from '../../views/claire/MenuPage.vue'
import combo from '../../components/claire/eachCategories/CategoryCombo.vue'
import secret from '../../components/claire/eachCategories/CategorySecret.vue'
import meat from '../../components/claire/eachCategories/CategoryMeat.vue'
import seafood from '../../components/claire/eachCategories/CategorySeafood.vue'
import wine from '../../components/claire/eachCategories/CategoryWine.vue'
import vegetable from '../../components/claire/eachCategories/CategoryVegetable.vue'
import classic from '../../components/claire/eachCategories/CategoryClassic.vue'

export default {
  path: '/menu',
  component: MenuPage,
  children: [
    {
      path: 'category/:id',
      component: secret,
      props: () => ({ id: 6 })
    },
    {
      path: 'combo',
      component: combo
    },
    {
      path: 'secret',
      component: secret
    },
    {
      path: 'meat',
      component: meat
    },
    {
      path: 'seafood',
      component: seafood
    },
    {
      path: 'wine',
      component: wine
    },
    {
      path: 'vegetable',
      component: vegetable
    },
    {
      path: 'classic',
      component: classic
    }
  ]
}
