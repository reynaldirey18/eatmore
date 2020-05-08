import Vue from 'vue'
import VueRouter from 'vue-router'

import CleanLayout from '@/layouts/Clean'
import HomeLayout from '@/layouts/Home'

import PromoPage from '@/views/Promo'
import CustomerPage from '@/views/Customer'
import EmployeePage from '@/views/Employee'

Vue.use(VueRouter)

const LoginPage = () => import('@/views/Login')
const ForgotPassword = () => import('@/views/ForgotPassword')
const OutletRegistration = () => import('@/views/OutletRegistration')
const DashboardPage = () => import('@/views/Dashboard')
const RestaurantPage = () => import('@/views/Restaurant')
const ReportPage = () => import('@/views/Report')

// Forgot Password
const LoginLink = () => import('@/views/ForgotPassword/views/LoginLink')
const NewPassword = () => import('@/views/ForgotPassword/views/NewPassword')

// Customer
const CustomerSummary = () => import('@/views/Customer/views/Summary')
const CustomerData = () => import('@/views/Customer/views/Data')
const CustomerLoyalty = () => import('@/views/Customer/views/LoyaltyProgram')
const CustomerTransactionHistory = () => import('@/views/Customer/views/TransactionHistory')

// Promo
const ListPromo = () => import('@/views/Promo/views/ListPromo')
const DetailPromo = () => import('@/views/Promo/views/DetailPromo')
const AddPromo = () => import('@/views/Promo/views/AddPromo')
const EditPromoEatmore = () => import('@/views/Promo/views/EditEatmore')

// Employee
const EmployeeSummary = () => import('@/views/Employee/views/Summary')
const EmployeeList = () => import('@/views/Employee/views/List')
const HolidaysList = () => import('@/views/Employee/views/Holiday')
const EmployeeDivManage = () => import('@/views/Employee/views/DivisionManagement')
const AddEmployee = () => import('@/views/Employee/views/AddEmployee')
const ReimbursementList = () => import('@/views/Employee/views/Reimbursement')
const AddReimbursement = () => import('@/views/Employee/views/AddReimbursement')
const EmployeeShift = () => import('@/views/Employee/views/EmployeeShift')
const LoanList = () => import('@/views/Employee/views/Loan')

