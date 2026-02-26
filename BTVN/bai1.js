


const player = {
    name: "Messi",
    position: "Forward",
    age: 36,
    goals: 25,
    assists: 15,
};



const showPlayerInfor = () => {
   
    const totalContribution = player.goals + player.assists;

    console.log("Tên: ", player.name);
    console.log("Vị trí: " , player.position);
    console.log("Tuổi: " , player.age);
    console.log("Bàn thắng mùa này: " , player.goals);
    console.log("Kiến tạo mùa này: ", player.assists);
    console.log("Tổng đóng góp: ", totalContribution);
}


showPlayerInfor();
