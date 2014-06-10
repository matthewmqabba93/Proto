#pragma strict

var bulletToShoot:Rigidbody;

function Start () {

}

function Update () {

	if(Input.GetKeyDown(KeyCode.S))
	{
		Instantiate(bulletToShoot,transform.position,Quaternion.identity);
	}


}