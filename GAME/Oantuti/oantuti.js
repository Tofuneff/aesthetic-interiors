 // Các lựa chọn có thể
 const choices = ["Kéo", "Búa", "Bao"];

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
        (playerChoice === "Búa" && computerChoice === "Kéo") ||
        (playerChoice === "Bao" && computerChoice === "Búa") ||
        (playerChoice === "Kéo" && computerChoice === "Bao")
    ) {
        return "Bạn thắng!";
    } else {
        return "Bạn thua!";
    }
 }