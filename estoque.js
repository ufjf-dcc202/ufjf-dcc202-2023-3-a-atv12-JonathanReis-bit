//estoque.js
let estoque = { 
    'joao': [   
       {'tipo': "maca", 'qtd': 1},
       {'tipo': "pera", 'qtd': 1},
   ],
    'maria': [ 
       {'tipo': "maca", 'qtd': 2},
       {'tipo': "banana", 'qtd': 4},
    ]
   };
   
   export function getEstoque(){
       return structuredClone(estoque);
   }
   export function transacao(origem, destino, quantidade, fruta){
    if(origem === destino) { return; }
    if(quantidade <= 0){
        return;
    }
    if(origem === 'pomar'){
        dePomarParaPessoa(destino, quantidade, fruta);
    }
        
    if(destino === "pomar"){
        dePessoaParaPomar(origem, quantidade, fruta);   
        }
    }
    
    if (!monte) {
        return;
    }
    monte.qtd -= Math.min(quantidade, monte.qtd);
   }

 
   function dePomarParaPessoa(destino, quantidade, fruta) {
    const pessoa = estoque[origem];
    let monte;
    for (let i=0; i < pessoa.length; i++) {
        const monte = pessoa[i];
        if(monte.tipo === fruta){
             monte = pessoa[i];
             break;
         }
   }
   
   // export {getEstoque}