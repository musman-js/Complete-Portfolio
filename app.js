const firebaseConfig = {
    apiKey: "AIzaSyA0LBJ_QuClOWmXbjzBsw6qWjfxRMVGVyk",
    authDomain: "musman-js.firebaseapp.com",
    databaseURL: "https://musman-js-default-rtdb.firebaseio.com",
    projectId: "musman-js",
    storageBucket: "musman-js.appspot.com",
    messagingSenderId: "580486143892",
    appId: "1:580486143892:web:925a11ef88c65dba86b981"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);



let getValue = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (name.value === "") {
        alert('Please write name');
    }

    else if (email.value === "") {
        alert('Please write email');
    }

    else if (message.value === "") {
        alert('Please enter message')
    }

    else{
        let obj = {
            name: name.value,
            email: email.value,
            message: message.value
        }

        firebase.database().ref('user-information').push(obj);
        name.value = ""
        email.value = ""
        message.value = ""
    }
       
    }
