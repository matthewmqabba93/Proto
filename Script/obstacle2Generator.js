#pragma strict
var obstacle2:Rigidbody;


function createObstacle2()
{

 var xpos:int;
 xpos = transform.position.x + Random.Range(8,12);

 var ypos:int;
 ypos = transform.position.y + Random.Range(-2,0);

 Instantiate(obstacle2,Vector3(xpos,ypos,-5),Quaternion.identity);
}

function Start () {


 InvokeRepeating("createObstacle2",1.0,2.0);
}

function Update () {

}