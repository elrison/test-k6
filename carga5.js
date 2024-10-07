import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    scenarios:{
        listar: {
            executor: 'constant-arrival-rate',
            exec: 'listar',
            duration: '1m',
            rate: 200,
            timeUnit: '1s',
            preAllocatedVUs: 200,
            gracefulStop: '5s',
            tags: { test_type: 'listagem_crocodilos' },

        },
        buscar: {
            executor: 'per-vu-iterations',
            exec: 'buscar',
            vus: 400,
            iterations: 20,
            maxDuration: '1m',
            tags: { test_type: 'busca_crocodilos' },
            gracefulStop: '5s'
        }
    },
    discardResponseBodies: true
}

export function listar(){
    http.get(__ENV.URL+'/crocodiles')
};

export function buscar(){
    if(__VU % 2 === 0){
        http.get(__ENV.URL+'/crocodiles/2')
    }else{
        http.get(__ENV.URL+'/crocodiles/1')
    }
};

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }