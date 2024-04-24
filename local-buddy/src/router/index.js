
import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: () => import('../views/Home.vue') },
        { path: '/register', name: 'register', component: () => import('../views/Register.vue') },
        { path: '/signin', name: 'signin', component: () => import('../views/SignIn.vue') },
        { path: '/feed', name: 'feed', component: () => import('../views/Feed.vue'),
            meta: {
                requiresAuth: true} },
        {path: '/post', name: 'post', component: () => import('../views/Post.vue'), meta: {
          requiresAuth: true} },
        {path: '/rating', name: 'rating', component: () => import('../views/Rating.vue'), meta: {
        }},
        { path: '/bug-report', name: 'bug-report', component: () => import('../views/BugReport.vue') },
        


    ]
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
       const removeListener = onAuthStateChanged(
        getAuth(),
        (user) => {
           removeListener();
              resolve(user);
        },
        reject
         );
    }
    );
}


router.beforeEach(async(to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if(await getCurrentUser()) {
        next();
      }else {
        alert("Dostęp tylko dla zalogowanych użytkowników");
        next("/");
      }     
    }else {
      next();
    }
});

export default router;
