#pragma strict
var coin:Rigidbody;


function createCoin()
{

 var xpos:int;
 xpos = transform.position.x + Random.Range(8,12);

 var ypos:int;
 ypos = transform.position.y + Random.Range(-3,3);


 Instantiate(coin,Vector3(xpos,ypos,-5),Quaternion.identity);
}

function Start () {


 InvokeRepeating("createCoin",1.0,2.0);
}

function Update () {

}