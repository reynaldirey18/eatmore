import Vue from 'vue'
import VueRouter from 'vue-router'
import CleanLayout from '@/layouts/Clean'
import HomeLayout from '@/layouts/Home'

Vue.use(VueRouter)

const LoginPage = () => import('@/views/Login')
const DashboardPage = () => import('@/views/Dashboard')
const RestaurantPage = () => import('@/views/Restaurant')
const ReportPage = () => import('@/views/Report')
const Product = () => import('@/views/Product')

// Customer
const CustomerPage = () => import('@/views/Customer')
const CustomerSummary = () => import('@/views/Customer/views/Summary')
const CustomerData = () => import('@/views/Customer/views/Data')
const CustomerLoyaltyProgram = () => import('@/views/Customer/views/LoyaltyProgram')
const CustomerTransactionHistory = () => import('@/views/Customer/views/TransactionHistory')

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect: '/login',
      name: 'UnAuthenticated',
      component: CleanLayout,
      children: [
        {
          path: '/login',
          name: 'Login',
          component: LoginPage
        }
      ]
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      redirect: '/dashboard',
      component: HomeLayout,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: DashboardPage
        },
        {
          path: '/restaurant',
          name: 'Restaurant',
          component: RestaurantPage
        },
        {
          path: '/customer',
          name: 'Customer',
          redirect: '/customer/summary',
          component: CustomerPage,
          children: [
            {
              path: 'summary',
              name: 'Customer Summary',
              component: CustomerSummary
            },
            {
              path: 'data',
              name: 'Customer Data',
              component: CustomerData
            },
            {
              path: 'loyalty-program',
              name: 'Loyalty Programs',
              component: CustomerLoyaltyProgram
            },
            {
              path: 'transaction-history',
              name: 'Transaction History',
              component: CustomerTransactionHistory
            }
          ]
        },
        {
          path: '/Report/Sales',
          name: 'Report',
          component: ReportPage
        },
        {
          path: '',
          name: 'Product',
          redirect: '/products',
          component: Product,
          children: [
            {
              path: '/products/add',
              name: 'Add New Product',
              component: Product
            },
            {
              path: '/products',
              name: 'Products',
              component: Product
            }
          ]
        }
      ]
    }
  ]
})

export default router
