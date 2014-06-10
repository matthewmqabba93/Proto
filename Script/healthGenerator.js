#pragma strict
var health:Rigidbody;


function createHealth()
{

 var xpos:int;
 xpos = transform.position.x + Random.Range(8,12);


 var ypos:int;
 ypos = transform.position.y + Random.Range(-4.5,4.5);


 Instantiate(health,Vector3(xpos,ypos,-5),Quaternion.identity);
}

function Start () {


 InvokeRepeating("createHealth",2.0,5.0);
}

function Update () {

}