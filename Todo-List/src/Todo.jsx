import React from 'react';
import './css/Todo.css';

function Todo() {
    const Button = () => {
        const inputText = document.querySelector("#inputText");
        const tableList = document.querySelector("#tableList");
        const inputValue = inputText.value;
        let storageTodo = [];
        const deleteTr = document.createElement("span");
        deleteTr.style.color = "orange";
        deleteTr.style.cursor = "pointer";
        deleteTr.textContent = "X";

        deleteTr.addEventListener("click", () => {
            let storageTodo = JSON.parse(localStorage.getItem("Todo")) || [];

            storageTodo = storageTodo.filter(item => item !== todoText.textContent); // Eğer textContent eşleşiyorsa o öğeyi çıkar

            localStorage.setItem("Todo", JSON.stringify(storageTodo));

            tr.remove();
        });


        const todoText = document.createElement("span");
        todoText.textContent = inputValue;
        todoText.style.marginLeft = "10px";
        const localStorageAdd = () => {
            storageTodo = JSON.parse(localStorage.getItem("Todo")) || [];
            console.log(`LocalStorage'den Çekilen Bilgi:${storageTodo} Tarih:${Date()}`);
            storageTodo.push(todoText.textContent);
            localStorage.setItem("Todo", JSON.stringify(storageTodo));
            console.log(`LocalStorage Güncellenen Bilgi:${storageTodo = JSON.parse(localStorage.getItem("Todo"))}`);
        }
        const sessionStorageAdd = () => {
            storageTodo = JSON.parse(sessionStorage.getItem("Todo")) || [];
            storageTodo.push(todoText.textContent);
            sessionStorage.setItem("Todo", JSON.stringify(storageTodo));
        }

        const td = document.createElement("td");
        td.className = "tdValue";
        td.style.display = "flex";
        td.style.alignItems = "center";
        td.append(deleteTr, todoText);

        const tr = document.createElement("tr");
        tr.appendChild(td);

        if (todoText.textContent === "") {
            console.log("Boş Girildi", Date());
        } else {
            tableList.appendChild(tr);
            localStorageAdd();
            sessionStorageAdd();
        }

        inputText.value = "";
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            Button(); // Enter tuşuna basıldığında Button fonksiyonu çağrılır
        }
    };

    return (
        <>
            <div className='Main'>
                <h1 className='header'>Todo List</h1>
                <div className="Container">
                    <div className="MainText">

                        <input
                            type="text"
                            id="inputText"
                            placeholder="Enter todo..."
                            onKeyDown={handleKeyPress}
                        />
                        <button onClick={Button}>Click</button>
                    </div>
                    <div className="MainTable">
                        <table className="tableList" id="tableList"></table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todo;
