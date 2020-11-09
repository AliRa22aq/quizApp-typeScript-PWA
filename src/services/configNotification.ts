import firebase from 'firebase';

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
  var messaging = firebase.messaging();

export const configNotification = () => {
    
        Notification.requestPermission().then((permission) => {
            messaging.getToken().then((currentToken) => {
              console.log(currentToken)
              
              if (currentToken) {
              } else {
                // Show permission request.
                console.log('No registration token available. Request permission to generate one.');
    
              }
            }).catch((err) => {
              console.log('An error occurred while retrieving token. ', err);
    
            });
        
        
        })
    
    }