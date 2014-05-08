function gowebsql(){
var db = openDatabase('gamdb', '1.0', 'Test DB', 2 * 1024 * 1024);
var msg;
db.transaction(function (tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
  tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "foobar")');
  tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg")');
  msg = '<p>Log message created and row inserted.</p>';
  document.getElementById('statusdb').innerHTML =  msg;
});
}

function querydb(){
var db = openDatabase('gamdb', '1.0', 'Test DB', 2 * 1024 * 1024);
db.transaction(function (tx) {
  tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
   var len = results.rows.length, i;
   var msg = "<p>Found rows: " + len + "</p>";
   document.getElementById('statusquery').innerHTML +=  msg;
   for (i = 0; i < len; i++){
     msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
     document.getElementById('statusquery').innerHTML +=  msg;
   }
 }, null);
});
}