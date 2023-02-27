// 변수를 상수로 만들어주는 개념, 
//Query Selector("#main") 은 html에 아이디가 main이니까 담긴다. 
const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 3;
const select = [0, 0, 0, 0, 0];

var ans = [
    ["인정하는말", 0, "#ffe480"],
    ["함께하는 시간", 0, "#8e80c5"],
    ["선물", 0, "#b7ff90"],
    ["봉사", 0, "#d3fbde"],
    ["스킨십", 0, "#f9bfdd"]
]; 


function addData(newData) {
    // Loop through the array of new data points
    for (var i = 0; i < newData.length; i++) {
        // Extract the element name, density, and color for the current data point
        var elementName = newData[i][0];
        var density = parseFloat(newData[i][1]);
        var color = newData[i][2];

        // Add the new data point to the existing data array
        data.addRow([elementName, density, color]);
    }

    // Redraw the chart with the updated data
    chart.draw(view, options);
}

function selectToDoubleArray() {
    for (var i = 0; i < select.length; i++) {
        ans[i][1] = select[i]; 
    }
}



function calResult() {
    console.log(select);
    selectToDoubleArray(); 
    addData(ans);
    console.log("Data Added?")
    var result = select.indexOf(Math.max(...select));
    return result; 
}


function setResult(){
    let point = calResult();
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = infoList[point].name; 

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg'); 
    var imgURL = 'img/image-' + point + '.png'; 
    resultImg.src = imgURL; 
    resultImg.alt = point;
    resultImg.classList.add('img-fluid'); 
    imgDiv.appendChild(resultImg); 

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
    console.log(resultDesc); 
}


function goResult() {
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";

    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";
        }, 450)
    })

    setResult(); 


}


function addAnswer(answerText, qIdx, idx) {
    // a에는 answerBox div 태그가 담겨있고 그 아래에 <button>이 만들어진거다
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3'); 
    answer.classList.add('py-3');
    answer.classList.add('mx-auto'); 
    answer.classList.add('fadeIn');


    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function () {
        var children = document.querySelectorAll('.answerList');
        for (let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(() => {
            var target = qnaList[qIdx].a[idx].type;
            for (let i = 0; i < target.length; i++) {
                select[target[i]] += 1; 
            }

            for (let i = 0; i < children.length; i++) {
                children[i].style.display = 'none'; 
            }
            goNext(++qIdx); 
        }, 450)
        
      
    }, false);
}

function goNext(qIdx) {
    if (qIdx === endPoint) {
        goResult();
        return; 
    }

    console.log("IT Works until HERE 22222!!")

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    console.log("IT Works until HERE 333!!")

    for (let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i); 
    }

    var status = document.querySelector('.statusBar');
    status.style.width = (100 / endPoint) * (qIdx + 1) + "%"; 

}


function begin() {
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";

    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block"

        }, 450)
        let qIdx = 0;
        console.log("IT Works until HERE!!")
        goNext(qIdx); 
    }, 450);
}