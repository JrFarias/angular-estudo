angular.module('diretivas',[])
.directive('minhaFoto', function(){
    var ddo = {};
    ddo.restrict = "AE";

    ddo.scope = {
        url: '@'
    };
    ddo.template = '<img class="img-responsive center-block" src="{{url}}">'
    return ddo;
})
.directive('meuPainel', function(){
	
	var ddo = {};

	ddo.restric = "AE";

	ddo.scope = {
		titulo: '@'
	};

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;
});