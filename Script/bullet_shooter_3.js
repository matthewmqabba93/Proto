#pragma strict

var bulletToShoot:Rigidbody;

function Start () {

}

function Update () {

	if(Input.GetKeyDown(KeyCode.D))
	{
		Instantiate(bulletToShoot,transform.position,Quaternion.identity);
	}


}