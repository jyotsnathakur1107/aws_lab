const AWS = require("aws-sdk");
const stepfunctions = new AWS.StepFunctions();

exports.handler = async (event) => {
    for (const record of event.Records) {
        const params = {
            stateMachineArn: "arn:aws:states:us-east-1:045395709318:stateMachine:state-machine",
            input: record.body
        };
        await stepfunctions.startExecution(params).promise();
    }
};
