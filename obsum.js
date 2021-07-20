var ob = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5
}
var sum = 0;
var c=0;
for(let i in ob)
 sum += ob[i];
 ob.f = sum;
console.log(ob);