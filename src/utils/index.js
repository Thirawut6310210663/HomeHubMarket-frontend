export const navOptions = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "listing",
    label: "All",
    path: "/product/listing/all-products",
  },
  {
    id: "listingFC ONLINE",
    label: "TOWNHOME",
    path: "/product/listing/fconline",
  },
  {
    id: "listingHonkai",
    label: "CONDOMINIUM",
    path: "/product/listing/honkai",
  },
  {
    id: "listingGenshinimpact",
    label: "VILLA",
    path: "/product/listing/genshinimpact",
  },
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Manage All",
    path: "/admin-view/all-products",
  },
  {
    id: "adminNewProduct",
    label: "Add New",
    path: "/admin-view/add-product",
  },
];

export const registrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter your name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
  {
    id: "role",
    type: "",
    placeholder: "",
    label: "Role",
    componentType: "select",
    options: [
      {
        id: "admin",
        label: "Admin",
      },
      {
        id: "customer",
        label: "customer",
      },
    ],
  },
];

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
];

export const adminAddProductformControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "Enter price",
    label: "Price",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Enter description",
    label: "Description",
    componentType: "input",
  },
  {
    id: "category",
    type: "",
    placeholder: "",
    label: "Category",
    componentType: "select",
    options: [
      {
        id: "fconline",
        label: "TOWNHOME",
      },
      {
        id: "honkai",
        label: "CONDOMINIUM",
      },
      {
        id: "genshinimpact",
        label: "VILLA",
      },
    ],
  },
  {
    id: "deliveryInfo",
    type: "text",
    placeholder: "Enter address",
    label: "Address",
    componentType: "input",
  },
  {
    id: "onSale",
    type: "",
    placeholder: "",
    label: "On Sale",
    componentType: "select",
    options: [
      {
        id: "yes",
        label: "Yes",
      },
      {
        id: "no",
        label: "No",
      },
    ],
  },
  {
    id: "priceDrop",
    type: "number",
    placeholder: "Enter Price Drop",
    label: "Price Drop",
    componentType: "input",
  },
];

export const AvailableSizes = [
  {
    id: "s",
    label: "Sold Out",
  },
  {
    id: "m",
    label: "New",
  },
  {
    id: "l",
    label: "Hot",
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyB4jxPzPY2OtTtFn2k0EGlxfxTpeXyMM4c",
  authDomain: "project-ecommerce-5d3b4.firebaseapp.com",
  projectId: "project-ecommerce-5d3b4",
  storageBucket: "project-ecommerce-5d3b4.appspot.com",
  messagingSenderId: "71911677568",
  appId: "1:71911677568:web:81631dab8b4e15dad31065",
  measurementId: "G-YVECYKT24B"
};

export const firebaseStroageURL =
  "gs://project-ecommerce-5d3b4.appspot.com";

export const addNewAddressFormControls = [
  {
    id: "fullName",
    type: "input",
    placeholder: "Enter your full name",
    label: "Full Name",
    componentType: "input",
  },
  {
    id: "address",
    type: "input",
    placeholder: "Enter your full address",
    label: "Address",
    componentType: "input",
  },
  {
    id: "city",
    type: "input",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "country",
    type: "input",
    placeholder: "Enter your phone numer",
    label: "Phone Number",
    componentType: "input",
  },
  {
    id: "postalCode",
    type: "input",
    placeholder: "Other",
    label: "Other",
    componentType: "input",
  },
];