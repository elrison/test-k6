import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus:100,
    duration: '1ms',
    thresholds: {
        checks: ['rate > 0.05']
    }
}

export default function(){
    const BASE_URL = 'https://test-api.k6.io/public/crocodiles/';

    const res = http.get(BASE_URL);

    check(res, {
        'status code 200': (r) => r.status === 200
    });
}
