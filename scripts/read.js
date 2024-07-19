import { db, collection, orderBy, getDocs, query, } from "./firebaseConfig.js";
//날짜별 정리해서 쿼리스냅샷 남기기
const q = query(collection(db, "ssj"), orderBy("date", "asc"));
const querySnapshot = await getDocs(q);
//반복문으로 데이터 뽑아서 html로 게시글 뿌리기
querySnapshot.forEach((doc) => {
    let row = doc.data();

    let name = row['name'];
    let postingcontent = row['postingcontent'];
    let date = row['date'];


    let temp_html = `
    <div class = "post" data-id = "${doc.id}">
        <p>${name} &ensp;|&ensp; ${date}</p>
        <p id = "postcontent" >${postingcontent}</p>
        <button id = "edit"> 수정 </button>
        &ensp;
        <button id = "delete"> 삭제 </button>
    </div>
`;
    $('.posts').append(temp_html);
}) 