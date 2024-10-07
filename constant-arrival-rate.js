import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    scenarios: {
        contacts: {
            executor: 'constant-arrival-rate',
            duration: '30s',
            rate: 30,
            timeUnit: '1s',
            preAllocatedVUs: 50,
            
        },
    },
};

export default function() {
    http.get('https://test.k6.io/contacts.php');
    sleep(0.5);
}