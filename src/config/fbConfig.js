// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-analytics.js"></script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyBQUyuM5Xr-sipwIPuW9MBtZo233J6fd_M",
authDomain: "netninja-marioplan-5183a.firebaseapp.com",
databaseURL: "https://netninja-marioplan-5183a.firebaseio.com",
projectId: "netninja-marioplan-5183a",
storageBucket: "netninja-marioplan-5183a.appspot.com",
messagingSenderId: "306429927742",
appId: "1:306429927742:web:71357fbee0c2fd5212cc6f",
measurementId: "G-5FFQVGFXWC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })
// firebase.analytics();

export default firebase;
