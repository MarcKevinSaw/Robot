#pragma strict

var bit : int;
var time : float;
var anim : Animator;
var fire : GameObject;


function Start () 
{

	anim = GetComponent(Animator);

}

function Update () 
{

	transform.Rotate(0,0,20);

	if(Input.GetMouseButton(1) && Time.time > time)
	{
		time = Time.time + 1;
		bit = bit + 1;
	}

	if(Input.GetMouseButtonUp(1))
	{
		bit = 0;
	}

	print(transform.position.x);

	anim.SetInteger("bit",bit);

}