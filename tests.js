
QUnit.test( "TasksRepo__Add__ItShouldWork", function( assert ) {
	//arrange
	var tasks = new Tasks();
	var aTask = new Task();
	aTask.Description = "the work.";
	aTask.Priority = 1;
	aTask.Complexity = 2;
	aTask.Status = "todo";
	
	//act
	var recordID = tasks.Add(aTask);
	
	//assert
	var result = tasks.RecordExists(recordID);
	assert.ok( result, "Passed!" );
});

QUnit.test( "TasksRepo__GetRecord__ItShouldWork", function( assert ) {
	//arrange
	var tasks = new Tasks();
	var aTask = new Task();
	aTask.Description = "foo";
	aTask.Priority = 12;
	aTask.Complexity = 23;
	aTask.Status = "todo";
	var recordID = tasks.Add(aTask);
	
	//act
	var t2 = tasks.GetRecord(recordID);
	
	//assert
	assert.ok( t2.Description == aTask.Description , "Passed!" );
	assert.ok( t2.Priority == aTask.Priority , "Passed!" );
	assert.ok( t2.Complexity == aTask.Complexity , "Passed!" );
});

QUnit.test( "TasksRepo__Update__ItShouldWork", function( assert ) {
	//arrange
	var tasks = new Tasks();
	var aTask = new Task();
	aTask.Description = "foo";
	aTask.Priority = 12;
	aTask.Complexity = 23;
	aTask.Status = "todo";
	var recordID = tasks.Add(aTask);
	var t2 = tasks.GetRecord(recordID);
	
	//act
	t2.Description = "bar";
	tasks.Update(t2,recordID);
	
	
	//assert
	var t3 = tasks.GetRecord(recordID);
	assert.ok( t3.Description == t2.Description , "Passed!" );
	assert.ok( t3.Priority == aTask.Priority , "Passed!" );
	assert.ok( t3.Complexity == aTask.Complexity , "Passed!" );
	
});




QUnit.test( "TasksRepo__RecordExists__ItShouldWork", function( assert ) {
	//arrange
	var tasks = new Tasks();
	var recordID = "monkey";
	
	//act
	var result = tasks.RecordExists(recordID);

	//assert
	assert.ok( result == false, "Passed!" );
});



QUnit.test( "TasksRepo__GetAll__ItShouldWork2", function( assert ) {
	//arrange
	expect(0);
	var tasks = new Tasks();
	var db = tasks.GetFirebase();
	
	//act
	db.on("value", function(snapshot) {
		myList = snapshot.val();
		console.log(myList);
		
		//assert
		assert.ok(true,"list worked.");
	}, function (errorObject) {
		console.log("The read failed: " + errorObject.code);
		assert.ok(true,"list failed.");
	});	
});



QUnit.test( "TasksRepo__Delete__ItShouldWork", function( assert ) {
	//arrange
	var tasks = new Tasks();
	var aTask = new Task();
	aTask.Description = "the work.";
	aTask.Priority = 1;
	aTask.Complexity = 2;
	aTask.Status = "todo";
	var recordID = tasks.Add(aTask);
	
	//act
	tasks.Delete(recordID);
	
	//assert
	var result = tasks.RecordExists(recordID);
	assert.ok( result == false, "Passed!" );
});
