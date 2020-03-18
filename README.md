# AWS S3 Demo with MERN

## Set Up
#### Packages to install in your backend
- multer
- aws-sdk

#### Create your AWS Bucket
Navigate to [https://s3.console.aws.amazon.com/s3/home?region=us-east-1](https://s3.console.aws.amazon.com/s3/home?region=us-east-1) click on “create bucket”, enter a name, choose a region, and leave all other options as default.

## Set up AWS S3 in your backend
### [`awsS3.js`](https://github.com/ssoonmi/aws-s3-MERN-demo/blob/master/awsS3.js)
Make a file called `awsS3.js` at the root of your project. [Link to file](https://github.com/ssoonmi/aws-s3-MERN-demo/blob/master/awsS3.js)
In there, you will use the package, `aws-sdk`, set up your credentials for aws, and then export it.

```javascript
const AWS = require("aws-sdk");
if (process.env.NODE_ENV !== "production") {
  AWS.config.loadFromPath("./credentials.json");
}
const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

module.exports = { s3 };
```
#### `AWS.config.loadFromPath`
This function is allowing us to configure our aws keys using a json file. 
> You can learn more about how this works here:
> [https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-json-file.html](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-json-file.html)

#### How to set up your credentials in production
You do not need a credentials.json in production. Instead, all you need to do is set environmental keys for `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`.

> You can read more about how AWS uses the environment variables here:
> [https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html)

### `credentials.json`
> [How to Get Your Access Keys](https://help.bittitan.com/hc/en-us/articles/115008255268-How-do-I-find-my-AWS-Access-Key-and-Secret-Access-Key-)

Make a file called `credentials.json` **at the root** of your project.
In there, you will set your aws credentials.
```json
{
  "accessKeyId": "<Your AWS Access Key ID>",
  "secretAccessKey": "<Your AWS Secret Access Key>",
  "region": "us-east-1"
}
```
**MAKE SURE TO GITIGNORE THIS FILE**

### Private vs Public File Uploading
If you don't want your 


![Bucket Permissions](https://raw.githubusercontent.com/ssoonmi/aws-s3-MERN-demo/assets/bucket_permissions.png)
