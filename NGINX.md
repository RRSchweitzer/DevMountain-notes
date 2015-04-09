### NGINX

*better touch tool - Cahlans magic window sizer.

suto apt-get install nginx

---> nginx config file for hosting two sites on one droplet.

# install nginx
sudo apt-get install nginx
# configure nginx
# /etc/nginx/sites-available/[myconfigfile]
# create stnkubj /\ \/
# /etc/nginx/sites-enabled/[myconfigfile]

server {
	listen 80;
	server_name awesome.com
	location / {
		proxy_pass			http://127.0.0.1:8001/;
		proxy_redirect		off;

		proxy_set_header	Host				$host;
		proxy_set_header	X-Real-IP			$remote_addr;
		proxy_set_header	X-Forwarded-For		$proxy_add_x_forwarded_for;
	}
}
server {
	listen 80;
	server_name radical.com
	location / {
		proxy_pass			http://127.0.0.1:8002/;
		proxy_redirect		off;

		proxy_set_header	Host				$host;
		proxy_set_header	X-Real-IP			$remote_addr;
		proxy_set_header	X-Forwarded-For		$proxy_add_x_forwarded_for;
	}
}
server {
	listen 80;
	server_name sikk.com
	location / {
		proxy_pass			http://127.0.0.1:8003/;
		proxy_redirect		off;

		proxy_set_header	Host				$host;
		proxy_set_header	X-Real-IP			$remote_addr;
		proxy_set_header	X-Forwarded-For		$proxy_add_x_forwarded_for;
	}
}

