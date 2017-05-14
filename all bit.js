#pragma strict

var target : Transform;

function Start () 
{

}

function Update () 
{

	transform.position = target.position;

	if(Input.GetMouseButton(1))
	{

		transform.Rotate(0,0,5);

	}

}