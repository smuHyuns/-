
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Isu from '@/pages/Isu.vue';
import Hyunsoo from '@/pages/Hyunsoo.vue';
import Gun from '@/pages/Gun.vue';
import Siwan from '@/pages/Siwan.vue';
import TravelName from '@/pages/TravelName.vue';
import AddPayment from '@/pages/AddPayment.vue';
import Calendar from '@/pages/Calendar.vue';
import Modal from '@/components/Modal.vue';
import Member from '@/pages/Member.vue';
import Err from '@/pages/Err.vue';
import Siwan_test from '@/pages/Siwan_test.vue';
import Siwan_tour from "@/pages/Siwan_tour.vue";
import Start from '@/pages/Start.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/isu',
      name: 'isu',
      component: Isu,
    },
    {
      path: '/hyunsoo',
      name: 'hyunsoo',
      component: Hyunsoo,
    },
    {
      path: '/gun',
      name: 'gun',
      component: Gun,
    },
    {
      path: '/siwan',
      name: 'siwan',
      component: Siwan,
    },
    {
      path: '/siwan_test',
      name: 'siwan_test',
      component: Siwan_test,
    },
    {

      path: "/siwan_tour",
      name: "siwan_tour",
      component: Siwan_tour,
    },
    {
      path: "/member",
      name: "member",
      component: Member,
    },
    {
      path: '/err',
      name: 'err',
      component: Err,
    },
    {
      path: '/modal',
      name: 'modal',
      component: Modal,
    },
    {
      path: '/TravelName',
      name: 'TravelName',
      component: TravelName,
    },
    {
      path: '/addpayment',
      name: 'AddPayment',
      component: AddPayment,
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
    },
    {
      path: "/start",
      name: "Start",
      component: Start,
    },
  ],
});

export default router;
