class Vector {
    constructor (x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    add(v2) { 
        return new Vector (this.x + v2.x, this.y + v2.y, this.z + v2.z);
    }
    sub(v2) { 
        return new Vector (this.x - v2.x, this.y - v2.y, this.z - v2.z);
    }
    dot(v2) { 
        return new Vector (this.x * v2.x + this.y * v2.y + this.z * v2.z);
    }
    neg() {  
        return new Vector (0 - this.x, 0 - this.y, 0 - this.z);
    }
    toString(){
        return "["+this.x+","+this.y+","+this.z+"]"
    }
  };
  module.exports.Vector = Vector;