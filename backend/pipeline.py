import boto3
import base64

def handler(event, context):
    rekognition = boto3.client('rekognition')
    image_bytes = base64.b64decode(event['body'])
    response = rekognition.detect_labels(Image={'Bytes': image_bytes})
    return {"statusCode": 200, "body": str(response)}
