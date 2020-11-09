importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDagQMBYEy5IExKRnGrJW2J-tgoAzxp858",
    authDomain: "quiz-app-pwa-pushnotifications.firebaseapp.com",
    databaseURL: "https://quiz-app-pwa-pushnotifications.firebaseio.com",
    projectId: "quiz-app-pwa-pushnotifications",
    storageBucket: "quiz-app-pwa-pushnotifications.appspot.com",
    messagingSenderId: "78708729144",
    appId: "1:78708729144:web:7feca09509c5ec92400dcd",
    measurementId: "G-SVZ2B2M8PM"
  };


  firebase.initializeApp(firebaseConfig);
  firebase.messaging();
