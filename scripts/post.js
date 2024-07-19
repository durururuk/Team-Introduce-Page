import {db, collection, addDoc, } from "./firebaseConfig.js";

$('#submit').click(async function() {
    let name= $('#name').val()
    let password = $('#password').val()
    let postingcontent = $('#postingcontent').val()
    let date = new Date().toLocaleString();

    let doc = {
        'name' : name,
        'password' : password,
        'postingcontent' : postingcontent,
        'date' : date,
    }

    await addDoc(collection(db, "ssj"), doc);
    alert('저장 완료!');
    window.location.reload();
})