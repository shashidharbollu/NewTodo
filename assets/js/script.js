// console.log('Hello');

let weeklyContainer = document.querySelectorAll(".weekly__container");
// This willl show the Daily view of the Todo.
function showDailyData(){
    // console.log("Clicked in daily")
    for(let singleClass of weeklyContainer){
        singleClass.style.display = "none";
    }
}
// This will show the Weekly view of todo
function showWeeklyData(){
    // console.log("clisked on weekly")
    for(let singleClass of weeklyContainer){
        singleClass.style.display = "flex";
    }
}