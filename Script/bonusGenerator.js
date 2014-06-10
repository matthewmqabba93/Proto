#pragma strict
var bonus:Rigidbody;


function createBonus()
{

 var xpos:int;
 xpos = transform.position.x + Random.Range(8,12);

 var ypos:int;
 ypos = transform.position.y + Random.Range(-4.5,4.5);


 Instantiate(bonus,Vector3(xpos,ypos,-5),Quaternion.identity);
}

function Start () {

 InvokeRepeating("createBonus",5.0,5.0);
}

function Update () {

}