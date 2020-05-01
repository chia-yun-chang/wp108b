class vector
{
    constructor(a,b)
    {
        this.a=a;
        this.b=b;
    }

    add(n)
    {
        return new vector(this.a+n.a,this.b+n.b);
    }

    sub(n)
    {
        return new vector(this.a-n.a,this.b-n.b);
    }

    dot(n)
    {
        return new vector(this.a*n.a+this.b*n.b);
    }

    neg()
    {
        return new vector(this.a*-1,this.b*-1);
    }
    toString()
    {
        return "("+this.a+","+this.b+")";
    }
}
var x=new vector(1,3);
var y=new vector(4,9);
console.log("x=%s",x);
console.log("y=%s",y);
console.log("x.add(y)=%s",x.add(y));
console.log("x.sub(y)=%s",x.sub(y));
console.log("x.dot(y)=%s",x.dot(y));
console.log("x.neg()=%s",x.neg());