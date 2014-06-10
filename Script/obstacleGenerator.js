#pragma strict
var obstacle:Rigidbody;


function createObstacle()
{

 var xpos:int;
 xpos = transform.position.x + Random.Range(8,12);


 var ypos:int;
 ypos = transform.position.y + Random.Range(-1,1);



 Instantiate(obstacle,Vector3(xpos,ypos,-5),Quaternion.identity);
}

function Start () {


 InvokeRepeating("createObstacle",1.0,4.0);
}

function Update () {

}