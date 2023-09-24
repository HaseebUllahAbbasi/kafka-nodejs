const { Kafka } = require("");

exports.kafka = new Kafka({
  clientId: "my-app",
  brokers: ["<PRIVATE_IP>:9092"],
});
