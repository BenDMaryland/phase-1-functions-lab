// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
let blocksFinal = blocks - 42
    return Math.abs(blocksFinal)
}



function distanceFromHqInFeet(blocks){
    let distance = distanceFromHqInBlocks(blocks) * 264;
    return distance
}

function distanceTravelledInFeet(start,destination){
   return start > destination? (start - destination)* 264: (destination-start)*264

}

function calculatesFarePrice(start, destination){
    let fareDistance = distanceTravelledInFeet(start,destination);
    if (fareDistance < 400){
        return 0
    }else if(fareDistance < 2000) {
          return (fareDistance-400) *.02
        }else if (fareDistance <= 2500){
        return 25
    }else {
    return 'cannot travel that far'

}
    }