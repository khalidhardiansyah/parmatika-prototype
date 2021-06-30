import {createRouter,  createWebHistory} from 'vue-router'



const routes = [
    {
        path:'/',
        name:'Home',
        component: () => import("../views/Home.vue")
    
    },
    {
        path:'/about',
        name:'About',
        component:() => import("../views/About.vue")
    
    },
    {
        path:'/signup',
        name:'Signup',
        component:() => import("../views/register/Signup.vue")
    
    },
    {
        path:'/contact',
        name:'Contact',
        component: () => import("../views/Contact.vue")
    
    },
    {
        path:'/JobApplicant',
        name:'JobApplicant',
        component: () => import("../views/JobApplicant.vue")
    
    },
    {
        path:'/JobRecruiter',
        name:'JobRecruiter',
        component: () => import("../views/JobRecruiter.vue")
    
    }
    
    
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;