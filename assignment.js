function newPrice(currentPrice, discount) {
    if (typeof currentPrice !== "number" || typeof discount !== "number" || discount < 0 || discount >100 ){
        return "Invalid";
    }
    else{
        return (currentPrice - ((currentPrice*discount)/100)).toFixed(3);
    }
}

function validOtp(otp) {
          if (typeof otp !== "string"){
            return "Invalid";
          }
          else{
            if (otp.length === 8 && otp.startsWith("ph-")){
                return true;
            }
            else return false;
          }
}
function finalScore (omr) {
          if (omr.right + omr.wrong + omr.skip !== 100) {
            return "Invalid";
          }
          else {
            const right_score = omr.right * 1;
            const wrong_score = omr.wrong * 0.5;
            const skip_score = omr.skip * 0;
            return Math.round(right_score - wrong_score + skip_score); 
          }
}


function gonoVote(array) {
         if (Array.isArray(array) !== true) {
            return "Invalid";
         }
         else{
            let ha = 0;
            let na = 0;
            for (const val of array){
                if (val === "ha"){
                    ha +=1;
                }
                else if (val === "na"){
                    na += 1;
                }
            }
            if (ha === na) {
                return "equal";
            }
            else return ha>na;

         }
}

function  analyzeText(str) {
          if (typeof str !== "string" || str.length <= 0){
            return "Invalid";
          }
          else {
            const obj = {};
            obj.longwords = "";
            obj.token = 0;
            const temp_array = str.split(" ");
            obj.token = temp_array.join("").length;
            console.log(temp_array);
            for (const word of temp_array){
                 
                if (word.length > obj.longwords.length){
                    obj.longwords = word;
                } 
            }
            return obj;
          }
}

console.log(analyzeText("Hello   world\tfrom\nJS"));
