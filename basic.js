
function showDateTime_1(){
    let time = new Date()
    // const time_now = time.toLocaleString("en-US", {dateStyle:"full",timeStyle:"full", hour12:true})
    // const day = time.toLocaleString("en-US",{weekday:"long"});
    // console.log(`Today is : ${day}.`);
    // console.log(time_now);
    // console.log(time);
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();
    let period = (hours>12)?"PM":"AM";
    
    console.log(`Current time is : ${hours} ${period} : ${minutes} : ${seconds}`);
}

function print_current_page_2() {
    window.print();
}
function date_fromat_3(){
    let time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth()+1;
    const day = time.getDay();
    console.log(`${month}-${day}-${year}`); 
    console.log(`${month}/${day}/${year}`); 
    console.log(`${day}-${month}-${year}`); 
    console.log(`${day}/${month}/${year}`); 
     
}
function area_triangle_4(side1,side2,side3){
    const perimeter = (side1+side2+side3)/2;
    return Math.sqrt(perimeter*(perimeter-side1)*(perimeter-side2)*(perimeter-side3));
}
function rotate_string_5(text){
    setInterval(()=>{
        text = text.substring(text.length-1)+text.substring(0,text.length-1);
        console.log(text+"\n");
        
    },1000);
}
function reverseNumber(number){
    let temp = 0;
    if (typeof number === "number"){
        while(number>0){
            temp = temp*10 + number%10;
            number = Math.floor(number/10);

        }
        return temp;
    }
    else return NaN;
}
function isPalindrome(text){
    temp = String(text).split("").reverse().join("");
    return text === temp;

}
function showObjectProperties(){
    const student ={
        name : "David Ray",
        class : "VII",
        roll : 234

    };
    for(let i in student){
        console.log(i,student[i]);
    }
}
showObjectProperties();