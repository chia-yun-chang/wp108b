function neg(a) {
    var i, j;
    var b = []; 
    for (i=0; i<a.length; i++) {
        b[i] = []; 
        for (j=0; j<a[i].length; j++) {
            b[i][j] = 0 - a[i][j];
        }
    }
    return b;
}

console.log(neg([[1,2],[3,4]])); 