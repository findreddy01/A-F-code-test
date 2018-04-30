var data=[
	{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
	{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
	{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
	{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
	{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
	{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
	{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
];
var table=document.getElementById('DataTable');

var col = [];
for (var i = 0; i < data.length; i++) {
    for (var key in data[i]) {
        if (col.indexOf(key) === -1) {
            col.push(key);
        }
    }
}
for(var i=0;i<data.length;i++){
     var tr = table.insertRow(-1);
    for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);       
        tabCell.innerHTML = data[i][col[j]];
    }
}
function getFormData() {   
    var elements = document.getElementById('frm').elements;
    var obj = {};  
    for( var i = 0; i < elements.length; ++i ) {
        var element = elements[i];       
        var name = element.name;
        var value = element.value;         
        if( name ) {
            if(value==null || value==""){
                alert("Please Enter Field Values...");
                return false;
            }
            obj[ name ] = value;
        }
    }     
    var newRow= [obj] ;   
    tr = table.insertRow(0);
    for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);        
        tabCell.innerHTML = newRow[0][col[j]];
    }  
    document.getElementById("frm").reset();
    obj = {};
}
document.getElementById('submitBtn').addEventListener('click', getFormData, false);
