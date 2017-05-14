using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class hit : MonoBehaviour {

	public int HP = 100;
	public GameObject hp;
	public int jumpattack;
	public float timer = 0;

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {

		hp.GetComponent<Text> ().text = "HP :" + HP;

		if (HP <= 0)
			Destroy (this.gameObject);

		if(Input.GetMouseButtonDown(0) && Input.GetAxis ("Vertical") > 0)
		{

			jumpattack = 1;


		}
		if(timer > 1)
		{
			jumpattack = 0;

		}

		if (jumpattack == 1 && timer <= 1) {

			timer += Time.deltaTime;
			GameObject.Find ("boss").GetComponent<CircleCollider2D> ().enabled = false;

		} 
		else if (jumpattack == 0) 
		{

			timer = 0;
			GameObject.Find ("boss").GetComponent<CircleCollider2D> ().enabled = true;

		}
		
	}

	void OnTriggerEnter2D(Collider2D I)
	{

		if (I.CompareTag ("boss"))
			HP = HP - 5;
		

	}
}
