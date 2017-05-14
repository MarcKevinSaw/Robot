#pragma strict



function Start ()
{



}

function Update () 
{

	transform.Rotate(0 ,0 ,20);



}

function OnTriggerEnter2D (fire : Collider2D)
{

	if(fire.tag == "wall")
	{

		Destroy(gameObject);

	}

	if(fire.tag == "boss")
	{

		Destroy(gameObject);


	}
} 