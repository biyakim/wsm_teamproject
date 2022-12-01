const link = `https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=922f4bc8842956d94e130993d069759b&svcType=api&svcCode=MAJOR&contentType=json&gubun=univ_list`;

// 비동기로 호출하자
fetch(link).then((response) => response.json()).then((json) => console.log(json));

// AJAX로 link 호출
let getMenuByAPI = (link) => {
    // XMLHttpRequest
    let xhr = new XMLHttpRequest();

    // callback
    xhr.onreadystatechange = () => {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            //리퀘스트가 다 끝나서 응답이 왔다면
            console.log("성공");
            // console.log(xhr.response);
            show(xhr.response); // json 파싱함수 호출
        } else {
            //실패
        }
    }

    // 요청을 보낼 방식, link, 비동기여부 설정하자
    xhr.open("GET", link, true);

    // 요청 전송
    xhr.send();
}

getMenuByAPI(link)

const show = (jsonString) => {
    let json = JSON.parse(jsonString);
    let getJsonData = json["dataSearch"]["content"]
    let title = []
    let num = 0
        //지역별
    for (let i = 0; i < getJsonData['length']; i++) {
        num = String(i);
        num =  document.createElement("option");
        title[i] = document.querySelector(`.countires`)
    }
    for (let i = 0; i < getJsonData['length']; i++) {
        title[i].innerHTML = `<option>${getJsonData[i]["mClass"]}</option>`;
        title[i].add(num, null);
    }


}