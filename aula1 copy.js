//1. inicialização
import sleep from 'k6';

//2. configurações
export const options = {
    vus: 1,
    duration: '10s'
}

//3. xecução // codigo vu
export default function(){
    console.log("testando o k6");
    sleep(1);
}

//4. desmontagem
export function teardown(data){
    console.log(data)
}