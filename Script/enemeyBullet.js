
#pragma strict
var bullet:Rigidbody;


function createBullet()
{

 var xpos:int;
 xpos = transform.position.x + Random.Range(8,12);

 var ypos:int;
 ypos = transform.position.y + Random.Range(-4.5,4.5);


 Instantiate(bullet,Vector3(xpos,ypos,-5),Quaternion.identity);
}

function Start () {

 InvokeRepeating("createBullet",2.0,5.0);
}

function Update () {
		transform.Translate(Vector3.left * 5 * Time.deltaTime);
}







