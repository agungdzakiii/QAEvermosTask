import http from 'k6/http';
import { check } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export let options = {
    vus: 1000,
    iterations: 3500,
    gracefulStop: '2s',
  };

  export function handleSummary(data) {
    return {
      "summary_put.html": htmlReport(data),
    };
  }
  

export default function () {
    
    const updatePayload = JSON.stringify({
        name: 'morpheus',
        job: 'zion resident'
    });

    const params = {
        headers: {
        'Content-Type': 'application/json',
        },
    };
        
    const res1 = http.put('https://reqres.in/api/users/2',
        updatePayload, params);
        check(
            res1,
            {
                'response code was 200': (res1) => res1.status == 200,
            },
        );

        
}