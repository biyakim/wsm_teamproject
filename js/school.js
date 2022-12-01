const schoollink = `https://openapi.gg.go.kr/Jnclluniv?KEY=c272dee743f14a78aa6a4c4a472ee444&Type=json`;
// 비동기로 호출하자
fetch(schoollink).then((response) => response.json()).then((json) => console.log(json));

// AJAX로 link 호출
let schoolgetMenuByAPI = (schoollink) => {
    // XMLHttpRequest
    let schoolxhr = new XMLHttpRequest();

    // callback
    schoolxhr.onreadystatechange = () => {
        if (schoolxhr.readyState == XMLHttpRequest.DONE && schoolxhr.status == 200) {
            //리퀘스트가 다 끝나서 응답이 왔다면
            console.log("성공");
            // console.log(xhr.response);
            schoolshow(schoolxhr.response); // json 파싱함수 호출
        } else {
            //실패
            console.log("실패")
        }
    }

    // 요청을 보낼 방식, link, 비동기여부 설정하자
    schoolxhr.open("GET", schoollink, true);

    // 요청 전송
    schoolxhr.send();
}

schoolgetMenuByAPI(schoollink)

const schoolshow = (schooljsonString) => {
    let schoolJson = JSON.parse(schooljsonString);
    let schoolGetJsonData = schoolJson["Jnclluniv"]["1"]["row"] //배열 가져오기 
    let schoolTitlem = document.querySelector(`#countires2`) //selector 태그 클래스 가져오기

    //selector 안에 optiom 태그 추가
    for (let i = 0; i < schoolGetJsonData['length']; i++) { // json파일 배열 길이만큼 반복
        let num2 =  document.createElement("option"); //createElement가 option 태그를 만듦
        num2.textContent = `${schoolGetJsonData[i]["FACLT_NM"]}`; //생성된 option태그의 학과 api 글자를 추가함 
        schoolTitlem.appendChild(num2); //selector태그의 자식 요소로 num배열이 들어감 <selector> <option></option></selector>
    }


}