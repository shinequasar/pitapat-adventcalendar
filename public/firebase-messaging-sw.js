importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js');

const config = {
  apiKey: "AIzaSyCastD4wzjzV_ABpqjpaPiX1t2d2pkWDiM",
  authDomain: "ddac-e6757.firebaseapp.com",
  databaseURL: "https://ddac-e6757-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ddac-e6757",
  storageBucket: "ddac-e6757.appspot.com",
  messagingSenderId: "50350895067",
  appId: "1:50350895067:web:559369e927aac45508c1fe",
  measurementId: "G-478S8PF211"
}

firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // 추후 background notice 커스텀시 사용
  // const notificationTitle = 'Background Message Title';
  // const notificationOptions = {
  //   body: 'Background Message body.',
  //   icon: '/firebase-logo.png'
  // };
  // self.registration.showNotification(notificationTitle, notificationOptions);
});