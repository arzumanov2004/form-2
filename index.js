const formGroupExampleInput = document.getElementById("formGroupExampleInput")
const formGroupExampleInput1 = document.getElementById("formGroupExampleInput1")
const formGroupExampleInput2 = document.getElementById("formGroupExampleInput2")
const formGroupExampleInput3 = document.getElementById("formGroupExampleInput3")
const formGroupExampleInput4 = document.getElementById("formGroupExampleInput4")
const form = document.getElementById("form")

function axiosPost (e) {
    e.preventDefault();
        axios.post("https://655c84d425b76d9884fd7251.mockapi.io/nihad", {
            username: formGroupExampleInput.value,
            email: formGroupExampleInput1.value,
            pasword: formGroupExampleInput2.value,  
            adress: formGroupExampleInput3.value,
            country: formGroupExampleInput4.value,
        }).then(res => {
                console.log(res);
                form.reset()
            })
            }
            
            
            form.addEventListener('submit', axiosPost)