 // Các lựa chọn có thể
 const choices = ["Scissors", "Rock", "Paper"];

 function choose(playerChoice) {
    // Máy tính chọn ngẫu nhiên
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = compare(playerChoice, computerChoice);
    // Hiển thị kết quả
    document.getElementById("result").innerHTML = "Bạn chọn: " + playerChoice + "<br>" + "Máy chọn: " + computerChoice + "<br>" + "Kết quả: " + result;
}

 function compare(playerChoice, computerChoice) {
    // Xác định người chiến thắng
    if (playerChoice === computerChoice) {
        return "Hòa!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "Bạn thắng!";
    } else {
        return "Bạn thua!";
    }
 }