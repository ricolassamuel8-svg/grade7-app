importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
apiKey: "AIzaSyCstjDxDTZilvN4oUIIzlTwOFBp5ghSfA4",
authDomain: "grade-7-72186.firebaseapp.com",
databaseURL: "https://grade-7-72186-default-rtdb.asia-southeast1.firebasedatabase.app/",
projectId: "grade-7-72186",
storageBucket: "grade-7-72186.firebasestorage.app",
messagingSenderId: "1025282319862",
appId: "1:1025282319862:web:1f99761709370aebb253d7"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
self.registration.showNotification(payload.notification.title, {
body: payload.notification.body,
icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
});
});