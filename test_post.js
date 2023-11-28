import http from 'k6/http';
import { check } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


  export function handleSummary(data) {
    return {
      "summary_post.html": htmlReport(data),
    };
  }
  

export default function () {
    
    const createPayload = JSON.stringify({
        name: 'morpheus',
        job: 'leader'
    });


    const params = {
        headers: {
        'Content-Type': 'application/json',
        },
    };

    const res = http.post('https://reqres.in/api/users',
        createPayload, params);
        check(
            res,
            {
                'response code was 201': (res) => res.status == 201,
            },
        );
        

        
}