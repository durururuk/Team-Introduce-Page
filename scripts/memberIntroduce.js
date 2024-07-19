const membersImage = {
    "./static/images/team1.jpg": "team1",
    "./static/images/team2.jpg": "team2",
    "./static/images/team3.jpg": "team3",
    "./static/images/team4.jpg": "team4",
};

const membersInfo = {
    team1: {
        name: "손지혁",
        mbti: "INTJ",
        comment: "열심히 해보겠습니다. 쑥쑥 자라게 물을 주세요~",
        blog: "<a href ='https://velog.io/@sonzihyuk/posts' target = '_blank' >https://velog.io/@sonzihyuk/posts</a>",
        photo: "./static/images/team1.jpg",
        pro: "끈기? 체력?이 남들보다 더 있는 것 같습니다.",
        pstyle: "항상 무엇이든 무식하게 해결하는 스타일입니다....",
        cstyle: "팀의 의견을 경청하고 의견을 자주 제시합니다.",
    },
    team2: {
        name: "신승재",
        mbti: "INFP",
        comment: "잘 부탁드립니다..!",
        blog: "<a href ='https://durururuk.tistory.com' target = '_blank'>https://durururuk.tistory.com</a>",
        photo: "./static/images/team2.jpg",
        pro: "무엇을 검색해야 원하는 것을 찾을 수 있을지 구글링을 잘 한다고 생각합니다",
        pstyle: "문제가 생겼을 때 잡히는대로 수정하지 않고 이유를 알고 해결하고싶습니다.",
        cstyle: "제가 짠 코드를 누가 보더라도 코드를 이해할 수 있게 짜고싶습니다.",
    },
    team3: {
        name: "정예지",
        mbti: "INFP",
        comment: "부족하지만 열심히하겠습니다.",
        blog: "<a href ='https://codingbykugom.tistory.com' target = '_blank' >https://codingbykugom.tistory.com</a>",
        photo: "./static/images/team3.jpg",
        pro: "한번 한 분야에 꽃히게 되면 만족할떄까지 포기하지 않는다.",
        pstyle: "한번 배운것은 최대한 자신의 것으로 만들고 넘어갑니다.",
        cstyle: "최대한 팀원 모두가 만족하고 넘어갈 수 있는 결과를 도출하고 싶습니다.",
    },
    team4: {
        name: "김경민",
        mbti: "ISFP",
        comment: "타협하면 끝이 없다",
        blog: "<a href ='https://velog.io/@kkm4512/posts' target = '_blank' >https://velog.io/@kkm4512/posts</a>",
        photo: "./static/images/team4.jpg",
        pro: "할땐 하기",
        pstyle: "원리를 이해한, 활용을 하고싶습니다",
        cstyle: "주석이 필요없는 코드",
    },
};

function handleMemberProfileClick(e) {
    const imgElement = e.target.closest("li").querySelector("img");
    const imgSrc = imgElement.getAttribute("src");
    const member = membersImage[imgSrc];

    const modal = document.getElementById("myModal");
    const modalText = document.getElementById("modal-text");

    modalText.innerHTML = `
    <div class="innerModal">
        <div class="top-content">
            <div>
                <img id=mphoto src=${membersInfo[member].photo}>
            </div>
            <div id=simpleProfile>
                <p>이름 : ${membersInfo[member].name}</p>
                <p>MBTI : ${membersInfo[member].mbti}</p>
                <p>코멘트 : ${membersInfo[member].comment}</p>
                <p>블로그 주소 : ${membersInfo[member].blog}</p>
            </div>
        </div>
        <div id=detailedProfile>
            <p>객관적으로 살펴본 자신의 장점 : ${membersInfo[member].pro} </p>
            <p>자신의 스타일 : ${membersInfo[member].pstyle} </p>
            <p>협업 스타일 소개 : ${membersInfo[member].cstyle} </p>
        </div>
    </div>`;
    modal.style.display = "block";
}

function initModalClose() {
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

export { handleMemberProfileClick, initModalClose };
