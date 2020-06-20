function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "http://viacep.com.br/ws/" + cep + "/json/";
    console.log(cep);
    $.ajax({
        url: url,
        type:"GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#uf").html(response.uf);
            $("#localidade").html(response.localidade);
            $("#bairro").html(response.bairro);
            $("#titulo_cep").html("CEP" + response.cep);

            //$("#logradouro").html(response.logradouro);
            //$document.getElementById("bairro").innerHTML = response.bairro;
            //$document.getElementById("localidade").innerHTML = response.localidade;
            //$document.getElementById("uf").innerHTML = response.uf;
        }
    })
}