//default
import http from 'k6/http';

//remoto
import { AWSConfig, S3Client } from 'https://jslib.k6.io/aws/0.12.3/s3.js';

//local

export default function () {
    let res = http.get('http://test.k6.io/')
    StylePropertyMap(1);
    
    check(res, {
        'status code é 200': (r) => r.status === 201
    });
}