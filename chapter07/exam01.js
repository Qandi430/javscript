// var scope = "전역"

// function func(){
//     console.log(scope)          //undefined
//     var scope = "지역"
//     function inner(){
//         console.log(scope)          //지역
//     }
//     inner()
// }
// func()

var scope = "전역";
function func(){
    console.log(scope)
    var scope = "지역"
}
func();