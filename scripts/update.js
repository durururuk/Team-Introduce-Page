import {db, doc, getDoc, updateDoc,} from "./firebaseConfig.js";

// 수정 버튼을 클릭했을 때 비밀번호를 확인함
$(document).on('click', '#edit', function () {
    let postId = $(this).closest('.post').data('id');

    if ($(this).siblings('.password-input').length === 0) {
        let passwordField = `
    <div class="password-input">
        <input type="text" class="password-check" placeholder="비밀번호를 입력해주세요.">
        <button class="password-verify">확인</button>
    </div>
`;
        $(this).after(passwordField);
        $(this).siblings('#delete').hide();
    }
});
// 비밀번호를 확인하고 db에 있는 비밀번호와 일치하는지 확인, 그 후 수정폼 열기
$(document).on('click', '.password-verify', async function () {

    let inputPassword = $(this).siblings('.password-check').val();
    let postId = $(this).closest('.post').data('id');

    let postRef = doc(db, "ssj", postId);
    let postDoc = await getDoc(postRef);
    if (postDoc.exists()) {
        let actualPassword = postDoc.data().password;
        if (inputPassword === actualPassword) {

            let currentContent = postDoc.data().postingcontent;
            let editForm = `
        <textarea type="text" class="edit-content" value="${currentContent}"></textarea>
        <button class="save">저장</button>
    `;
            let postElement = $(this).closest('.post'); 
            postElement.find('#postcontent').html(editForm);
            postElement.find('#edit, #delete').hide();
            $(this).closest('.password-input').remove();

        } else {
            alert("비밀번호가 틀립니다.");
        }
    } else {
        alert("문서 자체를 잘못 찾음");
    }
});

//저장 버튼을 누르면 updateDoc
$(document).on('click', '.save', async function () {
    let newContent = $(this).siblings('.edit-content').val();
    let postId = $(this).closest('.post').data('id');


    let postRef = doc(db, "ssj", postId);
    await updateDoc(postRef, { postingcontent: newContent });


    $(this).closest('.edit-input').remove();
    $(this).closest('.post').find('#postcontent').text(newContent);
   
});
