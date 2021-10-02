let difficulty = window.location.search;
difficulty = difficulty.substring(1);
let array_of_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const sudoku_template = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];


const empty_slot_value = 0;
const board_size = 9;
let sudoku_template;
const board_temlate_1 = [
    [8,2,7,1,5,4,3,9,6],
    [9,6,5,3,2,7,1,4,8],
    [3,4,1,6,8,9,7,5,2],
    [5,9,3,4,6,8,2,7,1],
    [4,7,2,5,1,3,6,8,9],
    [6,1,8,9,7,2,4,3,5],
    [7,8,6,2,3,5,9,1,4],
    [1,5,4,7,9,6,8,2,3],
    [2,3,9,8,4,1,5,6,7]
];
const board_temlate_2 = [
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]
]
const board_temlate_3 = [
    [3,7,9,2,8,4,6,1,5],
    [4,2,8,5,6,1,7,3,9],
    [5,6,1,7,9,3,4,2,8],
    [2,1,3,6,5,7,9,8,4],
    [7,8,6,1,4,9,2,5,3],
    [9,4,5,3,2,8,1,7,6],
    [1,5,7,4,3,6,8,9,2],
    [6,9,2,8,7,5,3,4,1],
    [8,3,4,9,1,2,5,6,7]
];

const board_temlate_4 = [
    [5,2,4,1,6,3,8,9,7],
    [7,9,1,8,5,4,2,6,3],
    [6,8,3,7,2,9,1,5,4],
    [4,1,2,9,7,6,3,8,5],
    [8,5,7,3,4,1,9,2,6],
    [3,6,9,5,8,2,7,4,1],
    [9,7,6,2,3,5,4,1,8],
    [2,4,8,6,1,7,5,3,9],
    [1,3,5,4,9,8,6,7,2]
]

const templates = [board_temlate_1, board_temlate_2, board_temlate_3, board_temlate_4];
let solved_board;
let unsolved_board = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];


function create_empty_board() 
{
    let board = [];

    for (let i = 0; i < board_size; i ++)
    {
        let array = [];

        for (let i = 0; i < board_size; i ++)
        {
            array.push(empty_slot_value);
        }
        board.push(array);
    }

    return board;
}

function put_numbers_in_board(board, random_numbers) { //Michael

    return board;
}


function create_board() {

    return templates[Math.floor(Math.random() * templates.length)];
}

// Shuffle board without checking if legal
// function create_board_backup(board, array_of_numbers) { //Tai
    
//     //[0,0,0]         [1,2,3] 
//     //[0,0,0] ->      [2,3,1] 
//     //[0,0,0]         [3,1,2]
//     forbidden_indexes = [];
//     for (let shuffle_ix = 1; shuffle_ix <= board.length; shuffle_ix++)
//     {
//         // shuffle will be take from the first row if shuffleI_ix < n since 
//         // we have everything initally on the first row

//         while (true)
//         {
//             let row = Math.floor(Math.random() * board.length);
//             let col = Math.floor(Math.random() * board.length);

//             // we have something on the board, we need to find new indices
//             if (board[row][col] == empty_slot_value)
//             {
//                 // set the number in board
//                 board[row][col] = shuffle_ix; 
//                 forbidden_indexes.push([row, col]);
//                 break;
//             }            
//         }        
//     }
        

//     return board;
// }


