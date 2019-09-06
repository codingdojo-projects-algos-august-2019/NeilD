// Study Guide


// Flood Fill
// Most graphical “paint” applications have a ‘paintcan fill’ function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas’ X dimension. You are given a canvas (2-dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor)! Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change.

var exampleCanvas = [[3,2,3,4,3],
                 [2,3,3,4,0],
                 [7,3,3,5,3],
                 [6,5,3,4,1],
                 [1,2,3,3,3]]

// floodFill(exampleCanvas, [2,2], 1)

//     --> [[3,2,1,4,3],
//          [2,3,1,4,0],
//          [7,1,1,5,3],
//          [6,5,1,4,1],
//          [1,2,1,1,1]]

// Note: diagonally related pixels are not considered adjacent.
// let count = 0
// function floodFill(canvas, coord, color){
    
//     count++
//     //Count how many recursive loops we run
//     newCoord = coord;
//     //We do not alter coord
//     var value = canvas[coord[0]][coord[1]]
//     //Storing number value at coord
//     console.log(value)
    
//     if(coord[0]<0 || coord[1]<0){
//         return "Out of Bounds"
//     }
//     //Making sure coords are not negative
    
//     canvas[coord[0]][coord[1]] = color;
//     newCoord[0] += 1;
//     //checking DOWN value
//     if(newCoord[0] < canvas.length-1){
//         if (value == canvas[newCoord[0]][newCoord[1]]){
//             floodFill(canvas, newCoord, color)
//         }
//     }

//     newCoord = coord;
//     newCoord[0] -= 1;
//     //Checking UP value

//     if(newCoord[0] < canvas.length-1){
//         if (value == canvas[newCoord[0]][newCoord[1]]){
//             floodFill(canvas, newCoord, color)
//         }
//     }
//     newCoord = coord;
//     newCoord[1] += 1;
//     //Checking RIGHT value

//     if(newCoord[1] < canvas[0].length-1){
//         if (value == canvas[newCoord[0]][newCoord[1]]){
//             floodFill(canvas, newCoord, color)
//         }
//     }
//     newCoord = coord;
//     newCoord[1] -= 1;
//     //Checking LEFT value

//     if(newCoord[1] < canvas[0].length-1){
//         if (value == canvas[newCoord[0]][newCoord[1]]){
//             floodFill(canvas, newCoord, color)
//         }
//     }
//     return canvas

// }



function floodFill(canvas, target, coord, color){
    if (coord[0] > canvas.length - 1 || coord[0]<0){
        return
    }
    if (coord[1] > canvas[0].length - 1 || coord[1]<0){
        return
    }
    if (canvas[coord[0]][coord[1]] != target){
        return
    }
    canvas[coord[0]][coord[1]] = color
    let newCoord = coord;
    newCoord[0] -= 1
    console.log("DOWN", newCoord)
    floodFill(canvas, target, newCoord, color)
    newCoord = coord;
    newCoord[0] += 1
    console.log("UP", newCoord)
    floodFill(canvas, target, newCoord, color)
    newCoord = coord;
    newCoord[1] -= 1
    console.log("LEFT", newCoord)
    floodFill(canvas, target, newCoord, color)
    newCoord = coord;
    newCoord[1] += 1
    console.log("RIGHT", newCoord)
    floodFill(canvas, target, newCoord, color)
    return canvas
}


console.log(floodFill(exampleCanvas, 3,[2,2], 1))