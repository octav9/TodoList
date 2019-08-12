var input = document.querySelector("input");
var ul = document.querySelector("ul");
var plus = document.querySelector(".fa-plus");

for (let index = 0; index < document.querySelectorAll("li").length; index++) {
    document.querySelectorAll("li")[index].addEventListener("click", function () {
        this.classList.toggle("done");
    });
}

for (let index = 0; index < document.querySelectorAll("span").length; index++) {
    document.querySelectorAll("span")[index].addEventListener("click", function (e) {
        this.parentElement.classList.add("hidden");
        let temp = this.parentElement;
        setTimeout(() => {
            temp.remove();
        }, 500);
        e.stopPropagation();
    });
}

input.addEventListener("keypress", function (e) {
    if (e.which == 13) {
        var li = document.createElement("li");
        li.innerHTML = '<span><i class="fas fa-trash    "></i></span> ';
        li.appendChild(document.createTextNode(this.value));
        ul.append(li);
        li.addEventListener("click", function () {
            this.classList.toggle("done");
        });
        document.querySelector("li:last-child span").addEventListener("click", function (e) {
            this.parentElement.classList.add("hidden");
            let temp = this.parentElement;
            setTimeout(() => {
                temp.remove();
            }, 500);
            e.stopPropagation();
        });
        this.value = "";
    }
});

plus.addEventListener("click", function () {
    if (input.classList.contains("t")) {
        input.classList.remove("t2");
        input.classList.remove("t");
    }else{
        input.classList.add("t");
        setTimeout(() => {
            input.classList.add("t2");
       }, 200);
    }
});