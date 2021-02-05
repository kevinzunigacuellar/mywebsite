export const CloudPortfolioData = [
	{
		img: "hm-cloud.png",
		alt: "hm-cloud-arch",
		title: "Manantial Hotel Architecture",
		subtitle: "Static Website Hosting",
		description:
			"Manantial hotel required a safe, highly available and low latency architecture to be used by tourists around the world. AWS S3 with Cloudfront provides a highly available website with low latency at a very affordable monthly fee. This architecture distributes Manantial hotel static files to edge locations around the world, hence decreasing the website loading time to costumers located anywhere in the world. Furthermore, with the addition of AWS Certificate Manager, Cloudfront redirects all HTTP requests to HTTPS which encripts all data in transit for a safer constumer experience. Route 53 manages the website DNS so it can be accessed at a more friendly URL.",
	},
	{
		img: "myweb-cloud.png",
		alt: "myweb-cloud-arch",
		title: "My Webiste Architecture",
		subtitle: "Serverless Web Application",
		description:
			"For my website, I required a highly available, low latency, cost effective and low management backend to respond to API calls made by my visitors. AWS API Gateway, Lambda and DynamoDB provides a serverless backend managed by AWS while S3 and Cloudfront provides a highly available and low latency frontend. All static files are stored in AWS s3 which are distributed by Cloundfront to edge locations around the world. When a user makes a HTTP request to Route 53, it is automatically redirected to HTTPS and all the requested static files are encripted sent from an edge location decreasing the website loading time. Any Javascript executed in the browser sends and receives data from a public backend API using Lambda and API gateway. DynamobDB provides a persistence layer where data can be stored by the API's Lambda function.",
	},
	{
		img: "cloud-cons.png",
		alt: "cloud-cons",
		title: "Consulting Job Architecture",
		subtitle: "Wordpress Ecommerce website",
		description:
			"For this website, my client required a highly available, low latency and elastic cloud architecture for his Wordpress ecommerce website. The company only operated in South America selling a large range of products from clothing to electronics. To decrease CPU usage per instance, the Wordpress server was split to host static files in s3 and compute code in EC2 EBS. Since there is only one AWS region in Brazil, Cloudfront was used to distribute static content to edge locations located in different countries accross South America. All traffic is distributed accross three availability zones using an application load balancer to a group of EC2 instaces inside an autoscaling group which scales automatically according to CPU usage. Each AZ has its own master or synchronous read replica database which enhances performance and durability of DB. As a failover precaution the master database also has stand-by databases spread in all AZs. In case the AZ that containes the master database goes down, a stand-by database will take its place.",
	},
];
