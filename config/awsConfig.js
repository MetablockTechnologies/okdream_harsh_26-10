const { SNSClient } = require("@aws-sdk/client-sns");
const { SESClient } = require("@aws-sdk/client-ses");
const { S3Client } = require("@aws-sdk/client-s3");
const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "AKIA4N6JEGNUIO3TQBH5",
    secretAccessKey: "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",
    region: "ap-south-1",
  },
});

const SNS = new SNSClient({
  apiVersion: "2010-03-31",
  region: "ap-south-1",
  credentials: {
    accessKeyId: "AKIA4N6JEGNUIO3TQBH5",
    secretAccessKey: "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",
    region: "ap-south-1",
  },
});

const SES = new SESClient({
  apiVersion: "2010-12-01",
  region: "ap-south-1",
  credentials: {
    accessKeyId: "AKIA4N6JEGNUIO3TQBH5",
    secretAccessKey: "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",
    region: "ap-south-1",
  },
});
module.exports = { s3Client, SNS, SES };
