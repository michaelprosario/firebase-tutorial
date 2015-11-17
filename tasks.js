
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
		postID = "junk";
		return postID;
	}
	
	this.Update = function(aTask, strRecordID)
	{
	}
	
	this.Delete = function(strRecordID)
	{
	}
	
	this.RecordExists = function(strRecordID)
	{
	}
	
	
	this.GetRecord = function(strRecordID)
	{
		var objData = null;		
		return objData;
	}
	
	

}