function tulis(){
	
	var wfile = document.getElementById('wfile');
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);


    function gotFS(fileSystem) {
        fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotFileEntry, fail);
    }

    function gotFileEntry(fileEntry) {
        fileEntry.createWriter(gotFileWriter, fail);
    }

    function gotFileWriter(writer) {
        writer.onwrite = function(evt) {
		alert("write success \n now click that read button.");
		wfile.value = "";
	};
        writer.write(wfile.value);
    }

    function fail(error) {
        alert(error.code);
    }
}