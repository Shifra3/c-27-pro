class Chain{
constructor(bodyA,bodyB,offSetX,offSetY){
this.offSetX=offSetX
this.offSetY=offSetY    
var options={


    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:0.03,
    length:200

}
this.chain= Constraint.create(options)
World.add(world,this.chain)

} 
display(){
var pointA=this.chain.bodyA.position 
var pointB=this.chain.bodyB.position 
stokeWeight(4)
var ancour1X= pointA.x
var ancour1Y=pointA.y
var ancour2X=pointB.x+this.offSetX
var ancour2Y=pointB.y+this.offSetY

line(ancour1X,ancour1Y,ancour2X,ancour2Y)   
}   
}