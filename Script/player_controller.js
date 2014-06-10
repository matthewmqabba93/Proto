#pragma strict
private var anim:Animator;

private var grounded:boolean;

private var score: int=0;
static var health: int=3;
var guiScore: GUIText;
var guiHealth: GUIText;

function OnTriggerEnter(other:Collider) {
	

	if (other.gameObject.tag=="health")
	{
		health += 1;
		guiHealth.text = "Health: "+health;
		Destroy(other.gameObject);
	}
	
		if (other.gameObject.tag=="coin")
	{
		score += 10;
		guiScore.text = "Score: "+score;
		Destroy(other.gameObject);
	}
	
		if (other.gameObject.tag=="bonus")
	{
		score += 20;
		guiScore.text = "Score: "+score;
		Destroy(other.gameObject);
	}
	if (other.gameObject.tag=="enemy")
	{
		score -= 10;
		guiScore.text = "Score: "+score;
		Destroy(other.gameObject);
	}
	if (other.gameObject.tag=="enemy2")
	{
		health -= 1;
		guiHealth.text = "Health: "+health;
		Destroy(other.gameObject);
	}
	
	
	
}
 
function Start () {


anim = GetComponent(Animator);
grounded = true;
transform.position.x = -.1;

guiScore.text = "Score: 0";
guiHealth.text = "Health: 3";
}

function checkLevel()
{
	if ((Application.loadedLevel== 1) && (score >=50))
{
	Application.LoadLevel (2); 
}


if ((Application.loadedLevel == 2) && (score >=100))
{
	Application.LoadLevel (3); 
}

}

function Update () {

    if (Input.GetKey(KeyCode.Escape))
    {
        Application.LoadLevel (0);
    }

checkLevel();

if (Input.GetKeyDown(KeyCode.UpArrow))
{
	Debug.Log("test");
	transform.position.y += 5;
	grounded = false;
}

if (health<=0)
	{
		Application.LoadLevel (0);
	}



//gravity
if (grounded == false)
{
	transform.Translate(Vector3.down * 5 * Time.deltaTime);
}


if (transform.position.y <= -2.7)
{
	grounded=true;
	transform.position.y =-2.8;
}


//move player left and right
transform.Translate(Vector3.right * 3 *Input.GetAxis("Horizontal") * Time.deltaTime);


//by default, stay in idle state
anim.SetInteger("walk_right",0);

//pressing left arrow moves the character to the left


if (Input.GetAxis("Horizontal") > 0)
{
anim.SetInteger("walk_right",1);

}

}
