// Function arguments: exercise

// Multiple arguments
const paintingWalls = function (colorWall, locationWall){
    console.log("The " + locationWall + " wall has been painted " + colorWall);
}


paintingWalls("orange", "north");
paintingWalls("grey", "south-east");

// Eerste poging: 
// paintingWalls("north, orange");
// paintingWalls("south-east, grey");
// The undefined wall has been painted north, orange
// The undefined wall has been painted south-east, grey

// Does the order of the arguments matter when calling the function?
// YES




