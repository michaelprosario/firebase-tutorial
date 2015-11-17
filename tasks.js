
var Task = function()
{
	this.Description = "";
	this.Priority = 1;
	this.Complexity = 2;
	this.Status = "todo";	
}

var Tasks = function()
{
	var fireBaseURL = 'https://e0nf4ail8oh.firebaseio-demo.com/';
	
	this.GetFirebase = function()
	{
		return new Firebase(fireBaseURL);
	}
	
	this.Add = function(aTask)
	{
		//hints
		// https://www.firebase.com/docs/web/api/firebase/push.html
		// https://www.firebase.com/docs/web/api/firebase/key.html
		
		postID = "junk";
		return postID;
	}
	
	this.Update = function(aTask, strRecordID)
	{
		// hint - https://www.firebase.com/docs/web/api/firebase/set.html
	}
	
	this.Delete = function(strRecordID)
	{
		//hint - https://www.firebase.com/docs/web/api/firebase/remove.html
	}
	
	this.RecordExists = function(strRecordID)
	{
		//hint http://code.runnable.com/Umso4y4z27JEAAAx/detecting-if-data-exists-in-firebase-for-javascript
	}
	
	
	this.GetRecord = function(strRecordID)
	{
		// hint: https://www.firebase.com/blog/2013-10-01-queries-part-one.html
		
		var objData = null;		
		return objData;
	}
	
	

}