importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
apiKey: "AIzaSyCstjDxDTZilvN4oUIIzlTwOFBp5ghSfA4",
messagingSenderId: "1025282319862",
appId: "1:1025282319862:web:1f99761709370aebb253d7"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload){
self.registration.showNotification(
payload.notification.title,
{body: payload.notification.body}
);
});
