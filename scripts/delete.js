import {db, doc, getDoc,  deleteDoc } from "./firebaseConfig.js";

$(document).on('click', '#delete', function () {
    let postId = $(this).closest('.post').data('id');


    if ($(this).siblings('.password-input').length === 0) {
        let passwordField = `
    <div class="password-input">
        <input type="text" class="password-check" placeholder="비밀번호를 입력해주세요.">
        <button class="password-verify-delete">확인</button>
    </div>
`;
        $(this).after(passwordField);
        $(this).siblings('#edit').hide();
    }
});


$(document).on('click', '.password-verify-delete', async function () {
    let inputPassword = $(this).siblings('.password-check').val();
    let postId = $(this).closest('.post').data('id');


    let postRef = doc(db, "ssj", postId);
    let postDoc = await getDoc(postRef);
    if (postDoc.exists()) {
        let actualPassword = postDoc.data().password;
        if (inputPassword === actualPassword) {

            await deleteDoc(postRef);
            $(this).closest('.post').remove();
        } else {
            alert("비밀번호가 틀립니다..");
        }
    } else {
        console.log("문서 자체를 못 찾음");
    }
});