export const sidebar = [
  {
    icon: 'mdi-speedometer',
    name: 'Dashboard',
    to: '/dashboard'
  },
  {
    icon: 'mdi-store',
    name: 'Restaurant',
    to: '/restaurant'
  }
]

export const mainMenu = [
  {
    icon: 'mdi-file-pdf',
    name: 'Reports',
    children: [
      {
        name: 'Sales',
        to: '/Report/Sales'
      },
      {
        name: 'Transactions'
      },
      {
        name: 'Promo'
      },
      {
        name: 'Loyalty Point'
      },
      {
        name: 'Inventory Stock'
      }
    ]
  },
  {
    icon: 'mdi-layers',
    name: 'Products',
    children: [
      {
        name: 'Products',
        to: '/products'
      },
      {
        name: 'Add New Product',
        to: '/products/add-product'
      },
      {
        name: 'Categories',
        to: '/products/categories'
      },
      {
        name: 'Recipes',
        to: '/products/recipes'
      },
      {
        name: 'Modifiers',
        to: '/products/modifiers'
      }
    ]
  },
  {
    icon: 'mdi-silverware',
    name: 'Inventory',
    children: [
      {
        name: 'Stock Forecasting'
      },
      {
        name: 'Inventories',
        to: '/inventories'
      },
      {
        name: 'Type Inventories',
        to: '/inventories/type-inventories'
      },
      {
        name: 'Stock Adjustment',
        to: '/inventories/stock-adjustment'
      },
      {
        name: 'Warehouse'
      },
      {
        name: 'Supplier',
        to: '/inventories/supplier'
      },
      {
        name: 'Purchase Order (PO)',
        to: '/inventories/purchase-order'
      },
      {
        name: 'Received Order',
        to: '/inventories/recived-order'
      },
      {
        name: 'Transfer Inventories',
        to: '/inventories/transfer-inventories'
      },
      {
        name: 'Request Materials'
      },
      {
        name: 'Stock Opname',
        to: '/inventories/stock-opname'
      }
    ]
  },
  {
    icon: 'mdi-timetable',
    name: 'Promo',
    children: [
      {
        name: 'New Promo',
        to: '/promo/list-promo'
      },
      {
        name: 'Edit Promo',
        to: '/promo/edit-promo'
      },
      {
        name: 'Text'
      }
    ]
  },
  {
    icon: 'mdi-account-circle',
    name: 'Customer',
    children: [
      {
        name: 'Summary',
        to: '/customer/summary'
      },
      {
        name: 'Customer Data',
        to: '/customer/data'
      },
      {
        name: 'Loyalty Program',
        to: '/customer/loyalty-program'
      },
      {
        name: 'Transaction History',
        to: '/customer/transaction-history'
      }
    ]
  },
  {
    icon: 'mdi-account-box',
    name: 'Employees',
    children: [
      {
        name: 'Employee Summary',
        to: '/employee/summary'
      },
      {
        name: 'Employee List',
        to: '/employee/list'
      },
      {
        name: 'Holidays',
        to: '/employee/holidays'
      },
      {
        name: 'Division Management',
        to: '/employee/division-management'
      },
      {
        name: 'Reimbursement',
        to: '/employee/reimbursement'
      },
      {
        name: 'Employee Shift',
        to: '/employee/employee-shift'
      },
      {
        name: 'Loan',
        to: '/employee/loan'
      }
    ]
  },
  {
    icon: 'mdi-deskphone',
    name: 'Accounting',
    children: []
  },
  {
    icon: 'mdi-table',
    name: 'Table Management',
    children: [
      {
        name: 'Floor List'
      },
      {
        name: 'Add New Floor'
      },
      {
        name: 'Table List'
      }
    ]
  },
  {
    icon: 'mdi-settings',
    name: 'System',
    children: []
  }
]
