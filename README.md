## nginx cofig for portfolio.dotpotit.com

    server{
            listen 80;
            server_name portfolio.dotpotit.com www.portfolio.dotpotit.com;
            return 301 https://$host$request_uri;

    }

    server{
            listen 443 ssl;
            server_name www.portfolio.dotpotit.com;

            ssl_certificate /etc/letsencrypt/live/portfolio.dotpotit.com/fullchain.pem;
            ssl_certificate_key /etc/letsencrypt/live/portfolio.dotpotit.com/privkey.pem;
            include /etc/letsencrypt/options-ssl-nginx.conf;
            ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

            return 301 https://portfolio.dotpotit.com$request_uri;
    }

    server {
        listen 443 ssl;
        server_name portfolio.dotpotit.com;

        ssl_certificate /etc/letsencrypt/live/portfolio.dotpotit.com/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/portfolio.dotpotit.com/privkey.pem;
        include /etc/letsencrypt/options-ssl-nginx.conf;
        ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;


            location / {

            proxy_pass http://localhost:port;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;

            }
    }
