import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import router from './router'
import components from '@/components/UI';
import store from '@/store';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue} from "firebase/database";
const app = createApp(App);
const firebaseConfig = {
    apiKey: "AIzaSyCOsxDISNa3GnDy9tZo37agAuxAOLHitQE",
    authDomain: "kram-music-firebase.firebaseapp.com",
    projectId: "kram-music-firebase",
    storageBucket: "kram-music-firebase.appspot.com",
    messagingSenderId: "267391010196",
    appId: "1:267391010196:web:a2a43d54b3803d841c7b81",
    databaseURL: "https://kram-music-firebase-default-rtdb.europe-west1.firebasedatabase.app/",
  };
  initializeApp(firebaseConfig);

components.forEach(component => {
    app.component(component.name, component);    
});

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    store.commit('true_sign_in')
  } else {
    store.commit('false_sign_in')
  }
});
  const db = getDatabase();
  const post_load = ref(db, 'posts/');
  onValue(post_load, (snapshot) => {
    store.commit('load_post', snapshot.val())    
  });

app.use(router)
app.use(store)
app.mount('#app');