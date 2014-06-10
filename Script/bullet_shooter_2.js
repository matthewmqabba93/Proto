#pragma strict

var bulletToShoot:Rigidbody;

function Start () {

}

function Update () {

	if(Input.GetKeyDown(KeyCode.A))
	{
		Instantiate(bulletToShoot,transform.position,Quaternion.identity);
	}


}