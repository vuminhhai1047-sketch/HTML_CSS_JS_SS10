



let squad = [
    
    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },

    { id: 2, name: "Tran Van B", goals: 5,  position: "MF" },

    { id: 3, name: "Le Van C",   goals: 0,  position: "DF" },

    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },

    { id: 5, name: "Dang Van E", goals: 0,  position: "GK" }
]

// case 1 
const displayPlayer = (listDisplay) => {
    listDisplay.forEach(player => {
        console.log(`Mã ${player.id} - ${player.name} (${player.position}) : ${player.goals}`);
    });
}

let nextId = 6;

// case 2
const addPlayer = () => {
    
    const name = prompt("Hãy nhập tên cầu thủ mới: ");
    const goals = +prompt("Hãy nhập bàn thắng mà cầu thủ đã có: ");
    const position = prompt("Hãy nhập vị trí cầu thủ đang chơi: ");

    const newPlayer = {
        id: nextId++,
        name,
        goals,
        position
    };

    squad.push(newPlayer);
    console.log("Đã thêm cầu thủ thành công");

}


// case 3
const findById = () => {

    const findId = Number(prompt("Nhập ID cầu thủ bạn cần tìm: "));

    const findPlayer = squad.find(element => element.id === findId );

    if (findPlayer) {
        console.log(findPlayer);
    } else {
        console.log("Không tìm thấy id của cầu thủ nào");
    }
}


// case 4 
const updateGoals = () => {

    const id = Number(prompt("Nhập ID cầu thủ vừa ghi bàn: "));
    const player = squad.find(element => element.id === id );

    if (player) {
        player.goals += 1;
        console.log(`Đã cập nhật: ${player.name} hiện có ${player.goals} bàn thắng`);
    } else {
        console.log("Không tìm thấy id cầu thủ");
    }
}

// case 5

const deletePlayer = () => {

    const id = Number(prompt("Nhập ID cầu thủ cần xóa khỏi đội: "));
    const player = squad.findIndex(element => element.id === id );

    if (player !== -1 ) {
        const deleteIndex = squad.splice(player, 1 );
        alert("Đã chuyển nhượng thành công");
    } else {
        alert("Không tìm thấy id của cầu thủ");
    }
}
 


do {


    choice = +prompt(`
        ---FOOTBALL MANAGER PRO---
        1.Xem đội hình
        2.Thêm cầu thủ
        3.Tìm kiếm (theo ID)
        4.Cập nhật bàn thắng
        5.Xóa cầu thủ (Chuyển nhượng)
        0.Thoát
        `);

    switch(choice) {
        case 1:
            displayPlayer(squad);
            break;
        case 2:
            addPlayer(squad);
            break;
        case 3:
            findById(squad);
            break;
        case 4:
            updateGoals(squad);
            break;
        case 5:
            deletePlayer(squad);
            break;
        case 0:
            break;
    }


} while (choice !== 0 );