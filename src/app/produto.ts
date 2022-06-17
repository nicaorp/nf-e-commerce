export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}


export const produtos: IProduto[] = [
    { id: 1, descricao: "Air Jordan 1", preco: 3000.50, descricaoPreco: "em Até 12x", imagem: "./assets/png/edit/1.png", quantidadeEstoque: 9},
    { id: 2, descricao: "Air Jordan 2", preco: 1500.00, descricaoPreco: "em Até 12x", imagem: "./assets/png/edit/2.png", quantidadeEstoque: 4},
    { id: 3, descricao: "Air Jordan 3", preco: 1800.00, descricaoPreco: "em Até 12x", imagem: "./assets/png/edit/3.png", quantidadeEstoque: 3},
    { id: 4, descricao: "Air Jordan 4", preco: 2000.00, descricaoPreco: "em Até 12x", imagem: "./assets/png/edit/4.png", quantidadeEstoque: 13},
    { id: 5, descricao: "Air Jordan 5", preco: 1200.00, descricaoPreco: "em Até 12x", imagem: "./assets/png/edit/5.png", quantidadeEstoque: 5},
    { id: 6, descricao: "Air Jordan 6", preco: 2400.00, descricaoPreco: "em Até 12x", imagem: "./assets/png/edit/6.png", quantidadeEstoque: 2}
]