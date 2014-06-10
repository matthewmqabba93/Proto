 #pragma strict

var sound: AudioClip;

function OnBecameInvisible()
{

 transform.position.x = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
}

function Start () {
	audio.PlayOneShot(sound);
}

function Update () {

}