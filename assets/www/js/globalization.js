function checkLocale() {
      navigator.globalization.getLocaleName(
        function (locale) {checkglobal.innerHTML+='locale: ' + locale.value + '<br />';},
        function () {alert('Error getting locale\n');}
      );
    }
function checkLanguage() {
	  var checkglobal = document.getElementById('global');	

      navigator.globalization.getPreferredLanguage(
        function (language) {checkglobal.innerHTML+='language: ' + language.value + '<br />';checkLocale();},
        function () {alert('Error getting language\n');}
      );	
}
