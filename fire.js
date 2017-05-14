#pragma strict

var player : GameObject;
var bit1 : Rigidbody2D;
var bit2 : Rigidbody2D;
var bit3 : Rigidbody2D;
var bit : int;
var time : float;


function Start () 
{

}

function Update () 
{

	if(Input.GetMouseButton(1) && Time.time > time)
	{
		time = Time.time + 1;
		bit = bit + 1;
	}


	if(Input.GetMouseButtonUp(1))
	{

		if(player.transform.localScale.x > 0)
		{

			if(bit < 2)
			{

				var fireL1 : Rigidbody2D;
				fireL1 = Instantiate(bit1 ,transform.position ,transform.rotation);
				fireL1.velocity = Vector2(-20 ,0);

			}
			else if(bit >= 4)
			{

				var fireL2 : Rigidbody2D;
				fireL2 = Instantiate(bit3 ,transform.position ,transform.rotation);
				fireL2.velocity = Vector2(-20 ,0);

			}
			else
			{

				var fireL3 : Rigidbody2D;
				fireL3 = Instantiate(bit2 ,transform.position ,transform.rotation);
				fireL3.velocity = Vector2(-20 ,0);

			}

		}
		else
		{

			if(bit < 2)
			{

				var fireR1 : Rigidbody2D;
				fireR1 = Instantiate(bit1 ,transform.position ,transform.rotation);
				fireR1.velocity = Vector2(20 ,0);

			}
			else if(bit >= 4)
			{

				var fireR2 : Rigidbody2D;
				fireR2 = Instantiate(bit3 ,transform.position ,transform.rotation);
				fireR2.velocity = Vector2(20 ,0);

			}
			else
			{

				var fireR3 : Rigidbody2D;
				fireR3 = Instantiate(bit2 ,transform.position ,transform.rotation);
				fireR3.velocity = Vector2(20 ,0);

			}

		}

		bit = 0;

	}

}

