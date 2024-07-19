- 팀 언저리
    - 팀명 : 언저리
    - 팀 소개 : 아직 개발자는 아니지만 개발자가 되고싶은 사람들입니다.
- 프로젝트
    - 프로젝트명 : 팀원 소개 웹페이지
    - 프로젝트 소개 :  22조 팀원들을 소개하는 간단한 웹페이지를 만들어봅니다. 거기에 우리팀을 응원하는 메세지를 적는 방명록도 포함시킵니다.
- 개발 일정
    
    [미니 프로젝트 (A-1)](https://www.notion.so/2344bb1e6afc44f98ca864064c284029?pvs=21)
    
    2023.10.04(수) 15:00 ~ 2023.10.10(화) 21:00
    
- 역할 분담
    
    
    | 이름 | 역할 |
    | --- | --- |
    | 정예지 | 메인 페이지, 모달, CRUD  |
    | 신승재 | 메인 페이지, 모달, CRUD  |
    | 손지혁 | 메인 페이지, 모달, CRUD  |
    | 김경민 | 메인 페이지, 모달, CRUD  |
- 사용하는 기술
    - HTML
    - JavaScript
    - CSS
    - Firebase : FireStore Database
- 와이어프레임
    
    ![Untitled](https://media.discordapp.net/attachments/1262935762484068405/1263813771596529714/https3A2F2Fprod-files-secure.png?ex=669b99cb&is=669a484b&hm=05b8afa68143d1ee288a8e9811dbbcf3f2c2decab4a8061573a139b6e1f5073a&=&format=webp&quality=lossless&width=720&height=487)
    
- 깃허브
    
    https://github.com/durururuk/Team-Introduce-Page
    
- 팀 규칙
    - ZEP 09:00까지 접속(22조 테이블)
    - 스파르타코딩클럽 강의 듣기 09:00 ~ 12:00
    - 점심시간 12 : 00 ~ 13 : 00
    - 저녁시간 18 : 00 ~ 19 : 00
    - 21:00 ~ 23:59 퇴실처리 !
    - 모르는 거 생기면 서로서로 질문하고 답해주기 !
    - 답답해도 화내지 않기 !
    - 자리 비울 때(10분이내 복귀 제외)팀원들에게 꼭 ! ! ! 말하기 !
- API  명세서
    - 응원 메세지 작성 API
        
        
        Request Elements
        
        | 변수명 | 설명 |
        | --- | --- |
        | name | 닉네임 |
        | password | 수정,삭제용 비밀번호 |
        | postingcontent | 작성 내용 |
        | date | 작성 시간 |
    
    - 응원 메세지 조회 및 게시  API
        
        
        Request Elements
        
        | 변수명 | 설명 |
        | --- | --- |
        | documentID | 게시글 고유ID |
        
        Response Elements
        
        | 변수명 | 설명 |
        | --- | --- |
        | name | 닉네임 |
        | postingcontent | 작성 내용 |
        | date | 작성시간 |
        
    
    - 응원 메세지 수정 API
        
        Request Elements
        
        | 변수명 | 설명 |
        | --- | --- |
        | password | 수정 전 본인 확인용 비밀번호 |
        | postcontent | 업로드 돼있던 게시글 내용 |
        
        Response Elements
        
        | 변수명 | 설명 |
        | --- | --- |
        | password | 수정 전 본인 확인용 비밀번호 |
        | postcontent | 업로드 돼있던 게시글 내용 |
        | postID | 수정할 게시물 확인용 documentID  |
    
    - 응원 메세지 삭제 API
        
        Request Elements
        
        | 변수명 | 설명 |
        | --- | --- |
        | password | 삭제 전 본인 확인용 비밀번호 |
        
        Response Elements
        
        | 변수명 | 설명 |
        | --- | --- |
        | password | 삭제 전 본인 확인용 비밀번호 |
        | postID | 삭제할 게시물 확인용 documentID  |
