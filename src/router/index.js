import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'

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
const AddLoan = () => import('@/views/Employee/views/AddLoan')
const DisclosureLoan = () => import('@/views/Employee/views/DisclosureLoan')
const AttendanceLeaves = () => import('@/views/Employee/views/AttendanceLeaves')

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
const warehouse = () => import('@/views/inventories/view/warehouse')
const addwarehouse = () => import('@/views/inventories/view/warehouse/addWarehouse')
const editwarehouse = () => import('@/views/inventories/view/warehouse/editWarehouse')
const stockrequest = () => import('@/views/inventories/view/stock request')
const addstockrequest = () => import('@/views/inventories/view/stock request/addStockRequest')
// system
const rolePage = () => import('@/views/system')
const rolemanagement = () => import('@/views/system/view/role management')
const addrolemanagement = () => import('@/views/system/view/role management/addrolemanagement.vue')

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
          component: LoginPage,
          meta: {
            guest: true
          }
        },
        {
          path: '/forgot-password',
          name: 'Forgot Password',
          component: ForgotPassword,
          children: [
            {
              path: '/forgot-password',
              name: 'Send Login Link',
              component: LoginLink,
              meta: {
                guest: true
              }
            },
            {
              path: '/new-password',
              name: 'New Password',
              component: NewPassword,
              meta: {
                guest: true
              }
            }
          ]
        },
        {
          path: '/outlet-registration',
          name: 'Outlet Registration',
          component: OutletRegistration,
          meta: {
            guest: true
          }
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
          component: DashboardPage,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/restaurant',
          name: 'Restaurant',
          component: RestaurantPage,
          meta: {
            requireAuth: true
          }
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
              component: ListPromo,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'detail-promo/:id',
              name: 'Detail Promo',
              component: DetailPromo,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'add-promo',
              name: 'Add Promo',
              component: AddPromo,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'edit-promo-eatmore/:id',
              name: 'Edit Promo Eatmore',
              component: EditPromoEatmore,
              meta: {
                requireAuth: true
              }
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
              component: CustomerSummary,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'data',
              name: 'Customer Data',
              component: CustomerData,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'loyalty-program',
              name: 'Customer Loyalty Program',
              component: CustomerLoyalty,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'transaction-history',
              name: 'Transaction History',
              component: CustomerTransactionHistory,
              meta: {
                requireAuth: true
              }
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
              component: EmployeeSummary,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'list',
              name: 'Employee List',
              component: EmployeeList,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'holidays',
              name: 'Holiday',
              component: HolidaysList,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'add-employee',
              name: 'Add New Employee',
              component: AddEmployee,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'division-management',
              name: 'Division Management',
              component: EmployeeDivManage,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'reimbursement',
              name: 'Reimbursement',
              component: ReimbursementList,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'new-reimbursement',
              name: 'New Reimbursement',
              component: AddReimbursement,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'employee-shift',
              name: 'Employee Shift',
              component: EmployeeShift,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'loan',
              name: 'Loan',
              component: LoanList,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'add-loan',
              name: 'Add New Loan',
              component: AddLoan,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'disclosure',
              name: 'Disclosure',
              component: DisclosureLoan,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'attendance-leaves',
              name: 'Attendance - Leaves',
              component: AttendanceLeaves,
              meta: {
                requireAuth: true
              }
            }
          ]
        },
        {
          path: '/Report/Sales',
          name: 'Report',
          component: ReportPage,
          meta: {
            requireAuth: true
          }
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
              component: AddProducts,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'edit-product',
              name: 'Edit Product',
              component: EditProducts,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'categories',
              name: 'Categories',
              component: categories,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'recipes',
              name: 'Recipes',
              component: recipes,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'edit-recipes',
              name: 'Edit Recipes',
              component: editRecipes,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'modifiers',
              name: 'Modifiers',
              component: modifier,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'add-modifiers',
              name: 'Add Modifiers',
              component: addModifier,
              meta: {
                requireAuth: true
              }
            },
            {
              path: '/products',
              name: 'Products',
              component: Products,
              meta: {
                requireAuth: true
              }
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
              component: inventories,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'add-inventory',
              name: 'Add Inventory',
              component: addInventories,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'edit-inventory',
              name: 'Edit Inventory',
              component: editInventories,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'type-inventories',
              name: 'Type Inventories',
              component: categoriesInvent,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'supplier',
              name: 'supplier',
              component: supplier,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'add-supplier',
              name: 'Add Supplier',
              component: addSupplier,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'edit-supplier',
              name: 'Edit Supplier',
              component: editSupplier,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'purchase-order',
              name: 'Purchase Order(PO)',
              component: purchaseOrder,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'previewPO',
              name: 'View Purchase Order',
              component: previewPurchaseOrder,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'add-purchase-order',
              name: 'Add Purchase Order',
              component: addPurchaseOrder,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'recived-order',
              name: 'Recived Order',
              component: revicedOrder,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'add-recived-order',
              name: 'Add Recived Order',
              component: addRevicedOrder,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'view-recived-order',
              name: 'View Recived Order',
              component: viewRevicedOrder,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'stock-opname',
              name: 'Stock Opname',
              component: stockOpname,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'add-stock-opname',
              name: 'New Stock Opname',
              component: addStockOpname,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'stock-adjustment',
              name: 'Stock Adjustment',
              component: stockadjustment,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'Confirm-stock-adjustment',
              name: 'Confirm Stock Adjustment',
              component: comfrimStockadjustment,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'add-stock-adjustment',
              name: 'Add Stock Adjustment',
              component: addStockadjustment,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'transfer-inventories',
              name: 'Transfer Inventories',
              component: transfer,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'add-transfer-inventories',
              name: 'Add Transfer Inventories',
              component: addtransfer,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'view-transfer-inventories',
              name: 'View Transfer Inventories',
              component: viewtransfer,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'warehouse',
              name: 'Warehouse',
              component: warehouse,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'add-warehouse',
              name: 'Add Warehouse',
              component: addwarehouse,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'edit-warehouse',
              name: 'Edit Warehouse',
              component: editwarehouse,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'stock-request',
              name: 'Stock Request',
              component: stockrequest,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'add-stock-request',
              name: 'New Stock Request',
              component: addstockrequest,
              meta: {
                requireAuth: true
              }
            }
          ]
        },
        {
          path: '/systems',
          name: 'systems',
          redirect: '/systems',
          component: rolePage,
          children: [
            {
              path: '/systems',
              name: 'Systems',
              component: rolePage,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'role-management',
              name: 'Role Management',
              component: rolemanagement,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'add-role-management',
              name: 'New Role Management',
              component: addrolemanagement,
              meta: {
                requireAuth: true
              }
            }
          ]
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = Cookies.get('token')
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (token === null || token === undefined) {
      next('/login')
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (token === null || token === undefined) {
      next()
    } else {
      next('/dashboard')
    }
  }
})

export default router
