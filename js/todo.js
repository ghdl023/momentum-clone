const toDoTitle = document.querySelector(".todo_title");
const toDoForm = document.querySelector(".todo_form");
const toDoInput = toDoForm.querySelector(".todo_input");
const toDoList = document.querySelector(".toDoList");

let toDos = [];

function saveToDo(){
    localStorage.setItem('toDos',JSON.stringify(toDos));
}

// 삭제시 toDos 요소의 id만바꿔주면 기존 li의 id는 그대로기때문에 
// 다시 삭제시 filter에서 비교할때 에러가 생긴다.
// 여기서 li의 id값을 toDos요소의 id와 통일해줌
function sortId(){
    let currentChild = toDoList.firstChild;
    for(var i=0; i<toDoList.childElementCount; i++){
        currentChild.id = i+1;
        console.log("$",currentChild.id);
        currentChild = currentChild.nextSibling;
    }
}

function deleteToDo(event){
    // alert('hi');
    const btn = event.target;
    // console.dir(btn);
    const li = btn.parentNode; 
    console.log(`clicked li id = ${li.id}`);
    const cleanToDos = toDos.filter(function(element){  //filter는 모든요소에대해 검사하는데 true값을 반환하는것만 새로운 배열에 저장한다.
        //li.id 값은 string이다.
        console.log(element.id , li.id);
        return element.id !== parseInt(li.id); 
    });

    console.log("cleanToDos = ",cleanToDos);
    toDoList.removeChild(li);
    toDos = cleanToDos;
    
    //삭제시 toDos요소들의 id값 재정렬해줘야 
    //새로고침을 하지않더라도 중복되는 id가 생기지않아서 중복삭제가 안된다.
    for(var i=0; i<toDos.length; i++){
        toDos[i].id = i+1;
    }
    
    sortId(); // li의 id값을 새롭게 정의
    saveToDo();
}

function paintToDo(text){
    const closeButton = document.createElement("button");
    const li = document.createElement("li");
    const newId = toDos.length+1;
    closeButton.addEventListener("click",deleteToDo);
    li.innerHTML = text;
    li.id = newId;
    closeButton.innerHTML = "X";
    li.appendChild(closeButton);
    toDoList.appendChild(li);
    
    const toDoObj = {
        id : newId,
        value : text
    };

    toDos.push(toDoObj);
    saveToDo();
}

function submitToDo(event){
    event.preventDefault();
    let text = toDoInput.value;
    toDoInput.value="";
    paintToDo(text);
    // let toDoObj = {
    //     id : toDos.length+1,
    //     value : text
    // };
    
    // toDos.push(toDoObj);
    // createLi(toDoObj.id, toDoObj.value);
    // saveToDo();
}

function loadToDo(){
    let todos = localStorage.getItem('toDos');
    if(todos){
        let parsedToDos = JSON.parse(todos);
        console.log(parsedToDos);
        
        parsedToDos.forEach(element => {
            paintToDo(element.value);
        });
    }
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit",submitToDo);
    console.log(toDoList.childElementCount);
}

init();