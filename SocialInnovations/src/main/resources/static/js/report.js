function getFilterData() {

	if($('#filterBy').val() == 'Location') {
		$.ajax({ 
			url: 'http://localhost:8080/events/location', 
			cache: false, 
			contentType: 'applicaion/json', 
			processData: false, 
			type: 'GET', 
			success: function(data){ 
			//var jsonData = JSON.parse(data); 
			renderFilterData(data); 
		} });

		//renderFilterData(data)
	} else if($('#filterBy').val() == 'Year') {
		$.ajax({ 
			url: 'http://localhost:8080/events/year', 
			cache: false, 
			contentType: 'applicaion/json', 
			processData: false, 
			type: 'GET', 
			success: function(data){ 
			//var jsonData = JSON.parse(data); 
			renderFilterData(data); 
		} });
	} else if($('#filterBy').val() == 'Event') {
		$.ajax({ 
			url: 'http://localhost:8080/events', 
			cache: false, 
			contentType: 'applicaion/json', 
			processData: false, 
			type: 'GET', 
			success: function(data){ 
			//var jsonData = JSON.parse(data); 
			renderFilterData(data); 
		} });
	} else {
		alert("Please select a filter by");
	}
1

}

function getReport() {
	//var dataString = '[{"eventData":{"eventId":"1","eventName":"Intial Test","eventYear":"2012","location":"San Jose"},"participant":{"emailId":"ssss@ebay.com","empId":"21620","fname":"Raj ","lname":"Guru","empty":false}},{"eventData":{"eventId":"1","eventName":"Intial Test","eventYear":"2012","location":"San Jose"},"participant":{"emailId":"ddd@ebay.com","empId":"10093710","fname":"Sue","lname":"Jones","empty":false}},{"eventData":{"eventId":"1","eventName":"Intial Test","eventYear":"2012","location":"San Jose"},"participant":{"emailId":"Jane@paypal.com","empId":"10152200","fname":"Jane ","lname":"Doe","empty":false}}]';
	
	if($('#filterBy').val() == 'Location') {
		$.ajax({ 
			url: 'http://localhost:8080/getList/byLocation', 
			data: 'location='+$("#filterOption").val(),
			cache: false, 
			contentType: 'applicaion/json', 
			processData: false, 
			type: 'GET', 
			success: function(data){ 
			//var jsonData = JSON.parse(data); 
			renderReportData(data); 
		} });

		//renderFilterData(data)
	} else if($('#filterBy').val() == 'Year') {
		$.ajax({ 
			url: 'http://localhost:8080/getList/byYear',
			data: 'year='+$("#filterOption").val(),
			cache: false, 
			contentType: 'applicaion/json', 
			processData: false, 
			type: 'GET', 
			success: function(data){ 
			//var jsonData = JSON.parse(data); 
			renderReportData(data); 
		} });
	} else if($('#filterBy').val() == 'Event') {
		$.ajax({ 
			url: 'http://localhost:8080/getList/byEvent',
			data: 'event='+$("#filterOption").val(),
			cache: false, 
			contentType: 'applicaion/json', 
			processData: false, 
			type: 'GET', 
			success: function(data){ 
			//var jsonData = JSON.parse(data); 
			renderReportData(data); 
		} });
	} else {
		alert("Please select a filter by");
	}
}

function renderReportData(data) {
	$('#dataTables-body').html('');
	//var data = JSON.parse(dataString)
	reportHtml = '';
	
	if($('#tableHead').hasClass("hide")) $('#tableHead').removeClass("hide");
	for(var i = 0; i < data.length; i++) {
		if(i % 2 == 0) {
			reportHtml+= '<tr class="even gradeC">'
		} else {
			reportHtml+= '<tr class="odd gradeX">'
		}
		reportHtml+= '<td>' + data[i].eventData.eventName + '</td>'
		reportHtml+= '<td>' + data[i].eventData.eventYear + '</td>'
		reportHtml+= '<td>' + data[i].eventData.location + '</td>'
		reportHtml+= '<td>' + data[i].participant.lname + ', '+ data[i].participant.lname + '</td>'
		reportHtml+= '<td>' + data[i].participant.empId + '</td>'
		reportHtml+= '<td>' + data[i].participant.emailId + '</td>'
	}

	$('#dataTables-body').append(reportHtml);

    $('#dataTables-example').dataTable();
}

function renderFilterData(data) {
	$('#filterOption').html('')
	var html = '';
	for(var i = 0; i < data.length; i++) {
		html+= '<option value="'+data[i]+'">' + data[i] +  '</option>'
	}
	$('#filterOption').append(html)
}