//Código principal
import { cliente } from "./classes.js";
import { procuraCliente, somaClientes } from "./util.js";

const lista = document.getElementById("nomEmail");
const clientes = []; //array vazio, usei pra armazenar os dados do obj "cliente".

//coloca o cliente na lista
document.getElementById("add").addEventListener("click", () => {
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const clienteNovo = new cliente(nome, email);
    clientes.push(clienteNovo);//coloca o array que era vazio na lista.

    const itens = clientes.map(cliente =>{
        const item = document.createElement("li");
        item.textContent = `${cliente.nome} - ${cliente.email}`;
        return item;
    });
    lista.replaceChildren(...itens);

    //somador de clientes
    const total = somaClientes(clientes);
    document.getElementById("cadastrados").textContent = `Clientes cadastrados:${total}`;
})
//procura por cliente na lista
document.getElementById("procurar").addEventListener("click", () =>{
    const nomePesquisa = document.getElementById("pesquisa").value;
    const achaCliente = procuraCliente(clientes, nomePesquisa);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = " ";

    if(achaCliente){
        const item = document.createElement("li");
        item.textContent = `${achaCliente.nome} - ${achaCliente.email}`;
        resultado.appendChild(item);
    }
    else{
        resultado.innerHTML = "<li>Cliente não encontrado!</li>";
    }
})