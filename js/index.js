//id로 html 요소 가져오기
// let option = document.getElementById('option');
let select = document.getElementById('select');
let univSelect = document.getElementById('univ-select');

//makeURL() 속에 getDataByAPI()
const makeURL = () => {
    const API_KEY = "787796db5aff911fa40ba5b37c5ec38e";
    
    //학과 정보 url
    let gubun = "univ_list";
    let major_URL = `https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=${API_KEY}&svcType=api&svcCode=MAJOR&contentType=json&gubun=${gubun}&univSe=univ`;

    //대학 정보 url
    let region = "100260";
    let university_URL = `https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=${API_KEY}&svcType=api&svcCode=SCHOOL&contentType=json&gubun=${gubun}&region=${region}`

    getMajorByAPI(major_URL);
    getUnivByAPI(university_URL);
}

const getMajorByAPI = (url) => {
    //XMLHttpRequest
    let xhr = new XMLHttpRequest();
    // callback
    xhr.onreadystatechange = () => {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
            //success
            console.log('성공');
            // console.log(xhr.response);
            putMajor(xhr.response); //함수 호출
            
        }
    }
    //요청 보낼 방식, url, 비동기여부 설정
    xhr.open("GET", url, true);
    //요청 전송
    xhr.send();
}
const getUnivByAPI = (url) => {
    //XMLHttpRequest
    let xhr = new XMLHttpRequest();
    // callback
    xhr.onreadystatechange = () => {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
            //success
            console.log('성공');
            // console.log(xhr.response);
            putUniv(xhr.response); //함수 호출
            
        }
    }
    //요청 보낼 방식, url, 비동기여부 설정
    xhr.open("GET", url, true);
    //요청 전송
    xhr.send();
}

const putMajor = (jsonString) => {
    let jsonStr = JSON.parse(jsonString);
    let major = "";
    
    for(let i=0; i<20; i++){
        major = jsonStr.dataSearch.content[i]["mClass"];
        console.log(major);
        
        //select 태그의 자식, option 요소 동적 생성
        let option = document.createElement('option');
        select.appendChild(option);
        option.innerText = major; 
    }
}
const putUniv = (jsonString) => {
    let jsonStr = JSON.parse(jsonString);
    let univ = "";
    
    for(let i=0; i<20; i++){
        univ = jsonStr.dataSearch.content[i]["schoolName"];
        console.log(univ);
    
        //select 태그의 자식, option 요소 동적 생성
        let option = document.createElement('option');
        //항목 중복제거
        if(univ!=jsonStr.dataSearch.content[i+1]["schoolName"]){
            univSelect.appendChild(option);    
            option.innerText = univ;
        }
            
    }
}
//함수 호출하는 곳
makeURL();