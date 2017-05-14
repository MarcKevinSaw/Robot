using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class boss_hit : MonoBehaviour {

	public int HP = 100;
	public GameObject boss;
	public GameObject boss_hp;

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {

		if (HP <= 0)
			Destroy (boss);

		boss_hp.GetComponent<Text> ().text = "Boss HP :" + HP;
		
	}

	void OnTriggerEnter2D(Collider2D boss)
	{

		if (boss.CompareTag ("bit1"))
			HP = HP - 1;
		if (boss.CompareTag ("bit2"))
			HP = HP - 5;
		if (boss.CompareTag ("bit3"))
			HP = HP - 10;

	}
}
