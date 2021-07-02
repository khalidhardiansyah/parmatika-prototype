import {createRouter,  createWebHistory} from 'vue-router'



const routes = [
    {
        path:'/',
        name:'Home',
        component: () => import("../views/Home.vue")
        
    },
    {
        path:'/signup',
        name:'Signup',
        component:() => import("../views/register/Signup.vue")
    
    },
    {
        path:'/JobApplicant',
        name:'JobApplicant',
        component: () => import("../views/JobApplicant.vue"),
        // beforeEnter: (to, from, next) => {
        //     const token = localStorage.getItem('token')
        //     const role = localStorage.getItem('role')
        //     if(!token) return next('/')
        //     if(role == 'Pelamar'){
        //         return next()
        //     } else {
        //         return next('/')
        //     } 
        // }
    },
    {
        path:'/JobRecruiter',
        name:'JobRecruiter',
        component: () => import("../views/JobRecruiter.vue"),
        // beforeEnter: (to, from, next) => {
        //     const token = localStorage.getItem('token')
        //     const role = localStorage.getItem('role')
        //     if(!token) return next('/')
        //     if(role == 'Pemberi'){
        //         return next()
        //     } else {
        //         return next('/')
        //     }
        // }
    },
    {
        path:'/Findjob',
        name:'FindJob',
        component:() => import("../views/FindJob.vue")
    
    },
    
    
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;