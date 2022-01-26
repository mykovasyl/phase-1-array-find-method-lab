function superbowlWin(record) {
    const foundRecord = record.find(isWin); 
    if(foundRecord !== undefined) {
        return foundRecord.year;
    } else {
        return undefined;
    }
}


function isWin(someArray) {
    return someArray.result === 'W';
}

 