// Products
const ProductPage = () => import('@/views/Product')
const Products = () => import('@/views/Product/view/Products')
const AddProducts = () => import('@/views/Product/view/AddProduct')
const EditProducts = () => import('@/views/Product/view/EditProduct')
const categories = () => import('@/views/Product/view/Categories')
const recipes = () => import('@/views/Product/view/Recipes')
const editRecipes = () => import('@/views/Product/view/EditRecipes')
const modifier = () => import('@/views/Product/view/modifier')
const addModifier = () => import('@/views/Product/view/addModifier')
// inventories
const inventoriesPage = () => import('@/views/inventories')
const inventories = () => import('@/views/inventories/view/inventories')
const addInventories = () => import('@/views/inventories/view/addInventory')
const editInventories = () => import('@/views/inventories/view/editInventory')
const categoriesInvent = () => import('@/views/inventories/view/categories')
const supplier = () => import('@/views/inventories/view/Supplier')
const addSupplier = () => import('@/views/inventories/view/Supplier/addSuplier')
const editSupplier = () => import('@/views/inventories/view/Supplier/editSuplier')
const purchaseOrder = () => import('@/views/inventories/view/purchase order')
const addPurchaseOrder = () => import('@/views/inventories/view/purchase order/addPurchase')
const previewPurchaseOrder = () => import('@/views/inventories/view/purchase order/preview')
const revicedOrder = () => import('@/views/inventories/view/recived order')
const addRevicedOrder = () => import('@/views/inventories/view/recived order/addRecivedOrder')
const viewRevicedOrder = () => import('@/views/inventories/view/recived order/viewRecivedOrder')
const stockOpname = () => import('@/views/inventories/view/stock opname')
const addStockOpname = () => import('@/views/inventories/view/stock opname/addStockOpname')
const stockadjustment = () => import('@/views/inventories/view/Stock Adjustment')
const addStockadjustment = () => import('@/views/inventories/view/Stock Adjustment/addSA')
const comfrimStockadjustment = () => import('@/views/inventories/view/Stock Adjustment/comfrimSA')
const transfer = () => import('@/views/inventories/view/transfer')
const addtransfer = () => import('@/views/inventories/view/transfer/addTransfer')
const viewtransfer = () => import('@/views/inventories/view/transfer/viewTransfer')

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
        },
        {
          path: '/forgot-password',
          name: 'Forgot Password',
          component: ForgotPassword,
          children: [
            {
              path: '/forgot-password',
              name: 'Send Login Link',
              component: LoginLink
            },
            {
              path: '/new-password',
              name: 'New Password',
              component: NewPassword
            }
          ]
        },
        {
          path: '/outlet-registration',
          name: 'Outlet Registration',
          component: OutletRegistration
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
          path: '/promo',
          name: 'Promo',
          redirect: '/promo/list-promo',
          component: PromoPage,
          children: [
            {
              path: 'list-promo',
              name: 'List Promo',
              component: ListPromo
            },
            {
              path: 'detail-promo/:id',
              name: 'Detail Promo',
              component: DetailPromo
            },
            {
              path: 'add-promo',
              name: 'Add Promo',
              component: AddPromo
            },
            {
              path: 'edit-promo-eatmore/:id',
              name: 'Edit Promo Eatmore',
              component: EditPromoEatmore
            }
          ]
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
              name: 'Customer Loyalty Program',
              component: CustomerLoyalty
            },
            {
              path: 'transaction-history',
              name: 'Transaction History',
              component: CustomerTransactionHistory
            }
          ]
        },
        {
          path: '/employee',
          name: 'Employee',
          redirect: '/employee/summary',
          component: EmployeePage,
          children: [
            {
              path: 'summary',
              name: 'Employee Summary',
              component: EmployeeSummary
            },
            {
              path: 'list',
              name: 'Employee List',
              component: EmployeeList
            },
            {
              path: 'holidays',
              name: 'Holiday',
              component: HolidaysList
            },
            {
              path: 'add-employee',
              name: 'Add New Employee',
              component: AddEmployee
            },
            {
              path: 'division-management',
              name: 'Division Management',
              component: EmployeeDivManage
            },
            {
              path: 'reimbursement',
              name: 'Reimbursement',
              component: ReimbursementList
            },
            {
              path: 'new-reimbursement',
              name: 'New Reimbursement',
              component: AddReimbursement
            },
            {
              path: 'employee-shift',
              name: 'Employee Shift',
              component: EmployeeShift
            },
            {
              path: 'loan',
              name: 'Loan',
              component: LoanList
            }
          ]
        },
        {
          path: '/Report/Sales',
          name: 'Report',
          component: ReportPage
        },
        {
          path: '/products',
          name: 'Products',
          redirect: '/products',
          component: ProductPage,
          children: [
            {
              path: 'add-product',
              name: 'Add New Product',
              component: AddProducts
            },
            {
              path: 'edit-product',
              name: 'Edit Product',
              component: EditProducts
            },
            {
              path: 'categories',
              name: 'Categories',
              component: categories
            },
            {
              path: 'recipes',
              name: 'Recipes',
              component: recipes
            },
            {
              path: 'edit-recipes',
              name: 'Edit Recipes',
              component: editRecipes
            },
            {
              path: 'modifiers',
              name: 'Modifiers',
              component: modifier
            },
            {
              path: 'add-modifiers',
              name: 'Add Modifiers',
              component: addModifier
            },
            {
              path: '/products',
              name: 'Products',
              component: Products
            }
          ]
        },
        {
          path: '/inventories',
          name: 'inventories',
          redirect: '/inventories',
          component: inventoriesPage,
          children: [
            {
              path: '/inventories',
              name: 'inventories',
              component: inventories
            },
            {
              path: 'add-inventory',
              name: 'Add Inventory',
              component: addInventories
            },
            {
              path: 'edit-inventory',
              name: 'Edit Inventory',
              component: editInventories
            },
            {
              path: 'type-inventories',
              name: 'Type Inventories',
              component: categoriesInvent
            },
            {
              path: 'supplier',
              name: 'supplier',
              component: supplier
            },
            {
              path: 'add-supplier',
              name: 'Add Supplier',
              component: addSupplier
            },
            {
              path: 'edit-supplier',
              name: 'Edit Supplier',
              component: editSupplier
            },
            {
              path: 'purchase-order',
              name: 'Purchase Order(PO)',
              component: purchaseOrder
            },
            {
              path: 'previewPO',
              name: 'View Purchase Order',
              component: previewPurchaseOrder
            },
            {
              path: 'add-purchase-order',
              name: 'Add Purchase Order',
              component: addPurchaseOrder
            },
            {
              path: 'recived-order',
              name: 'Recived Order',
              component: revicedOrder
            },
            {
              path: 'add-recived-order',
              name: 'Add Recived Order',
              component: addRevicedOrder
            },
            {
              path: 'view-recived-order',
              name: 'View Recived Order',
              component: viewRevicedOrder
            },
            {
              path: 'stock-opname',
              name: 'Stock Opname',
              component: stockOpname
            },
            {
              path: 'add-stock-opname',
              name: 'New Stock Opname',
              component: addStockOpname
            },
            {
              path: 'stock-adjustment',
              name: 'Stock Adjustment',
              component: stockadjustment
            },
            {
              path: 'Confirm-stock-adjustment',
              name: 'Confirm Stock Adjustment',
              component: comfrimStockadjustment
            },
            {
              path: 'add-stock-adjustment',
              name: 'Add Stock Adjustment',
              component: addStockadjustment
            },
            {
              path: 'transfer-inventories',
              name: 'Transfer Inventories',
              component: transfer
            },
            {
              path: 'add-transfer-inventories',
              name: 'Add Transfer Inventories',
              component: addtransfer
            },
            {
              path: 'view-transfer-inventories',
              name: 'View Transfer Inventories',
              component: viewtransfer
            }
          ]
        }
      ]
    }
  ]
})

export default router
