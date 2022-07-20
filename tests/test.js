const options = [{"Free":"Solo puedes tomar los cursos gratis"},
                {"Basic":"Puedes tomar casi todos los cursos de Platzi durante un mes"},
                {"Expert":"Puedes tomar casi todos los cursos de Platzi durante un año"},
                {"ExpertPlus":"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}];
            
const tipoDeSuscripcion = "Basic";

function printoutMessage(tipoDeSuscripcion,options) {
    var message = options.map(function(x){
        compare =Object.keys(x)[0];
        if (compare ===tipoDeSuscripcion){
            console.log(x[compare]);
        }
    })
}
printoutMessage(tipoDeSuscripcion,options);