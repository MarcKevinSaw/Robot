using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class boss_move : MonoBehaviour {

	public bool x = false;
	public bool y = false;

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () 
	{

		if(transform.position.x >= 9)
		{

			x = false;
				
		}
		if(transform.position.x <= -9)
		{
			
			x = true;
		
		}
		if (transform.position.y >= 3.7f)
		{

			y = false;

		}

		if (transform.position.y <= -3.7f) 
		{

			y = true;

		}

		if (x == true)
			transform.Translate (new Vector2 (0.1f, 0));
		if (x == false)
			transform.Translate (new Vector2 (-0.1f, 0));
		if (y == true)
			transform.Translate (new Vector2 (0, 0.1f));
		if (y == false)
			transform.Translate (new Vector2 (0, -0.1f));
		
	}

}
