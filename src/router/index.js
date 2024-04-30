import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home/Home.vue";
import Futtwo from "../../src/views/Fetuser.vue";
import Cards from "../../src/views/Cards.vue";
import Lux from "../../src/views/Luxury.vue";
import Thousand from "../../src/views/Thousands.vue";
import Propert from "../../src/views/Properties.vue";
import Customers from "../../src/views/Customers.vue";
import Teams from "../../src/views/Team.vue";
import Fints from "../../src/views/Finest.vue";
import Test from "../../src/views/Test.vue";
import not from "../../src/views/Errorpage.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/Futtwo",
    name: "Futtwo",
    component: Futtwo,
  },
  {
    path: "/cards",
    name: "cards",
    component: Cards,
  },
  {
    path: "/Lux",
    name: "Lux",
    component: Lux,
  },
  {
    path: "/Thousand",
    name: "Thousand",
    component: Thousand,
  },
  {
    path: "/Propert",
    name: "Propert",
    component: Propert,
  },
  {
    path: "/Customers",
    name: "Customers",
    component: Customers,
  },
  {
    path: "/Teams",
    name: "Teams",
    component: Teams,
  },
  {
    path: "/Fints",
    name: "Fints",
    component: Fints,
  },
  {
    path: "/Test",
    name: "Test",
    component: Test,
  },
  {
    path: "/:cathAll(.*)",
    name: "not",
    component: not,
  },
];

   const router = createRouter({
     history: createWebHistory(),
     routes,
   });

export default router;
