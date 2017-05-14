#pragma strict

var go : float;
var jump : float;
var groundcheck : Transform;
var grounded : boolean;
var anim : Animator;
var attack : int;
var time : float;
var fire : boolean;
var jumpattack : int;

function Start () 
{
	groundcheck = transform.Find("groundcheck");
	anim = GetComponent(Animator);
	attack = 0;
}
function Update () 
{
	go = Input.GetAxis ("Horizontal");
	jump = Input.GetAxis ("Vertical");



	grounded = Physics2D.Linecast(transform.position, groundcheck.position, 1 << LayerMask.NameToLayer("ground"));





	//print(Time.time);

	anim.SetFloat("speed", Mathf.Abs(go));
	anim.SetFloat("jump",jump);
	anim.SetBool("high",grounded);
	anim.SetInteger("attack",attack);
	anim.SetBool("fire",fire);
	anim.SetInteger("jumpattack",jumpattack);

	transform.Translate(go*0.2, 0, 0);

	if(go>0)
	{
		transform.localScale.x = -0.3454131;
	}
	if(go<0)
	{
		transform.localScale.x = 0.3454131;
	}



	if (jump > 0 && grounded)
	{
		
			GetComponent.<Rigidbody2D>().AddForce(new Vector2(0, 160));
				
	}

	if(Input.GetMouseButtonDown(0) && jump > 0)
	{

		jumpattack = 1;


	}
	else
	{
		jumpattack = 0;

	}

	if(Input.GetMouseButtonUp(1))
	{
		fire = true;
	}


	if(Time.time > time)
	{
			time = Time.time + 0.5;
			fire = false;
	}
	else
	{
		
	}

}