function generate_board_in_specefied_difficulty(amount_of_numbers_to_take_out){ //takes out 20 numbers
    
    solved_board = create_board();
    for(let i=0; i<solved_board.length; i++){
        for(let j=0; j<solved_board[i].length; j++){
            unsolved_board[i][j]=solved_board[i][j];
        }
    }
    counter = 0;
    while(counter<amount_of_numbers_to_take_out){
        let colum =  Math.floor(Math.random()*9);
        let row = Math.floor(Math.random()*9);
        if(unsolved_board[row][colum] != 0){
            unsolved_board[row][colum]=0;
            counter++;
        }
    }
    console.log(solved_board);
        for (i=0; i<81; i++){ //puts the board into html
            if (unsolved_board[Math.floor(i/9)][i%9] != 0) {
                document.querySelector(`#container > table > tbody > tr:nth-child(${Math.floor(i/9)+1}) > td:nth-child(${i%9+1})`).innerText = unsolved_board[Math.floor(i/9)][i%9];
            } else {
                document.querySelector(`#container > table > tbody > tr:nth-child(${Math.floor(i/9)+1}) > td:nth-child(${i%9+1})`).innerHTML = ' <input class="input" type="number">';
            }
        }

    return unsolved_board;
}
function check_row(row){
    for(let i =0; i<row.length; i++){
        for(let j=i+1; j<row.length; j++){
            if(row[i]==row[j] || row[i] < "1" || row[i] > "9"){
                return false;
            }
        }
    }
    return true;
}
function check_finish(){
    let user_solved_board = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]
    for (i=0; i<81; i++){ //gets the html board
        if(document.querySelector(`#container > table > tbody > tr:nth-child(${Math.floor(i/9)+1}) > td:nth-child(${i%9+1})`).innerText==""){
            user_solved_board[Math.floor(i/9)][i%9] = document.querySelector(`#container > table > tbody > tr:nth-child(${Math.floor(i/9)+1}) > td:nth-child(${i%9+1}) > input`).value;
        }
        else{
            user_solved_board[Math.floor(i/9)][i%9] = document.querySelector(`#container > table > tbody > tr:nth-child(${Math.floor(i/9)+1}) > td:nth-child(${i%9+1})`).innerText;
        }
    }
    let flag = true;
    for(i=0; i<9; i++){ //checks each row in the solved board
            flag = check_row(user_solved_board[i]);
        if(!flag){
           alert("Try Again")
           location.assign("2ndpage.html")
           return false;
        }
    }
    for(let c=0; c<9;c++){ //checks each colum in the solved board
        let temp_colum = [];
        for(let r=0; r<9; r++){
            temp_colum[r] = user_solved_board[r][c];
        }
        flag = check_row(temp_colum);
        if(!flag){
            alert("Try Again")
            location.assign("2ndpage.html")
            return false;
        }
    }
    let box_array = [ //puts 1st box in array
        user_solved_board[0][0],
        user_solved_board[0][1],
        user_solved_board[0][2],
        user_solved_board[1][0],
        user_solved_board[1][1],
        user_solved_board[1][2],
        user_solved_board[2][0],
        user_solved_board[2][1],
        user_solved_board[2][2]];   
    flag = check_row(box_array); //checks 1st box
    if(flag){
        let box_array = [ // puts 2nd box in array
            user_solved_board[0][3],
            user_solved_board[0][4],
            user_solved_board[0][5],
            user_solved_board[1][3],
            user_solved_board[1][4],
            user_solved_board[1][5],
            user_solved_board[2][3],
            user_solved_board[2][4],
            user_solved_board[2][5]];   
        flag = check_row(box_array); //checks 2nd box
    }
    if(flag){
        let box_array = [ //puts 3rd box in array
            user_solved_board[0][6],
            user_solved_board[0][7],
            user_solved_board[0][8],
            user_solved_board[1][6],
            user_solved_board[1][7],
            user_solved_board[1][8],
            user_solved_board[2][6],
            user_solved_board[2][7],
            user_solved_board[2][8]];   
        flag = check_row(box_array); //checks 3rd box
    }
    if(flag){
        let box_array = [ //puts 4th box in array
            user_solved_board[3][0],
            user_solved_board[3][1],
            user_solved_board[3][2],
            user_solved_board[4][0],
            user_solved_board[4][1],
            user_solved_board[4][2],
            user_solved_board[5][0],
            user_solved_board[5][1],
            user_solved_board[5][2]];   
        flag = check_row(box_array); //checks 4th box
    }
    if(flag){
        let box_array = [ //puts 5th box in array
            user_solved_board[3][3],
            user_solved_board[3][4],
            user_solved_board[3][5],
            user_solved_board[4][3],
            user_solved_board[4][4],
            user_solved_board[4][5],
            user_solved_board[5][3],
            user_solved_board[5][4],
            user_solved_board[5][5]];   
        flag = check_row(box_array); //checks 5th box
    }
    if(flag){
        let box_array = [ //puts 6th box in array
            user_solved_board[3][6],
            user_solved_board[3][7],
            user_solved_board[3][8],
            user_solved_board[4][6],
            user_solved_board[4][7],
            user_solved_board[4][8],
            user_solved_board[5][6],
            user_solved_board[5][7],
            user_solved_board[5][8]];   
        flag = check_row(box_array); //checks 6th box
    }
    if(flag){
        let box_array = [ //puts 7th box in array
            user_solved_board[6][0],
            user_solved_board[6][1],
            user_solved_board[6][2],
            user_solved_board[7][0],
            user_solved_board[7][1],
            user_solved_board[7][2],
            user_solved_board[8][0],
            user_solved_board[8][1],
            user_solved_board[8][2]];   
        flag = check_row(box_array); //checks 7th box
    }
    if(flag){
        let box_array = [ //puts 8th box in array
            user_solved_board[6][3],
            user_solved_board[6][4],
            user_solved_board[6][5],
            user_solved_board[7][3],
            user_solved_board[7][4],
            user_solved_board[7][5],
            user_solved_board[8][3],
            user_solved_board[8][4],
            user_solved_board[8][5]];   
        flag = check_row(box_array); //checks 8th box
    }
    if(flag){
        let box_array = [ //puts 9th box in array
            user_solved_board[6][6],
            user_solved_board[6][7],
            user_solved_board[6][8],
            user_solved_board[7][6],
            user_solved_board[7][7],
            user_solved_board[7][8],
            user_solved_board[8][6],
            user_solved_board[8][7],
            user_solved_board[8][8]];   
        flag = check_row(box_array); //checks 9th box
    }
    if(flag){
        alert("Congradulations!! You Did It!")
        location.assign("2ndpage.html")
        return true;
    }
    else{
        alert("Try Again")
        location.assign("2ndpage.html")
        return false;
    }
}
function restart(){
   let a= document.querySelectorAll(".input");
   for (i=0; i<a.length; i++){
      a[i].value = "";
      a[i].style.backgroundColor = "#fff7f8";
   }
}
function hint(){
    flag = true;
    while(flag){
        let random_number_for_hint = Math.floor(Math.random()*81);
        if(unsolved_board[Math.floor(random_number_for_hint/9)][random_number_for_hint%9] == 0 && document.querySelector(`#container > table > tbody > tr:nth-child(${Math.floor(random_number_for_hint/9)+1}) > td:nth-child(${random_number_for_hint%9+1}) > input`).value == ""){
            document.querySelector(`#container > table > tbody > tr:nth-child(${Math.floor(random_number_for_hint/9)+1}) > td:nth-child(${random_number_for_hint%9+1}) > input`).value = solved_board[Math.floor(random_number_for_hint/9)][random_number_for_hint%9];
            document.querySelector(`#container > table > tbody > tr:nth-child(${Math.floor(random_number_for_hint/9)+1}) > td:nth-child(${random_number_for_hint%9+1}) > input`).style.color = "#f3224f";
            document.querySelector(`#container > table > tbody > tr:nth-child(${Math.floor(random_number_for_hint/9)+1}) > td:nth-child(${random_number_for_hint%9+1}) > input`).style.backgroundColor = "pink";
            flag=false;
        }
        else{
            let a= document.querySelectorAll(".input");
            let counter = 0;
            for (i=0; i<a.length; i++){
               if(a[i].value != ""){
                    counter++;
               }
            }
            if(counter==a.length){
                alert("Board is complete! press Finish")
                break;
            }
        }
    }
}
console.log(generate_board_in_specefied_difficulty(difficulty));



