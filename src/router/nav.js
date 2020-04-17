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
        name: 'Products'
      },
      {
        name: 'Add New Product'
      },
      {
        name: 'Categories'
      },
      {
        name: 'Recipes'
      },
      {
        name: 'Modifiers'
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
        name: 'Inventories'
      },
      {
        name: 'Categories'
      },
      {
        name: 'Stock Adjustment'
      },
      {
        name: 'Warehouse'
      },
      {
        name: 'Supplier'
      },
      {
        name: 'Purchase Order (PO)'
      },
      {
        name: 'Received Order'
      },
      {
        name: 'Transfer Inventories'
      },
      {
        name: 'Request Materials'
      },
      {
        name: 'Stock Opname'
      }
    ]
  },
  {
    icon: 'mdi-timetable',
    name: 'Promo',
    children: []
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
      }
    ]
  },
  {
    icon: 'mdi-account-box',
    name: 'Employees',
    children: [
      {
        name: 'Employee Summary'
      },
      {
        name: 'Employee List'
      },
      {
        name: 'Division Management'
      },
      {
        name: 'Payroll Management'
      },
      {
        name: 'Reimbursement'
      },
      {
        name: 'Assign Employee Shift'
      },
      {
        name: 'Loan'
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
