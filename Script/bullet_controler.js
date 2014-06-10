#pragma strict

var speedOfbullet:int;


function Start () {
}

function Update () {


	transform.Translate(Vector3.right * speedOfbullet * Time.deltaTime);

}
function OnTriggerEnter(objectHit:Collider)
{
	if (objectHit.gameObject.tag == "enemy" || objectHit.gameObject.tag == "enemy2")
	{	

	Destroy(objectHit.gameObject);
	Destroy(this.gameObject);
	}
}


function OnBecameInvisible ()
{
	Destroy(this.gameObject);
}