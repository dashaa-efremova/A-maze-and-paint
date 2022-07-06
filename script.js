var maze = [[1,-1,-1,-1,-1,0,-1],
    [0,-1,0,0,0,0,-1],
    [0,-1,0,-1,0,0,0],
    [0,-1,0,-1,0,0,0],
    [0,0,0,-1,0,-1,0],
    [0,-1,-1,-1,0,-1,0],
    [0,0,0,0,-1,-1,0]];

var widthOfItem = $('.maze').width() / maze.length;
var heightOfItem = $('.maze').height() / maze.length;
var n = maze.length;
var num = 1;

function cleanAndOverwrite(maze, currentStep) {
    $('.maze').html('');
    console.log(maze);
    for (i = 0; i<maze.length; i++){
        for (j = 0; j<maze.length; j++){
            if (maze[i][j] == 0){
                $('.maze').append('<div style=\"width: ' + widthOfItem + 'px; height: ' + heightOfItem + 'px; background-color: white\"></div>');
            }else if(maze[i][j] == -1) {
                $('.maze').append('<div style=\"width: ' + widthOfItem + 'px; height: ' + heightOfItem + 'px; background-color: black\"></div>');
            } else if (currentStep+1 == maze[i][j]) {
                $('.maze').append('<div style=\"width: ' + widthOfItem + 'px; height: ' + heightOfItem + 'px; background-color: green\"></div>');
            } else {
                $('.maze').append('<div style=\"width: ' + widthOfItem + 'px; height: ' + heightOfItem + 'px; background-color: lightgreen\"></div>');
            }
        }
    }
}

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))
cleanAndOverwrite(maze, 0);
const loop = async () => {
    while (maze[n-1][n-1]==0) {
        for (var i = 0; i < n; i++){
            for (var j = 0; j < n; j++) {
                if(maze[i][j]==num){
                    if(i-1>=0 && maze[i-1][j] == 0) {
                        maze[i-1][j] = num+1;
                    }
                    if(j-1>=0 && maze[i][j-1] == 0) {
                        maze[i][j-1] = num+1;
                    }
                    if(i+1<=n-1 && maze[i+1][j] == 0) {
                        maze[i+1][j] = num+1;
                    }
                    if(j+1<=n-1 && maze[i][j+1] == 0) {
                        maze[i][j+1] = num+1;
                    }
                }
            }
        }
        await wait(600);
        cleanAndOverwrite(maze, num);
        num++;
    }
}
loop()