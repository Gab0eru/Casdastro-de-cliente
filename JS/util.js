//Funções auxiliares
export function procuraCliente(clientes, nome){
    return clientes.find(cliente => cliente.nome.toLowerCase() === nome.toLowerCase());
}
export function somaClientes(clientes){
    return clientes.reduce((total) => total + 1, 0);
}