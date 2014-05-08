function prepareDatabase(ready, error) {
  return openDatabase('documents', '1.0', 'Offline document storage', 5*1024*1024, function (db) {
    db.changeVersion('', '1.0', function (t) {
      t.executeSql('CREATE TABLE docids (id, name)');
    }, error);
  });
}

function showDocCount(db, span) {
  db.readTransaction(function (t) {
    t.executeSql('SELECT COUNT(*) AS c FROM docids', [], function (t, r) {
      span.textContent = r.rows[0].c;
    }, function (t, e) {
      // couldn't read database
      span.textContent = '(unknown: ' + e.message + ')';
    });
  });
}

prepareDatabase(function(db) {
  // got database
  var span = document.getElementById('sql-result');
  showDocCount(db, span);
}, function (e) {
  // error getting database
  alert(e.message);
});